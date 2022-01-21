import {
  Heading,
  Flex,
  Box,
  Text,
  Center,
  Container,
  Image
} from '@chakra-ui/react'
import PlusInfoTable from '@components/PlusInfoTable'

import ArrowIcon from '../Icons/ArrowIcon'
export type PlusTestInfoProps = {
  title?: string
}
export const PlusTestInfo = ({ title }: PlusTestInfoProps) => {
  return (
    <Box bg="#E8E8E8" maxWidth="1920px" marginX="auto" padding="5%">
      <Text variant={'productTitle' as any}>
        Fizemos o teste. Está comprovado e aprovado.
      </Text>
      <Text variant={'productBody' as any} width={{ base: '100%', sm: '44%' }}>
        Para ilustrar melhor as características dos produtos PLUS BERNECK®,
        fizemos um teste com o objetivo de avaliar como os painéis reagem à
        absorção de umidade e ao ganho de espessura, comparando-os com os
        painéis standard.
      </Text>
      <Flex
        paddingY={{
          base: '20px',
          sm: '10px',
          md: '20px',
          lg: '30px',
          xl: '40px',
          '2xl': '50px'
        }}
        justifyContent="space-evenly"
        alignItems="center"
        position="relative"
        marginTop="30px"
        backgroundImage={{
          base: "url('/img/fundo_caminho90deg.png')",
          sm: "url('/img/fundo_caminho.png')"
        }}
        backgroundRepeat="no-repeat"
        backgroundSize={{ base: '100%' }}
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Flex
          marginY={{ base: '40px', sm: '0' }}
          w={{ base: '80%', sm: '30%' }}
          zIndex="docked"
        >
          <Text variant={'berneckPlusTestInfoNumber' as any}>1</Text>
          <Text variant={'productBody' as any}>
            Pesamos e medimos a espessura dos corpos de prova: amostras de 15mm
            de MDF e MDP Standard, e MDF e MDP Plus, todas sem revestimento.
          </Text>
        </Flex>
        <Flex
          marginY={{ base: '40px', sm: '0' }}
          w={{ base: '80%', sm: '30%' }}
          zIndex="docked"
        >
          <Text variant={'berneckPlusTestInfoNumber' as any}>2</Text>
          <Text variant={'productBody' as any}>
            Acondicionamos as amostras por 16 dias em estufa com temperatura
            constante de 25ºC e umidade relativa do ar de 90%.
          </Text>
        </Flex>
        <Flex
          marginY={{ base: '40px', sm: '0' }}
          w={{ base: '80%', sm: '30%' }}
          zIndex="docked"
        >
          <Text variant={'berneckPlusTestInfoNumber' as any}>3</Text>
          <Text variant={'productBody' as any}>
            Após este período, novamente pesamos e medidos a espessura dos
            corpos de prova.
          </Text>
        </Flex>
      </Flex>

      <Flex flexDirection={{ base: 'column', sm: 'row' }}>
        <Box width={{ base: '90%', sm: '40%' }}>
          <Text marginTop="40px" variant={'productTitle' as any}>
            Muito importante
          </Text>

          <Box>
            <ItemCite text="Utilize a linha BERNECK PLUS em áreas que não tenham contato direto com água." />
            <ItemCite text=" É indispensável proteger todas as faces e bordas do painel contra ação da umidade, inclusive as não aparentes, pois este produto não é isento a mofo. " />
            <ItemCite text="Ambientes com focos de cupim devem ser tratados antes da instalação de qualquer móvel, inclusive os com a linha PLUS BERNECK®." />
          </Box>
        </Box>
        <Box>
          <PlusInfoTable
            rows={[
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
            ]}
          />
        </Box>
      </Flex>
    </Box>
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
          stroke="green.600"
        />
      </Box>
      <Text variant={'productBody' as any}>{text}</Text>
    </Flex>
  )
}
