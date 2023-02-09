import { Box, BoxProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function ConditionalLanguageRender({ children }: BoxProps) {
  const router = useRouter()
  return router.locale === 'pt-BR' ? <>{children}</> : <Box />
}
