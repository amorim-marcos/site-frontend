import { Flex, Heading, Text, Image, Center, Box } from '@chakra-ui/react'
import { GrafismProductWithBP } from './GrafismProductWithBP/GrafismProductWithBP'

export type ProductWithBPProps = {
  title?: string
  description?: string
  imgSrc?: string
  backgroundColor?: string
  btnColor?: string
  btnHoverColor?: string
  textColor?: string
  btnTextColor?: string
  btnText?: string
}

export const ProductWithBP = ({
  imgSrc = '/img/hdf_plus_bp.png',
  description = 'Description',
  title = 'BERNECK® com BP',
  btnHoverColor = '#96BC87',
  btnColor = '#ACCC9F',
  backgroundColor = 'white.100',
  textColor = '#72675E',
  btnTextColor = '#FFF',
  btnText = 'Btn text'
}: ProductWithBPProps) => {
  return (
    <Flex
      marginX="auto"
      w="100%"
      bg={backgroundColor}
      alignItems="center"
      justifyContent="flex-start"
      paddingX="30px"
      boxShadow="0px 0px 15px #00000007"
      position="relative"
      h="23.7vw"
      maxHeight="457px"
    >
      <Box position="absolute" top="0" left="0">
        <GrafismProductWithBP
          width={{
            base: '50px',
            sm: '70px',
            md: '80px',
            lg: '95px',
            xl: '110px',
            '2xl': '131px'
          }}
          color="#dfdbd9"
        />
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        flexDirection="column"
        width="50%"
        position="relative"
      >
        <Heading
          fontWeight="light"
          fontSize={{
            base: '10px',
            sm: '12px',
            md: '16px',
            lg: '20px',
            xl: '25px',
            '2xl': '33px'
          }}
          color={textColor}
        >
          {title}
        </Heading>
        <Text
          color={textColor}
          fontSize={{
            base: '5px',
            sm: '6px',
            md: '9px',
            lg: '12px',
            xl: '15px',
            '2xl': '18px'
          }}
          width="90%"
          marginTop={{
            base: '2px',
            sm: '6px',
            md: '5px',
            lg: '9px',
            xl: '13px',
            '2xl': '20px'
          }}
        >
          {description}
        </Text>
      </Flex>
      <Image
        position="absolute"
        top="-1.5%"
        right="-3%"
        src={imgSrc}
        width="52vw"
        maxWidth="998px"
      />

      <Center
        position="absolute"
        bottom="-10%"
        left="5.7%"
        bg={btnColor}
        _hover={{ bg: btnHoverColor }}
        h={{
          base: '20px',
          sm: '30px',
          md: '50px',
          lg: '60px',
          xl: '70px',
          '2xl': '78px'
        }}
        width="40%"
        borderRadius="17px"
        cursor="pointer"
      >
        <Heading
          fontSize={{
            base: '5px',
            sm: '6px',
            md: '8.5px',
            lg: '12px',
            xl: '15px',
            '2xl': '18px'
          }}
          color={btnTextColor}
        >
          {btnText}
        </Heading>
      </Center>
    </Flex>
  )
}
