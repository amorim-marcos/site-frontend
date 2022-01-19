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
          base: 'column',
          lg: 'row'
        }}
      >
        <Flex
          flex={{
            base: 1,
            lg: 2,
            xl: 1
          }}
          flexDirection="column"
          padding={{
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "67px",
            xl: "67px"
          }}
        >
          
          <Heading 
            textAlign="left" 
            variant="h1" 
            fontSize={{ base: '18px', sm: '32px', lg: '40px', xl: '50px'}}
            color="grey.300"
          >{tabData.name}</Heading>
          <Flex
            alignItems="start"
          >
            <Arrow 
              width='14px' 
              height='19px' 
              color="green.600" 
              mt={{base: "5px", md: "8px"}}
              ></Arrow>
            <Heading 
              textAlign="left" 
              variant="h3" 
              fontSize = {{ base: '10px', sm: '22px', lg: '24px', xl: '30px'}}
              color="green.900" 
              ml="24px"
            >{tabData.content.title}</Heading>
          </Flex>
          <Text 
            ml={{base: "15px", md: "38px"}} 
            mt={{base: "10px", md: "27px"}} 
            fontSize = {{ base: '8px', sm: '14px', lg: '16px', xl: '20px'}}
            textAlign="left"
          >{tabData.content.text}</Text>
        </Flex>
        <Box
          flex={1}
          padding={{
            base: "0",
            md: "50px",
            lg: "0",
            xl: "90px"
          }}
          alignSelf="center"
        >
          <Image width="90%" src={tabData.content.image}></Image>
        </Box>
      </Flex>
  )
}
