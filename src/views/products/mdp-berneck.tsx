import { Box } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import Product from '../../components/Product'
import { ProductProps } from './hdf-berneck'

export type MdpBerneckViewProps = {
  mdp: ProductProps
  mdp_plus: ProductProps
}

export default function Mdp({ mdp, mdp_plus }: MdpBerneckViewProps) {
  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: 'Produtos',
            url: '/products'
          },
          {
            title: mdp.title,
            url: '/products/mdp-berneck'
          }
        ]}
      />
      <Product
        grafismProps={{
          grafism: 'type1'
        }}
        imgSrc="/img/mdp.png"
        imgWidth={{ base: '100vw', sm: '60vw' }}
        imgMaxWidth="1151px"
        imgMarginTop={{
          base: '-30%',
          sm: '0px'
        }}
        imgMarginRight="0px"
        secondaryBackground="#F3E9DA"
        downloadAndLinks={{
          datasheetUrl: mdp.technical_sheet,
          whereBuy: true,
          qualityCertificate: true
        }}
        header={{
          title: mdp.title,
          headerBgColor: '#E0CBA5',
          subtitle: mdp.subTitle,
          description: mdp.subTitleDescription
        }}
        body={{
          description: mdp.description,
          usesAndApplications: mdp.usesAndApplications,
          finishes: mdp.finishes,
          dimensions: mdp.dimensions,
          backgroundColor: '#FCFCFC',
          productWithBP: {
            backgroundColor: '#FBF6F0',
            btnColor: '#D8C39F',
            btnText: 'Conheça todos os padrões BP BERNECK em MDP',
            imgSrc: '/img/mdp_bp.png',
            type: 'centralizedBtn',
            description:
              'A combinação das qualidades do MDP com a variedade de acabamentos do BP fornecem inúmeras possibilidades de utilização. Encontre a melhor para a sua aplicação.',
            title: 'MDP BERNECK® com BP'
          }
        }}
      />

      <Product
        grafismProps={{
          grafism: 'type2'
        }}
        imgSrc="/img/mdp_plus.png"
        imgWidth={{ base: '100vw', sm: '53vw' }}
        imgMaxWidth="1017px"
        imgMarginTop={{
          base: '-30%',
          sm: '12%',
          lg: '5%'
        }}
        imgMarginRight="0px"
        secondaryBackground="#F5F6F4"
        plusProduct
        downloadAndLinks={{
          qualityCertificate: false,
          datasheetUrl: mdp_plus.technical_sheet
        }}
        header={{
          plusIndicator: true,
          title: mdp_plus.title,
          headerBgColor: '#ACCC9F',
          subtitle: mdp_plus.subTitle,
          description: mdp_plus.subTitleDescription
        }}
        body={{
          moreTechnologyQualityProtection: mdp_plus.description,
          usesAndApplications: mdp_plus.usesAndApplications,
          finishes: mdp_plus.finishes,
          dimensions: mdp_plus.dimensions,
          backgroundColor: '#E8E8E8',
          productWithBP: {
            title: 'MDP PLUS BERNECK® com BP',
            description:
              'Inove nos projetos com os acabamentos BP em MDP PLUS, laminados melamínicos com a proteção do PLUS BERNECK .',
            btnText: 'Conheça todos os padrões BP BERNECK em MDP PLUS',
            imgSrc: '/img/mdp_plus_bp.png'
          }
        }}
      />
    </Box>
  )
}
