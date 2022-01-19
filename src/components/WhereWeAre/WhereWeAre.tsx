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
      <Flex
        w="100%"
        mb="50px"
        gap={{ base: '30px', md: '83px' }}
        pos="relative"
        overflow="hidden"
        direction="column"
      >
        <Image
          src="img/grafismo_fundo_cinza.svg"
          pos="absolute"
          zIndex={-1}
          right={{ xs: '-30px', sm: '-90px', '2xl': '-100px' }}
          top={{ xs: '60px', '2xl': '-10px' }}
        />

        <Flex
          mt="100px"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'flex-start' }}
          px={{ md: '30px', lg: '80px', xl: '60px', '2xl': '120px' }}
          gap={{ base: '20px', md: '130px' }}
        >
          <Title />
          <Description />
        </Flex>

        {isMobile ? (
          <Flex as={'carousel' as any} px={{ base: '20px' }} justify="center">
            <Carousel>
              {panels.map((item) => (
                <WhereWeArePanel key={item.image} {...item} />
              ))}
            </Carousel>
          </Flex>
        ) : (
          <Flex w="100%" wrap="wrap" gap="54px" justify="center">
            {panels.map((item) => (
              <WhereWeArePanel key={item.image} {...item} />
            ))}
          </Flex>
        )}
      </Flex>
    </Box>
  )
}

const Title = () => (
  <Flex
    direction="column"
    align={{ base: 'center', md: 'flex-start' }}
    gap={{ base: '10px', '2xl': '29px' }}
  >
    <Text
      color="green.800"
      fontSize = {{ base: '18px', sm: '32px', lg: '40px', xl: '50px'}}
      fontFamily = 'body'
      fontWeight= 'extrabold'
      letterSpacing="-1px"
      lineHeight="1"
    >
      Onde Estamos
    </Text>

    <Box 
      h="3px"
      w={{ base: '60px', sm: '70px', lg: '80px', xl: '90px'}}
      bg="green.600"
      borderRadius="20px"
    />
  </Flex>
)

const Description = () => (
  <Box 
    w={{ base: '80vw', md: '60%' }}
  >
    <Text
      color="green.600"
      letterSpacing="-0.6px"
      fontWeight="extrabold"
      fontSize = {{ base: '10px', sm: '22px', lg: '24px', xl: '30px'}}
      textAlign = {{ base: 'center', sm: 'center', lg: 'left', xl: 'left'}}
    >
      Localização estratégica
    </Text>

    <Text
      color="grey.300"
      letterSpacing="-0.4px"
      fontSize = {{ base: '8px', sm: '14px', lg: '16px', xl: '20px'}}
      textAlign = {{ base: 'center', sm: 'center', lg: 'left', xl: 'left'}}
    >
      {
        'Nossas plantas industriais estão estrategicamente localizadas próximas às áreas de cultivo florestal e às principais rodovias e portos do país, com fácil distribuição para todo o território nacional e exterior.'
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
