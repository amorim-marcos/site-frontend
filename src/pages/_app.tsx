import { AppProps } from 'next/app'
import Script from 'next/script'

import MyHead from './_head'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'theme/theme'

import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'
import { appWithI18Next } from 'ni18n'
import { ni18nConfig } from '../../ni18n.config'

import AppCookieConsent from '@components/AppCookieConsent'

import '../styles/zoomout.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (
      router &&
      router.locale &&
      router.pathname.includes('canal-bnk') &&
      router.locale !== 'pt-BR'
    ) {
      console.log('AAAAAAA - CANAL- BNK')
      router.push('/')
    }
  }, [router])
  return (
    <ChakraProvider theme={theme}>
      <MyHead />

      <Script
        crossOrigin="anonymous"
        strategy="beforeInteractive"
        src="https://code.jquery.com/jquery-3.6.0.min.js"
      />
      <Script strategy="beforeInteractive" src="/static/replaceTrademark.js" />
      {/*RD station script*/}
      <Script
        strategy="lazyOnload"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/461ed3f4-597a-4986-8c6b-cd3c63f5455b-loader.js"
      />

      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
      <AppCookieConsent />
    </ChakraProvider>
  )
}

export default appWithI18Next(App, ni18nConfig)
