import Pagebar from '@components/Pagebar'
import { useTranslation } from 'react-i18next'
import Product from '../../components/Product'
import { useRouter } from 'next/router'
import PageHead from '@components/PageHead'
import useRouterCustom from 'hooks/useRouterCustom'
import { getTranslatedFilterNames } from 'views/BPCatalog/BPCatalog'
import { LocaleOptions } from 'types/utils'

export interface ProductProps {
  title: string
  subTitle: string
  description: string
  subTitleDescription: string
  finishes: string[]
  usesAndApplications: string
  dimensions: {
    thickness: string
    length: string
    width: string
  }
  technical_sheet?: string
}

export type HdfBerneckViewProps = {
  hdf: ProductProps
  hdf_plus: ProductProps
}

export default function HdfBerneckView({ hdf, hdf_plus }: HdfBerneckViewProps) {
  const productsViewLabels = useTranslation('productsView')
  const router = useRouter()
  const { getTranslatedPath } = useRouterCustom()

  const translateCatalogPathName = getTranslatedPath(
    '/products/bp-berneck/catalog'
  )

  const translatedCatalogFilterNames = getTranslatedFilterNames(
    router.locale as keyof typeof LocaleOptions
  )

  return (
    <div>
      <PageHead
        page_title={productsViewLabels.t('hdfBerneck.pageMetadata.pageTitle')}
        page_description={productsViewLabels.t(
          'hdfBerneck.pageMetadata.pageDescription'
        )}
      />
      <Pagebar
        paths={[
          {
            title: productsViewLabels.t('pagebar.products'),
            url: '/products'
          },
          {
            title: productsViewLabels.t('hdfBerneck.title'),
            url: `/${router.locale}products/hdf-berneck`
          }
        ]}
      />

      <Product
        imgSrc="/img/hdf.png"
        grafismProps={{
          grafism: 'type1'
        }}
        imgWidth={{ base: '130vw', sm: '70vw', md: '80vw' }}
        imgMarginTop={{
          base: '-30%',
          sm: '52px',
          md: '50px',
          lg: '50px',
          xl: '104px',
          '2xl': '0'
        }}
        imgMarginRight={{
          base: '-133px',
          sm: '-180px',
          md: '-240px',
          lg: '-300px',
          xl: '-460px'
          // '2xl': '-0px'
        }}
        secondaryBackground="#F3E9DA"
        downloadAndLinks={{
          textColor: '#665E5A',
          hoverColor: '#D3A383',
          qualityCertificate: true,
          datasheetUrl: hdf.technical_sheet,
          whereBuy: true
        }}
        header={{
          title: hdf.title,
          subtitle: hdf.subTitle,
          headerBgColor: '#E0CBA5',
          description: hdf.subTitleDescription
        }}
        body={{
          description: hdf.description,
          usesAndApplications: hdf.usesAndApplications,
          finishes: hdf.finishes,
          dimensions: {
            thickness: hdf.dimensions.thickness,
            length: hdf.dimensions.length,
            width: hdf.dimensions.width
          },
          backgroundColor: '#FCFCFC'
        }}
      />

      <Product
        imgSrc="/img/hdf_plus.png"
        imgWidth={{ base: '80vw', sm: '60vw', md: '70vw' }}
        grafismProps={{
          grafism: 'type2'
        }}
        imgMarginTop={{
          base: '-20%',
          sm: '100px',
          lg: '50px',
          xl: '15px',
          '2xl': '10px'
        }}
        imgMarginRight={{
          base: '-100px',
          sm: '-150px',
          md: '-272px',
          lg: '-340px',
          xl: '-408px',
          '2xl': '-510'
        }}
        downloadAndLinks={{
          textColor: '#376B5C',
          hoverColor: '#59993F',
          qualityCertificate: false,
          datasheetUrl: hdf_plus.technical_sheet
        }}
        secondaryBackground="#F5F6F4"
        plusProduct
        header={{
          plusIndicator: true,
          title: hdf_plus.title,
          headerBgColor: '#ACCC9F',
          subtitle: hdf_plus.subTitle,
          description: hdf_plus.subTitleDescription
        }}
        body={{
          backgroundColor: '#E8E8E8',
          moreTechnologyQualityProtection: hdf_plus.description,
          usesAndApplications: hdf_plus.usesAndApplications,
          finishes: hdf_plus.finishes,
          dimensions: {
            thickness: hdf_plus.dimensions.thickness,
            length: hdf_plus.dimensions.length,
            width: hdf_plus.dimensions.width
          },
          productWithBP: {
            btnColor: 'green.400',
            btnHoverColor: '#96BC87',
            title: productsViewLabels.t('hdfBerneck.productWithBP.title'),
            description: productsViewLabels.t(
              'hdfBerneck.productWithBP.description'
            ),
            btnText: productsViewLabels.t('hdfBerneck.productWithBP.button'),
            imgSrc: '/img/hdf_plus_bp.png',
            href: `/${router.locale}${translateCatalogPathName}?${translatedCatalogFilterNames['panels']}=hdf+plus`
          }
        }}
      />
    </div>
  )
}
