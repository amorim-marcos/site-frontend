import { useRouter } from 'next/router'
import { LocateOptions, PathnamesTranslations } from 'types/utils'

const useRouterCustom = () => {
  const router = useRouter()
  const pathname = router.pathname

  const translatedPathName = getTranslatedPath(pathname)

  function resetQueriesFromUrl() {
    router.replace(
      {
        pathname: translatedPathName
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
        pathname: translatedPathName,
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
        pathname: translatedPathName,
        query: {
          ...router.query,
          [queryName]: value
        }
      },
      undefined,
      { shallow: true }
    )
  }

  function getTranslatedPath(
    url: string,
    customLocale?: keyof typeof LocateOptions
  ) {
    let { locale } = router

    locale = customLocale || locale || 'pt-BR'

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pathnames: PathnamesTranslations = require('../../config/routesConfig')

    // find the translated pathname from the original passed link
    const translatedPath = Object.keys(pathnames[locale] || {})?.find(
      (pathKey) => pathnames[locale || 'pt-BR'][pathKey] === url
    )

    return translatedPath || url
  }

  return {
    addQueryToUrl,
    removeQueryFromUrl,
    resetQueriesFromUrl,
    getTranslatedPath
  }
}

export default useRouterCustom
