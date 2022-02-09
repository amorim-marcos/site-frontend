import { Heading, Flex, Box, Text, Center, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { ResponsiveCss } from 'types/responsive'

export type BannerProductsProps = {
  title?: string
  titleColor?: string
  subtitle?: string
  subtitleColor?: string
  bgColor?: string
  srcImg?: string
  bannerSize?: ResponsiveCss
  onClick?: () => void
  sizeType?: 'square' | 'rectangle'
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
  onClick
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
        position={'absolute'}
        right={mouseEnter ? '-1%' : '-10%'}
        top={mouseEnter ? '-1%' : '-10%'}
        transition={'0.5s'}
        zIndex="base"
        h={sizeType === 'square' ? '100%' : '120%'}
        w={sizeType === 'square' ? '100%' : '60%'}
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
          >
            <Text as="h1" variant={'h1' as any} color={titleColor}>
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
  )
}
