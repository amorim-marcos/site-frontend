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

import ErrorBoundaryProvider from 'services/errorBoundary'

import '../styles/zoomout.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      const result = parts.pop()
      if (result) {
        return result.split(';').shift()
      }
    }
    return undefined
  }

  if (typeof window !== 'undefined') {
    const storageClearedCookie = getCookie('storageCleared')

    if (!storageClearedCookie) {
      localStorage.clear()
      sessionStorage.clear()

      const date = new Date()
      date.setDate(date.getDate() + 5)
      document.cookie = `storageCleared=true; expires=${date.toUTCString()}; path=/`
    }
  }

  // useEffect(() => {
  //   if (
  //     router &&
  //     router.locale &&
  //     router.pathname.includes('bnk-channel') &&
  //     router.locale !== 'pt-BR'
  //   ) {
  //     console.log('AAAAAAA - CANAL- BNK')
  //     router.push('/')
  //   }
  // }, [router])

  useEffect(() => {
    const existingScript = document.getElementById('replaceTrademarkScript')
    if (existingScript) {
      existingScript.remove()
    }

    const script = document.createElement('script')
    script.src = '/static/replaceTrademark.js'
    script.async = true
    script.id = 'replaceTrademarkScript'
    document.body.appendChild(script)
  }, [router])

  const ErrorMessage = () => {
    return (
      <div>
        <p>Sorry, this page is not available. Please go back</p>
        <button onClick={() => router.back()}>Back</button>
      </div>
    )
  }

  return (
    <ChakraProvider theme={theme}>
      <MyHead />
      <ErrorBoundaryProvider fallback={<ErrorMessage />}>
        <Script
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          src="https://code.jquery.com/jquery-3.6.0.min.js"
        />
        {/* <Script strategy="beforeInteractive" src="/static/replaceTrademark.js" /> */}
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
        <Script id="gtm-config" strategy="lazyOnload">
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
      </ErrorBoundaryProvider>
    </ChakraProvider>
  )
}

export default appWithI18Next(App, ni18nConfig)
