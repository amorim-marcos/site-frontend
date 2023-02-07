// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'
const securityHeaders = require('./config/securityHeaders')

module.exports = withPWA({
  images: {
    domains: ['scontent.cdninstagram.com']
  },
  pwa: {
    dest: 'public',
    disable: !isProd
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
    // locales: ['pt-BR']
    locales: ['en', 'es', 'pt-BR', 'zn-CN']
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ]
  }
})
