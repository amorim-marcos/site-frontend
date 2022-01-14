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
  type?: 'centralizedBtn' | 'bottomBtn'
  grafismColor?: string
}

function arrowDistance(type: 'centralizedBtn' | 'bottomBtn') {
  if (type === 'bottomBtn') {
    return { top: '0' }
  }

  return { bottom: '15%' }
}

export const ProductWithBP = ({
  imgSrc = '/img/mdp_bp.png',
  description = 'Description',
  title = 'BERNECK® com BP',
  btnHoverColor = '#96BC87',
  btnColor = '#ACCC9F',
  backgroundColor = 'white.100',
  textColor = '#72675E',
  btnTextColor = '#FFF',
  btnText = 'Btn text',
  type = 'bottomBtn',
  grafismColor = '#dfdbd9'
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
      h={type === 'bottomBtn' ? '23.7vw' : '22.5vw'}
      maxHeight={type === 'bottomBtn' ? '457px' : '432px'}
    >
      <Box position="absolute" {...arrowDistance(type)} left="0">
        <GrafismProductWithBP
          type={type}
          width={{
            base: '50px',
            sm: '60px',
            md: '75px',
            lg: '90px',
            xl: '100px',
            '2xl': '120px'
          }}
          color={grafismColor}
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
          width="84%"
          marginTop={{
            base: '7px',
            sm: '10px',
            md: '15px',
            lg: '20px',
            xl: '25px',
            '2xl': '30px'
          }}
        >
          {description}
        </Text>
        {type === 'centralizedBtn' && (
          <Center
            bg={btnColor}
            _hover={{ bg: btnHoverColor }}
            h={{
              base: '20px',
              sm: '30px',
              md: '40px',
              lg: '50px',
              xl: '60px',
              '2xl': '78px'
            }}
            width="75%"
            borderRadius={{
              base: '2px',
              sm: '5px',
              md: '8px',
              lg: '11px',
              xl: '14px',
              '2xl': '17px'
            }}
            cursor="pointer"
            marginTop={{
              base: '7px',
              sm: '10px',
              md: '15px',
              lg: '20px',
              xl: '25px',
              '2xl': '30px'
            }}
          >
            <Heading
              fontSize={{
                base: '4px',
                sm: '5px',
                md: '7.5px',
                lg: '11px',
                xl: '14px',
                '2xl': '17px'
              }}
              color={btnTextColor}
            >
              {btnText}
            </Heading>
          </Center>
        )}
      </Flex>
      <Image
        position="absolute"
        top={type === 'bottomBtn' ? '-1.5%' : '-17%'}
        right={type === 'bottomBtn' ? '-3%' : '-3%'}
        src={imgSrc}
        width="52vw"
        maxWidth="998px"
      />

      {type === 'bottomBtn' && (
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
          borderRadius={{
            base: '2px',
            sm: '5px',
            md: '8px',
            lg: '11px',
            xl: '14px',
            '2xl': '17px'
          }}
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
      )}
    </Flex>
  )
}
