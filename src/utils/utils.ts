const punycode = require('punycode/');

export function smartString(phrase: string, num: number) {
  let subString, restString, proxSpace, subString2

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


export function formatChannelNameUrl(channel_name: string){
  const normalized_name = punycode.encode(channel_name)
    .replace(/[^\w ]/g, '')
    .split(' ')
    .join('-')
    .toLowerCase()

  return normalized_name
}