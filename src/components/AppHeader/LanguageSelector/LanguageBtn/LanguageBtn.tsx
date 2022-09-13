import { Text, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

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
        if (Cookies.get('cookieAccepted')) {
          Cookies.set('berneck_language', locale)
        }
        router.push('/', '/', { locale })
      }}
      alignItems="center"
      justifyContent="flex-start"
      height={{
        base: '35px',
        sm: '15px',
        md: '30px',
        lg: '35px',
        xl: '40px',
        '2xl': '45px'
      }}
      w="100%"
      bg="green.900"
      paddingLeft={{ base: '5px', md: '8px', '2xl': '10px' }}
      _hover={{ bg: 'green.600' }}
    >
      <Text
        fontSize={{
          base: '10px',
          sm: '6px',
          md: '10px',
          xl: '12px',
          '2xl': '16.5px'
        }}
        color="white.100"
        variant={'header-menu' as any}
      >
        {title}
      </Text>
    </Flex>
  )
}
