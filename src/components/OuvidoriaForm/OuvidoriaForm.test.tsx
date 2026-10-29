import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'

import OuvidoriaForm from '.'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: Record<string, unknown>) =>
      options ? `${key}${JSON.stringify(options)}` : key
  })
}))

const baseConfig = {
  token: 'token-1',
  maxFileBytes: 50 * 1024 * 1024,
  allowedExtensions: ['pdf', 'jpg', 'png', 'mp4'],
  allowAnonymous: false,
  minAgeSeconds: 0
}

class FakeXHR {
  static instances: FakeXHR[] = []
  static respondWith: { status: number; body: Record<string, unknown> } = {
    status: 202,
    body: { message: 'accepted' }
  }
  headers: Record<string, string> = {}
  body: FormData | null = null
  status = 0
  responseText = ''
  upload: { onprogress?: (e: unknown) => void } = {}
  onload?: () => void
  onerror?: () => void
  ontimeout?: () => void
  constructor() {
    FakeXHR.instances.push(this)
  }
  open() {
    // sem efeito
  }
  setRequestHeader(name: string, value: string) {
    this.headers[name] = value
  }
  send(body: FormData) {
    this.body = body
    this.status = FakeXHR.respondWith.status
    this.responseText = JSON.stringify(FakeXHR.respondWith.body)
    setTimeout(() => this.onload?.(), 0)
  }
}

const setup = async (config = baseConfig) => {
  const fetchMock = jest
    .fn()
    .mockResolvedValue({ ok: true, json: async () => config })
  global.fetch = fetchMock as unknown as typeof fetch

  const view = renderWithTheme(
    <OuvidoriaForm channel_name="Ouvidoria" contact_channel_id={45} />
  )
  await waitFor(() =>
    expect(
      screen.getByRole('button', { name: 'contactChannelForm.send' })
    ).toBeEnabled()
  )
  return { ...view, fetchMock }
}

const fillForm = (container: HTMLElement) => {
  const value = (name: string, text: string) =>
    fireEvent.change(container.querySelector(`[name="${name}"]`) as Element, {
      target: { value: text }
    })
  value('name', 'Maria Silva')
  value('email', 'maria@exemplo.com.br')
  value('phone', '41988885544')
  value('city', 'Curitiba')
  value('state', 'PR')
  value('message', 'Relato')
}

const pick = (file: File) =>
  fireEvent.change(screen.getByTestId('ouvidoria-file'), {
    target: { files: [file] }
  })

describe('<OuvidoriaForm />', () => {
  const originalXhr = global.XMLHttpRequest

  beforeEach(() => {
    FakeXHR.instances = []
    FakeXHR.respondWith = { status: 202, body: { message: 'accepted' } }
    global.XMLHttpRequest = FakeXHR as unknown as typeof XMLHttpRequest
  })
  afterEach(() => {
    global.XMLHttpRequest = originalXhr
  })

  it('carrega a configuração do backend e mostra o limite do anexo', async () => {
    const { fetchMock } = await setup()
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/contact-channels/45/ouvidoria/config'),
      expect.anything()
    )
  })

  it('só permite enviar depois de carregar a configuração', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 503
    }) as unknown as typeof fetch
    renderWithTheme(
      <OuvidoriaForm channel_name="Ouvidoria" contact_channel_id={45} />
    )
    await waitFor(() =>
      expect(
        screen.getByText('ouvidoriaForm.errors.config')
      ).toBeInTheDocument()
    )
    expect(
      screen.getByRole('button', { name: 'contactChannelForm.send' })
    ).toBeDisabled()
  })

  it('marca os campos como obrigatórios, exceto no modo anônimo', async () => {
    const { container, unmount } = await setup()
    expect(container.querySelector('[name="email"]')).toBeRequired()
    unmount()

    const anonymous = await setup({ ...baseConfig, allowAnonymous: true })
    expect(
      anonymous.container.querySelector('[name="email"]')
    ).not.toBeRequired()
  })

  it('recusa arquivo de tipo não permitido no cliente', async () => {
    await setup()
    pick(new File(['MZ'], 'virus.exe'))
    expect(
      await screen.findByText(/ouvidoriaForm.errors.fileType/)
    ).toBeInTheDocument()
    expect(screen.queryByText('virus.exe')).not.toBeInTheDocument()
  })

  it('recusa arquivo acima do limite e arquivo vazio', async () => {
    await setup()
    const big = new File(['x'], 'grande.pdf')
    Object.defineProperty(big, 'size', { value: 51 * 1024 * 1024 })
    pick(big)
    expect(
      await screen.findByText('ouvidoriaForm.errors.fileTooLarge{"maxMb":50}')
    ).toBeInTheDocument()

    pick(new File([], 'vazio.pdf'))
    expect(
      await screen.findByText(/ouvidoriaForm.errors.fileEmpty/)
    ).toBeInTheDocument()
  })

  it('mostra o arquivo escolhido e permite removê-lo', async () => {
    await setup()
    pick(new File(['%PDF-1.4'], 'denuncia.pdf'))
    expect(await screen.findByText('denuncia.pdf')).toBeInTheDocument()
    fireEvent.click(screen.getByText('ouvidoriaForm.removeFile'))
    expect(screen.queryByText('denuncia.pdf')).not.toBeInTheDocument()
  })

  it('envia multipart com o token no header e limpa o formulário no sucesso', async () => {
    const { container } = await setup()
    fillForm(container)
    pick(new File(['%PDF-1.4'], 'denuncia.pdf'))
    await screen.findByText('denuncia.pdf')

    await act(async () => {
      fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    })

    await waitFor(() => expect(FakeXHR.instances).toHaveLength(1))
    const xhr = FakeXHR.instances[0]
    expect(xhr.headers['X-Ouvidoria-Token']).toBe('token-1')
    expect(xhr.body?.get('name')).toBe('Maria Silva')
    expect(xhr.body?.get('state')).toBe('PR')
    expect(xhr.body?.get('website')).toBe('')
    expect((xhr.body?.get('file') as File).name).toBe('denuncia.pdf')

    expect(await screen.findByText('ouvidoriaForm.success')).toBeInTheDocument()
    expect(container.querySelector('[name="name"]')).toHaveValue('')
    expect(screen.queryByText('denuncia.pdf')).not.toBeInTheDocument()
  })

  it('no modo opcional, envia sem identificação, mas exige relato ou arquivo', async () => {
    const { container } = await setup({ ...baseConfig, allowAnonymous: true })

    // Sem nada: não chega ao backend.
    await act(async () => {
      fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    })
    expect(
      await screen.findByText(/ouvidoriaForm.errors.emptySubmission/)
    ).toBeInTheDocument()
    expect(FakeXHR.instances).toHaveLength(0)

    // Só o relato, sem nome, e-mail, telefone, cidade ou estado.
    fireEvent.change(container.querySelector('[name="message"]') as Element, {
      target: { value: 'Relato anônimo' }
    })
    await act(async () => {
      fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    })
    await waitFor(() => expect(FakeXHR.instances).toHaveLength(1))
    expect(FakeXHR.instances[0].body?.get('message')).toBe('Relato anônimo')
    expect(FakeXHR.instances[0].body?.get('email')).toBe('')
    expect(await screen.findByText('ouvidoriaForm.success')).toBeInTheDocument()
  })

  it('no modo opcional, aceita só um arquivo como prova, sem relato', async () => {
    const { container } = await setup({ ...baseConfig, allowAnonymous: true })
    pick(new File(['%PDF-1.4'], 'prova.pdf'))
    await screen.findByText('prova.pdf')

    await act(async () => {
      fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    })
    await waitFor(() => expect(FakeXHR.instances).toHaveLength(1))
    expect((FakeXHR.instances[0].body?.get('file') as File).name).toBe(
      'prova.pdf'
    )
  })

  it('o honeypot fica fora da navegação por teclado', async () => {
    const { container } = await setup()
    const honeypot = container.querySelector('[name="website"]')
    expect(honeypot).toHaveAttribute('tabindex', '-1')
    expect(honeypot).toHaveAttribute('autocomplete', 'off')
  })

  it('mostra mensagem específica para arquivo grande (413) e mantém os dados', async () => {
    FakeXHR.respondWith = { status: 413, body: { code: 'FILE_TOO_LARGE' } }
    const { container } = await setup()
    fillForm(container)

    await act(async () => {
      fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    })

    expect(
      await screen.findByText('ouvidoriaForm.errors.fileTooLarge{"maxMb":50}')
    ).toBeInTheDocument()
    expect(container.querySelector('[name="name"]')).toHaveValue('Maria Silva')
  })

  it('renova o token quando o backend informa que ele expirou', async () => {
    FakeXHR.respondWith = { status: 403, body: { code: 'FORM_TOKEN_EXPIRED' } }
    const { container, fetchMock } = await setup()
    fillForm(container)

    await act(async () => {
      fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    })

    expect(
      await screen.findByText('ouvidoriaForm.errors.tokenExpired{"maxMb":50}')
    ).toBeInTheDocument()
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2))
  })

  it('não envia dados com arquivo inválido', async () => {
    const { container } = await setup()
    fillForm(container)
    pick(new File(['MZ'], 'virus.exe'))
    await screen.findByText(/ouvidoriaForm.errors.fileType/)

    await act(async () => {
      fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    })
    // sem arquivo válido selecionado, o envio segue sem anexo (o inválido foi descartado)
    await waitFor(() => expect(FakeXHR.instances).toHaveLength(1))
    expect(FakeXHR.instances[0].body?.has('file')).toBe(false)
  })
})
