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
        base: '6%',
        sm: '4%'
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
      <Text
        variant={'productTitle' as any}
        marginBottom={{
          base: '50px',
          sm: '10px',
          md: '20px',
          lg: '30px',
          xl: '40px',
          '2xl': '50px'
        }}
      >
        {pinus.t('qualitiesPinusBerneck')}
      </Text>
      <Flex
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        w="100%"
      >
        <Flex
          backgroundImage="url('/img/pinus_quality.png')"
          backgroundSize="auto 100%"
          minWidth={{
            base: '70vw',
            sm: '235px',
            md: '313px',
            lg: '392px',
            xl: '470px',
            '2xl': '588px'
          }}
          h={{
            base: '70vw',
            sm: '252px',
            md: '336px',
            lg: '420px',
            xl: '504px',
            '2xl': '631px'
          }}
          // bg="#cba57a"
        ></Flex>

        <Flex
          marginLeft={{
            base: '0px',
            sm: '10px',
            md: '20px',
            lg: '30px',
            xl: '40px',
            '2xl': '50px'
          }}
          flexDirection="column"
        >
          <Flex
            marginY={{ base: '30px', sm: '0' }}
            h={{
              base: '25px',
              sm: '25px',
              md: '34px',
              lg: '42px',
              xl: '51px',
              '2xl': '64px'
            }}
            justifyContent="flex-start"
            marginBottom={{
              base: '30px',
              sm: '10px',
              md: '20px',
              lg: '30px',
              xl: '40px',
              '2xl': '50px'
            }}
          >
            <Center {...btnStyle}>
              <Box {...textureBtnContainer}>
                <QualityBtnTexture texture="1" />
              </Box>
              <Text variant={'productTitle' as any} marginBottom="0">
                108
              </Text>
            </Center>
            <Center {...btnStyle}>
              <Box {...textureBtnContainer}>
                <QualityBtnTexture texture="2" />
              </Box>
              <Text variant={'productTitle' as any} marginBottom="0">
                108
              </Text>
            </Center>
            <Center {...btnStyle}>
              <Box {...textureBtnContainer}>
                <QualityBtnTexture texture="3" />
              </Box>
              <Text variant={'productTitle' as any} marginBottom="0">
                108
              </Text>
            </Center>
            <Center {...btnStyle}>
              <Box {...textureBtnContainer}>
                <QualityBtnTexture texture="4" />
              </Box>
              <Text variant={'productTitle' as any} marginBottom="0">
                108
              </Text>
            </Center>
            <Center {...btnStyle}>
              <Box {...textureBtnContainer}>
                <QualityBtnTexture texture="5" />
              </Box>
              <Text variant={'productTitle' as any} marginBottom="0">
                108
              </Text>
            </Center>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            h={{ base: '450px', sm: '100%' }}
          >
            <Box>
              <Text variant={'productTitle' as any}>
                Qualidade 101 ︱ COL A
              </Text>
              <Text
                variant={'productBody' as any}
                w={{ base: '100%', sm: '90%' }}
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
                  base: '300px',
                  sm: '280px',
                  md: '373px',
                  lg: '466px',
                  xl: '560px',
                  '2xl': '700px'
                }}
              />
            </Box>

            <Box>
              <Text variant={'productTitle' as any}>Usos e Aplicações</Text>
              <Text variant={'productBody' as any}>
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
  w: '20%',
  bg: '#E6EBE5',
  marginRight: '10px',
  position: 'relative'
}

const textureBtnContainer: BoxProps = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%'
}
