import { Box } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import Product from '../../components/Product'
import { ProductProps } from './hdf-berneck'

export type MdfBerneckViewProps = {
  mdf: ProductProps
  mdf_plus: ProductProps
}

export default function MdfBerneckView({ mdf, mdf_plus }: MdfBerneckViewProps) {
  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: 'Produtos',
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
        imgWidth={{ base: '100vw', sm: '60vw' }}
        imgMaxWidth="1151px"
        imgMarginTop={{
          base: '-30%',
          sm: '0px'
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
            backgroundColor: '#FBF6F0',
            imgSrc: '/img/mdf_bp.png',
            type: 'centralizedBtn',
            title: 'MDF BERNECK® com BP',
            description:
              'A combinação das qualidades do MDF com a variedade de acabamentos do BP fornecem inúmeras possibilidades de utilização. Encontre a melhor para a sua aplicação.',
            btnText: 'Conheça todos os padrões BP BERNECK em MDF',
            btnColor: '#D8C39F',
            grafismColor: '#D8C39F'
          }
        }}
      />

      <Product
        grafismProps={{
          grafism: 'type2'
        }}
        imgSrc="/img/mdf_plus.png"
        imgWidth={{ base: '100vw', sm: '50vw' }}
        imgMaxWidth="1051px"
        imgMarginTop={{
          base: '-30%',
          sm: '10px',
          md: '11px',
          lg: '12px',
          xl: '13px',
          '2xl': '14px'
        }}
        imgMarginRight={{
          base: '-10px',
          sm: '-15px',
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
            title: 'MDF PLUS BERNECK® com BP',
            description:
              'Inove nos projetos com os acabamentos BP em MDF PLUS, laminados melamínicos com a proteção do PLUS BERNECK .',
            btnText: 'Conheça todos os padrões BP BERNECK em MDF PLUS',
            imgSrc: '/img/mdf_plus_bp.png'
          }
        }}
        downloadAndLinks={{
          qualityCertificate: false
        }}
      />
    </Box>
  )
}
