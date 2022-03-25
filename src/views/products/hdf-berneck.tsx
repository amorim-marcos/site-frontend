import Pagebar from '@components/Pagebar'
import Product from '../../components/Product'

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
  return (
    <div>
      <Pagebar
        paths={[
          {
            title: 'Produtos',
            url: '/products'
          },
          {
            title: 'HDF BERNECK®',
            url: 'products/hdf-berneck'
          }
        ]}
      />
      <Product
        imgSrc="/img/hdf.png"
        grafismProps={{
          grafism: 'type1'
        }}
        imgWidth={{ base: '130vw', sm: '74vw' }}
        imgMarginTop={{
          base: '-30%',
          sm: '52px',
          md: '69px',
          lg: '86px',
          xl: '104px',
          '2xl': '130px'
        }}
        imgMarginRight={{
          base: '-133px',
          sm: '-180px',
          md: '-240px',
          lg: '-300px',
          xl: '-360px',
          '2xl': '-450px'
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
        imgWidth={{ base: '130vw', sm: '74vw' }}
        grafismProps={{
          grafism: 'type2'
        }}
        imgMarginTop={{
          base: '-30%',
          sm: '128px',
          md: '170px',
          lg: '213px',
          xl: '256px',
          '2xl': '320px'
        }}
        imgMarginRight={{
          base: '-150px',
          sm: '-204px',
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
            title: 'HDF PLUS BERNECK® com BP',
            description:
              'Inove nos projetos com os acabamentos BP em HDF PLUS, laminados melamínicos com a proteção do PLUS BERNECK .',
            btnText: 'Conheça todos os padrões BP BERNECK em HDF PLUS',
            imgSrc: '/img/hdf_plus_bp.png',
            href: '/products/bp-berneck/catalog?panel=HDF PLUS'
          }
        }}
      />
    </div>
  )
}
