import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react"
import Arrow from "@components/Arrow"
import { TrajectoryTab } from "./TrajectoryCarousel"

export type TrajectoryCarouselPanelProps = {
  tabData: TrajectoryTab
}

export const TrajectoryCarouselPanel = ({ tabData }: TrajectoryCarouselPanelProps) => (
  <Flex
    background="white.100"
    mt="40px"
    justifyContent="space-around"
    flexDirection={"row"}
  >
    <Flex
      flex={1}
      flexDirection="column"
      padding="67px"
    >
      
      <Heading textAlign="left" variant="h1" color="grey.300">{tabData.name}</Heading>
      <Flex
        alignItems="start"
      >
        <Arrow width='14px' height='19px' color="green.600" mt="5px"></Arrow>
        <Heading textAlign="left" variant="h3" color="green.900" ml="24px">{tabData.content.title}</Heading>
      </Flex>
      <Text ml="38px" mt="27px" textAlign="justify">{tabData.content.text}</Text>
    </Flex>
    <Box
      flex={1}
      alignSelf="center"
      padding="90px"
    >
      <Image src={tabData.content.image}></Image>
    </Box>
  </Flex>
)
