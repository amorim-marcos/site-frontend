import { Box, Flex, Text } from '@chakra-ui/react'

export type HighlightBoxPanelProps = {
  title: string
  subtitle: string
}

const HighlightBoxPanelFooter = (props: HighlightBoxPanelProps) => (
  <Flex
    h={{ base: '55px', sm: '80px', md: '90px', lg: '110px' }}
    // maxWidth={'80%'}
    wrap={{ base: 'nowrap', md: 'wrap' }}
    direction="column"
    borderBottomRightRadius="33px"
    bgColor="green.800"
    flexWrap={"wrap"}
  >
    <Flex 
      // alignItems="flex-start"
      marginLeft={{ base: '5%', sm: '5%', lg: '5%', xl: '5%'}}
      marginTop={{ base: '5%', sm: '5%', lg: '5%', xl: '4%'}}
      // bg="red"
      flex="1"
    >
      <Title title={props.title} />
    </Flex>

    <Flex 
      marginLeft={{ base: '5%', sm: '5%', lg: '5%', xl: '5%'}}
      marginBottom={{ base: '2%', sm: '2%', lg: '2%', xl: '2%'}}
      // bg="blue"
      flex="1"
    >
      <SubTitle subtitle={props.subtitle} />
    </Flex>

  </Flex>
)

const Title = (props: { title: string }) => (
  <Text
    variant={"h4" as any}
    whiteSpace="pre"
    letterSpacing="-0.46px"
    color={"green.600"}
  >
    {props.title}
  </Text>
)

const SubTitle = (props: { subtitle: string }) => (
  <Text
    variant={"h5" as any}
    color="white"
    letterSpacing="-0.36px"
  >
    {props.subtitle}
  </Text>
)


export default HighlightBoxPanelFooter
