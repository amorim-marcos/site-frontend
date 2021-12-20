import { Flex, Image, Text } from '@chakra-ui/react'

export type WhereWeArePanelFooterProps = {
  name: string
  address: string
  inaugurationSoon: boolean
  showOverlay: string | null
  handleChangeOverlay: (overlay: 'map' | 'info' | null) => void
}

export const WhereWeArePanelFooter = (props: WhereWeArePanelFooterProps) => (
  <Flex
    h="3rem"
    w="100%"
    bottom={0}
    zIndex={10}
    pos="absolute"
    padding="0 1.5rem"
    alignItems="center"
    justifyContent="space-between"
    borderRadius="0px 0px 33px 0px"
    bgColor="green.900"
  >
    <Flex alignItems="center">
      <Name name={props.name} />
      <Address address={props.address} />
    </Flex>

    {!props.inaugurationSoon && (
      <Flex gap="1.5rem" alignItems="center" h="100%">
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
    fontFamily="Montserrat"
    letterSpacing="-0.46px"
  >
    {`${props.name} | `}
  </Text>
)

const Address = (props: { address: string }) => (
  <Text
    color="white"
    fontFamily="Montserrat"
    letterSpacing="-0.36px"
    fontWeight="medium"
  >
    {props.address}
  </Text>
)

const InfoBtn = (props: { onClick?: () => void; show: boolean }) => (
  <Image
    src="icon/icon_info.svg"
    h="60%"
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
    h="60%"
    mb="0.5rem"
    cursor="pointer"
    onClick={props.onClick}
    transition={`all 0.2s ease-in-out`}
    _hover={{ filter: 'saturate(0.5) brightness(1.1)' }}
  />
)
