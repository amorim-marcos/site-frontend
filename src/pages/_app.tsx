import { AppProps } from 'next/app'
import Script from 'next/script'

import MyHead from './_head'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'theme/theme'

import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'
import { appWithI18Next } from 'ni18n'
import { ni18nConfig } from '../../ni18n.config'

import 'leaflet/dist/leaflet.css'
import AppCookieConsent from '@components/AppCookieConsent'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MyHead />

      <Script
        crossOrigin="anonymous"
        strategy="beforeInteractive"
        src="https://code.jquery.com/jquery-3.6.0.min.js"
      />
      <Script strategy="beforeInteractive" src="/static/replaceTrademark.js" />

      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
      <AppCookieConsent />
    </ChakraProvider>
  )
}

export default appWithI18Next(App, ni18nConfig)
