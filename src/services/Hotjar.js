import Hotjar from '@hotjar/browser'
import { useEffect } from 'react'

let siteId = process.env.REACT_APP_HOTJAR_SITE_ID

const HotjarComponent = () => {
  // todo
  // remove in prd
  //   siteId = 5141301

  //   const hotjarVersion = 6

  //   console.log('hotjar id and version', siteId, hotjarVersion)

  //   return Hotjar.init(siteId, hotjarVersion) || null

  useEffect(() => {
    siteId = 5141301

    const hotjarVersion = 6
    const script = document.createElement('script')

    script.innerHTML = (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          ;(h.hj.q = h.hj.q || []).push(arguments)
        }
      h._hjSettings = { hjid: siteId, hjsv: hotjarVersion }
      a = o.getElementsByTagName('head')[0]
      r = o.createElement('script')
      r.async = 1
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
      a.appendChild(r)
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
    document.head.appendChild(script)

    console.log('hotjar id and version', siteId, hotjarVersion)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

export default HotjarComponent
