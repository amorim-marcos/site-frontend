const isProd = process.env.NODE_ENV === 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})
// eslint-disable-next-line @typescript-eslint/no-var-requires
const securityHeaders = require('./config/securityHeaders')

module.exports = withPWA({
  images: {
    domains: ['scontent.cdninstagram.com']
  },
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
    MEILI_API_HOST: process.env.MEILI_API_HOST,
    MEILI_API_KEY: process.env.MEILI_API_KEY
  },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['en', 'es', 'pt-BR', 'zh-CN']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ]
  }
})
