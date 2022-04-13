import { Flex, Text, LayoutProps, Button, Box } from '@chakra-ui/react'
import { AlertIcon, CloseIcon } from '@components/Icons'
import { useState } from 'react'

export type FireAlertProps = LayoutProps & {
  title?: string
}

export const FireAlert = ({ title }: FireAlertProps) => {
  const [hide, setHide] = useState(false)

  return (

  <Box
    bg="brown.400"
  >
    <Flex
      display={hide ? 'none' : 'flex'}
      data-testid="fire-alert"
      maxWidth="1536px"
      marginX="auto"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      h={{ xl: '50px' }}
      bg="brown.400"
      align="center"
      // justify="start"
      direction={{ base: 'column', sm: 'row', lg: 'row', xl: 'row' }}
      px="30px"
      py={{ base: '25px', sm: 'auto' }}
      gap={{ base: '15px', sm: '0' }}
      flex="1"
    >
      <Flex
        align="flex-end"
        justify="flex-end"
        // bg="red"
      >
        <AlertIcon
          mr={{ sm: '15px' }}
          width={{
            base: '30px',
            xs: '36px',
            lg: '30px',
            xl: '32px'
          }}
          height={{
            base: '30px',
            xs: '32px',
            md: '26px',
            xl: '28px'
          }}
          color="#FFF"
        />
      </Flex>

      <Flex
        align="flex-end"
        justify="flex-end"
        // bg="blue"
      >
        <Text
          as="h5"
          fontSize={{
            base: '11px',
            sm: '12px',
            md: '13px',
            xl: '14px',
            '2xl': '15px'
          }}
          color={'white'}
          textAlign={{ base: 'center', sm: 'left' }}
          fontWeight="normal"
        >
          {title}
        </Text>
      
      </Flex>

      <Flex
        align="flex-end"
        justify="flex-end"
        // bg="pink"
        // px="30px"
        flex="1"
      >
        <Button
          ml={{ sm: '10px' }}
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


    </Flex>

  </Box>
  )
}
