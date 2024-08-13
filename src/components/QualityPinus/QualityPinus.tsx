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
import HtmlTextParser from '@components/HtmlTextParser'

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
}

export type QualityPinusProps = {
  items: ItemProps[]
  pdfUrl?: string
  bannerProps: BannerProps
}

export type BannerProps = {
  bannerTitle: string
  bannerSubtitle: string
  bannerSeeMore: string
}

export const QualityPinus = ({
  items,
  pdfUrl,
  bannerProps
}: QualityPinusProps) => {
  const componentsLabels = useTranslation('components')
  const { isMobile } = useMobile(568)

  const [currentItem, setCurrentItem] = useState(0)

  return (
    <Flex
      // bg={headerBgColor}
      flexDirection="column"
      flex="1"
      alignItems={'center'}
    >
      <Flex
        flexDirection="column"
        maxWidth="1536px"
        flex="1"
        w={'100%'}
        // bg={headerBgColor}
        // bg="yellow"
        padding={{ base: '5% 5% 10% 5%', '2xl': '5% 0% 5% 3%' }}
      >
        <Text
          as={'h3'}
          variant={'h3'}
          color="green.900"
          fontWeight={'extrabold'}
          padding={{ base: '5% 0 5% 0', '2xl': '0 0 5% 0' }}
        >
          {componentsLabels.t('qualitiesPinusBerneck.title')}
        </Text>
        <Flex
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          justifyContent="space-between"
          w="100%"
          height={{ base: 'auto', md: '490px', lg: '540px', xl: '630px' }}
          // border="1px solid red"
        >
          <Flex
            w={{ base: '100%', md: '35%' }}
            h={{ base: '300px', sm: '500px', md: '100%' }}
            marginTop={{ base: '30px', md: '0' }}
            // css={isMobile ? { height: '40vh' } : { height: 'full' }}
            position="relative"
          >
            {items && items.length > 0 && (
              <Image
                h="100%"
                w="100%"
                objectFit={'cover'}
                src={'/img/banner_pinus_novo.jpg'}
                cursor="pointer"
                onClick={() => window.open(pdfUrl, '_blank')}
              />
            )}
            <Flex
              position="absolute"
              top={{ base: '35%', '2xl': '40%' }}
              justifyContent="center"
              alignItems="center"
              width="100%"
              // bgColor={'blackAlpha.400'}
              display="block"
            >
              <Flex
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
                bgColor="blackAlpha.100"
                rowGap="4px"
              >
                <Text
                  as="h3"
                  variant="h3"
                  fontSize={{ base: 'lg', '2xl': '4xl' }}
                  textColor="#133128"
                >
                  {bannerProps?.bannerTitle}
                </Text>
                <Text
                  fontWeight="500"
                  fontSize={{ base: 'medium', '2xl': 'md' }}
                  paddingBottom="2"
                >
                  {bannerProps?.bannerSubtitle}
                </Text>
                <Flex
                  title="See quality descriptions"
                  onClick={() => window.open(pdfUrl, '_blank')}
                  justifyContent="center"
                  alignItems="center"
                  alignSelf={'center'}
                  cursor="pointer"
                  padding={{ base: '16px 0', '2xl': '24px 0' }}
                  borderRadius="3xl"
                  bgColor="#a9bbaf"
                  width="85%"
                >
                  <Text fontWeight="bold" textColor="white">
                    {bannerProps?.bannerSeeMore}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            // border="1px solid red"
            width={{ base: '100%', md: '63%' }}
            flexDirection="column"
            padding={{ base: '1%', md: '0' }}
          >
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
                        base: '68px',
                        sm: '70px',
                        md: '70px',
                        lg: '100px',
                        xl: '130px',
                        '2xl': '150px'
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
                      <Box {...textureBtnContainer} zIndex="1">
                        <QualityBtnTexture texture={getTexture(i + 1)} />
                      </Box>
                      <Text
                        as={'h3'}
                        variant={'h3'}
                        color="green.900"
                        fontWeight={'bold'}
                        zIndex="2"
                      >
                        {item.number}
                      </Text>
                    </Center>
                  )
                })}
            </Flex>
            <Flex flexDirection="column" justifyContent="space-between">
              {items && items.length > 0 && (
                <Box margin={{ base: '5% 0 8% 0', sm: '2% 0 2% 0' }}>
                  <Text
                    as={'h3'}
                    variant={'h3'}
                    color="green.900"
                    fontWeight={'extrabold'}
                  >
                    {items[currentItem].name} ︱ COL {items[currentItem].col}
                  </Text>
                  <Text
                    variant={'productBody' as any}
                    w={{ base: '95%', sm: '90%' }}
                  >
                    <HtmlTextParser>
                      {items[currentItem].description}
                    </HtmlTextParser>
                  </Text>
                </Box>
              )}

              <Box margin={{ base: '0 0 2% 0', sm: '0 0 3% 0' }}>
                {items && items.length > 0 && (
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
                <Text
                  as={'h3'}
                  variant={'h3'}
                  color="green.900"
                  fontWeight={'extrabold'}
                >
                  {componentsLabels.t('product.usesAndApplications')}
                </Text>
                {items && items.length > 0 && (
                  <Text variant={'productBody' as any}>
                    <HtmlTextParser>
                      {items[currentItem].uses_and_applications}
                    </HtmlTextParser>
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
