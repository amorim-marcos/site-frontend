import { Flex, FlexProps } from '@chakra-ui/react'
import useRouterCustom from 'hooks/useRouterCustom'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, ReactNode } from 'react'
import { LocaleOptions } from 'types/utils'

export interface CustomLinkProps extends FlexProps {
  linkTo?: string
  children?: ReactNode
  target?: '_blank' | '_self'
  download?: boolean
  translatePaths?: boolean
  useFlexComponent?: boolean
}
export const CustomLink = ({
  linkTo,
  children,
  target,
  download,
  translatePaths,
  useFlexComponent=true,
  ...props
}: CustomLinkProps) => {
  const { getTranslatedPath } = useRouterCustom()

  let { locale } = useRouter() || { locale: 'pt-BR' }

  locale = locale || 'pt-BR'

  const WrapperTag = useFlexComponent ? Flex : Fragment

  if (!translatePaths) {
    return (
      <Link href={linkTo ?? '#'} target={target ?? '_self'} download={download}>
        <WrapperTag {...props}>{children}</WrapperTag>
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
    locale as keyof typeof LocaleOptions
  )

  const href = translatedPath ? `${translatedPath}` : linkTo

  return (
    <Link
      href={href || '#'}
      // as={translatedAs}
      target={target ?? '_self'}
      download={download}
    >
      <WrapperTag {...props}>{children}</WrapperTag>
    </Link>
  )
}
