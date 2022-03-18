import React, { ReactNode } from 'react'
import { Heading, Box, Flex, Text } from '@chakra-ui/react'

export type HeaderTitleProps = {
  // Heading
  children: ReactNode | string
  HeadingColor?: string
  headerType?: string
  // Box
  LineDisplay?: 'flex' | 'none'
  borderAlign?: 'start' | 'center'
  LineColor?: string
}

export const HeaderTitle = ({
   // Heading
  children,
  HeadingColor = 'white.100',
  headerType = 'h3',
  // Box
  LineDisplay = 'flex',
  borderAlign = 'start',
  LineColor = 'green.600',

}: HeaderTitleProps) => {
  return (
    <Box
      //w={['87px', '50px', '30px', '20px']} 
      bg="blue"
      w="100%"
    >
      <Heading 
        variant='h1'
        color={HeadingColor}
        fontFamily = 'body'
        fontWeight= 'extrabold'
        fontSize = {{ base: '20px', sm: '55px', lg: '60px', xl: '70px'}}
      >{children}</Heading>

      <Flex
        display={LineDisplay}
        h={['10px', '20px', '30px', '25px']} 
        bg="blue.100"
        justifyContent={borderAlign}
        alignItems="flex-end"
      >
        <Box 
          h="3px"
          w={['20px', '50px', '70px', '80px']} 
          bg={LineColor}
          borderRadius="20px"
        />
      </Flex>
    
    </Box>
  )
}