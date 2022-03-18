import { Box, Flex, Text } from '@chakra-ui/react'

import { CloseIcon, Arrow } from '@components/Icons'

export type WhereWeArePanelInfoProps = {
  structure: string
  localization: string
  phones: string
  airportDistance: string
  onClose: () => void
}

const WhereWeArePanelInfo = (props: WhereWeArePanelInfoProps) => (
  <>
    <Box
      top="10px"
      right="15px"
      pos="absolute"
      cursor="pointer"
      transition={`all 0.2s ease-in-out`}
      _hover={{ filter: 'brightness(0.8)' }}
    >
      <CloseIcon onClick={props.onClose} boxSize={['14px']} />
    </Box>

    <Flex
      justifyContent="space-around"
      direction="column"
      padding={{
        base: '25px 15px 15px',
        sm: '10px 15px',
        md: '20px 30px',
        lg: '30px 35px',
        xl: '20px 25px'
      }}
      w="100%"
    >
      <Section bodyText={props.structure} title="ESTRUTURA" />

      <Section bodyText={props.localization} title="LOCALIZAÇÃO" />

      <Section bodyText={props.phones} title="TELEFONES" />

      <Section
        bodyText={props.airportDistance}
        title="DISTÂNCIA DO AEROPORTO"
      />
    </Flex>
  </>
)

const Section = (props: { title: string; bodyText: string }) => {
  return (
    <Flex flexDirection={'column'}>
      <Flex alignItems={'center'}>
        <Arrow width="12px" color="green.600" />
        <Text ml="5px" variant="body" color="green.600">
          {props.title}
        </Text>
      </Flex>
      <Text variant="body">{props.bodyText}</Text>
    </Flex>
  )
}

export default WhereWeArePanelInfo
