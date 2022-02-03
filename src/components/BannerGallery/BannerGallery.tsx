import { Heading, Flex, Box, Text, Center, Image } from "@chakra-ui/react"

export type BannerGalleryProps = {
  title?: string
  bgColor?: string
  backgroundImage?: string
}
export const BannerGallery = (props: BannerGalleryProps) => {
  return (
    <Box
      backgroundImage={props.backgroundImage}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
      <Flex
        // bg="red"
        h={"610px"}
        w={"398px"}
        alignItems={"flex-end"}
      >
        <Flex
          bg={props.bgColor}
          borderTopRightRadius={"20px"}
          h={"70px"}
          p={"20px"}
          flex="0.98"

        >
            <Text as='h4'
                variant={'h4' as any}
                color={"white"}
            >{props.title}</Text>
        </Flex>
      </Flex>
    </Box>
  )
}
