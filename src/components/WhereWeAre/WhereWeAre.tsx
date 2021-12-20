import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { WhereWeArePanelProps } from '@components/WhereWeArePanel/WhereWeArePanel'

import WhereWeArePanel from '@components/WhereWeArePanel'

export type WhereWeAreProps = {
  panels: WhereWeArePanelProps[]
}

export const WhereWeAre = ({ panels = mockPanels }: WhereWeAreProps) => {
  return (
    <Box>
      <Flex
        w="100%"
        mb="5rem"
        gap="5rem"
        pos="relative"
        overflow="hidden"
        direction="column"
      >
        <Image
          src="img/grafismo_fundo_cinza.svg"
          pos="absolute"
          zIndex={-1}
          mr="-6rem"
          right={0}
          w="40%"
        />

        <Flex mt="5.8rem" justifyContent="space-around">
          <Title />
          <Description />
        </Flex>

        <Flex w="100%" wrap="wrap" gap="3.4rem" justifyContent="center">
          {panels.map((item, index) => (
            <WhereWeArePanel key={index} {...item} />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

const Title = () => (
  <Box>
    <Text
      color="green.800"
      pb="0.5rem"
      fontSize="2rem"
      fontWeight="extrabold"
      letterSpacing="-1px"
    >
      Onde Estamos
    </Text>

    <Box w="5.5rem" h="2px" marginLeft="0.2rem" bg="green.600" />
  </Box>
)

const Description = () => (
  <Box w="60%">
    <Text color="green.600" letterSpacing="-0.6px" fontWeight="extrabold">
      Localização estratégica
    </Text>

    <Text color="grey.300" letterSpacing="-0.4px">
      {
        'Localização estratégica Nossas plantas industriais estão estrategicamente localizadas próximas às áreas de cultivo florestal e às principais rodovias e portos do país, com fácil distribuição para todo o território nacional e exterior.'
      }
    </Text>
  </Box>
)

export const mockPanelObj: WhereWeArePanelProps = {
  name: 'Matriz',
  city: 'Araucária',
  ourPlaceInformation: {
    structure:
      'Com o centro admnistrativo, fábrica de MDP, fábrica de MDF/HDF, unidade para revestimento com BP (melamina), serraria e central térmica para cogeração de energia.',
    localization: 'Rua Dr. Valério Sobânia, 500 Araucária - PR 83707-125',
    phones: '+55 (44) 2109-3700 | +55 (44) 2109-3900',
    airportDistance:
      'Aeroporto Internacional Afonso Pena - São José dos Pinhais/PR > 27,6 Km - 30 min'
  },
  coords: [-25.5410047, -49.3861603],
  googleMapsURL:
    'https://www.google.com/maps/place/Berneck+S.A.+Paineis+e+Serrados+-+Portaria+2/@-25.5410047,-49.3861603,15z/data=!4m12!1m6!3m5!1s0x94dd02bcf21d0167:0x7b1bae29de9e1e0e!2sBerneck+S.A.+Paineis+e+Serrados+-+Portaria+2!8m2!3d-25.5410083!4d-49.3774183!3m4!1s0x94dd02bcf21d0167:0x7b1bae29de9e1e0e!8m2!3d-25.5410083!4d-49.3774183',
  state: 'PR',
  country: 'Brasil',
  inaugurationSoon: false,
  image: 'img/foto_matriz.png'
}

export const mockPanels: WhereWeArePanelProps[] = [
  mockPanelObj,
  {
    ...mockPanelObj,
    name: 'Unidade Industrial',
    city: 'Curitibanos',
    state: 'SC',
    image: 'img/Curitibanos.png'
  },
  {
    ...mockPanelObj,
    name: 'Unidade Industrial',
    city: 'Brasnorte',
    state: 'MG',
    image: 'img/Unidade-Brasnorte.png'
  },
  {
    ...mockPanelObj,
    name: 'Unidade Industrial',
    city: 'Lages',
    state: 'SC',
    inaugurationSoon: true,
    image: 'img/em_breve.png'
  }
]
