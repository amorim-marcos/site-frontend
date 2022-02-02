import { Flex, Text, Box, Image } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import Carousel from '@components/Carousel'
  
export type HomeProps = {
    name: string
    imageSrc: string
  }

export default function Home(props:HomeProps) {
  return (
    <Box 
        maxWidth="1920px" 
        marginX="auto" 
        bg="white.100"
    >
        {/* INICIO BANNER CAROUSEL */}
        <Flex
            maxWidth="1920px"
            marginX="auto"
            // alignItems="center"
            // justifyContent="center"
            position="relative"
            zIndex="base"
            overflowY="hidden"
            overflowX="hidden"
            bg="white.100"
          >
              
              <Carousel
                carouselType = "brown"
              >
                <PanelImage
                    imageSrc = "../img/banner_bp.png"
                />
                <PanelImage
                    imageSrc = "../img/Curitibanos.png"
                />
                <PanelImage
                    imageSrc = "../img/mdf_plus_bp.png"
                />
              </Carousel>
        </Flex>
        {/* FIM BANNER CAROUSEL */}

    </Box>
    )
}

const PanelImage = (props: { imageSrc: string }) => (
    <Flex h="100%" justifyContent="center" alignItems="center" pos="relative">
      <Image
        h="100%"
        src={props.imageSrc}
        cursor={{ md: 'pointer' }}
        objectFit="cover"
        userSelect="none"
        draggable="false"
      />
    </Flex>
  )