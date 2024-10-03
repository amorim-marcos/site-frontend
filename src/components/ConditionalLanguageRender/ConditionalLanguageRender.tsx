import { Box, BoxProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { LocaleOptions } from 'types/utils'

interface ConditionalLanguageRenderProps {
  children: React.ReactNode
  allowedLocale?: LocaleOptions[]
}

export default function ConditionalLanguageRender({
  children,
  allowedLocale
}: ConditionalLanguageRenderProps) {
  const router = useRouter()
  const locale = router.locale || 'pt-BR'

  if (allowedLocale && allowedLocale.includes(locale as LocaleOptions)) {
    return <>{children}</>
  }

  if (!allowedLocale && locale === 'pt-BR') {
    return <>{children}</>
  }

  return null
}
