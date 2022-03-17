import { Box, Flex, Image, Text } from '@chakra-ui/react'

import { Link } from 'react-scroll'
import { ZoomInIcon } from '@components/Icons'

export interface IntroProps {
  productName: string
  productImgBg: string
  productDescription: string
  textureTopMenuImg: string
}

export const Intro = (props: IntroProps) => (
  <Flex
    w="100%"
    minHeight="797px"
    bgImg={props.productImgBg}
    bgRepeat="repeat"
    pl={{ '2xl': '205px' }}
    align="center"
    justify={{ base: 'center', '2xl': 'inherit' }}
    pos="relative"
  >
    <Box
      pos="absolute"
      // border="1px solid red"
      top="0"
      right="0"
      w={{ base: '100vw', sm: '410px' }}
      h="538px"
    >
      <Image
        src={props.textureTopMenuImg}
        w="100%"
        h="100%"
        objectFit={'cover'}
        objectPosition={{ base: 'none', sm: 'right' }}
        // boxSize={['642px', '538px']}
      />
    </Box>

    <Flex
      data-testid="texture-attr"
      h={{ base: 'fit-content', '2xl': '476px' }}
      w={{ base: '100%', sm: '476px' }}
      direction="column"
      padding={{ base: '50px', sm: '78px 71px 60px 75px' }}
      bg="green.100"
      pos="relative"
      overflow={'hidden'}
    >
      <Text
        // fontSize={{ base: '50px', '2xl': '53px' }}
        variant={'h2' as any}
        fontWeight={800}
        letterSpacing="-1.06px"
        color="green.900"
        pb="24px"
      >
        {props.productName}
      </Text>

      <Text
        fontSize={{ base: '20px', '2xl': '23px' }}
        letterSpacing="-0.23px"
        color="gray.300"
        pb="22px"
      >
        {props.productDescription}
      </Text>

      <Box h="3px" w="87px" bg="green.600" />

      <Box cursor="pointer" pos="absolute" bottom="29px" right="29px">
        <Link to="texture-props" smooth offset={-80}>
          <ZoomInIcon />
        </Link>
      </Box>
    </Flex>
  </Flex>
)
