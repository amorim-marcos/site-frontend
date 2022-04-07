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
    // bg="red"
  >
    <Flex
      // maxWidth="1536px"
      marginX="auto"
      position="relative"
      zIndex="base"
      overflowY={{ base: 'hidden', '2xl': 'visible' }}
      overflowX={{ base: 'hidden', '2xl': 'visible' }}
      // bg="red"
      backgroundImage="/assets/imgs/grafismos_fundo2.png"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column' }}
      // flex="1"
    >
      {/* TITULO */}
      <Flex
        maxWidth="1536px"
        marginX="auto"
        position="relative"
        zIndex="base"
        overflowY={{ base: 'hidden', '2xl': 'visible' }}
        overflowX={{ base: 'hidden', '2xl': 'visible' }}
        bg="white"
        backgroundImage="/assets/imgs/grafismos_fundo2.png"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column' }}
        flex="1"
        m={{
          base: '5% 2% 5% 2%',
          sm: '5% 5% 0% 5%',
          lg: '3% 5% 0% 5%',
          xl: '5% 5% 0% 5%',
          '2xl': '5% 0% 0% 4%'
        }}
        direction={{ base: 'column', sm: 'row', lg: 'row', xl: 'row' }}
      >
        {/* TITULO */}
        <Flex
          // bg="gray"
          flex="1"
          m={{
            base: '5% 2% 5% 2%',
            sm: '5% 5% 0% 5%',
            lg: '3% 5% 0% 5%',
            xl: '5% 5% 0% 5%',
            '2xl': '5% 0% 0% 0%'
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
              <SeeMore text="Veja todos os produtos" link="/products" />
            </Flex>

            {/* FIM FLEX INTERNO */}
          </Flex>
        </Flex>
      </Flex>

      {/* INICIO GALERIA PRODUTOS */}
      <Box 
        display={{ base: 'none', md: 'block' }}
        m={{
          base: '0% 0% 5% 0%',
          sm: '0% 0% 3% 0%',
          lg: '0% 0% 3% 0%',
          xl: '0% 5% 5% 5%',
          '2xl': '0% 0% 0% 3%'
        }}
      >
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
          xl: '0% 5% 5% 5%',
          '2xl': '0% 0% 5% 4%'
        }}
        direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
      >
        <Box
          flex="1"
          // bg="pink"
          m={{ base: '0% 0% 2% 0%', sm: '0% 0% 1% 0%', lg: '0%', xl: '0%' }}
        >
          <PatternInfo
            title="DESCUBRA"
            description="Onde Comprar"
            onClick={() => router.push('/onde-comprar')}
            icon={
              <EarthIcon
                width={{
                  base: '50px',
                  md: '62px',
                  lg: '70px',
                  xl: '80px'
                }}
                height={{
                  base: '50px',
                  md: '62px',
                  lg: '70px',
                  xl: '80px'
                }}
              />
            }
          />
        </Box>
        {/* FIM GALERIA PRODUTOS */}

        <Flex
          // bg="yellow"
          flex="1"
          m={{
            base: '0% 0% 5% 0%',
            sm: '0% 5% 2% 5%',
            lg: '0% 5% 5% 5%',
            xl: '0% 5% 5% 5%',
            '2xl': '0% 0% 5% 0%'
          }}
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
        >
          <Box
            flex="1"
            // bg="pink"
            m={{ base: '0% 0% 2% 0%', sm: '0% 0% 1% 0%', lg: '0%', xl: '0%' }}
          >
            <PatternInfo
              title="DESCUBRA"
              description="Onde Comprar"
              onClick={() => router.push('/onde-comprar')}
              icon={
                <EarthIcon
                  width={{
                    base: '50px',
                    md: '62px',
                    lg: '70px',
                    xl: '80px'
                  }}
                  height={{
                    base: '50px',
                    md: '62px',
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
    </Flex>
  )
}
