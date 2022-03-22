import { Flex, Text, LayoutProps, Button } from '@chakra-ui/react'
import { AttentionIcon } from '@components/Icons'

export type FireAlertProps = LayoutProps & {
  title?: string
}

export const FireAlert = ({ title }: FireAlertProps) => {
  return (
    <Flex
      data-testid="fire-alert"
      maxWidth="1920px"
      marginX="auto"
      position="relative"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      bg="brown.400"
    >
      <Flex
        direction={{ base: 'column', sm: 'row', lg: 'row', xl: 'row' }}
        w={'100%'}
      >
        {/* BOX 1 */}
        <Flex
          flex="1"
          margin={{ base: '2%', sm: '2%', lg: '1%', xl: '1%' }}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <AttentionIcon
            width={{
              base: '30px',
              xs: '36px',
              sm: '40px',
              lg: '35px',
              xl: '40px'
            }}
            height={{
              base: '30px',
              xs: '36px',
              sm: '40px',
              lg: '35px',
              xl: '40px'
            }}
            color="#FFF"
            fillColor="#7F5A42"
          />
        </Flex>
        {/* BOX 2 */}
        <Flex
          flex="15"
          alignSelf="center"
          margin={{ base: '2%', sm: '2%', lg: '1%', xl: '1%' }}
        >
          <Text
            as="h5"
            variant={'h5' as any}
            color={'white'}
            textAlign={{ base: 'center', sm: 'left' }}
            fontWeight="normal"
          >
            {title}
          </Text>
        </Flex>
        {/* BOX 3 */}
        <Flex
          // bg='green'
          flex="1"
          margin={{ base: '2%', sm: '2%', lg: '1%', xl: '1%' }}
          alignSelf="center"
        >
          <Button
            onClick={() => alert('close')}
            bgColor={'brown.400'}
            w={{ base: '60%', sm: '60%', lg: '60%', xl: '60%' }}
            h={{ base: '10%', sm: '610%', lg: '10%', xl: '10%' }}
          >
            {/* <CloseIcon
                  width={{ base: '16px', sm: '19px', lg: '20px', xl: '20px' }}
                  height={{ base: '16px', sm: '19px', lg: '20px', xl: '20px' }}
                  color={"white"}
                /> */}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
