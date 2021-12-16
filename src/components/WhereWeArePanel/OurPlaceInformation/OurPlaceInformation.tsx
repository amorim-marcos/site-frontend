import { Container, Flex, Text } from '@chakra-ui/react'
import colors from 'theme/colors'

const SectionTitle = (props: { title: string }) => (
  <Text
    color={colors.light_green}
    letterSpacing="-0.6px"
    fontSize="1.1rem"
    fontWeight={500}
    fontFamily="Montserrat"
  >
    {`> ${props.title}`}
  </Text>
)

const SectionContent = (props: { content: string }) => (
  <Text fontSize="0.9rem" fontFamily="Montserrat" color="#595959">
    {props.content}
  </Text>
)

interface WhereWeArePlaceInfoProps {
  structure: string
  localization: string
  phones: string
  airportDistance: string
}

export const OurPlaceInformation = (props: WhereWeArePlaceInfoProps) => (
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
      <SectionContent content={props.localization} />
    </Container>

    <Container>
      <SectionTitle title="TELEFONE" />
      <SectionContent content={props.phones} />
    </Container>

    <Container>
      <SectionTitle title="DISTâNCIA DO AEROPORTO" />
      <SectionContent content={props.airportDistance} />
    </Container>
  </Flex>
)
