import { Flex, Heading, Text, Image, Center, Box, Link } from '@chakra-ui/react'
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
      h={
        type === 'bottomBtn'
          ? { base: 'auto', sm: '23.7vw' }
          : { base: 'auto', sm: '22.5vw' }
      }
      maxHeight={type === 'bottomBtn' ? '457px' : '432px'}
      flexDirection={{ base: 'column', sm: 'row' }}
      paddingTop={{ base: '30px', sm: '0px' }}
      marginBottom="30px"
    >
      <Box position={'absolute'} {...arrowDistance(type)} left="0">
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
        width={{ base: '100%', sm: '50%' }}
        position="relative"
      >
        <Heading
          fontWeight="light"
          fontSize={{
            base: '14px',
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
            base: '12px',
            sm: '6px',
            md: '9px',
            lg: '12px',
            xl: '15px',
            '2xl': '18px'
          }}
          width={{ base: '100%', sm: '75%' }}
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
          <Link href="/products/plus-berneck">
            <Center
              bg={btnColor}
              _hover={{ bg: btnHoverColor }}
              h={{
                base: '40px',
                sm: '30px',
                md: '40px',
                lg: '50px',
                xl: '60px',
                '2xl': '78px'
              }}
              width={{ base: '90%', sm: '75%' }}
              marginY={{ base: '15px', sm: '0' }}
              borderRadius={{
                base: '12px',
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
              padding="10px"
            >
              <Heading
                fontSize={{
                  base: '10px',
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
          </Link>
        )}
      </Flex>

      {type === 'bottomBtn' && (
        <Link href="/products/plus-berneck">
          <Center
            position={{ base: 'relative', sm: 'absolute' }}
            bottom={{ base: '0', sm: '-10%' }}
            left={{ base: '0', sm: '5.7%' }}
            bg={btnColor}
            _hover={{ bg: btnHoverColor }}
            marginY={{ base: '15px', sm: '0' }}
            h={{
              base: '40px',
              sm: '30px',
              md: '50px',
              lg: '60px',
              xl: '70px',
              '2xl': '78px'
            }}
            width={{ base: '90%', sm: '40%' }}
            borderRadius={{
              base: '12px',
              sm: '5px',
              md: '8px',
              lg: '11px',
              xl: '14px',
              '2xl': '17px'
            }}
            cursor="pointer"
            textAlign="center"
            padding="10px"
          >
            <Heading
              fontSize={{
                base: '10px',
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
        </Link>
      )}

      <Image
        position={{ base: 'relative', sm: 'absolute' }}
        top={{ base: '0', sm: type === 'bottomBtn' ? '-1.5%' : '-17%' }}
        right={{ base: '0', sm: type === 'bottomBtn' ? '-3%' : '-3%' }}
        src={imgSrc}
        width={{ base: '117vw', sm: '52vw' }}
        maxWidth={{ base: '117vw', sm: '998px' }}
      />
    </Flex>
  )
}
