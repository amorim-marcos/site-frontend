import { useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Facebook = require('fb-sdk-wrapper') as fb.FacebookStatic

const useFacebook = () => {
  const [FB, setFB] = useState<fb.FacebookStatic>()

  useEffect(() => {
    const init = async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const fb = await Facebook.load()

      await Facebook.init({
        appId: process.env.FACEBOOK_APP_ID,
        xfbml: true,
        autoLogAppEvents: false,
        version: 'v13.0'
      })

      console.log(fb)
      setFB(fb)
    }

    init()
  }, [])

  return { FB }
}

export default useFacebook
