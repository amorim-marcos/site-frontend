import useRouterCustom from 'hooks/useRouterCustom'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { LocateOptions } from 'types/utils'

export type CustomLinkProps = {
  linkTo?: string
  children?: ReactNode
  target?: '_blank' | '_self'
  download?: boolean
  translatePaths?: boolean
}
export const CustomLink = ({
  linkTo,
  children,
  target,
  translatePaths,
  ...props
}: CustomLinkProps) => {
  const { getTranslatedPath } = useRouterCustom()

  let { locale } = useRouter() || { locale: 'pt-BR' }

  locale = locale || 'pt-BR'

  if (!translatePaths) {
    return (
      <Link href={linkTo ?? '#'} target={target ?? '_self'} {...props}>
        {children}
      </Link>
    )
  }

  // // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const pathnames: PathnamesTranslations = require('../../../config/routesConfig')

  // // const translatedPath = pathnames[locale]?.[linkTo]

  // // find the translated pathname from the original passed link
  // const translatedPath = Object.keys(pathnames[locale] || {})?.find(
  //   (pathKey) => pathnames[locale || 'pt-BR'][pathKey] === linkTo
  // )

  const translatedPath = getTranslatedPath(
    linkTo!,
    locale as keyof typeof LocateOptions
  )

  const href = translatedPath ? `${translatedPath}` : linkTo

  return (
    <Link
      href={href || '#'}
      // as={translatedAs}
      target={target ?? '_self'}
      {...props}
    >
      {children}
    </Link>
  )
}
