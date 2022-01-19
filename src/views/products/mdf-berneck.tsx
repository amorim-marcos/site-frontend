import Product from '../../components/Product'

export default function Hdf() {
  return (
    <div>
      <Product
        grafismProps={{
          grafism: 'type1'
        }}
        imgSrc="/img/mdf.png"
        imgWidth={{ base: '100vw', sm: '60vw' }}
        imgMaxWidth="1151px"
        imgMarginTop={{
          base: '0px'
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
          datasheet: true,
          whereBuy: true,
          qualityCertificate: true
        }}
        header={{
          title: 'MDF BERNECK®',
          headerBgColor: '#E0CBA5',
          subtitle: 'Painel de Fibra de Média Densidade',
          description:
            'Produzido a partir de 9mm. Excelente para os processos de pintura e impressão.'
        }}
        body={{
          description:
            'Produzido em prensas contínuas de altíssima tecnologia, o que assegura um painel homogêneo, ótimo para os processos de usinagem e baixo relevo. Por ser produzido com Pinus, que possui fibras longas, possui maleabilidade superior e coloração bem clara, excelente para os processos de pintura e impressão.',
          usesAndApplications:
            'O MDF BERNECK® assegura excelente resultado em todos os tipos de móveis para peças com usinagens profundas e trabalhos de baixo relevo, além de embalagens, aplicações na construção civil, artesanatos, etc.',
          finishes: [
            '• Natural (sem revestimento) ',
            '• Revestido com laminado de baixa pressão BP BERNECK®'
          ],
          dimensions: {
            thickness: '9 / 12 / 15 / 18 / 22 / 25',
            length: '2750',
            width: '1850 a 2200'
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
            grafismColor: '#D8C39F',
            marginTop: '100px'
          }
        }}
      />

      <Product
        grafismProps={{
          grafism: 'type2'
        }}
        imgSrc="/img/mdf_plus.png"
        imgWidth={{ base: '100vw', sm: '60vw' }}
        imgMaxWidth="1151px"
        imgMarginTop={{
          base: '9px',
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
          title: 'MDF PLUS BERNECK®',
          headerBgColor: '#ACCC9F',
          subtitle: 'É Plus porque tem mais proteção à umidade',
          description:
            'A qualidade do MDF BERNECK® aliada à máxima proteção contra umidade e cupins.'
        }}
        body={{
          moreTechnologyQualityProtection: [
            'O MDF PLUS BERNECK é o painel formado por fibras de madeira de média densidade, Medium Density Fiberboard, produzido em prensa contínua com resinas especiais que garantem maior resistência à umidade. O MDF PLUS BERNECK® assegura excelente resultado em todos os tipos de móveis para peças com trabalhos de baixo relevo e ótimas condições para corte e bordas arredondadas para pintura. ',
            'Possui a coloração esverdeada como identificação internacional do produto com maior resistência à umidade, diferenciando-o dos painéis Standard. Essa pigmentação pode variar a cada lote de produção e não está associada ao princípio ativo de hidro resistência, pois não é à prova d´água.',
            'Vale inovar nos projetos com MDF PLUS. Um ótimo investimento, com incomparável custo benefício.'
          ],
          usesAndApplications:
            'Indicado para móveis de cozinhas, banheiros, lavanderias e ambientes comerciais.',
          finishes: [
            '• Natural (sem revestimento)',
            '• Revestido com laminado de baixa pressão BP BERNECK®'
          ],
          dimensions: {
            thickness: '9 / 12 / 15 / 18 / 25',
            length: '2750',
            width: '1850'
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
    </div>
  )
}
