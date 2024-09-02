const isProd = process.env.NODE_ENV === 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})
// eslint-disable-next-line @typescript-eslint/no-var-requires
const securityHeaders = require('./config/securityHeaders')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pathTranslations = require('./config/routesConfig')

/** Generate a list of object for using to redirect translated paths
ex:
{
  source: "/produtos",
  destination: "/products",
  locale: false
} */
const generateRedirectTranslatedPaths = () => {
  const redirects = []
  for (const [locale, paths] of Object.entries(pathTranslations)) {
    for (const [source, destination] of Object.entries(paths)) {
      redirects.push({
        source: `/${locale}${source}`,
        destination: destination,
        locale: false
      })
    }
  }
  return redirects
}

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
  // translate pt-BR pathnames
  async rewrites() {
    return generateRedirectTranslatedPaths()
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
