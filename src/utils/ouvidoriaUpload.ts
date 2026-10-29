/**
 * Utilitários do formulário da Ouvidoria: configuração vinda do
 * backend, validação do arquivo no cliente (somente UX; a validação que vale é
 * a do servidor) e envio multipart com progresso.
 */

export type OuvidoriaConfig = {
  token: string
  maxFileBytes: number
  allowedExtensions: string[]
  allowAnonymous: boolean
  minAgeSeconds: number
}

export type OuvidoriaFields = {
  name: string
  email: string
  phone: string
  city: string
  state: string
  company: string
  message: string
}

export type FileErrorCode =
  | 'FILE_TOO_LARGE'
  | 'FILE_TYPE_NOT_ALLOWED'
  | 'FILE_EMPTY'

export type SendResult = {
  ok: boolean
  status: number
  code?: string
}

export const TOKEN_HEADER = 'X-Ouvidoria-Token'

export function getFileExtension(name: string): string {
  const index = name.lastIndexOf('.')
  return index <= 0 || index === name.length - 1
    ? ''
    : name.slice(index + 1).toLowerCase()
}

export function getFileError(
  file: Pick<File, 'name' | 'size'>,
  config: Pick<OuvidoriaConfig, 'maxFileBytes' | 'allowedExtensions'>
): FileErrorCode | null {
  if (!config.allowedExtensions.includes(getFileExtension(file.name))) {
    return 'FILE_TYPE_NOT_ALLOWED'
  }
  if (file.size === 0) return 'FILE_EMPTY'
  if (file.size > config.maxFileBytes) return 'FILE_TOO_LARGE'
  return null
}

export function bytesToMb(bytes: number): number {
  return Math.round(bytes / (1024 * 1024))
}

/** Chave i18n (em `ouvidoriaForm.errors`) para cada resposta de erro. */
export function errorKeyFor(result: Pick<SendResult, 'status' | 'code'>) {
  switch (result.code) {
    case 'FILE_TOO_LARGE':
    case 'BODY_TOO_LARGE':
      return 'fileTooLarge'
    case 'FILE_TYPE_NOT_ALLOWED':
    case 'UNSUPPORTED_MEDIA_TYPE':
      return 'fileType'
    case 'FILE_CONTENT_MISMATCH':
      return 'fileMismatch'
    case 'FILE_EMPTY':
      return 'fileEmpty'
    case 'FILE_MACRO':
      return 'fileMacro'
    case 'FILE_ENCRYPTED':
      return 'fileProtected'
    case 'EMPTY_SUBMISSION':
      return 'emptySubmission'
    case 'FORM_TOO_FAST':
      return 'tooFast'
    case 'FORM_TOKEN_EXPIRED':
    case 'FORM_TOKEN_INVALID':
      return 'tokenExpired'
    case 'RATE_LIMITED':
      return 'tooManyRequests'
    case 'NETWORK':
      return 'network'
  }
  if (result.status === 429) return 'tooManyRequests'
  if (result.status === 413) return 'fileTooLarge'
  if (result.status === 415) return 'fileType'
  if (result.status === 503 || result.status === 404) return 'unavailable'
  return 'generic'
}

export async function fetchOuvidoriaConfig(
  apiUrl: string,
  channelId: string | number
): Promise<OuvidoriaConfig> {
  const response = await fetch(
    `${apiUrl}/contact-channels/${channelId}/ouvidoria/config`,
    // Sem `cache: 'no-store'`: o navegador acrescentaria Cache-Control/Pragma e
    // exigiria preflight. O backend já responde com `Cache-Control: no-store`.
    { headers: { Accept: 'application/json' } }
  )
  if (!response.ok) throw new Error(`config ${response.status}`)
  return response.json()
}

export type SendOuvidoriaParams = {
  apiUrl: string
  channelId: string | number
  token: string
  fields: OuvidoriaFields
  honeypot: string
  file: File | null
  onProgress?: (percent: number) => void
}

/**
 * Envio multipart por XHR (o `fetch` não informa progresso de upload).
 * Não define Content-Type: o navegador monta o boundary.
 */
export function sendOuvidoria({
  apiUrl,
  channelId,
  token,
  fields,
  honeypot,
  file,
  onProgress
}: SendOuvidoriaParams): Promise<SendResult> {
  return new Promise((resolve) => {
    const body = new FormData()
    ;(Object.keys(fields) as (keyof OuvidoriaFields)[]).forEach((key) => {
      body.append(key, fields[key])
    })
    body.append('website', honeypot)
    if (file) body.append('file', file, file.name)

    const xhr = new XMLHttpRequest()
    xhr.open('POST', `${apiUrl}/contact-channels/${channelId}/sendOuvidoria`)
    xhr.setRequestHeader(TOKEN_HEADER, token)
    xhr.setRequestHeader('Accept', 'application/json')

    if (xhr.upload && onProgress) {
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          onProgress(Math.round((event.loaded / event.total) * 100))
        }
      }
    }

    xhr.onload = () => {
      let code: string | undefined
      try {
        code = JSON.parse(xhr.responseText).code
      } catch (e) {
        code = undefined
      }
      resolve({
        ok: xhr.status >= 200 && xhr.status < 300,
        status: xhr.status,
        code
      })
    }
    xhr.onerror = () => resolve({ ok: false, status: 0, code: 'NETWORK' })
    xhr.ontimeout = () => resolve({ ok: false, status: 0, code: 'NETWORK' })

    xhr.send(body)
  })
}
