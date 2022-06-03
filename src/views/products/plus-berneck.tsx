import PlusTestInfo from '@components/PlusTestInfo'
import Product from '../../components/Product'
import { useRouter } from 'next/router'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import BannerProducts from '@components/BannerProducts'
import { useTranslation } from 'react-i18next'

export type PlusBerneckViewProps = {
  title: string
  subtitle: string
  subtitleDescription: string
  description: string
  qualityStandards: string
  abnt: string
  section2Title: string
  section2Text: string
  testPoints: string[]
  importantPoints: string[]
  body_proof: {
    absorbed_water: number
    absorption: number
    id: number
    item: string
    swelling: number
    thickness_increase: number
  }[]
}

export default function PlusBerneckView(props: PlusBerneckViewProps) {
  const router = useRouter()

  const productsViewLabels = useTranslation('productsView')

  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: productsViewLabels.t('pagebar.products'),
            url: '/products'
          },
          {
            title: props.title,
            url: '/products/plus-berneck'
          }
        ]}
      />
      <Product
        grafismProps={{
          grafism: 'type1'
        }}
        imgSrc="/img/plus.png"
        imgWidth={{ base: '120vw', sm: '60vw', md: '75vw' }}
        imgMaxWidth="1415px"
        imgMarginTop={{
          base: '-30%',
          sm: '60px',
          md: '17px',
          lg: '40px',
          xl: '40px',
          '2xl': '40px'
        }}
        imgMarginRight={{
          base: '-150px',
          sm: '-180px',
          md: '-280px',
          lg: '-370px',
          xl: '-420px',
          '2xl': '-524px'
        }}
        secondaryBackground="#F5F6F4"
        plusProduct
        header={{
          title: props.title,
          headerBgColor: '#ACCC9F',
          subtitle: props.subtitle,
          description: props.subtitleDescription
        }}
        body={{
          moreTechnologyQualityProtection: props.description,
          qualityStandards: props.qualityStandards,
          backgroundColor: '#FFF',
          abntInfo: props.abnt
        }}
      />

      {props.testPoints.length >= 3 && (
        <PlusTestInfo
          title={props.section2Title}
          description={props.section2Text}
          testSteps={{
            first: props.testPoints[0],
            second: props.testPoints[1],
            third: props.testPoints[2]
          }}
          extraInfoTitle={productsViewLabels.t('plusBerneck.extraInfoTitle')}
          extraInfoBody={props.importantPoints}
          tableInfo={{
            rows: props.body_proof.map((item) => {
              return {
                column1: item.item.toString(),
                column2: item.absorbed_water.toString() + 'g',
                column3: item.absorption.toString(),
                column4: item.thickness_increase.toString(),
                column5: item.swelling.toString(),
                plus: item.item.includes('plus') || item.item.includes('PLUS')
              }
            })
          }}
        />
      )}

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
            base: '900px',
            sm: '2000px',
            lg: '400px',
            xl: '500px',
            '2xl': '600px'
          }}
          w={{ base: '90%', sm: '93%', lg: '93%', xl: '93%' }}
          margin={{ base: '5%', sm: '3% 3%', lg: '3% 3%', xl: '3% 3%' }}
          templateRows={{
            base: 'repeat(3, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(1, 1fr)'
          }}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)'
          }}
          gap={{ base: '5', sm: '4', lg: '8', xl: '10' }}
        >
          <GridItem>
            <BannerProducts
              title={productsViewLabels.t(
                'plusBerneck.plusProducts.hdfPlus.title'
              )}
              subtitle={productsViewLabels.t(
                'plusBerneck.plusProducts.hdfPlus.subtitle'
              )}
              titleColor="white"
              subtitleColor="brown.350"
              bgColor="green.400"
              srcImg="/img/hdf_plus.png"
              onClick={() => router.push('/products/hdf-berneck#plus')}
              bannerSize={{ base: '15%', sm: '20px', lg: '30px', xl: '35px' }}
            />
          </GridItem>

          <GridItem>
            <BannerProducts
              title={productsViewLabels.t(
                'plusBerneck.plusProducts.mdfPlus.title'
              )}
              subtitle={productsViewLabels.t(
                'plusBerneck.plusProducts.mdfPlus.subtitle'
              )}
              titleColor="white"
              subtitleColor="brown.350"
              bgColor="green.400"
              srcImg="/img/mdf_plus_small.png"
              onClick={() => router.push('/products/mdf-berneck#plus')}
              bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
            />
          </GridItem>

          <GridItem>
            <BannerProducts
              title={productsViewLabels.t(
                'plusBerneck.plusProducts.mdpPlus.title'
              )}
              subtitle={productsViewLabels.t(
                'plusBerneck.plusProducts.mdpPlus.subtitle'
              )}
              titleColor="white"
              subtitleColor="brown.350"
              bgColor="green.400"
              srcImg="/img/mdp_plus.png"
              onClick={() => router.push('/products/mdp-berneck#plus')}
              bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
            />
          </GridItem>
        </Grid>
      </Flex>
      {/* FIM BANNERS PRODUTOS */}
    </Box>
  )
}
