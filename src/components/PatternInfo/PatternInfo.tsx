import { Heading, Flex, Box, Text, Center, Image } from "@chakra-ui/react"
import React, { ReactNode } from 'react'

export type PatternInfoProps = {
  title: string
  description: string
  icon: ReactNode
  onClick: () => void
}
export const PatternInfo = ({ 
  title="CONFIRA",
  description="Certificado de Qualidade",
  icon="",
  onClick
 }: PatternInfoProps) => {
  return (
    <Flex
      data-testid="pattern-info-box"
      align="center"
      bg="green.900"
      cursor="pointer"
      pos="relative"
      zIndex='base'
      onClick={onClick}
      _hover={{
        filter: 'brightness(1.2)'
      }}
      overflowY="hidden"
      overflowX="hidden"
      padding={{ base: '5%', sm: '5%', lg: '10%', xl: '3%'}}
    >
      <Box 
        h="100%"
      >
        <Image
          src="/img/grafismo_button_right.svg"
          filter={'brightness(0.65)'}
          pos="absolute"
          right={0}
          objectFit="cover"
          h="100%"
        />
      </Box>

      <Box 
        zIndex={10}
        padding={{ base: '1%', sm: '3%', lg: '2%', xl: '5%'}}
      >{icon}</Box>

      <Box 
        zIndex={10}
        padding={{ base: '5%', sm: '2%', lg: '2%', xl: '1%'}}
      >
        <Text as="h4"
          variant = {"h4" as any}
          fontWeight="medium"
          letterSpacing="-0.45px"
          color="green.600"
          fontSize = {{ base: '8px', sm: '12px', lg: '14px', xl: '18px'}}
        >{title}</Text>
        <Text as="h2"
          variant = {"h2" as any}
          fontWeight="extrabold"
          letterSpacing="-0.68px"
          color="white"
          fontSize = {{ base: '14px', sm: '22px', lg: '24px', xl: '32px'}}
        >{description}</Text>
      </Box>

  </Flex>
  )
}
