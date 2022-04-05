import { Heading, Flex, Box, Text, Center, Image } from '@chakra-ui/react'
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
  biggerImage = false
}: BannerProductsProps) => {
  const [mouseEnter, setMouseEnter] = useState(false)
  return (
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
              ? '-1%'
              : '-5%'
            : biggerImage
            ? mouseEnter
              ? { base: '-1%', lg: '-3%' }
              : { base: '-5%', lg: '-9%' }
            : mouseEnter
            ? { base: '-10%', '2xl': '-17%' }
            : { base: '-15%', '2xl': '-20%' }
        }
        top={
          sizeType === 'rectangle-horizontal'
            ? mouseEnter
              ? '-14%'
              : '-17%'
            : mouseEnter
            ? '-3%'
            : '-7%'
        }
        transition={'0.5s'}
        zIndex="base"
        h={sizeType === 'square' ? '90%' : '130%'}
        w={
          sizeType === 'square'
            ? { base: '90%', lg: '90%' }
            : { base: '63%', lg: '63%' }
        }
        background={`url(${srcImg})`}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={'center left'}
        backgroundSize={'auto 100%'}
        // border="1px solid red"
      ></Box>

      <Flex
        zIndex={10}
        mr={bannerSize}
        // bg="black"
        flex="1"
        mb={{ base: '6%', sm: '20px', lg: '25px', xl: '40px' }}
        ml={{ base: '6%', sm: '20px', lg: '25px', xl: '40px' }}
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
              lineHeight={{ base: '35px', sm: '35px', lg: '40px', xl: '50px' }}
            >
              {title}
            </Text>

            {/* <Flex
                bg="red"
                alignItems={'flex-end'}
              >
                <Text as="h3" 
                  variant={'h3' as any}
                  color={titleColor}
                  // lineHeight={{ base: '35px', sm: '35px', lg: '40px', xl: '50px' }}
                >
                  ®
                </Text>
              </Flex> */}
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
  )
}
