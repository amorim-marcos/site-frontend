import Product from '../../components/Product'

export default function PlusBerneckView() {
  return (
    <div>
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
          title: 'Painéis PLUS BERNECK®',
          headerBgColor: '#ACCC9F',
          subtitle: 'É Plus porque tem mais proteção à umidade',
          description:
            'Os painéis da Linha PLUS BERNECK® são indicados para fabricação de móveis a serem aplicados em ambientes como cozinhas, banheiros e lavanderias.'
        }}
        body={{
          heading1: 'Mais tecnologia, mais qualidade, mais proteção',
          paragraph1:
            'Há quase 70 anos, a BERNECK® é a marca da madeira e das grandes soluções para seus projetos. Agora ainda mais, com toda a qualidade e maior resistência que a linha PLUS BERNECK® oferece.',
          heading2: 'Normas de qualidade',
          paragraph2:
            'Os produtos da linha PLUS BERNECK® seguem as normas ABNT NBR 14.810 e ABNT NBR 15.316 (V313) e registram indicadores superiores aos estabelecidos pela normativa.',
          heading3: 'Acabamentos',
          backgroundColor: '#E8E8E8'
        }}
      />
    </div>
  )
}
