import useRouterCustom from 'hooks/useRouterCustom'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { HoCDecorator } from 'utils/utils'

export interface PathProps {
  pathname: string
  locale: string[]
}

export const allowedBnkChannelPages = ['/bnk-channel/downloads']
export const blockedPaths: PathProps[] = [
  {
    pathname: '/bnk-channel',
    locale: ['en', 'es', 'zh-CN']
  },
  {
    pathname: '/bnk-channel/[category]',
    locale: ['en', 'es', 'zh-CN']
  }
]

export const withGuard: HoCDecorator<{
  useGuard: () => boolean
  defaultRedirect?: string
  checkLocale?: boolean
}> =
  ({ useGuard, defaultRedirect, checkLocale }) =>
  (Component: any) =>
    React.memo(function GuardWrapperComponent(props: any) {
      const { getTranslatedPath } = useRouterCustom()
      const router = useRouter()
      const canPass = useGuard()
      const [allow, setAllow] = useState<boolean>(false)

      const handleCheckLocale = () => {
        const locale = router.locale
        const pathname = router.pathname || ''

        const translatedPathname = getTranslatedPath(pathname)

        const pathIsAllowed = allowedBnkChannelPages.includes(
          translatedPathname!
        )

        const pathIsBlocked = blockedPaths.some(
          (path) =>
            path.pathname === translatedPathname &&
            path.locale.includes(locale!)
        )

        if (pathIsAllowed) {
          console.log('pathnamereceived ALLOWED')
          setAllow(true)
          return
        }

        if (pathIsBlocked) {
          console.log('pathname received BLOCKED')

          setAllow(false)
          router.replace(defaultRedirect || '/')
          return
        }
      }

      useEffect(() => {
        if (canPass) {
          if (checkLocale) {
            handleCheckLocale()
          }

          console.log(`pathname other`)

          setAllow(true)
        } else {
          router.replace(defaultRedirect || '/')
        }
      }, [canPass, router, checkLocale])

      if (allow) {
        return (
          <>
            <Component {...props} />
          </>
        )
      }

      return null
    })
