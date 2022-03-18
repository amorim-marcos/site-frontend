import { Box, Flex, Text, Image, useMediaQuery } from '@chakra-ui/react'
import { breakpoints } from 'theme/breakpoints'
import Carousel from '@components/Carousel'

import { HighlightBoxPanelProps } from '@components/HighlightBoxPanel/HighlightBoxPanel'
import HighlightBoxPanel from '@components/HighlightBoxPanel'

export type SponsoredProjectsProps = {
  panels?: HighlightBoxPanelProps[]
}
export const SponsoredProjects = ({
  panels = mockPanels
}: SponsoredProjectsProps) => {
  const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.lg})`)

  return (
    <Box>
      {isMobile ? (
        <Flex as={'carousel' as any} px={{ base: '20px' }} justify="center">
          <Carousel>
            {panels.map((item, i) => (
              <HighlightBoxPanel key={i} {...item} />
            ))}
          </Carousel>
        </Flex>
      ) : (
        <Flex
        // w="100%"
        // alignContent={"start"}
        >
          {panels.map((item, j) => (
            <HighlightBoxPanel key={j} {...item} />
          ))}
        </Flex>
      )}
    </Box>
  )
}

export const mockPanelObj: HighlightBoxPanelProps = {
  title: 'Música no bairro',
  subtitle: 'Alm. Tamandaré | Projeto Cultural',
  image: 'img/musica no bairro.png'
}

export const mockPanels: HighlightBoxPanelProps[] = [
  mockPanelObj,
  {
    ...mockPanelObj,
    title: 'Escolinha ADPB',
    subtitle: 'Lages, SC | Projeto Desportivo',
    image: 'img/escolinha adpb.png'
  },
  {
    ...mockPanelObj,
    title: 'APAE',
    subtitle: 'Projeto Social • Crianças e Adolescentes',
    image: 'img/musica no bairro.png'
  },
  {
    ...mockPanelObj,
    title: 'Fundo Municipal do Idoso',
    subtitle: 'Joinville, SC | Projeto Social • Idosos',
    image: 'img/musica no bairro.png'
  }
]
