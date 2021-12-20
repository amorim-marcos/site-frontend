import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react"
import { TrajectoryTab } from "./TrajectoryCarousel"

export type TrajectoryCarouselPanelProps = {
  tabData: TrajectoryTab
}

export const TrajectoryCarouselPanel = ({ tabData }: TrajectoryCarouselPanelProps) => (
  <Flex
    background="#FFFFFF"
    mt="40px"
    padding="67px"
    justifyContent="space-around"
    flexDirection={"row"}
  >
    <Flex
      flex={1}
      flexDirection="column"
    >
      <Heading textAlign="left" variant="h1" color="grey.300">{tabData.name}</Heading>
      <Heading textAlign="left" variant="h3" color="green.900">{tabData.content.title}</Heading>
      <Text ml="38px" mt="27px" textAlign="justify">{tabData.content.text}</Text>
      
    </Flex>
    <Box
      flex={1}
      alignSelf="center"
    >
      <Image margin="auto" src={tabData.content.image}></Image>
    </Box>
  </Flex>
)
