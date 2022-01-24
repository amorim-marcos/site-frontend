import TecaInfo from '@components/TecaInfo'
import Product from '../../components/Product'

export default function BerneckTecaView() {
  return (
    <div>
      <Product
        grafismProps={{
          grafism: 'type2',
          grafismProps: {
            color: '#dbc3b2'
          }
        }}
        imgSrc="/img/teca.png"
        imgWidth={{ base: '110vw', sm: '56vw' }}
        imgMaxWidth="1075px"
        imgMarginTop={{
          base: '-30%',
          sm: '-24px',
          md: '-30px',
          lg: '0px',
          xl: '-20px',
          '2xl': '-60px'
        }}
        imgMarginRight={{
          base: '-65px',
          sm: '-51px',
          md: '-100px',
          lg: '-100px',
          xl: '-100px',
          '2xl': '-100px'
        }}
        secondaryBackground="#F5F6F4"
        downloadAndLinks={{
          datasheet: true,
          whereBuy: true,
          qualityCertificate: false,
          backgroundColor: '#dbc3b2'
        }}
        header={{
          title: 'BERNECK® TECA',
          headerBgColor: '#CFB8A7',
          subtitle: 'Madeira Serrada de Teca',
          description:
            'É madeira sólida serrada de Teca, uma exclusividade da BERNECK®.'
        }}
        body={{
          description: [
            'A Teca Tectona grandis é nativa das florestas tropicais do Sudeste Asiático e a BERNECK® vem reflorestando com excelentes resultados em suas áreas de florestas no estado do Mato Grosso, portanto com garantia de procedência. É uma madeira nobre e amplamente utilizada e apreciada nos cinco continentes. Possui uma coloração amarelo-dourada à marrom, podendo apresentar veios escuros de ótimo efeito decorativo.',
            'É naturalmente imune ao ataque de cupins, brocas, carunchos e outros insetos. Com densidade média de 650 Kg/m3 (a 18% de umidade), é uma madeira leve porem muito resistente. Mesmo sem a proteção de óleo, tinta ou verniz a madeira serrada de Teca pode ser enterrada ou ficar exposta ao tempo sem deteriorar-se – a durabilidade do cerne deve-se à “tectoquinona”, um preservativo natural contido nas células da madeira. Não é sensível as variações de umidade do ambiente, sendo uma característica essencial no caso de portas, janelas e gavetas, permitindo que abram, fechem, e corram sem dificuldades.'
          ],
          backgroundColor: '#E8E8E8'
        }}
      />
      <TecaInfo
        dimensions={{
          length: '1500 / 1800 / 2200',
          width: '65 / 75 / 100 / 125 / 150',
          thickness: '22 / 25 / 28 / 38 / 45 / 50 / 65 / 75 / 100'
        }}
        usesAndApplications="Indicado para móveis em geral, decoração de interiores e
        exteriores, utensílios domésticos, cabo de ferramentas, objetos de
        arte e decoração, janelas, esquadrias, portas, indústria naval,
        entre outras aplicações."
        machinability={[
          'Por sua textura média e superfície lustrosa, a madeira de Teca pode ser serrada, aplainada, lixada e furada sem dificuldade.',
          'Praticamente não racha nem trinca o que permite um acabamento esmerado.',
          'A despeito de sua natureza oleosa, aceita muito bem ser colada o que possibilita usá-la para confeccionar qualquer tipo de peças.'
        ]}
        supplyInformation={[
          'Seca em estufa (KD) ou ao tempo (AD)',
          'Com brancal e com medula',
          'Sem medula em algumas das espessuras'
        ]}
      />
    </div>
  )
}
