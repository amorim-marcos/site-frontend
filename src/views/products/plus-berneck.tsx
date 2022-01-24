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

      <PlusTestInfo
        title={'Fizemos o teste. Está comprovado e aprovado.'}
        description="Para ilustrar melhor as características dos produtos PLUS BERNECK®,
        fizemos um teste com o objetivo de avaliar como os painéis reagem à
        absorção de umidade e ao ganho de espessura, comparando-os com os
        painéis standard."
        testSteps={{
          first:
            ' Pesamos e medimos a espessura dos corpos de prova: amostras de 15mm de MDF e MDP Standard, e MDF e MDP Plus, todas sem revestimento.',
          second:
            'Acondicionamos as amostras por 16 dias em estufa com temperatura constante de 25ºC e umidade relativa do ar de 90%.',
          third:
            'Após este período, novamente pesamos e medidos a espessura dos corpos de prova.'
        }}
        extraInfoTitle="Muito importante"
        extraInfoBody={[
          'Utilize a linha BERNECK PLUS em áreas que não tenham contato direto com água.',
          'É indispensável proteger todas as faces e bordas do painel contra ação da umidade, inclusive as não aparentes, pois este produto não é isento a mofo.',
          'Ambientes com focos de cupim devem ser tratados antes da instalação de qualquer móvel, inclusive os com a linha PLUS BERNECK®.'
        ]}
        tableInfo={{
          rows: [
            {
              column1: 'MDF STD',
              column2: '47,0 g',
              column3: '13,10 %',
              column4: '0,94 mm',
              column5: '6,40 %',
              plus: false
            },
            {
              column1: 'MDP STD',
              column2: '25,7 g',
              column3: '7,40 %',
              column4: '0,74 mm',
              column5: '4,90 %',
              plus: false
            },
            {
              column1: 'MDF PLUS BERNECK',
              column2: '17,5 g',
              column3: '5,90 %',
              column4: '0,61 mm',
              column5: '0,61 mm',
              plus: true
            },
            {
              column1: 'MDP PLUS BERNECK',
              column2: '5,0 g',
              column3: '1,40 %',
              column4: '0,57 mm',
              column5: '0,57 mm',
              plus: true
            }
          ]
        }}
      />
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
              }
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
              }
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
              }
            }
          }
        }}
      />
    </div>
  )
}
