import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

/**
 * Hook to count the number of renders of a component
 *
 * @returns {Object} { checkIsInitialRender, renderCount }
 */
const useCountRender = () => {
  const renderCountRef = useRef(0)

  const router = useRouter()

  /** check if the component is rendered more than the expected render count
   *
   *  */
  const checkIsInitialRender = (renderCountToCheck: number) => {
    if (renderCountRef.current < renderCountToCheck) {
      return true
    }
    return false
  }

  useEffect(() => {
    renderCountRef.current += 1

    // todo
    // check which dependencies to add
  }, [router])

  return { checkIsInitialRender, renderCount: renderCountRef.current }
}

export default useCountRender
