import { Box } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import { useTranslation } from 'react-i18next'
import Product from '../../components/Product'
import { ProductProps } from './hdf-berneck'
import { useRouter } from 'next/router'
import PageHead from '@components/PageHead'

export type MdfBerneckViewProps = {
  mdf: ProductProps
  mdf_plus: ProductProps
}

export default function MdfBerneckView({ mdf, mdf_plus }: MdfBerneckViewProps) {
  const productsViewLabels = useTranslation('productsView')
  const router = useRouter()

  return (
    <Box>
      <PageHead
        page_title={productsViewLabels.t('mdfBerneck.pageMetadata.pageTitle')}
        page_description={productsViewLabels.t(
          'mdfBerneck.pageMetadata.pageDescription'
        )}
      />
      <Pagebar
        paths={[
          {
            title: productsViewLabels.t('pagebar.products'),
            url: '/products'
          },
          {
            title: mdf.title,
            url: '/products/mdp-berneck'
          }
        ]}
      />
      <Product
        grafismProps={{
          grafism: 'type1'
        }}
        imgSrc="/img/mdf.png"
        imgWidth={{ base: '100vw', sm: '60vw', md: '50vw' }}
        imgMaxWidth="1151px"
        imgMarginTop={{
          base: '-30%',
          sm: '0px',
          '2xl': '-50px'
        }}
        imgMarginRight={{
          base: '-50px',
          sm: '-60px',
          md: '-60px',
          lg: '-80px',
          xl: '-100px',
          '2xl': '-200px'
        }}
        secondaryBackground="#F3E9DA"
        downloadAndLinks={{
          textColor: '#665E5A',
          hoverColor: '#D3A383',
          datasheetUrl: mdf.technical_sheet,
          whereBuy: true,
          qualityCertificate: true
        }}
        header={{
          title: mdf.title,
          headerBgColor: '#E0CBA5',
          subtitle: mdf.subTitle,
          description: mdf.subTitleDescription
        }}
        body={{
          description: mdf.description,
          usesAndApplications: mdf.usesAndApplications,
          finishes: mdf.finishes,
          dimensions: {
            thickness: mdf.dimensions.thickness,
            length: mdf.dimensions.length,
            width: mdf.dimensions.width
          },
          backgroundColor: '#FCFCFC',
          productWithBP: {
            btnColor: '#D8C39F',
            btnHoverColor: '#D0B588',
            backgroundColor: '#FBF6F0',
            imgSrc: '/img/mdf_bp.png',
            type: 'centralizedBtn',
            title: productsViewLabels.t('mdfBerneck.productWithBP.title'),
            description: productsViewLabels.t(
              'mdfBerneck.productWithBP.description'
            ),
            btnText: productsViewLabels.t('mdfBerneck.productWithBP.button'),
            grafismColor: '#D8C39F',
            href: `/${router.locale}/products/bp-berneck/catalog?panel=mdf`
          }
        }}
      />

      <Product
        grafismProps={{
          grafism: 'type2'
        }}
        imgSrc="/img/mdf_plus.png"
        imgWidth={{ base: '50vw', sm: '30vw', md: '40vw' }}
        imgMaxWidth="851px"
        imgMarginTop={{
          base: '-20%',
          sm: '17%',
          md: '11px',
          lg: '12px',
          xl: '13px',
          '2xl': '0px'
        }}
        imgMarginRight={{
          base: '-10px',
          sm: '-20px',
          md: '-20px',
          lg: '-25px',
          xl: '-30px',
          '2xl': '-36px'
        }}
        secondaryBackground="#F5F6F4"
        plusProduct
        header={{
          plusIndicator: true,
          title: mdf_plus.title,
          headerBgColor: '#ACCC9F',
          subtitle: mdf_plus.subTitle,
          description: mdf_plus.subTitleDescription
        }}
        body={{
          moreTechnologyQualityProtection: mdf_plus.description,
          usesAndApplications: mdf_plus.usesAndApplications,
          finishes: mdf_plus.finishes,
          dimensions: {
            thickness: mdf_plus.dimensions.thickness,
            length: mdf_plus.dimensions.length,
            width: mdf_plus.dimensions.width
          },
          backgroundColor: '#E8E8E8',
          productWithBP: {
            btnColor: 'green.400',
            btnHoverColor: '#96BC87',
            title: productsViewLabels.t('mdfBerneck.productWithBpPlus.title'),
            description: productsViewLabels.t(
              'mdfBerneck.productWithBpPlus.description'
            ),
            btnText: productsViewLabels.t(
              'mdfBerneck.productWithBpPlus.button'
            ),
            imgSrc: '/img/mdf_plus_bp.png',
            href: `/${router.locale}/products/bp-berneck/catalog?panel=mdf plus`
          }
        }}
        downloadAndLinks={{
          textColor: '#376B5C',
          hoverColor: '#59993F',
          datasheetUrl: mdf_plus.technical_sheet,
          qualityCertificate: false
        }}
      />
    </Box>
  )
}
