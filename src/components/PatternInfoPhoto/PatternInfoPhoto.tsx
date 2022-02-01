import { Heading, Flex, Box, Text, Center, Image } from "@chakra-ui/react"
import React, { ReactNode } from 'react'
import GrafismLeft from "@components/GrafismLeft"

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
      align="center"
      bg="white.100"
      cursor="pointer"
      pos="relative"
      zIndex='base'
      onClick={onClick}
      _hover={{
        filter: 'brightness(90%)'
      }}
      overflowY="hidden"
      overflowX="hidden"
      backgroundImage="/assets/imgs/banner_certificacoes.png"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      padding={{ base: '8%', sm: '8%', lg: '10%', xl: '8%'}}
    >
      <Box 
        // h="100%"
        position={"absolute"}
        zIndex='base'
        // bg="red"
      >
        <GrafismLeft
            stroke = {"#B9B9B9"}
            height = {{ base: '200px', sm: '200px', lg: '250px', xl: '250px'}}
            width = {{ base: '200px', sm: '200px', lg: '250px', xl: '250px'}}
            opacity = '0.4'
            transform="translate(100)"
          />
      </Box>

      <Flex 
        zIndex={10}
        mt={{ base: '5%', sm: '2%', lg: '2%', xl: '13%'}}
        // bg="blue"
        flex="4"
        direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column' }}
      >
        <Flex 
          // bg="pink"
          flex="1"
        >
          <Text as="h5"
            variant = {"h5" as any}
            // fontWeight="bold"
            // letterSpacing="-0.45px"
            color="green.900"
          >{title}</Text>
        </Flex>
        <Flex 
          // bg="white"
          flex="1"
        >
          <Text as="h2"
            variant = {"h2" as any}
            fontWeight="extrabold"
            letterSpacing="-0.68px"
            color="white"
          >{description}</Text>
        </Flex>
      </Flex>

</Flex>
  )
}
