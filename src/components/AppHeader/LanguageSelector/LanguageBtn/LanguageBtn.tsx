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
      height={{
        base: '15px',
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
        fontSize={{ base: '6px', md: '10px', xl: '12px', '2xl': '16.5px' }}
        color="white.100"
        variant="header-menu"
      >
        {title}
      </Text>
    </Flex>
  )
}
