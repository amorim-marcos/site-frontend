import { Heading, Flex, Box, Text, Center, Image } from "@chakra-ui/react"
import React, { ReactNode } from 'react'

export type PatternInfoPhotoProps = {
  title?: string
  description?: string
  imgSrc?: string
  onClick?: () => void
}
export const PatternInfoPhoto = ({ 
  title="CONHEÇA",
  description="Nossas Certificações",
  imgSrc="",
  onClick
 }: PatternInfoPhotoProps) => {
  return (
    <Flex
      maxWidth="1500px"
      marginX="auto"
      data-testid="pattern-info-box-photo"
      align="center"
      bg="white.100"
      cursor="pointer"
      pos="relative"
      zIndex='base'
      onClick={onClick}
      _hover={{
        bgGradient: "linear(to-t, rgba(100,0,0,1), rgba(255,0,0,0))"
      }}
      overflowY="hidden"
      overflowX="hidden"
      backgroundImage={imgSrc}
      backgroundPosition="center"
      backgroundRepeat="no-repeat" 
      
    >
     <Flex
      // bg='pink'
      // flex='1'
      justifyItem={"center"}
    >
      <Box
        margin={{ base: '10% 8% 5% 8%', sm: '10% 8% 5% 8%', lg: '15% 8% 5% 8%', xl: '20% 8% 5% 8%'}}
        h="100%"
        w={{ base: '300px', sm: '500px', lg: '480px', xl: '600px'}}
        // bg='blue'
      >
        <Text as="h4"
          variant = {"h4" as any}
          fontWeight="medium"
          letterSpacing="-0.45px"
          color="green.900"
        >{title}</Text>
        <Text as="h2"
          variant = {"h2" as any}
          fontWeight="extrabold"
          letterSpacing="-0.68px"
          color="white"
        >{description}</Text>

      </Box>
    
    </Flex>

      

  </Flex>
  )
}
