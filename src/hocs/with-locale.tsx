import { withGuard } from './with-guard'

// todo
// find a way to get the locale from the router
export const withLocale = () => {
  return withGuard({
    useGuard: () => {
      return true
    },
    // useGuard: ({ locale, pathname }) => {
    //   const pathIncludeBnkChannel = pathname?.includes(`bnk-channel`)
    //   const pathIsAllowed = allowedBnkChannelPages.includes(pathname!)
    //   const pathIsBlocked = blockedPaths.find(
    //     (path) => path.pathname === pathname && path.locale.includes(locale)
    //   )

    //   if (pathIncludeBnkChannel && pathIsAllowed) {
    //     return true
    //   }

    //   if (pathIsBlocked) {
    //     return false
    //   }

    //   return true
    // },
    defaultRedirect: '/',
    checkLocale: true
  })
}
