import { Container, Flex, Text, Image } from '@chakra-ui/react'

export type WhereWeArePanelInfoProps = {
  structure: string
  localization: string
  phones: string
  airportDistance: string
  onClose: () => void
}

const WhereWeArePanelInfo = (props: WhereWeArePanelInfoProps) => (
  <>
    <CloseButton onClick={props.onClose} />

    <Flex
      w="100%"
      alignItems="flex-start"
      justifyContent="center"
      direction="column"
      gap="1rem"
    >
      <Container>
        <SectionTitle title="ESTRUTURA" />
        <SectionContent content={props.structure} />
      </Container>

      <Container>
        <SectionTitle title="LOCALIZAÇÃO" />
        <SectionPlace content={props.localization} />
      </Container>

      <Container>
        <SectionTitle title="TELEFONE" />
        <SectionPlace content={props.phones} />
      </Container>

      <Container>
        <SectionTitle title="DISTâNCIA DO AEROPORTO" />
        <SectionPlace content={props.airportDistance} />
      </Container>
    </Flex>
  </>
)

const SectionText = (props: {
  color: string
  fontWeight: string
  children: React.ReactNode
}) => (
  <Text
    fontSpacing="-20px"
    fontSize="1.1rem"
    fontFamily="Montserrat"
    color={props.color}
    fontWeight={props.fontWeight}
  >
    {props.children}
  </Text>
)

const SectionTitle = (props: { title: string }) => (
  <SectionText color="green.600" fontWeight="medium">
    {`> ${props.title}`}
  </SectionText>
)

const SectionContent = (props: { content: string }) => (
  <SectionText color="grey.350" fontWeight="normal">
    {props.content}
  </SectionText>
)

const SectionPlace = (props: { content: string }) => (
  <SectionText color="grey.350" fontWeight="medium">
    {props.content}
  </SectionText>
)

const CloseButton = (props: { onClick: () => void }) => (
  <Image
    src="icon/close_panel.svg"
    h="1rem"
    top="1.5rem"
    right="1.8rem"
    pos="absolute"
    cursor="pointer"
    onClick={props.onClick}
    transition={`all 0.2s ease-in-out`}
    _hover={{ filter: 'brightness(0.8)' }}
  />
)

export default WhereWeArePanelInfo
