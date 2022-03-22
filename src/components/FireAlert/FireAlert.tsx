import { Flex, Text, LayoutProps, Button } from '@chakra-ui/react'
import { AlertIcon, CloseIcon } from '@components/Icons'
import { useState } from 'react'

export type FireAlertProps = LayoutProps & {
  title?: string
}

export const FireAlert = ({ title }: FireAlertProps) => {
  const [hide, setHide] = useState(false)

  return (
    <Flex
      display={hide ? 'none' : 'flex'}
      data-testid="fire-alert"
      maxWidth="1920px"
      marginX="auto"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      h={{ xl: '70px', '2xl': '83px' }}
      bg="brown.400"
      align="center"
      justify="center"
      direction={{ base: 'column', sm: 'row', lg: 'row', xl: 'row' }}
      px="30px"
      py={{ base: '25px', sm: 'auto' }}
      gap={{ base: '15px', sm: '0' }}
    >
      <AlertIcon
        mr={{ sm: '15px' }}
        width={{
          base: '30px',
          xs: '36px',
          lg: '30px',
          xl: '32px',
          '2xl': '36px'
        }}
        height={{
          base: '30px',
          xs: '32px',
          md: '26px',
          xl: '28px',
          '2xl': '32px'
        }}
        color="#FFF"
      />

      <Text
        as="h5"
        fontSize={{
          base: '13px',
          sm: '13px',
          md: '14px',
          xl: '16px',
          '2xl': '23px'
        }}
        color={'white'}
        textAlign={{ base: 'center', sm: 'left' }}
        fontWeight="normal"
      >
        {title}
      </Text>

      <Button
        ml={{ sm: '30px' }}
        onClick={() => setHide(true)}
        bgColor={'brown.400'}
        w="fit-content"
        h="fit-content"
        _hover={{}}
      >
        <CloseIcon
          width={{ base: '16px', sm: '19px', lg: '14px' }}
          height={{ base: '16px', sm: '19px', lg: '14px' }}
          color={'white'}
        />
      </Button>
    </Flex>
  )
}
