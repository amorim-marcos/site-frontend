import { Box } from "@chakra-ui/react"

export const TrajectoryCarouselPanel = ({ tabData }) => (
  <Box
    background="#FFFFFF"
    mt="40px"
    pt="38px"
    pr="157px"
    pl="157px"
  >
    {tabData.name}
  </Box>
)
