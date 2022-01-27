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
      data-testid="pattern-info-box-photo"
      bg="white.100"
      cursor="pointer"
      pos="relative"
      zIndex='base'
      onClick={onClick}
      _hover={{
        filter: 'brightness(1.2)'
      }}
      overflowY="hidden"
      overflowX="hidden"
      padding={{ base: '10%', sm: '2%', lg: '2%', xl: '15%'}}
    >
      
      <Box 
        //bg="tomato.100"
      >
        <Image
          src="/assets/imgs/banner_certificacoes.png"
          filter={'brightness(0.65)'}
          pos="absolute"
          // right={0}
          // objectFit="cover"
          // h="100%"
        />
      </Box>

      <Box 
        zIndex={10}
        padding={{ base: '5%', sm: '2%', lg: '2%', xl: '5%'}}
      >
        <Text as="h4"
          variant = {"h4" as any}
          fontWeight="medium"
          letterSpacing="-0.45px"
          color="green.600"
        >{title}</Text>
        <Text as="h2"
          variant = {"h2" as any}
          fontWeight="extrabold"
          letterSpacing="-0.68px"
          color="white"
        >{description}</Text>
      </Box>

      

  </Flex>
  )
}
