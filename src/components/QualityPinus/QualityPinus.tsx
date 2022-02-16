import {
  Flex,
  Box,
  Text,
  Center,
  CenterProps,
  BoxProps
} from '@chakra-ui/react'
import ProductDimensions from '@components/ProductDimensions'
import useMobile from 'hooks/useMobile'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { QualityBtnTexture } from './QualityPinusBtnsTexture/QualityBtnTexture'

type ItemProps = {
  col: string
  description: string
  id: number
  name: string
  number: number
  thickness: string
  uses_and_applications: string
  _length: string
  _width: string
}

export type QualityPinusProps = {
  items: ItemProps[]
}

export const QualityPinus = ({ items }: QualityPinusProps) => {
  const pinus = useTranslation('pinus-berneck')
  const { isMobile } = useMobile(568)

  const [currentItem, setCurrentItem] = useState(0)

  return (
    <Flex
      aria-label="qualityPinusContainer"
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
          border="1px solid brown"
          w={{ base: '100%', sm: '30%' }}
          css={isMobile ? { height: '40vh' } : { height: 'full' }}
        ></Flex>

        <Flex width={{ base: '100%', sm: '67%' }} flexDirection="column">
          <Flex
            width={'100%'}
            marginY={{ base: '30px', sm: '0' }}
            justifyContent={{ base: 'space-around', sm: 'flex-start' }}
            marginBottom={'5%'}
            wrap={'wrap'}
          >
            {items &&
              items.map((item, i) => {
                return (
                  <Center
                    key={item.id}
                    position={'relative'}
                    minWidth={{
                      base: '40vw',
                      sm: '80px',
                      md: '106px',
                      lg: '133px',
                      xl: '160px',
                      '2xl': '200px'
                    }}
                    h={{
                      base: '60px',
                      sm: '25px',
                      md: '34px',
                      lg: '42px',
                      xl: '51px',
                      '2xl': '64px'
                    }}
                    marginRight={{ base: '0', sm: '2%' }}
                    bg="#E6EBE5"
                    cursor="pointer"
                    marginBottom="2%"
                    onClick={() => setCurrentItem(i)}
                  >
                    <Box {...textureBtnContainer}>
                      <QualityBtnTexture texture={getTexture(i + 1)} />
                    </Box>
                    <Text variant={'productTitle' as any} marginBottom="0">
                      {item.number}
                    </Text>
                  </Center>
                )
              })}
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between">
            {items.length > 0 && (
              <Box marginBottom="3%">
                <Text variant={'productTitle' as any}>
                  {items[currentItem].name} ︱ COL {items[currentItem].col}
                </Text>
                <Text
                  variant={'productBody' as any}
                  w={{ base: '100%', sm: '90%' }}
                >
                  {items[currentItem].description}
                </Text>
              </Box>
            )}

            <Box marginBottom={'3%'}>
              {items.length > 0 && (
                <ProductDimensions
                  dimensions={{
                    length: items[currentItem]._length,
                    width: items[currentItem]._width,
                    thickness: items[currentItem].thickness
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
              )}
            </Box>

            <Box>
              <Text variant={'productTitle' as any}>Usos e Aplicações</Text>
              {items.length > 0 && (
                <Text variant={'productBody' as any}>
                  {items[currentItem].uses_and_applications}
                </Text>
              )}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

function getTexture(i: number): '1' | '2' | '3' | '4' | '5' {
  if (i % 5 === 0) {
    return '5'
  }

  if (i % 5 === 1) {
    return '1'
  }

  if (i % 5 === 2) {
    return '2'
  }
  if (i % 5 === 3) {
    return '3'
  }

  return '4'
}

const btnStyle: CenterProps = {
  w: '200px',
  bg: '#E6EBE5',
  marginRight: '10px',
  position: 'relative',
  cursor: 'pointer',
  _hover: {
    bg: '#C7D0C5'
  }
}

const selectedBtnStyle: CenterProps = {
  w: '20%',
  bg: '#A9BBAF',
  marginRight: '10px',
  position: 'relative',
  cursor: 'pointer',
  _hover: {
    bg: '#C7D0C5'
  }
}

const textureBtnContainer: BoxProps = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%'
}
