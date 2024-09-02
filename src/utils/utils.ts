import punycode from 'punycode'
import { NameValueProps } from 'types/utils'

export function smartString(phrase: string | undefined, num: number) {
  let subString, restString, proxSpace, subString2

  if (!phrase) {
    return ''
  }

  if (phrase.length > num) {
    subString = phrase.substring(0, num)

    restString = phrase.substring(num)
    proxSpace = restString.search(' ')
    subString2 = restString.substring(0, proxSpace + 1)

    return subString + subString2 + '...'
  } else {
    return phrase
  }
}

export function smartDate(data: Date | string | undefined, locale: string) {
  if (data) {
    let dia, diaF, mes, mesF, anoF
    const dataF = new Date(data)

    switch (locale) {
      case 'PT-BR':
        ;(dia = dataF.getDate().toString()),
          (diaF = dia.length == 1 ? '0' + dia : dia),
          (mes = (dataF.getMonth() + 1).toString()), //+1 pois no getMonth Janeiro começa com zero.
          (mesF = mes.length == 1 ? '0' + mes : mes),
          (anoF = dataF.getFullYear())
        return diaF + '/' + mesF + '/' + anoF
        break
      case 'EN':
        return dataF
        break
      default:
        return dataF
    }
  } else {
    return null
  }
}

export function formatChannelNameUrl(channel_name: string) {
  const normalized_name = punycode
    .encode(channel_name)
    .replace(/[^\w ]/g, '')
    .split(' ')
    .join('-')
    .toLowerCase()

  return normalized_name
}

export const normalizeTitle = (title: string): string => {
  return title
    .normalize('NFD')
    .replace(/[^\w ]/g, '')
    .split(' ')
    .join(' ')
    .toLowerCase()
}

/**
 * Normalizes a title by removing diacritical marks and non-alphanumeric characters,
 * converting it to lowercase.
 *
 * @param title - The title to be normalized.
 * @returns The normalized title.
 * @example: normalizeTitle('Solicitação de Mostruário') => 'solicitacao-de-mostruario'
 */
export const normalizeTitleUrl = (title: string): string => {
  return title
    .normalize('NFD')
    .replace(/[^\w ]/g, '')
    .split(' ')
    .join('-')
    .toLowerCase()
}

export function showcaseChannelCode(locale: string) {
  switch (locale) {
    case 'pt-BR':
      return 'solicitao-de-mostruriok3b0b7g'
    case 'en':
      return 'showcase-request'
    case 'es':
      return 'solicitud-de-muestrario'
    case 'zh-CN':
      return '1brp3wqlnotmk8vweo'
  }
}

export function exportationContactChannelCode(locale: string) {
  switch (locale) {
    case 'pt-BR':
      return 'comercial-exportaodwb7f'
    case 'en':
      return 'commercial-exportation'
    case 'es':
      return 'comercial-exportacin4cc'
    case 'zh-CN':
      return 'vhq57g6xbr0b5w65b'
  }
}

/**  
Returns a string list separated by comma
* @returns somename,anothername,andanother
 */
export const getStringList = (objectList?: NameValueProps[]): string => {
  const stringList = objectList?.map((item) => item.name)
  return stringList?.join(',') || ''
}

/**  
Returns a string with every word in upper case
* @returns Some String Text
 */
export const capitalizeText = (text: string) => {
  const capitalizedText = text
    ?.split(' ')
    ?.map((word) => word[0]?.toUpperCase() + word?.slice(1)?.toLowerCase())
    .join(' ')

  return capitalizedText
}

export const getPageCompleteUrl = (pathName?: string) => {
  const complement = pathName ? pathName : ''

  const pageBaseUrl = process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + complement

  return pageBaseUrl || ''
}
