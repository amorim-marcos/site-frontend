import { useRouter } from 'next/router'

import { Box, GridItem, Grid, Flex } from '@chakra-ui/react'

import useMobile from 'hooks/useMobile'

import Pagebar from '@components/Pagebar'
import CompletedTitle from '@components/CompletedTitle'
import BannerProducts from '@components/BannerProducts'
import { useTranslation } from 'react-i18next'

export const Products = () => {
  const { isMobile, width } = useMobile(1024)
  const router = useRouter()

  const productsViewTranslation = useTranslation('productsView')
  const productsTranslation = useTranslation('products')

  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: productsViewTranslation.t('ourProducts'),
            url: 'products'
          }
        ]}
      />

      {/* INICIO TITULO PRODUTOS */}
      <Flex
        maxWidth="1536px"
        marginX="auto"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        // bg="red"
      >
        <Flex
          // bg='gray'
          direction={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row'
          }}
          margin={{
            base: '3% 0% 0% 3%',
            sm: '3% 0% 0% 3%',
            lg: '3% 0% 0% 3%',
            xl: '3% 0% 0% 3%'
          }}
        >
          <CompletedTitle
            titleString={productsViewTranslation.t('ourProducts')}
            textAlign={{
              base: 'left',
              sm: 'left',
              lg: 'left',
              xl: 'left'
            }}
            alignSelf={{
              base: 'flex-start',
              sm: 'flex-start',
              lg: 'flex-start',
              xl: 'flex-start'
            }}
          />
        </Flex>
      </Flex>
      {/* FIM TITULO PRODUTOS */}

      {/* INICIO BANNERS PRODUTOS */}
      {/* BP | MDP | MDF | HDF | PLUS | PNUS | TECA */}
      <Flex
        maxWidth="1536px"
        marginX="auto"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        // bg="blue"
      >
        <Grid
          h={{
            base: '3900px',
            sm: '1900px',
            lg: '1300px',
            xl: '1500px',
            '2xl': '1885px'
          }}
          w={{ base: '90%', sm: '93%', lg: '93%', xl: '93%' }}
          margin={{ base: '5%', sm: '3% 3%', lg: '3% 3%', xl: '3% 3%' }}
          templateRows={{
            base: 'repeat(7, 1fr)',
            sm: 'repeat(4, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)'
          }}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)'
          }}
          gap={{ base: '5', sm: '4', lg: '8', xl: '10' }}
        >
          <GridItem colSpan={{ base: '1', sm: '2', lg: '2', xl: '2' } as any}>
            <BannerProducts
              title={productsTranslation.t('bpBerneck.title')}
              titleColor="white"
              subtitle={productsTranslation.t('bpBerneck.description')}
              subtitleColor="brown.200"
              bgColor="brown.300"
              srcImg="/img/produto_bp_banner.png"
              onClick={() => router.push('/products/bp-berneck')}
              bannerSize={{ base: '30px', sm: '20px', lg: '30px', xl: '35 px' }}
              sizeType={
                !!width && width <= 568 ? 'square' : 'rectangle-horizontal'
              }
            />
          </GridItem>

          <GridItem>
            <BannerProducts
              title={productsTranslation.t('mdpBerneck.title')}
              titleColor="gray.400"
              subtitle={productsTranslation.t('mdpBerneck.description')}
              subtitleColor="gray.400"
              bgColor="brown.200"
              srcImg="/img/mdp.png"
              onClick={() => router.push('/products/mdp-berneck')}
              bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
            />
          </GridItem>

          <GridItem>
            <BannerProducts
              title={productsTranslation.t('mdfBerneck.title')}
              titleColor="gray.400"
              subtitle={productsTranslation.t('mdfBerneck.description')}
              subtitleColor="gray.400"
              bgColor="brown.200"
              srcImg="/img/mdf.png"
              onClick={() => router.push('/products/mdf-berneck')}
              bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
            />
          </GridItem>

          <GridItem>
            <BannerProducts
              title={productsTranslation.t('hdfBerneck.title')}
              titleColor="gray.400"
              subtitle={productsTranslation.t('hdfBerneck.description')}
              subtitleColor="gray.400"
              bgColor="brown.200"
              srcImg="/img/hdf.png"
              onClick={() => router.push('/products/hdf-berneck')}
              bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
            />
          </GridItem>

          <GridItem>
            <BannerProducts
              title={productsTranslation.t('plusBerneck.title')}
              titleColor="white"
              subtitle={productsTranslation.t('plusBerneck.description')}
              subtitleColor="brown.350"
              bgColor="green.400"
              srcImg="/img/plus.png"
              onClick={() => router.push('/products/plus-berneck')}
              bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
            />
          </GridItem>

          <GridItem colSpan={{ base: '1', sm: '1', lg: '2', xl: '2' } as any}>
            <BannerProducts
              title={productsTranslation.t('berneckPinus.title')}
              titleColor="green.900"
              subtitle={productsTranslation.t('berneckPinus.description')}
              subtitleColor="gray.400"
              bgColor="green.300"
              srcImg="/img/pinus.png"
              onClick={() => router.push('/products/berneck-pinus')}
              bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
              sizeType={isMobile ? 'square' : 'rectangle-horizontal'}
            />
          </GridItem>

          <GridItem>
            <BannerProducts
              title={productsTranslation.t('berneckTeca.title')}
              titleColor="gray.400"
              subtitle={productsTranslation.t('berneckTeca.description')}
              subtitleColor="gray.400"
              bgColor="brown.250"
              srcImg="/img/teca.png"
              onClick={() => router.push('/products/berneck-teca')}
              bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
            />
          </GridItem>
        </Grid>
      </Flex>
      {/* FIM BANNERS PRODUTOS */}
    </Box>
  )
}
