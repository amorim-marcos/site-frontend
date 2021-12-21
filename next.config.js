// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  env: {
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt-BR', 'zn-CN']
  }
})
