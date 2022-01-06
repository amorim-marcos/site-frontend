import { Text, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export type LanguageBtnProps = {
  title: string
  locale: 'en' | 'es' | 'pt-BR' | 'zn-CN'
}

export const LanguageBtn = ({
  title = 'Btn Title',
  locale = 'en'
}: LanguageBtnProps) => {
  const router = useRouter()
  return (
    <Flex
      onClick={() => {
        router.push('/', '/', { locale })
      }}
      alignItems="center"
      justifyContent="flex-start"
      height="45px"
      w="100%"
      bg="green.900"
      paddingLeft="20px"
      _hover={{ bg: 'green.600' }}
    >
      <Text color="white.100" variant="header-menu">
        {title}
      </Text>
    </Flex>
  )
}
