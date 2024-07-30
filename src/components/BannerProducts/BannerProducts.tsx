import { Heading, Flex, Box, Text, Center, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { ResponsiveCss } from 'types/responsive'

type SizeTypes = 'square' | 'rectangle-horizontal' | 'rectangle-vertical'

export type BannerProductsProps = {
  title?: string
  titleColor?: string
  subtitle?: string
  subtitleColor?: string
  bgColor?: string
  srcImg?: string
  bannerSize?: ResponsiveCss
  onClick?: () => void
  sizeType?: SizeTypes
  urlLink?: string
  biggerImage?: boolean
  linkTo?: string
}
export const BannerProducts = ({
  title,
  titleColor,
  subtitle,
  subtitleColor,
  bgColor,
  srcImg,
  bannerSize,
  sizeType = 'square',
  onClick,
  linkTo,
  biggerImage = false
}: BannerProductsProps) => {
  const [mouseEnter, setMouseEnter] = useState(false)
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
          right={
            sizeType === 'rectangle-horizontal'
              ? mouseEnter
                ? '-12%'
                : '-15%'
              : mouseEnter
              ? { base: '-17%', '2xl': '-13%' }
              : { base: '-20%', '2xl': '-20%' }
          }
          top={
            sizeType === 'rectangle-horizontal'
              ? mouseEnter
                ? '-14%'
                : '-17%'
              : mouseEnter
              ? '-1%'
              : '-3%'
          }
          transition={'0.5s'}
          zIndex="base"
          h={sizeType === 'square' ? '80%' : '130%'}
          w={
            sizeType === 'square'
              ? { base: '90%', lg: '95%' }
              : { base: '63%', lg: '68%' }
          }
          // background={`url(${srcImg})`}
          // backgroundRepeat={'no-repeat'}
          // backgroundPosition={'center left'}
          // backgroundSize={'auto 100%'}
        >
          <Image
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
            </Flex>
            <Flex
              // bg="white"
              flex="1"
            >
              <Text
                as="h4"
                variant={'h4' as any}
                color={subtitleColor}
                fontWeight={'medium'}
              >
                {subtitle}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  )
}
