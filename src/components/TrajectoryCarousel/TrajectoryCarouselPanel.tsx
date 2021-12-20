import { Box, Heading, Text} from "@chakra-ui/react"

export const TrajectoryCarouselPanel = ({ tabData }) => (
  <Box
    background="#FFFFFF"
    mt="40px"
    pt="38px"
    pr="157px"
    pl="157px"
  >
    <Heading variant="h1">{tabData.name}</Heading>
    <Heading variant="h2">{tabData.content.title}</Heading>
    <Text>{tabData.content.text}</Text>
  </Box>
)
