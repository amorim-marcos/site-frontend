import { Box, Flex, Text } from '@chakra-ui/react'

export type HighlightBoxPanelProps = {
  title: string
  subtitle: string
}

const HighlightBoxPanelFooter = (props: HighlightBoxPanelProps) => (
  <Flex
    h={{ base: '65px', sm: '75px', lg: '80px', xl: '90px' }}
    // maxWidth={'80%'}
    wrap={{ base: 'nowrap', md: 'wrap' }}
    direction="column"
    borderBottomRightRadius="33px"
    bgColor="green.800"
    flexWrap={'nowrap'}
  >
    <Flex
      // alignItems="flex-start"
      marginLeft={{ base: '3%', sm: '5%', lg: '4%', xl: '3%' }}
      marginTop={{ base: '4%', sm: '3.5%', lg: '4%', xl: '3%' }}
      // bg="red"
      flex="1"
    >
      <Title title={props.title} />
    </Flex>

    <Flex
      marginLeft={{ base: '3%', sm: '5%', lg: '4%', xl: '3%' }}
      marginBottom={{ base: '2%', sm: '2%', lg: '2%', xl: '2%' }}
      // bg="blue"
      flex="1"
    >
      <SubTitle subtitle={props.subtitle} />
    </Flex>
  </Flex>
)

const Title = (props: { title: string }) => (
  <Text
    variant={'h4' as any}
    fontSize={{ base: '15px', sm: '16px', lg: '16px', xl: '20px' }}
    whiteSpace="pre"
    letterSpacing="-0.46px"
    color={'green.600'}
  >
    {props.title}
  </Text>
)

const SubTitle = (props: { subtitle: string }) => (
  <Text
    variant={'h5' as any}
    fontSize={{ base: '12px', sm: '12px', lg: '14px', xl: '15px' }}
    color="white"
    letterSpacing="-0.36px"
  >
    {props.subtitle}
  </Text>
)

export default HighlightBoxPanelFooter
