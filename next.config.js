// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  env: {
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    YOUTUBE_PLAYLIST_ID: process.env.YOUTUBE_PLAYLIST_ID,
    YOUTUBE_PLAYLIST_URL: process.env.YOUTUBE_PLAYLIST_URL
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt-BR', 'zn-CN']
  }
})
