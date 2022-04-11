import { useEffect, useState } from 'react'

type FacebookStatic = fb.FacebookStatic

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Facebook = require('fb-sdk-wrapper') as FacebookStatic

const useFacebook = () => {
  const [FB, setFB] = useState<FacebookStatic>()

  useEffect(() => {
    const init = async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const fb = await Facebook.load()

      Facebook.init({
        appId: process.env.FACEBOOK_APP_ID,
        status: false,
        xfbml: true,
        autoLogAppEvents: false,
        version: 'v13.0'
      })

      setFB(fb)
    }

    init()
  }, [])

  return { FB }
}

export default useFacebook
