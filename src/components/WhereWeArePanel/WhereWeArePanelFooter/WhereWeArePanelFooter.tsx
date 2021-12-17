import { Flex, Image, Link, Text } from '@chakra-ui/react'

export type WhereWeArePanelFooterProps = {
  name: string
  address: string
  googleMapsURL: string
  inaugurationSoon: boolean
  expand: boolean
  onClick: () => void
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
      <Flex gap="1rem" alignItems="flex-end" h="100%" mb="1rem" mr="0.5rem">
        <InfoButtom onClick={props.onClick} expand={props.expand} />
        <MapButtom googleMapsURL={props.googleMapsURL} />
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

const InfoButtom = (props: { onClick?: () => void; expand: boolean }) => (
  <Image
    src="icon/icon_info.svg"
    h="60%"
    cursor="pointer"
    onClick={props.onClick}
    transition={`all 0.1s ease-in-out`}
    backgroundColor={props.expand ? 'green.600' : 'none'}
    borderRadius="100%"
  />
)

const MapButtom = (props: { googleMapsURL: string }) => (
  <Link href={props.googleMapsURL} isExternal>
    <Image src="icon/icon_mapa.svg" h="2.2rem" cursor="pointer" />
  </Link>
)
