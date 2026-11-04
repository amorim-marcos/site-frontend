import {
  bytesToMb,
  errorKeyFor,
  fetchOuvidoriaConfig,
  getFieldErrors,
  getFileError,
  getFileExtension,
  OuvidoriaFields,
  sendOuvidoria,
  validationKeyFor
} from './ouvidoriaUpload'

const config = {
  maxFileBytes: 50 * 1024 * 1024,
  allowedExtensions: ['pdf', 'jpg', 'png', 'mp4']
}

const fields: OuvidoriaFields = {
  name: 'Maria',
  email: 'maria@exemplo.com.br',
  phone: '41988885544',
  city: 'Curitiba',
  state: 'PR',
  company: '',
  message: 'Relato'
}

class FakeXHR {
  static last: FakeXHR
  method = ''
  url = ''
  headers: Record<string, string> = {}
  body: FormData | null = null
  status = 0
  responseText = ''
  upload: { onprogress?: (e: unknown) => void } = {}
  onload?: () => void
  onerror?: () => void
  ontimeout?: () => void

  constructor() {
    FakeXHR.last = this
  }
  open(method: string, url: string) {
    this.method = method
    this.url = url
  }
  setRequestHeader(name: string, value: string) {
    this.headers[name] = value
  }
  send(body: FormData) {
    this.body = body
  }
}

describe('ouvidoriaUpload', () => {
  describe('getFileExtension', () => {
    it('lê a extensão em minúsculas', () => {
      expect(getFileExtension('Foto.PDF')).toBe('pdf')
      expect(getFileExtension('a.b.c.mp4')).toBe('mp4')
    })
    it('retorna vazio sem extensão válida', () => {
      expect(getFileExtension('arquivo')).toBe('')
      expect(getFileExtension('arquivo.')).toBe('')
      expect(getFileExtension('.gitignore')).toBe('')
    })
  })

  describe('getFileError', () => {
    it('aceita arquivo permitido dentro do limite', () => {
      expect(getFileError({ name: 'a.pdf', size: 10 }, config)).toBeNull()
      expect(
        getFileError({ name: 'a.mp4', size: config.maxFileBytes }, config)
      ).toBeNull()
    })
    it('recusa tipo não permitido, vazio e acima do limite', () => {
      expect(getFileError({ name: 'a.exe', size: 10 }, config)).toBe(
        'FILE_TYPE_NOT_ALLOWED'
      )
      expect(getFileError({ name: 'a.pdf.exe', size: 10 }, config)).toBe(
        'FILE_TYPE_NOT_ALLOWED'
      )
      expect(getFileError({ name: 'a.pdf', size: 0 }, config)).toBe(
        'FILE_EMPTY'
      )
      expect(
        getFileError({ name: 'a.pdf', size: config.maxFileBytes + 1 }, config)
      ).toBe('FILE_TOO_LARGE')
    })
  })

  describe('errorKeyFor', () => {
    it.each([
      [{ status: 413, code: 'FILE_TOO_LARGE' }, 'fileTooLarge'],
      [{ status: 413, code: 'BODY_TOO_LARGE' }, 'fileTooLarge'],
      [{ status: 415, code: 'FILE_TYPE_NOT_ALLOWED' }, 'fileType'],
      [{ status: 415, code: 'FILE_CONTENT_MISMATCH' }, 'fileMismatch'],
      [{ status: 400, code: 'FILE_EMPTY' }, 'fileEmpty'],
      [{ status: 415, code: 'FILE_MACRO' }, 'fileMacro'],
      [{ status: 415, code: 'FILE_ENCRYPTED' }, 'fileProtected'],
      [{ status: 400, code: 'EMPTY_SUBMISSION' }, 'emptySubmission'],
      [{ status: 503, code: 'BUSY' }, 'unavailable'],
      [{ status: 503, code: 'STORAGE_UNAVAILABLE' }, 'unavailable'],
      [{ status: 429, code: 'FORM_TOO_FAST' }, 'tooFast'],
      [{ status: 403, code: 'FORM_TOKEN_EXPIRED' }, 'tokenExpired'],
      [{ status: 403, code: 'FORM_TOKEN_INVALID' }, 'tokenExpired'],
      [{ status: 429, code: 'RATE_LIMITED' }, 'tooManyRequests'],
      [{ status: 0, code: 'NETWORK' }, 'network'],
      [{ status: 429 }, 'tooManyRequests'],
      [{ status: 413 }, 'fileTooLarge'],
      [{ status: 503, code: 'QUEUE_UNAVAILABLE' }, 'unavailable'],
      [{ status: 404, code: 'OUVIDORIA_DISABLED' }, 'unavailable'],
      [{ status: 500, code: 'INTERNAL_ERROR' }, 'generic'],
      [{ status: 400, code: 'VALIDATION_ERROR' }, 'validation'],
      [
        {
          status: 400,
          code: 'VALIDATION_ERROR',
          fields: [
            { field: 'email', code: 'INVALID' },
            { field: 'phone', code: 'INVALID' }
          ]
        },
        'invalidEmail'
      ],
      [
        {
          status: 400,
          code: 'VALIDATION_ERROR',
          fields: [{ field: 'phone', code: 'INVALID' }]
        },
        'invalidPhone'
      ],
      [
        {
          status: 400,
          code: 'VALIDATION_ERROR',
          fields: [{ field: 'name', code: 'REQUIRED' }]
        },
        'requiredFields'
      ]
    ])('%j -> %s', (result, key) => {
      expect(errorKeyFor(result)).toBe(key)
    })
  })

  describe('getFieldErrors', () => {
    it('exige 8 dígitos no telefone e aceita formatos internacionais', () => {
      expect(getFieldErrors({ email: '', phone: '(((( ))))' })).toEqual([
        { field: 'phone', code: 'INVALID' }
      ])
      ;['+1 415 555 0100', '0800 123 4567', '(41) 3333-4444'].forEach((phone) =>
        expect(getFieldErrors({ email: '', phone })).toEqual([])
      )
    })

    it('aceita campos vazios e válidos', () => {
      expect(getFieldErrors({ email: '', phone: '' })).toEqual([])
      expect(
        getFieldErrors({
          email: 'maria@exemplo.com.br',
          phone: '(41) 99888-5544'
        })
      ).toEqual([])
    })

    it('recusa e-mail sem domínio e telefone com letras ou curto', () => {
      expect(getFieldErrors({ email: 'teste@teste', phone: 'teste' })).toEqual([
        { field: 'email', code: 'INVALID' },
        { field: 'phone', code: 'INVALID' }
      ])
      expect(getFieldErrors({ email: '', phone: '1234567' })).toEqual([
        { field: 'phone', code: 'INVALID' }
      ])
    })

    it('ignora espaços nas pontas', () => {
      expect(
        getFieldErrors({ email: ' maria@exemplo.com ', phone: ' 41988885544 ' })
      ).toEqual([])
    })
  })

  describe('validationKeyFor', () => {
    it('sem campos devolve a mensagem geral', () => {
      expect(validationKeyFor()).toBe('validation')
      expect(validationKeyFor([{ field: 'state', code: 'INVALID' }])).toBe(
        'validation'
      )
    })
  })

  it('bytesToMb arredonda', () => {
    expect(bytesToMb(50 * 1024 * 1024)).toBe(50)
  })

  describe('fetchOuvidoriaConfig', () => {
    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('busca a configuração do canal sem cache', async () => {
      const payload = { token: 't', maxFileBytes: 1 }
      const fetchMock = jest
        .fn()
        .mockResolvedValue({ ok: true, json: async () => payload })
      global.fetch = fetchMock as unknown as typeof fetch

      await expect(fetchOuvidoriaConfig('http://api', 45)).resolves.toEqual(
        payload
      )
      expect(fetchMock).toHaveBeenCalledWith(
        'http://api/contact-channels/45/ouvidoria/config',
        { headers: { Accept: 'application/json' } }
      )
    })

    it('lança erro quando a resposta não é ok', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 404
      }) as unknown as typeof fetch
      await expect(fetchOuvidoriaConfig('http://api', 45)).rejects.toThrow(
        'config 404'
      )
    })
  })

  describe('sendOuvidoria', () => {
    const original = global.XMLHttpRequest
    beforeEach(() => {
      global.XMLHttpRequest = FakeXHR as unknown as typeof XMLHttpRequest
    })
    afterEach(() => {
      global.XMLHttpRequest = original
    })

    const send = (file: File | null = null, onProgress?: (p: number) => void) =>
      sendOuvidoria({
        apiUrl: 'http://api',
        channelId: 45,
        token: 'tok',
        fields,
        honeypot: '',
        file,
        onProgress
      })

    it('monta o multipart com campos, honeypot e arquivo, e envia o token em header', async () => {
      const file = new File(['%PDF-1.4'], 'denuncia.pdf', {
        type: 'application/pdf'
      })
      const promise = send(file)
      const xhr = FakeXHR.last

      expect(xhr.method).toBe('POST')
      expect(xhr.url).toBe('http://api/contact-channels/45/sendOuvidoria')
      expect(xhr.headers['X-Ouvidoria-Token']).toBe('tok')
      expect(xhr.headers).not.toHaveProperty('Content-Type')
      expect(xhr.body?.get('name')).toBe('Maria')
      expect(xhr.body?.get('state')).toBe('PR')
      expect(xhr.body?.get('website')).toBe('')
      expect((xhr.body?.get('file') as File).name).toBe('denuncia.pdf')

      xhr.status = 202
      xhr.responseText = JSON.stringify({ message: 'accepted' })
      xhr.onload?.()
      await expect(promise).resolves.toEqual({
        ok: true,
        status: 202,
        code: undefined
      })
    })

    it('não anexa o campo file quando não há arquivo', () => {
      send(null)
      expect(FakeXHR.last.body?.has('file')).toBe(false)
    })

    it('informa o progresso do upload em percentual', () => {
      const onProgress = jest.fn()
      send(null, onProgress)
      FakeXHR.last.upload.onprogress?.({
        lengthComputable: true,
        loaded: 25,
        total: 100
      })
      expect(onProgress).toHaveBeenCalledWith(25)
    })

    it('devolve o código de erro do backend', async () => {
      const promise = send()
      const xhr = FakeXHR.last
      xhr.status = 413
      xhr.responseText = JSON.stringify({ code: 'FILE_TOO_LARGE' })
      xhr.onload?.()
      await expect(promise).resolves.toEqual({
        ok: false,
        status: 413,
        code: 'FILE_TOO_LARGE'
      })
    })

    it('devolve os campos recusados na validação', async () => {
      const promise = send()
      const xhr = FakeXHR.last
      xhr.status = 400
      xhr.responseText = JSON.stringify({
        code: 'VALIDATION_ERROR',
        fields: [{ field: 'email', code: 'INVALID' }]
      })
      xhr.onload?.()
      await expect(promise).resolves.toEqual({
        ok: false,
        status: 400,
        code: 'VALIDATION_ERROR',
        fields: [{ field: 'email', code: 'INVALID' }]
      })
    })

    it('tolera resposta que não é JSON', async () => {
      const promise = send()
      const xhr = FakeXHR.last
      xhr.status = 502
      xhr.responseText = '<html>Bad Gateway</html>'
      xhr.onload?.()
      await expect(promise).resolves.toEqual({
        ok: false,
        status: 502,
        code: undefined
      })
    })

    it('trata falha de rede e timeout como NETWORK', async () => {
      const first = send()
      FakeXHR.last.onerror?.()
      await expect(first).resolves.toEqual({
        ok: false,
        status: 0,
        code: 'NETWORK'
      })

      const second = send()
      FakeXHR.last.ontimeout?.()
      await expect(second).resolves.toMatchObject({ code: 'NETWORK' })
    })
  })
})
