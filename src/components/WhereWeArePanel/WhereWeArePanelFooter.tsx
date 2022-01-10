import { Box, Flex, Text } from '@chakra-ui/react'
import InfoIcon from '@components/Icons/InfoIcon'
import MapIcon, { MapIconActive } from '@components/Icons/MapIcon'

export type WhereWeArePanelFooterProps = {
  name: string
  address: string
  inaugurationSoon: boolean
  showOverlay: string | null
  handleChangeOverlay: (overlay: 'map' | 'info' | null) => void
}

const WhereWeArePanelFooter = (props: WhereWeArePanelFooterProps) => (
  <Flex
    h={{ base: '115px', sm: '105px', md: '70px' }}
    w="100%"
    padding={{ base: '21px 5px 15px', md: '15px 38px' }}
    gap={{ base: '10px', md: '0' }}
    wrap={{ base: 'nowrap', md: 'wrap' }}
    align="center"
    justify={{ base: 'center', md: 'space-between' }}
    direction={{ base: 'column', md: 'row' }}
    borderBottomRightRadius="33px"
    bgColor="green.900"
  >
    <Flex alignItems="center" direction={{ base: 'column', sm: 'row' }}>
      <Name name={props.name} />
      <Address address={props.address} />
    </Flex>

    {!props.inaugurationSoon && (
      <Flex id="buttons" gap={{ base: '15px', md: '24px' }} alignItems="center">
        <InfoBtn
          onClick={() => props.handleChangeOverlay('info')}
          show={props.showOverlay === 'info'}
        />
        <MapBtn
          onClick={() => props.handleChangeOverlay('map')}
          show={props.showOverlay === 'map'}
        />
      </Flex>
    )}
  </Flex>
)

const Name = (props: { name: string }) => (
  <Text
    color="green.600"
    whiteSpace="pre"
    fontWeight="bold"
    fontSize={{ sm: '18px' }}
    letterSpacing="-0.46px"
    _after={{ sm: { content: '" | "' } }}
  >
    {props.name}
  </Text>
)

const Address = (props: { address: string }) => (
  <Text
    color="white"
    letterSpacing="-0.36px"
    fontSize={{ base: '14px', md: '18px' }}
    fontWeight="medium"
  >
    {props.address}
  </Text>
)

const InfoBtn = (props: { onClick?: () => void; show: boolean }) => (
  <Box
    cursor="pointer"
    borderRadius="100%"
    transition={`all 0.2s ease-in-out`}
    bg={props.show ? 'green.600' : 'none'}
    _hover={{ filter: 'saturate(0.5)' }}
  >
    <InfoIcon onClick={props.onClick} />
  </Box>
)

const MapBtn = (props: { onClick?: () => void; show: boolean }) => (
  <Box
    mb="5px"
    cursor="pointer"
    onClick={props.onClick}
    transition={`all 0.2s ease-in-out`}
    // _hover={{ filter: 'saturate(0.5) brightness(1.1)' }}
  >
    {props.show ? <MapIconActive /> : <MapIcon />}
  </Box>
)

export default WhereWeArePanelFooter
