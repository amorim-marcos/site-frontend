import React, { useEffect } from "react"
import { Flex, Box, Heading, Text, Image, SlideFade } from "@chakra-ui/react"
import Arrow from "@components/Arrow"
import { TrajectoryTab } from "./TrajectoryCarousel"

export type TrajectoryCarouselPanelProps = {
  tabData: TrajectoryTab
  myIndex: number
  tabIndex: number
}

export const TrajectoryCarouselPanel = ({ tabData, myIndex, tabIndex }: TrajectoryCarouselPanelProps) => {
  const [active, setActive] = React.useState(false)

  useEffect(() => {
    if(tabIndex == myIndex){
      setActive(true)
    }else{
      setActive(false)
    }
  }, [tabIndex])

  return (
      <Flex
        opacity={(active) ? '1' : '0'}
        transition={(active) ? 'opacity 0.5s linear;' : 'none'}
        background="white.100"
        mt="40px"
        justifyContent="space-around"
        flexDirection={{
          xs: 'column',
          sm: 'column',
          md: 'column',
          lg: 'column',
          xl: 'row'
        }}
      >
        <Flex
          flex={1}
          flexDirection="column"
          padding={{
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "67px",
            xl: "67px"
          }}
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
          padding={{
            xs: "50px",
            sm: "50px",
            md: "50px",
            lg: "90px",
            xl: "90px"
          }}
        >
          <Image width="100%" alignSelf="center" src={tabData.content.image}></Image>
        </Box>
      </Flex>
  )
}
