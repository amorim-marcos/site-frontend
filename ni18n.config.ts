import type { Ni18nOptions } from 'ni18n'

export const ni18nConfig: Ni18nOptions = {
  supportedLngs: ['en', 'es', 'pt-BR', 'zn-CN'],
  ns: ['header', 'footer', 'products']
  // backend: {
  //   loadPath: (locale: string, namespace: string, missing: boolean) => {
  //     return `./locales/${locale}/${namespace}.json`
  //   }
  // }
}
