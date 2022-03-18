import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export type AppErrorProps = {
  errorNumber?: string
  errorText?: string
}
export const AppError = ({
  errorNumber = '404',
  errorText = 'Página não encontrada.'
}: AppErrorProps) => {
  const router = useRouter()
  return (
    <Flex
      flexDirection={'column'}
      justifyContent="center"
      alignItems={'center'}
      maxWidth={'1920px'}
      marginX="auto"
      h="100vh"
      position="relative"
      overflow={'hidden'}
    >
      <Image
        src="/img/404_page/bg.png"
        position={'absolute'}
        top="0"
        left={'0'}
        w="100%"
        h="100%"
        objectFit={'cover'}
        zIndex={'base'}
      />
      <Image
        src="/img/404_page/grafiesquerda.svg"
        position={'absolute'}
        bottom="0"
        left={{ base: '-50%', sm: '-30%', lg: '0' }}
        maxWidth={'528px'}
        w="55vh"
        zIndex={'docked'}
      />
      <Image
        src="/img/404_page/grafismos1.svg"
        position={'absolute'}
        top="0"
        left={{ base: '30%', lg: '60%' }}
        maxWidth={'1445px'}
        w="135vh"
        zIndex={'docked'}
      />
      <Text
        fontSize={{
          base: '100px',
          md: '144px',
          lg: '180px',
          xl: '216px',
          '2xl': '270px'
        }}
        fontWeight="bold"
        color="white.100"
        zIndex={'docked'}
      >
        {errorNumber}
      </Text>
      <Text
        variant={'h1' as any}
        textAlign="center"
        fontWeight="bold"
        color="white.100"
        zIndex={'docked'}
      >
        {errorText}
      </Text>

      <Button
        onClick={() => router.push('/')}
        marginTop="3%"
        bg="green.600"
        w={{ base: '80%', sm: '50%', md: '25%', xl: '18%' }}
        zIndex={'docked'}
      >
        <Text variant={'body' as any} fontWeight="bold">
          RETORNAR PARA HOME
        </Text>
      </Button>
    </Flex>
  )
}
