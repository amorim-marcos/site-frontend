import { ReactNode } from 'react'
import { Flex, Image } from '@chakra-ui/react'

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
      justifyContent="center"
      direction="column"
      gap="1.4rem"
      padding="2rem 3rem 2.5rem"
    >
      <Section title="ESTRUTURA">
        <SectionContent content={props.structure} />
      </Section>

      <Section title="LOCALIZAÇÃO">
        <SectionPlace content={props.localization} />
      </Section>

      <Section title="TELEFONES">
        <SectionContent content={props.phones} />
      </Section>

      <Section title="DISTÂNCIA DO AEROPORTO">
        <SectionContent content={props.airportDistance} />
      </Section>
    </Flex>
  </>
)

const Section = (props: { title: string; children: ReactNode }) => (
  <Flex direction="column">
    <SectionTitle title={props.title} />
    {props.children}
  </Flex>
)

const SectionText = (props: {
  color: string
  fontWeight: string
  children: ReactNode
}) => (
  <Flex
    gap="0.3rem"
    alignItems="center"
    fontSpacing="-20px"
    fontSize="1.07rem"
    color={props.color}
    fontWeight={props.fontWeight}
  >
    {props.children}
  </Flex>
)

const SectionTitle = (props: { title: string }) => (
  <SectionText color="green.600" fontWeight="medium">
    <ArrowRight />
    {props.title}
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

const ArrowRight = (props: { color?: string }) => (
  <Image h="0.65rem" color={props.color} src="icon/icon_arrow_right.svg" />
)

export default WhereWeArePanelInfo
