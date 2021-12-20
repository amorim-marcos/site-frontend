import { Flex, Image, Text } from '@chakra-ui/react'

export type WhereWeArePanelFooterProps = {
  name: string
  address: string
  inaugurationSoon: boolean
  showOverlay: string | null
  handleChangeOverlay: (overlay: 'map' | 'info' | null) => void
}

const WhereWeArePanelFooter = (props: WhereWeArePanelFooterProps) => (
  <Flex
    h={{ base: 'fit-content', md: '4.4rem' }}
    w="100%"
    bottom={0}
    zIndex={1000}
    padding={{ base: '1rem', md: '1rem 2.4rem 1rem 1.9rem' }}
    gap={{ base: '0.6rem', md: '0' }}
    wrap={{ base: 'nowrap', md: 'wrap' }}
    alignItems="center"
    justifyContent={{ base: 'center', md: 'space-between' }}
    direction={{ base: 'column', md: 'row' }}
    borderBottomRightRadius="33px"
    bgColor="green.900"
  >
    <Flex alignItems="center">
      <Name name={props.name} />
      <Address address={props.address} />
    </Flex>

    {!props.inaugurationSoon && (
      <Flex id="buttons" gap="1.5rem" alignItems="center">
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
    letterSpacing="-0.46px"
  >
    {`${props.name} | `}
  </Text>
)

const Address = (props: { address: string }) => (
  <Text
    color="white"
    letterSpacing="-0.36px"
    fontSize="1.1rem"
    fontWeight="medium"
  >
    {props.address}
  </Text>
)

const InfoBtn = (props: { onClick?: () => void; show: boolean }) => (
  <Image
    src="icon/icon_info.svg"
    h="2rem"
    cursor="pointer"
    borderRadius="100%"
    onClick={props.onClick}
    transition={`all 0.2s ease-in-out`}
    bg={props.show ? 'green.600' : 'none'}
    _hover={{ filter: 'saturate(0.5)' }}
  />
)

const MapBtn = (props: { onClick?: () => void; show: boolean }) => (
  <Image
    src={`icon/${props.show ? 'icon_map_active' : 'icon_map'}.svg`}
    h="2rem"
    mb={{ base: '0.2rem', md: '0.3rem' }}
    cursor="pointer"
    onClick={props.onClick}
    transition={`all 0.2s ease-in-out`}
    _hover={{ filter: 'saturate(0.5) brightness(1.1)' }}
  />
)

export default WhereWeArePanelFooter
