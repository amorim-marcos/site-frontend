import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const ns = ['header']
const supportedLngs = ['en', 'es', 'pt-BR', 'zn-CN']

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    //debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    defaultNS: 'header',
    ns,
    supportedLngs
  })

supportedLngs.forEach((lang) => {
  ns.forEach((n) => {
    i18n.addResourceBundle(
      lang,
      n,
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require(`../public/locales/${lang}/${n}.json`)
    )
  })
})

export { i18n }
