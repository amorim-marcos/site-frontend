import { useEffect, useState } from 'react'

type WindowDimensions = {
  width: number | undefined
  height: number | undefined
}

interface HookProps extends WindowDimensions {
  isMobile: boolean
}

const useMobile = (mobileSize: number): HookProps => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined
  })

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if (windowDimensions.width) {
      setMobile(windowDimensions.width <= mobileSize)
    }
  }, [mobileSize, windowDimensions])

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return { isMobile, ...windowDimensions }
}

export default useMobile
