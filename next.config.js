// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    MEILI_API_HOST: process.env.MEILI_API_HOST,
    MEILI_API_KEY: process.env.MEILI_API_KEY
  },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR']
    // locales: ['en', 'es', 'pt-BR', 'zn-CN']
  }
})
