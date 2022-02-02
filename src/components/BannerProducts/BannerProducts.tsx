import { Heading, Flex, Box, Text, Center, Image } from "@chakra-ui/react"
import { ResponsiveCss } from "types/responsive"

export type BannerProductsProps = {
  title?: string
  titleColor?: string
  subtitle?: string
  subtitleColor?: string
  bgColor?: string
  srcImg?: string
  srcMargin?: ResponsiveCss
  onClick?: () => void
}
export const BannerProducts = ({ 
  title,
  titleColor,
  subtitle,
  subtitleColor,
  bgColor,
  srcImg,
  srcMargin,
  onClick
 }: BannerProductsProps) => {
  return (
    <Flex
      data-testid="pattern-info-box-photo"
      bg={bgColor}
      cursor="pointer"
      pos="relative"
      zIndex='base'
      _hover={{
        filter: 'brightness(90%)'
      }}
      overflowY="hidden"
      overflowX="hidden"
      borderRadius="33px"
      h={"100%"}
      w={"100%"}
      alignItems={"flex-end"}
      onClick={onClick}
    >

      <Box
        position={"absolute"}
        zIndex='base'
      >
        <Image
          src = {srcImg}
          m = {srcMargin}
        />
      </Box>
    
    <Flex 
        zIndex={10}
        // p={{ base: '5%', sm: '6%', lg: '8%', xl: '8%'}}
        p={{ base: '5%', sm: '20px', lg: '30px', xl: '35px'}}
        // bg="blue"
        flex="4"
        direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column' }}
      >
        <Flex 
          // bg="pink"
          flex="1"
        >
          <Text as="h1"
            variant = {"h1" as any}
            color={titleColor}
          >{title}</Text>
        </Flex>
        <Flex 
          // bg="white"
          flex="1"
        >
          <Text as="h4"
            variant = {"h4" as any}
            color={subtitleColor}
            fontWeight={"medium"}
          >{subtitle}</Text>
        </Flex>
      </Flex>

    </Flex>
  )
}
