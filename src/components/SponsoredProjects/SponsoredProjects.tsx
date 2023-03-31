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
            {panels &&
              panels.map((item, i) => <HighlightBoxPanel key={i} {...item} />)}
          </Carousel>
        </Flex>
      ) : (
        <Flex
        // w="100%"
        // alignContent={"start"}
        >
          {panels &&
            panels.map((item, j) => <HighlightBoxPanel key={j} {...item} />)}
        </Flex>
      )}
    </Box>
  )
}

export const mockPanelObj: HighlightBoxPanelProps = {
  title: 'Música no bairro',
  subtitle_key: 'Alm. Tamandaré | Projeto Cultural',
  image: 'img/musica no bairro.png'
}

export const mockPanels: HighlightBoxPanelProps[] = [
  {
    title: 'HANDLAGES',
    subtitle_key: 'socialProjects.handlagesSubtitle',
    image: '/img/patrocinados/HANDLAGES.jpg'
  },
  {
    title: 'Gran Circo Stopim',
    subtitle_key: 'socialProjects.granCircoStopimSubtitle',
    image: 'img/patrocinados/Gran-Circo-Stopim.jpg'
  },
  {
    title: 'Herdeiros da Terra',
    subtitle_key: 'socialProjects.herdeirosDaTerraSubtitle',
    image: 'img/patrocinados/Herdeiros-da-Terra.jpg'
  },
  {
    title: 'Fundo Municipal do Idoso',
    subtitle_key: 'socialProjects.fundoMunicipalDoIdosoSubtitle',
    image: 'img/patrocinados/fundo_municipal_do_idoso.png'
  }
]
