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
   * @param {number} renderCountToCheck 3 is the default value that was identified as the initial render count.
   * It was necessary to add this check because the initial render count was not always 1. In case of using a static page, the proper router render count that identifies the correct initial render is about 3
   *  */
  const checkIsInitialRender = (renderCountToCheck = 3) => {
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
