import Product from '../../components/Product'

export default function Hdf() {
  return (
    <div>
      <Product
        grafismProps={{
          grafism: 'type1'
        }}
        imgSrc="/img/mdp.png"
        imgMarginTop={{
          base: '36px',
          sm: '52px',
          md: '69px',
          lg: '86px',
          xl: '104px',
          '2xl': '0'
        }}
        imgMarginRight={{
          base: '-80px',
          sm: '-108px',
          md: '-145px',
          lg: '-181px',
          xl: '-217px',
          '2xl': '-272px'
        }}
        secondaryBackground="#F3E9DA"
        downloadAndLinks={{
          datasheet: true,
          whereBuy: true,
          qualityCertificate: true
        }}
        header={{
          title: 'MDP BERNECK®',
          headerBgColor: '#E0CBA5',
          subtitle: 'Painel de Partículas de Média Densidade',
          description:
            'Destaca-se pela coloração bem clara e homogênea, superfície lisa e camada interna bem compactada, assegurada pela perfeita distribuição das partículas'
        }}
        body={{
          description:
            'O MDP BERNECK é formado por partículas de madeira de média densidade, Medium Density Particleboard. É produzido em prensas contínuas de ultima geração. É um dos produtos mais tecnológicos e econômicos para produção de móveis de linhas retas. Destaca-se por sua coloração clara e homogenia e pela menor absorção superficial por ter a camada externa com alta densidade e uniformidade, assegurada pela perfeita distribuição das partículas de madeira.',
          usesAndApplications:
            'Especialmente indicado para os processos de pintura e impressão, que exigem superfícies uniformes e de baixa absorção e para o revestimento com qualquer material (BPs, laminados de PVC, laminados de Alta Pressão (AP), lâminas de madeira, lâminas pré-compostas, etc.). Proporciona excelente resultado em móveis para dormitórios, escritórios, cozinhas, além de eletro-eletrônicos, construção civil, painéis para decoração, entre outros.',
          finishes: [
            '• Natural (sem revestimento)',
            '• Revestido com laminado de baixa pressão BP BERNECK®'
          ],
          dimensions: {
            thickness: '12 / 15 / 18 / 25',
            length: '2750',
            width: '1850 a 2200'
          },
          backgroundColor: '#FCFCFC',
          productWithBP: {
            backgroundColor: '#FBF6F0',
            btnColor: '#D8C39F',
            btnText: 'Conheça todos os padrões BP BERNECK em MDP',
            imgSrc: '/img/mdp_bp.png',
            type: 'centralizedBtn',
            description:
              'A combinação das qualidades do MDP com a variedade de acabamentos do BP fornecem inúmeras possibilidades de utilização. Encontre a melhor para a sua aplicação.',
            title: 'MDP BERNECK® com BP',
            marginTop: '150px'
          }
        }}
      />

      <Product
        grafismProps={{
          grafism: 'type2'
        }}
        imgSrc="/img/mdp_plus.png"
        imgMarginTop={{
          base: '59px',
          sm: '80px',
          md: '106px',
          lg: '133px',
          xl: '160px',
          '2xl': '200px'
        }}
        imgMarginRight={{
          base: '-88px',
          sm: '-120px',
          md: '-160px',
          lg: '-200px',
          xl: '-240px',
          '2xl': '-300px'
        }}
        secondaryBackground="#F5F6F4"
        plusProduct
        downloadAndLinks={{
          qualityCertificate: false
        }}
        header={{
          plusIndicator: true,
          title: 'MDP PLUS BERNECK®',
          headerBgColor: '#ACCC9F',
          subtitle: 'É Plus porque tem mais proteção à umidade',
          description:
            'A qualidade do MDP BERNECK® aliada à máxima proteção contra umidade e cupins.'
        }}
        body={{
          moreTechnologyQualityProtection: [
            'O MDP BERNECK é formado por partículas de madeira de média densidade, Medium Density Particleboard. É produzido em prensas contínuas de última geração. É um dos produtos mais tecnológicos e econômicos para produção de móveis que não necessitem de trabalhos de baixo relevo. ',
            'O MDP PLUS é um produto inovador! Além de ser um painel de madeira com maior resistência à umidade, ele traz inúmeras vantagens: leveza, custo competitivo e desempenho superior quando comparado às demais opções do mercado.',
            'Possui a coloração esverdeada no miolo como identificação internacional do produto com maior resistência à umidade, diferenciando-o dos painéis Standard. Essa pigmentação pode variar a cada lote de produção e não está associada ao princípio ativo de hidro resistência, ou seja, não é à prova d’água.',
            'Vale inovar nos projetos com MDP Plus. Um ótimo investimento, com incomparável custo benefício'
          ],
          usesAndApplications:
            'Indicado para móveis de cozinhas, banheiros, lavanderias e ambientes comerciais.',
          finishes: [
            '• Natural (sem revestimento)',
            '• Revestido com laminado de baixa pressão BP BERNECK®'
          ],
          dimensions: {
            thickness: '12 / 15 / 18 / 25',
            length: '2750',
            width: '1850'
          },
          backgroundColor: '#E8E8E8',
          productWithBP: {
            title: 'MDP PLUS BERNECK® com BP',
            description:
              'Inove nos projetos com os acabamentos BP em MDP PLUS, laminados melamínicos com a proteção do PLUS BERNECK .',
            btnText: 'Conheça todos os padrões BP BERNECK em MDP PLUS',
            imgSrc: '/img/mdp_plus_bp.png',
            marginTop: '150px'
          }
        }}
      />
    </div>
  )
}
