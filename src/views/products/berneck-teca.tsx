import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'
import ProductDimensions from '@components/ProductDimensions'
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
          base: '94px',
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

      <Flex
        padding="4%"
        justifyContent="space-around"
        maxWidth="1920px"
        marginX="auto"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Box width={{ base: '100%', sm: '45%' }}>
          <Heading
            fontSize={{
              base: '20px',
              sm: '11px',
              md: '14px',
              lg: '18px',
              xl: '22px',
              '2xl': '30px'
            }}
            variant="productTitle"
          >
            Usinabilidade
          </Heading>
          <ItemCite
            text="Por sua textura média e superfície lustrosa, a madeira de Teca pode ser
        serrada, aplainada, lixada e furada sem dificuldade."
          />
          <ItemCite
            text="Praticamente não racha nem trinca o que permite um acabamento
            esmerado."
          />
          <ItemCite
            text="A despeito de sua natureza oleosa, aceita muito bem ser colada o que
            possibilita usá-la para confeccionar qualquer tipo de peças."
          />

          <Box marginTop="20px">
            <Text variant={'productBody' as any}>
              Fornecemos a BERNECK® TECA serrada bruta e aplainada:{' '}
            </Text>

            <ItemCite text="Seca em estufa (KD) ou ao tempo (AD) " />
            <ItemCite text="Com brancal e com medula" />
            <ItemCite text="Sem medula em algumas das espessuras" />
          </Box>
        </Box>

        <Flex
          justifyContent="flex-start"
          width={{ base: '100%', sm: '45%' }}
          flexDirection="column"
        >
          <Box
            marginBottom={{
              base: '30px',
              sm: '40px',
              md: '50px',
              lg: '60px',
              xl: '70px',
              '2xl': '80px'
            }}
          >
            <Heading
              fontSize={{
                base: '20px',
                sm: '11px',
                md: '14px',
                lg: '18px',
                xl: '22px',
                '2xl': '30px'
              }}
              variant="productTitle"
              marginTop={{ base: '20px', sm: '0px' }}
            >
              Usos e aplicações
            </Heading>
            <Text variant={'productBody' as any}>
              Indicado para móveis em geral, decoração de interiores e
              exteriores, utensílios domésticos, cabo de ferramentas, objetos de
              arte e decoração, janelas, esquadrias, portas, indústria naval,
              entre outras aplicações.
            </Text>
          </Box>
          <Box>
            <ProductDimensions
              dimensions={{
                length: '1500 / 1800 / 2200',
                width: '65 / 75 / 100 / 125 / 150',
                thickness: '22 / 25 / 28 / 38 / 45 / 50 / 65 / 75 / 100'
              }}
              tableBackgroundColor="#E8DDD5"
              tableBorderColor="#FFF"
              tableWidth={{
                base: '280px',
                xs: '320px',
                sm: '250px',
                md: '350px',
                lg: '480px',
                xl: '610px',
                '2xl': '710px'
              }}
            />
          </Box>
        </Flex>
      </Flex>
    </div>
  )
}

const ItemCite = ({ text = '' }) => {
  return (
    <Flex marginBottom="5px">
      <Box
        margin={{
          base: '3px',
          sm: '3px',
          md: '4px',
          lg: '6px',
          xl: '8px',
          '2xl': '10px'
        }}
      >
        <ArrowIcon
          width={{
            base: '10px',
            sm: '3px',
            md: '4px',
            lg: '6px',
            xl: '8px',
            '2xl': '10px'
          }}
          stroke="#E8DDD5"
        />
      </Box>
      <Text variant={'productBody' as any}>{text}</Text>
    </Flex>
  )
}
