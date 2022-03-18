import { Box, Text, Flex } from '@chakra-ui/react'

import CompletedTitle from '@components/CompletedTitle'
import ArrowIcon from '@components/Icons/ArrowIcon'
import { Contactusicon } from '@components/Icons/Contactusicon/Contactusicon'
import EarthIcon from '@components/Icons/EarthIcon'
import PatternInfo from '@components/PatternInfo'
import ProductsGallery from '@components/ProductsGallery'
import { ProductsGalleryProps } from '@components/ProductsGallery/ProductsGallery'
import SeeMore from '@components/SeeMore'
import { useRouter } from 'next/router'

export type SectionsProductsProps = ProductsGalleryProps

export const SectionProducts = ({ products }: SectionsProductsProps) => {
  const router = useRouter()
  return (
    <Flex
      maxWidth="1920px"
      marginX="auto"
      position="relative"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      bg="white"
      backgroundImage="/assets/imgs/grafismos_fundo2.png"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column' }}
    >
      {/* TITULO */}
      <Flex
        //bg="gray"
        flex="1"
        m={{
          base: '5% 2% 0% 2%',
          sm: '5% 5% 2% 5%',
          lg: '5% 5% 2% 5%',
          xl: '5% 5% 2% 5%'
        }}
        direction={{ base: 'column', sm: 'row', lg: 'row', xl: 'row' }}
      >
        <CompletedTitle
          titleString="Nossos Produtos"
          textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
          alignSelf={{
            base: 'flex-start',
            sm: 'flex-start',
            lg: 'flex-start',
            xl: 'flex-start'
          }}
        />

        {/* FRASE */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          flex="1"
          // bg="tomato"
          alignItems={'center'}
          justifyContent={'flex-end'}
        >
          {/* INICIO FLEX INTERNO */}
          <Flex
            //bg="black"
            // flex="20"
            direction={{
              base: 'column',
              sm: 'column',
              lg: 'column',
              xl: 'column'
            }}
            alignItems={'flex-end'}
          >
           <SeeMore
            text = "Veja todos os produtos"
            link = "/products"
           />
          </Flex>
          
          {/* FIM FLEX INTERNO */}
        </Flex>
      </Flex>

      {/* INICIO GALERIA PRODUTOS */}
      <Box display={{ base: 'none', md: 'block' }}>
        <ProductsGallery numberEvidence={3} products={products} />
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <ProductsGallery numberEvidence={1} products={products} />
      </Box>
      {/* FIM GALERIA PRODUTOS */}
      <Flex
        // bg="yellow"
        flex="1"
        m={{
          base: '0% 0% 5% 0%',
          sm: '0% 5% 2% 5%',
          lg: '0% 5% 5% 5%',
          xl: '0% 5% 5% 5%'
        }}
        direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
      >
        <Box
          flex="1"
          // bg="pink"
          m={{ base: '0% 0% 2% 0%', sm: '0% 0% 5% 0%', lg: '0%', xl: '0%' }}
        >
          <PatternInfo
            title="DESCUBRA"
            description="Onde Comprar"
            onClick={() => router.push('/onde-comprar')}
            icon={
              <EarthIcon
                width={{
                  base: '60px',
                  xs: '30px',
                  sm: '58px',
                  lg: '70px',
                  xl: '80px'
                }}
                height={{
                  base: '60px',
                  xs: '30px',
                  sm: '58px',
                  lg: '70px',
                  xl: '80px'
                }}
              />
            }
          />
        </Box>
        <Box
          flex="1"
          // bg="pink"
          m={{
            base: '0% 0% 2% 0%',
            sm: '0% 0% 5% 0%',
            lg: '0% 0% 0% 3%',
            xl: '0% 0% 0% 4%'
          }}
        >
          <PatternInfo
            title="ENTRE EM CONTATO"
            description="Fale Conosco"
            onClick={() => router.push('/contact')}
            icon={
              <Contactusicon
                width={{
                  base: '60px',
                  xs: '30px',
                  sm: '58px',
                  lg: '70px',
                  xl: '80px'
                }}
                height={{
                  base: '60px',
                  xs: '30px',
                  sm: '58px',
                  lg: '70px',
                  xl: '80px'
                }}
              />
            }
          />
        </Box>
      </Flex>
    </Flex>
  )
}
