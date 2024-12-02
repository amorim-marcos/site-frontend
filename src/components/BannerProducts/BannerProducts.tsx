import { Heading, Flex, Box, Text, Center, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { CollectionBanner } from 'types/data/BPsPage'
import { ResponsiveCss } from 'types/responsive'

type SizeTypes = 'square' | 'rectangle-horizontal' | 'rectangle-vertical'

export type BannerProductsProps = {
  title?: string
  titleColor?: string
  customTitleElement?: JSX.Element
  subtitle?: string
  subtitleColor?: string
  customSubtitleElement?: JSX.Element
  bgColor?: string
  srcImg?: string
  imgAltText: string
  bannerSize?: ResponsiveCss
  onClick?: () => void
  sizeType?: SizeTypes
  urlLink?: string
  biggerImage?: boolean
  linkTo?: string
  // catalogBannerData?: CollectionBanner
  fillImage?: boolean
}
export const BannerProducts = ({
  title,
  titleColor,
  customTitleElement,
  subtitle,
  subtitleColor,
  customSubtitleElement,
  bgColor,
  srcImg,
  imgAltText,
  bannerSize,
  sizeType = 'square',
  onClick,
  linkTo,

  fillImage = false
}: // catalogBannerData
BannerProductsProps) => {
  const [mouseEnter, setMouseEnter] = useState(false)

  const getTopStyle = (sizeType: SizeTypes, mouseEnter: boolean) => {
    let topStyles = {}
    if (sizeType === 'rectangle-horizontal') {
      topStyles = mouseEnter ? '-14%' : '-17%'
      if (fillImage) {
        // topStyles = mouseEnter ? '-14%' : '-0%'
        topStyles = '0%'
      }
    } else {
      return mouseEnter ? '-1%' : '-3%'
    }
    return topStyles
  }

  const getRightStyle = (sizeType: SizeTypes, mouseEnter: boolean) => {
    let rightStyles = {}

    if (sizeType === 'rectangle-horizontal') {
      rightStyles = mouseEnter ? '-12%' : '-15%'
      if (fillImage) {
        // rightStyles = mouseEnter ? '-12%' : '-0%'
        rightStyles = '-0%'
      }
    } else {
      rightStyles = mouseEnter
        ? { base: '-17%', '2xl': '-13%' }
        : { base: '-20%', '2xl': '-20%' }
    }

    return rightStyles
  }

  const getWidthStyles = (sizeType: SizeTypes) => {
    let widthStyles = {}
    if (sizeType === 'square') {
      widthStyles = { base: '90%', lg: '95%' }
    } else {
      widthStyles = { base: '63%', lg: '68%' }
      if (fillImage) {
        widthStyles = { base: '100%', lg: '100%' }
      }
    }
    return widthStyles
  }

  const getHeigthStyles = (sizeType: SizeTypes) => {
    let heightStyles = {}
    if (sizeType === 'square') {
      heightStyles = '80%'
    } else {
      heightStyles = '130%'
      if (fillImage) {
        heightStyles = '100%'
      }
    }

    return heightStyles
  }

  const rightStyles = getRightStyle(sizeType, mouseEnter)

  const topStyles = getTopStyle(sizeType, mouseEnter)

  const widthStyles = getWidthStyles(sizeType)

  const heightStyles = getHeigthStyles(sizeType)

  return (
    <Link href={linkTo ?? ''}>
      <Flex
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        data-testid="pattern-info-box-photo"
        bg={bgColor}
        cursor="pointer"
        pos="relative"
        zIndex="base"
        _hover={{
          filter: 'brightness(90%)'
        }}
        overflowY="hidden"
        overflowX="hidden"
        borderRadius="33px"
        h={'100%'}
        w={'100%'}
        alignItems={'flex-end'}
        onClick={onClick}
      >
        <Box
          // border="1px solid red"
          position={'absolute'}
          right={rightStyles}
          top={topStyles}
          transition={'0.5s'}
          zIndex="base"
          h={heightStyles}
          // h={'100%'}
          // w={'100%'}
          w={widthStyles}
          // background={`url(${srcImg})`}
          // backgroundRepeat={'no-repeat'}
          // backgroundPosition={'center left'}
          // backgroundSize={'auto 100%'}
        >
          <Image
            alt={imgAltText}
            src={srcImg}
            objectFit="cover"
            objectPosition={'left bottom'}
            width={'100%'}
            height="100%"
          />
        </Box>

        <Flex
          zIndex={10}
          mr={bannerSize}
          // bg="black"
          flex="1"
          mb={{ base: '6%', sm: '25px', lg: '25px', xl: '40px' }}
          ml={{ base: '6%', sm: '25px', lg: '25px', xl: '40px' }}
          direction={{ base: 'row', sm: 'row', lg: 'row', xl: 'row' }}
        >
          <Flex
            // bg="yellow"
            flex="1"
            alignItems={'flex-start'}
            direction={{
              base: 'column',
              sm: 'column',
              lg: 'column',
              xl: 'column'
            }}
          >
            <Flex
              // bg="pink"
              flex="1"
              w={sizeType === 'rectangle-horizontal' ? '50%' : '100%'}
            >
              {customTitleElement ? (
                customTitleElement
              ) : (
                <Text
                  as="h1"
                  variant={'h1' as any}
                  color={titleColor}
                  lineHeight={{
                    base: '35px',
                    sm: '35px',
                    lg: '40px',
                    xl: '40px'
                  }}
                >
                  {title}
                </Text>
              )}
            </Flex>
            <Flex
              // bg="white"
              flex="1"
            >
              {customSubtitleElement ? (
                customSubtitleElement
              ) : (
                <Text
                  as="h4"
                  variant={'h4' as any}
                  color={subtitleColor}
                  fontWeight={'medium'}
                >
                  {subtitle}
                </Text>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  )
}
