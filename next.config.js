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
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY
  }
})
