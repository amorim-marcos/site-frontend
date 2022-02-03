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
  bannerSize?: ResponsiveCss
  onClick?: () => void
}
export const BannerProducts = (props: BannerProductsProps) => {
  return (
    <Flex
      data-testid="pattern-info-box-photo"
      bg={props.bgColor}
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
      onClick={props.onClick}
    >

      <Box
        position={"absolute"}
        zIndex='base'
      >
        <Image
          src = {props.srcImg}
          m = {props.srcMargin}
        />
      </Box>
    
      <Flex 
        zIndex={10}
        mr={props.bannerSize}
        // bg="black"
        flex="1"
        mb = {{ base: '6%', sm: '20px', lg: '25px', xl: '40px'}}
        ml = {{ base: '6%', sm: '20px', lg: '25px', xl: '40px'}}
        direction={{ base: 'row', sm: 'row', lg: 'row', xl: 'row' }}
      >
        <Flex 
          // bg="yellow"
          flex="1"
          alignItems={"flex-start"}
          direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column' }}
        >
          <Flex 
            // bg="pink"
            flex="1"
          >
            <Text as="h1"
              variant = {"h1" as any}
              color={props.titleColor}
            >{props.title}</Text>
          </Flex>
          <Flex 
            // bg="white"
            flex="1"
          >
            <Text as="h4"
              variant = {"h4" as any}
              color={props.subtitleColor}
              fontWeight={"medium"}
            >{props.subtitle}</Text>
          </Flex>
        </Flex>

      </Flex>

    </Flex>
  )
}
