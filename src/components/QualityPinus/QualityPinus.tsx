import {
  Flex,
  Box,
  Text,
  Center,
  CenterProps,
  BoxProps,
  Image
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
  image: {
    url: string
  }
  image_url?: string
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
    // bg={headerBgColor}
    flexDirection="column"
    flex="1"
    alignItems={"center"}
  >
    <Flex
      flexDirection="column"
      maxWidth="1536px"
      flex="1"
      w={"100%"}
      // bg={headerBgColor}
      // bg="yellow"
      padding={{ base: '5% 0 10% 5%', '2xl': '5% 0 5% 3%' }}
    >
      <Text as={"h3"}
        variant={"h3"}
        color="green.900"
        fontWeight={'extrabold'}
        padding={{ base: '5% 0 5% 0', '2xl': '0 0 5% 0' }}
      >
        {pinus.t('qualitiesPinusBerneck')}
      </Text>
      <Flex
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        w="100%"
      >
        <Flex
          w={{ base: '100%', sm: '30%' }}
          css={isMobile ? { height: '40vh' } : { height: 'full' }}
        >
          {items.length > 0 &&(
            <Image
              h="100%"
              w="100%"
              objectFit={'cover'}
              src={items[currentItem].image_url}
            />
          )}
          
        </Flex>

        <Flex width={{ base: '100%', sm: '67%' }} flexDirection="column">
          <Flex
            width={'100%'}
            margin={{ base: '5% 0 5% 0', sm: '0' }}
            justifyContent={{ base: 'flex-start' }}
            gap={{ base: '2%', sm: '0' }}
            wrap={'wrap'}
          >
            {items &&
              items.map((item, i) => {
                return (
                  <Center
                    key={i}
                    position={'relative'}
                    minWidth={{
                      base: '70px',
                      sm: '80px',
                      md: '80px',
                      lg: '110px',
                      xl: '140px',
                      '2xl': '160px'
                    }}
                    h={{
                      base: '30px',
                      sm: '30px',
                      md: '30px',
                      lg: '40px',
                      xl: '45px',
                      '2xl': '50px'
                    }}
                    marginRight={{ base: '0', sm: '2%' }}
                    bg={i === currentItem ? 'green.250' : '#E6EBE5'}
                    _hover={{ bg: 'green.200' }}
                    cursor="pointer"
                    marginBottom="2%"
                    onClick={() => setCurrentItem(i)}
                  >
                    <Box {...textureBtnContainer}>
                      <QualityBtnTexture texture={getTexture(i + 1)} />
                    </Box>
                    <Text as={"h3"}
                        variant={"h3"}
                        color="green.900"
                        fontWeight={'bold'}
                      >
                      {item.number}
                    </Text>
                  </Center>
                )
              })}
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between">
            {items.length > 0 && (
              <Box 
                margin={{ base: '5% 0 8% 0', sm: '5% 0 8% 0' }}
              >
                 <Text as={"h3"}
                    variant={"h3"}
                    color="green.900"
                    fontWeight={'extrabold'}
                  >
                  {items[currentItem].name} ︱ COL {items[currentItem].col}
                </Text>
                <Text
                  variant={'productBody' as any}
                  w={{ base: '95%', sm: '90%' }}
                >
                  {items[currentItem].description}
                </Text>
              </Box>
            )}

            <Box 
              margin={{ base: '0 0 8% 0', sm: '0 0 8% 0' }}
            >
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
                <Text as={"h3"}
                    variant={"h3"}
                    color="green.900"
                    fontWeight={'extrabold'}
                  >Usos e Aplicações</Text>
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
