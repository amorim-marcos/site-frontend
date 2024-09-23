import { useEffect } from 'react'

const siteId = process.env.NEXT_PUBLIC_HOTJAR_SITE_ID

const HotjarComponent = () => {
  useEffect(() => {
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

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

export default HotjarComponent
