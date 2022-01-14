import Product from '../../components/Product'

export default function HdfBerneckView() {
  return (
    <div>
      <Product
        grafism="type1"
        imgSrc="/img/hdf.png"
        imgMarginTop={{
          base: '36px',
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
        header={{
          title: 'HDF BERNECK®',
          headerBgColor: '#E0CBA5',
          subtitle: 'Painel de Fibra de Alta Densidade ',
          description:
            'É produzido 100% com Pinus, que possui fibras longas, proporcionando uma maior maleabilidade ao painel além de coloração bem clara, que assegura excelente resultado para os processos de pintura e impressão.'
        }}
        body={{
          heading1: 'Descrição',
          paragraph1:
            'É formado por fibras de madeira de alta densidade, High Density Fiberboard. Por ser produzido em prensa contínua de última geração, possui excelente estabilidade dimensional, superfície uniforme e lisa com espessuras a partir de 2,5 mm.',
          heading2: 'Usos e Aplicações',
          paragraph2:
            'O HDF BERNECK® garante excelente resultado e custo/benefício em fundo de móveis, lateral e fundo de gavetas, capas de portas, peças curvas, para a produção de pisos, artesanatos, bem como na fabricação de painéis de grandes espessuras (tipo colmeias).',
          heading3: 'Acabamentos',
          paragraph3: '• Natural (sem revestimento)',
          dimensions: {
            thickness: '2,5 / 2,8 / 3 / 4 / 6',
            length: '2750',
            width: '1850 / 2130 / 2200'
          },
          backgroundColor: '#FCFCFC'
        }}
      />

      <Product
        grafism="type2"
        imgSrc="/img/hdf_plus.png"
        imgMarginTop={{
          base: '94px',
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
        downloadAndLinks={{ qualityCertificate: false }}
        secondaryBackground="#F5F6F4"
        plusProduct
        header={{
          plusIndicator: true,
          title: 'HDF PLUS BERNECK®',
          headerBgColor: '#ACCC9F',
          subtitle: 'É Plus porque tem mais proteção à umidade ',
          description:
            'A qualidade do HDF BERNECK® aliada à máxima proteção contra umidade e cupins.'
        }}
        body={{
          heading1: 'Mais tecnologia, mais qualidade, mais proteção',
          paragraph1: [
            'O HDF PLUS BERNECK® é o painel formado por fibras de madeira de alta densidade, High Density Fiberboard, produzido em prensa contínua com resinas especiais que garantem maior resistência à umidade.',
            'Possui a coloração esverdeada como identificação internacional do produto com maior resistência à umidade, diferenciando-o dos painéis Standard. Essa pigmentação pode variar a cada lote de produção e não está associada ao princípio ativo de hidro resistência, ou seja, não é a prova dágua.',
            'Vale inovar nos projetos com HDF PLUS. Um ótimo investimento, com incomparável custo benefício.'
          ],
          heading2: 'Usos e Aplicações',
          paragraph2:
            'Indicado, por exemplo, para fundo de móveis e gavetas, peças curvas e pequenos nichos.',
          heading3: 'Acabamentos',
          paragraph3:
            '• Natural (sem revestimento) • Com laminado de baixa pressão BP BERNECK®',
          dimensions: {
            thickness: '6',
            length: '2750',
            width: '1850'
          },
          backgroundColor: '#E8E8E8',
          productWithBP: {
            title: 'HDF PLUS BERNECK® com BP',
            description:
              'Inove nos projetos com os acabamentos BP em HDF PLUS, laminados melamínicos com a proteção do PLUS BERNECK .',
            btnText: 'Conheça todos os padrões BP BERNECK em HDF PLUS',
            imgSrc: '/img/hdf_plus_bp.png'
          }
        }}
      />
    </div>
  )
}
