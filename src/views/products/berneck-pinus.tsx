import QualityPinus from '@components/QualityPinus'
import Product from '../../components/Product'

export default function BerneckPinusView() {
  return (
    <div>
      <Product
        grafismProps={{
          grafism: 'type3',
          grafismProps: {
            color: '#FFF'
          }
        }}
        imgSrc="/img/pinus.png"
        imgWidth="60vw"
        imgMaxWidth="1151px"
        imgMarginTop="0px"
        imgMarginRight={{
          base: '-155px',
          sm: '-40px',
          md: '-75px',
          lg: '-100px',
          xl: '-150px'
        }}
        secondaryBackground="#F5F6F4"
        downloadAndLinks={{
          whereBuy: true,
          datasheet: true,
          qualityCertificate: false
        }}
        header={{
          title: 'BERNECK® PINUS',
          headerBgColor: '#A1B5A8',
          subtitle: 'Madeira Serrada de Pinus',
          description:
            ' Garante dimensões estáveis e uniformes de madeira serrada e aplainada.'
        }}
        body={{
          description:
            'O BERNECK PINUS possui dimensões estáveis e uniformes, acabamento de qualidade e teor de umidade constante de 12% (± 2%) por ser todo seco em estufas. É produzido em equipamentos com a tecnologia mais avançada do mundo, com alta capacidade de produção. A BERNECK oferece grande volume de produção e ampla gama de dimensões adequadas aos mais variados usos.',
          usesAndApplications:
            'A madeira é classificada de acordo com os requerimentos dos diferentes usos finais, tal como embalagens, móveis, construção civil e molduras.',
          specifications: [
            {
              title: 'Espécie',
              description: 'Pinus taeda e Pinus elliottii'
            },
            {
              title: 'Teor de Umidade padrão',
              description: '12% (±2%)'
            },
            {
              title: 'Densidade Média 12% de umidade',
              description: '± 480 kg/m³ (101/103/108) / ± 400 kg/m³ (104/102)'
            },
            {
              title: 'Variação de medida',
              description: '-1/+2mm'
            }
          ],
          backgroundColor: '#E8E8E8'
        }}
      />
      <QualityPinus />
    </div>
  )
}
