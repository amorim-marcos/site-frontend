import { useEffect, useState } from 'react'

declare global {
  interface Window {
    FB: {
      init: (a: {
        appId?: string
        autoLogAppEvents: boolean
        xfbml: boolean
        version: string
      }) => Promise<void>
      api: (
        endpoint: string,
        method: string,
        parms: {
          [key: string]: any
        },
        callback: (response: any) => void
      ) => void
    }
    fbAsyncInit: () => void
  }
}

const useFacebook = () => {
  const [fbSdkLoaded, setFbSdkLoaded] = useState(false)

  useEffect(() => {
    setupFacebook()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setupFacebook = () => {
    if (document.getElementById('facebook-jssdk')) {
      setFbSdkLoaded(true)
      return
    }

    setFbAsyncInit()
    loadSdkAsynchronously()
    createFbRoot()
  }

  const setFbAsyncInit = () => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: process.env.FACEBOOK_APP_ID,
        autoLogAppEvents: true,
        xfbml: false,
        version: 'v6.0'
      })

      setFbSdkLoaded(true)
    }
  }

  const loadSdkAsynchronously = () => {
    const element = document.getElementsByTagName('script')[0]
    const fjs = element
    let js = element

    if (document.getElementById('facebook-jssdk')) return

    js = document.createElement('script')
    js.id = 'facebook-jssdk'
    js.src = `https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v6.0&autoLogAppEvents=1`

    fjs.parentNode?.insertBefore(js, fjs)
  }

  const createFbRoot = () => {
    let fbRoot = document.getElementById('fb-root')

    if (!fbRoot) {
      fbRoot = document.createElement('div')
      fbRoot.id = 'fb-root'

      document.body.appendChild(fbRoot)
    }
  }

  const oEmbedRead = () => {
    if (!fbSdkLoaded) return

    window.FB.api(
      '/oembed_page',
      'GET',
      {
        html: 'insta-page',
        provider_url: 'https://www.instagram.com/',
        provider_name: 'instagram',
        url: 'https://www.instagram.com/berneckoficial/',
        access_token: ''
      },
      function (response) {
        console.log(response)
      }
    )
  }

  return {
    fbSdkLoaded,
    oEmbedRead
  }
}

export default useFacebook
