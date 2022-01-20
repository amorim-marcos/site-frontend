import PlusPanelsPresentation from '@components/PlusPanelsPresentation'
import PlusTestInfo from '@components/PlusTestInfo'
import Product from '../../components/Product'

export default function PlusBerneckView() {
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
          title: 'Painéis PLUS BERNECK®',
          headerBgColor: '#ACCC9F',
          subtitle: 'É Plus porque tem mais proteção à umidade',
          description:
            'Os painéis da Linha PLUS BERNECK® são indicados para fabricação de móveis a serem aplicados em ambientes como cozinhas, banheiros e lavanderias.'
        }}
        body={{
          moreTechnologyQualityProtection:
            'Há quase 70 anos, a BERNECK® é a marca da madeira e das grandes soluções para seus projetos. Agora ainda mais, com toda a qualidade e maior resistência que a linha PLUS BERNECK® oferece.',
          qualityStandards:
            'Os produtos da linha PLUS BERNECK® seguem as normas ABNT NBR 14.810 e ABNT NBR 15.316 (V313) e registram indicadores superiores aos estabelecidos pela normativa.',
          backgroundColor: '#FFF',
          abntInfo: '• ABNT NBR 15.316 • ABNT NBR 14.810'
        }}
      />

      <PlusTestInfo />
      <PlusPanelsPresentation />
    </div>
  )
}
