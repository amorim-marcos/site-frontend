import { useRouter } from 'next/router'

const useRouterCustom = () => {
  const router = useRouter()
  const pathname = router.pathname

  function resetQueriesFromUrl() {
    router.replace(
      {
        pathname: pathname
      },
      undefined,
      {
        shallow: true
      }
    )
  }

  function removeQueryFromUrl(queryName: string, value: string) {
    const { query: queryObj } = router

    const newQuery = { ...queryObj }
    delete newQuery[queryName]

    router.replace(
      {
        pathname: pathname,
        query: {
          ...newQuery
        }
      },
      undefined,
      {
        shallow: true
      }
    )
  }

  function addQueryToUrl(queryName: string, value: string) {
    router.replace(
      {
        pathname: pathname,
        query: {
          ...router.query,
          [queryName]: value
        }
      },
      undefined,
      { shallow: true }
    )
  }

  return {
    addQueryToUrl,
    removeQueryFromUrl,
    resetQueriesFromUrl
  }
}

export default useRouterCustom
