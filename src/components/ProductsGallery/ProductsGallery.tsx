import { Box, Flex, Button } from '@chakra-ui/react'

import BannerProducts from '@components/BannerProducts'
import { BannerProductsProps } from '@components/BannerProducts/BannerProducts'
import ArrowIcon from '@components/Icons/ArrowIcon'
import useMobile from 'hooks/useMobile'

import { useEffect, useState } from 'react'

export type ProductsGalleryProps = {
  products: BannerProductsProps[]
}
export const ProductsGallery = ({ products }: ProductsGalleryProps) => {
  const [margin, setMargin] = useState(0)
  const [startItem, setStartItem] = useState(0)
  const [index, setIndex] = useState(0)
  const [endItem, setEndItem] = useState(2)
  const { width } = useMobile(568)
  const [hoverBtnControl, setHoverBtnControl] = useState(false)

  function next() {
    if (startItem < products.length - 3 && endItem < products.length - 1) {
      setStartItem(startItem + 1)

      setEndItem(endItem + 1)

      if (!!width && width >= 1920) {
        setMargin(margin - 590)
      } else {
        setMargin(margin - 31)
      }
    }
  }

  function back() {
    if (startItem > 0 && endItem > 0 + 2) {
      setStartItem(startItem - 1)

      setEndItem(endItem - 1)

      if (!!width && width >= 1920) {
        setMargin(margin + 590)
      } else {
        setMargin(margin + 31)
      }
    }
  }

  function mobileNext() {
    if (index < products.length - 1) {
      setIndex(index + 1)
    }
  }
  function mobileBack() {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  useEffect(() => {
    setMargin(0)
    setIndex(0)
    console.log(width)
  }, [width])

  return products.length > 0 ? (
    <Flex
      overflow="hidden"
      w="100vw"
      maxWidth={'1920px'}
      marginX="auto"
      marginY={{ base: '10%', md: '0' }}
      flexDirection={'column'}
      paddingBottom={'6%'}
    >
      <Box>
        <Flex marginX="5%" position={'relative'}>
          <Flex
            display={{ base: 'none', md: 'flex' }}
            transition={'0.5s'}
            marginLeft={
              !!width && width >= 1920 ? `${margin}px` : `${margin}vw`
            }
          >
            {products.map((item, index) => {
              return (
                <Box
                  transition={'0.5s'}
                  key={item.title}
                  w="28vw"
                  maxWidth={'537px'}
                  h={{
                    base: '535px',
                    sm: '260px',
                    md: '316px',
                    lg: '403px',
                    xl: '520px',
                    '2xl': '650px'
                  }}
                  marginRight={!!width && width >= 1920 ? '55px' : '2.8vw'}
                  opacity={index < startItem || index > endItem ? '0' : '1'}
                >
                  <BannerProducts
                    title={item.title}
                    titleColor={item.titleColor}
                    subtitle={item.subtitle}
                    subtitleColor={item.subtitleColor}
                    bgColor={item.bgColor}
                    srcImg={item.srcImg}
                    onClick={item.onClick}
                    bannerSize={item.bannerSize}
                  />
                </Box>
              )
            })}
          </Flex>

          <Flex
            display={{ base: 'block', md: 'none' }}
            transition={'0.5s'}
            key={products[index].title}
            w="100%"
            h={{
              base: '100vw',
              md: '316px',
              lg: '403px',
              xl: '520px',
              '2xl': '650px'
            }}
          >
            <BannerProducts
              title={products[index].title}
              titleColor={products[index].titleColor}
              subtitle={products[index].subtitle}
              subtitleColor={products[index].subtitleColor}
              bgColor={products[index].bgColor}
              srcImg={products[index].srcImg}
              onClick={products[index].onClick}
              bannerSize={products[index].bannerSize}
            />
          </Flex>

          <Flex
            position="absolute"
            left="0px"
            right="0px"
            marginX="auto"
            w="fit-content"
            bottom={{ base: '-37px', sm: '-25px', lg: '-30px', xl: '-38px' }}
          >
            <Button
              onMouseEnter={() => setHoverBtnControl(true)}
              onMouseLeave={() => setHoverBtnControl(false)}
              variant="no-border"
              background="grey.300"
              color="grey.150"
              w={{ base: '70px', sm: '50px', lg: '60px', xl: '77px' }}
              h={{ base: '70px', sm: '50px', lg: '60px', xl: '77px' }}
              _hover={{
                background: 'green.600',
                color: 'white.100'
              }}
              onClick={() => {
                back()
                mobileBack()
              }}
            >
              <ArrowIcon
                direction="left"
                stroke={hoverBtnControl ? 'white.100' : 'grey.200'}
                width="40%"
              />
            </Button>
            <Button
              onMouseEnter={() => setHoverBtnControl(true)}
              onMouseLeave={() => setHoverBtnControl(false)}
              variant="no-border"
              background="grey.300"
              color="grey.150"
              w={{ base: '70px', sm: '50px', lg: '60px', xl: '77px' }}
              h={{ base: '70px', sm: '50px', lg: '60px', xl: '77px' }}
              _hover={{
                background: 'green.600',
                color: 'white.100'
              }}
              onClick={() => {
                next()
                mobileNext()
              }}
            >
              <ArrowIcon
                width="40%"
                stroke={hoverBtnControl ? 'white.100' : 'grey.200'}
              />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  ) : (
    <h1>No products passed</h1>
  )
}
