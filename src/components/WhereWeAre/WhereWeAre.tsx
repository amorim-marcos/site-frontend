import { Box, Flex, Text, Image, useMediaQuery } from '@chakra-ui/react'
import { breakpoints } from 'theme/breakpoints'

import { WhereWeArePanelProps } from '@components/WhereWeArePanel/WhereWeArePanel'
import WhereWeArePanel from '@components/WhereWeArePanel'
import Carousel from '@components/Carousel'

export type WhereWeAreProps = {
  panels?: WhereWeArePanelProps[]
}

export const WhereWeAre = ({ panels = mockPanels }: WhereWeAreProps) => {
  const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.lg})`)

  return (
    <Box>
      {isMobile ? (
        <Flex as={'carousel' as any} justify="center">
          <Carousel>
            {panels.map((item, i) => (
              <WhereWeArePanel key={i} {...item} />
            ))}
          </Carousel>
        </Flex>
      ) : (
        <Flex
          w="100%"
          wrap="wrap"
          gap="54px"
          justify="center"
          // bg="red"
        >
          {panels.map((item, i) => (
            <WhereWeArePanel key={i} {...item} />
          ))}
        </Flex>
      )}
    </Box>
  )
}

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
