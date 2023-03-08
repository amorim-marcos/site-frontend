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
  href?: string
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
  grafismColor = '#dfdbd9',
  href = '/products/plus-berneck'
}: ProductWithBPProps) => {
  return (
    <Flex
      bg={backgroundColor}
      // bg="blue"
      alignItems="center"
      justifyContent="flex-start"
      boxShadow="0px 0px 15px #00000007"
      position="relative"
      h={
        type === 'bottomBtn'
          ? { base: 'auto', md: '24vw' }
          : { base: 'auto', md: '30vw' }
      }
      maxHeight={type === 'bottomBtn' ? '550px' : '432px'}
      w="90%"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      {/* GRAFISMO */}
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

      {/* TEXTOS */}
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width={{ base: '100%', md: '50%', '2xl': '30%' }}
        position="relative"
        // bg="pink"
        padding={{ base: '5%', md: '0', '2xl': '1%' }}
      >
        <Text
          as={'h3'}
          variant={'h3'}
          fontWeight="light"
          color={textColor}
          textAlign="center"
          zIndex={'docked'}
        >
          {title}
        </Text>
        <Text
          as={'h6'}
          variant={'h6'}
          fontWeight="light"
          color={textColor}
          width={{ base: '100%', sm: '75%' }}
          marginTop={{
            base: '7px',
            sm: '10px',
            md: '15px',
            lg: '20px',
            xl: '25px',
            '2xl': '30px'
          }}
          textAlign="center"
          zIndex={'docked'}
        >
          {description}
        </Text>

        {type === 'centralizedBtn' && (
          <Link href={href} _hover={{ outline: 'none' }} position="relative">
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
              width={{ base: '90%' }}
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
              <Text
                as={'h6'}
                variant={'h6'}
                color={btnTextColor}
                textAlign={'center'}
              >
                {btnText}
              </Text>
            </Center>
          </Link>
        )}
      </Flex>

      {type === 'bottomBtn' && (
        <Link href={href}>
          <Center
            position={{ base: 'relative', md: 'absolute' }}
            bottom={{ base: '0', md: '-10%' }}
            left={{ base: '0', md: '5.7%', '2xl': '3%' }}
            bg={btnColor}
            marginX={{ base: 'auto', lg: '0' }}
            _hover={{ bg: btnHoverColor }}
            marginY={{ base: '15px', md: '0' }}
            h={{
              base: '50px',
              md: '55px',
              lg: '60px',
              xl: '70px',
              '2xl': '78px'
            }}
            width={{ base: '90%', md: '40%' }}
            borderRadius={{
              base: '12px',
              md: '8px',
              lg: '11px',
              xl: '14px',
              '2xl': '17px'
            }}
            cursor="pointer"
            textAlign="center"
            padding="10px"
          >
            <Text as={'h6'} variant={'h6'} color={btnTextColor}>
              {btnText}
            </Text>
          </Center>
        </Link>
      )}

      {/* IMAGEM */}
      <Image
        position={{ base: 'relative', md: 'absolute' }}
        top={{ base: '0', md: type === 'bottomBtn' ? '-1.5%' : '-17%' }}
        right={{ base: '0', md: type === 'bottomBtn' ? '-3%' : '-3%' }}
        src={imgSrc}
        width={{ base: '100vw', md: '52vw' }}
        maxWidth={{ base: '90vw', md: '998px' }}
        zIndex="base"
      />
    </Flex>
  )
}
