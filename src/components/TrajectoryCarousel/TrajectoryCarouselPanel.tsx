import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react"
import { TrajectoryTab } from "./TrajectoryCarousel"

export type TrajectoryCarouselPanelProps = {
  tabData: TrajectoryTab
}

export const TrajectoryCarouselPanel = ({ tabData }: TrajectoryCarouselPanelProps) => (
  <Flex
    background="#FFFFFF"
    mt="40px"
    padding="10px"
    justifyContent="space-around"
    flexDirection={"row"}
  >
    <Flex
      flex={2}
      flexDirection="column"
    >
      <Heading textAlign="left" variant="h1">{tabData.name}</Heading>
      <Heading textAlign="left" variant="h2">{tabData.content.title}</Heading>
      <Text textAlign="justify">{tabData.content.text}</Text>
    </Flex>
    <Box
      flex={1}
      alignSelf="center"
    >
      <Image margin="auto" src={tabData.content.image} alt='Dan Abramov'></Image>
    </Box>
  </Flex>
)
