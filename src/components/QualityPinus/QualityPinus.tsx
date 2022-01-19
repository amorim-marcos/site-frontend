import {
  Heading,
  Flex,
  Box,
  Text,
  Center,
  CenterProps,
  TextProps,
  BoxProps
} from '@chakra-ui/react'
import ProductDimensions from '@components/ProductDimensions'
import { useTranslation } from 'react-i18next'
import { QualityBtnTexture } from './QualityPinusBtnsTexture/QualityBtnTexture'

export const QualityPinus = () => {
  const pinus = useTranslation('pinus-berneck')

  return (
    <Flex
      maxWidth="1920px"
      marginX="auto"
      paddingX={{
        base: '60px',
        sm: '70px',
        md: '80px',
        lg: '90px',
        xl: '100px',
        '2xl': '5%'
      }}
      paddingY={{
        base: '20px',
        sm: '30px',
        md: '40px',
        lg: '50px',
        xl: '60px',
        '2xl': '70px'
      }}
      flexDirection="column"
      bg="#FCFCFC"
    >
      <Heading
        color="green.900"
        fontSize={{
          base: '8px',
          sm: '11px',
          md: '14px',
          lg: '18px',
          xl: '22px',
          '2xl': '30px'
        }}
        marginBottom={'50px'}
      >
        {pinus.t('qualitiesPinusBerneck')}
      </Heading>
      <Flex>
        <Box w="588px" h="631px" bg="#cba57a"></Box>

        <Flex marginLeft="20px" flexDirection="column">
          <Flex h="64px" justifyContent="flex-start" marginBottom="50px">
            <Center {...btnStyle}>
              <Box {...textureBtnContainer}>
                <QualityBtnTexture texture="1" />
              </Box>
              <Text {...btnTextStyle}>108</Text>
            </Center>
            <Center {...btnStyle}>
              <Box {...textureBtnContainer}>
                <QualityBtnTexture texture="2" />
              </Box>
              <Text {...btnTextStyle}>108</Text>
            </Center>
            <Center {...btnStyle}>
              <Box {...textureBtnContainer}>
                <QualityBtnTexture texture="3" />
              </Box>
              <Text {...btnTextStyle}>108</Text>
            </Center>
            <Center {...btnStyle}>
              <Box {...textureBtnContainer}>
                <QualityBtnTexture texture="4" />
              </Box>
              <Text {...btnTextStyle}>108</Text>
            </Center>
            <Center {...btnStyle}>
              <Box {...textureBtnContainer}>
                <QualityBtnTexture texture="5" />
              </Box>
              <Text {...btnTextStyle}>108</Text>
            </Center>
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between" h="100%">
            <Box>
              <Heading
                color="green.900"
                fontSize={{
                  base: '8px',
                  sm: '11px',
                  md: '14px',
                  lg: '18px',
                  xl: '22px',
                  '2xl': '30px'
                }}
                marginBottom="20px"
              >
                Qualidade 101 ︱ COL A
              </Heading>
              <Text
                fontSize={{
                  base: '7px',
                  sm: '8px',
                  md: '11px',
                  lg: '14px',
                  xl: '17px',
                  '2xl': '20px'
                }}
                color="green.900"
                zIndex="docked"
              >
                BERNECK® PINUS - 101 é proveniente de peças laterais da tora, o
                que confere maior densidade e menores tamanhos de nós. Pode ser
                entregue aplainada.
              </Text>
            </Box>

            <Box>
              <ProductDimensions
                dimensions={{
                  length: '2000 / 2130 / 2440 / 3050 / 3660 / 3960 / 4000',
                  width: '75 / 90 / 95 / 100 / 120 / 125 / 145 / 150',
                  thickness: '19 / 22 / 25 / 28 / 32 / 38 / 45 / 50'
                }}
                tableBorderColor="#FCFCFC"
                tableBackgroundColor="#E6EBE5"
                tableWidth={{
                  base: '200px',
                  sm: '170px',
                  md: '270px',
                  lg: '350px',
                  xl: '400px',
                  '2xl': '800px'
                }}
              />
            </Box>

            <Box>
              <Heading
                color="green.900"
                fontSize={{
                  base: '8px',
                  sm: '11px',
                  md: '14px',
                  lg: '18px',
                  xl: '22px',
                  '2xl': '30px'
                }}
                marginBottom="20px"
              >
                Usos e Aplicações
              </Heading>
              <Text
                fontSize={{
                  base: '7px',
                  sm: '8px',
                  md: '11px',
                  lg: '14px',
                  xl: '17px',
                  '2xl': '20px'
                }}
                color="green.900"
                zIndex="docked"
              >
                Móveis / Estofados / Construção Civil / Molduras / Estrutural
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

const btnStyle: CenterProps = {
  w: '192px',
  bg: '#E6EBE5',
  marginRight: '10px',
  position: 'relative'
}

const btnTextStyle: TextProps = {
  color: 'green.900',
  fontWeight: 'bold',
  fontSize: '30px'
}

const textureBtnContainer: BoxProps = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%'
}
