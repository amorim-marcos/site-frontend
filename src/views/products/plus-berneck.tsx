import PlusPanelsPresentation from '@components/PlusPanelsPresentation'
import PlusTestInfo from '@components/PlusTestInfo'
import Product from '../../components/Product'
import { useRouter } from 'next/router'

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
  return (
    <div>
      <Product
        grafismProps={{
          grafism: 'type1'
        }}
        imgSrc="/img/plus.png"
        imgWidth={{ base: '120vw', sm: '80vw' }}
        imgMaxWidth="1415px"
        imgMarginTop={{
          base: '-30%',
          sm: '20px',
          md: '17px',
          lg: '40px',
          xl: '40px',
          '2xl': '40px'
        }}
        imgMarginRight={{
          base: '-150px',
          sm: '-220px',
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
          extraInfoTitle="Muito importante"
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
      <PlusPanelsPresentation
        title="Conheça os painéis PLUS BERNECK®"
        products={{
          first: {
            title: 'HDF PLUS BERNECK®',
            description:
              'Painel de Fibra de Alta Densidade com Resistência Extra à Umidade',
            imageProps: {
              src: '/img/hdf_plus.png',
              w: {
                base: '600px',
                sm: '320px',
                md: '426px',
                lg: '533px',
                xl: '640px',
                '2xl': '800px'
              },
              maxWidth: '800px',
              top: {
                base: '-3%',
                sm: '0px',
                md: '0px',
                lg: '0px',
                xl: '0px',
                '2xl': '-3%'
              },
              right: {
                base: '-250px',
                sm: '-150px',
                md: '-200px',
                lg: '-250px',
                xl: '-290px',
                '2xl': '-350px'
              },
              _hover: {
                top: '-1.5%',
                right: '-330px'
              },
              onClick: () => router.push('/products/hdf-berneck')
            }
          },
          second: {
            title: 'MDF PLUS BERNECK®',
            description:
              'Painel de Fibra de Média Densidade com Resistência Extra à Umidade',
            imageProps: {
              src: '/img/mdf_plus_small.png',
              w: {
                base: '400px',
                sm: '220px',
                md: '293px',
                lg: '366px',
                xl: '440px',
                '2xl': '550px'
              },
              maxWidth: '550px',
              top: {
                base: '-100px',
                sm: '-40px',
                md: '-60px',
                lg: '-80px',
                xl: '-110px',
                '2xl': '-120px'
              },
              right: {
                base: '0px',
                sm: '0px',
                md: '0px',
                lg: '0px',
                xl: '-40px',
                '2xl': '-50px'
              },
              _hover: {
                top: '-100px',
                right: '-30px'
              },
              onClick: () => router.push('/products/mdf-berneck')
            }
          },
          third: {
            title: 'MDP PLUS BERNECK®',
            description:
              'Painel de Partículas de Média Densidade com Resistência Extra à Umidade',
            imageProps: {
              src: '/img/mdp_plus.png',
              w: {
                base: '400px',
                sm: '220px',
                md: '293px',
                lg: '366px',
                xl: '440px',
                '2xl': '550px'
              },
              maxWidth: '100vw',
              top: {
                base: '0px',
                sm: '1px',
                xl: '-40px',
                '2xl': '-40px'
              },
              right: {
                base: '-50px',
                sm: '0px',
                xl: '-65px',
                '2xl': '-50px'
              },
              _hover: {
                top: '-20px',
                right: '-1px'
              },
              onClick: () => router.push('/products/mdp-berneck')
            }
          }
        }}
      />
    </div>
  )
}
