import { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'

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
      <Head>
        <title>Berneck</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>

      <Script
        strategy="beforeInteractive"
        src="../static/replaceTrademark.js"
      />

      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
      <AppCookieConsent />
    </ChakraProvider>
  )
}

export default appWithI18Next(App, ni18nConfig)
