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
  {
    title: 'Música no Bairro',
    subtitle: 'Alm. Tamandaré, PR | Projeto Cultural',
    image: '/img/patrocinados/musica_bairro.png'
  },
  {
    title: 'Escolinha ADPB',
    subtitle: 'Lages, SC | Projeto Desportivo ',
    image: 'img/patrocinados/escolinha_adpb.png'
  },
  {
    title: 'APAE',
    subtitle: ' Brasnorte, MT | Projeto Social',
    image: 'img/patrocinados/apae.png'
  },
  {
    title: 'Fundo Municipal do Idoso',
    subtitle: 'Joinville, SC | Projeto Social • Idosos',
    image: 'img/patrocinados/fundo_municipal_do_idoso.png'
  }
]
