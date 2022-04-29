import type { Ni18nOptions } from 'ni18n'

export const nameSpaces = [
  'aboutView',
  'bpCatalog',
  'bpCatalogItem',
  'buyView',
  'certificationView',
  'channelBnkView',
  'components',
  'compromiseView',
  'contactView',
  'envView',
  'errorPages',
  'footer',
  'forestsView',
  'galleryView',
  'header',
  'homeView',
  'privacyView',
  'productsView'
]

export const ni18nConfig: Ni18nOptions = {
  supportedLngs: ['en', 'es', 'pt-BR', 'zn-CN'],
  ns: nameSpaces
  // backend: {
  //   loadPath: (locale: string, namespace: string, missing: boolean) => {
  //     return `./locales/${locale}/${namespace}.json`
  //   }
  // }
}
