import React, { useEffect } from 'react'
import { Flex, Box, Heading, Text, Image, SlideFade } from '@chakra-ui/react'
import Arrow from '@components/Arrow'
import { TrajectoryTab } from './TrajectoryCarousel'
import HtmlTextParser from '@components/HtmlTextParser'

export type TrajectoryCarouselPanelProps = {
  tabData: TrajectoryTab
  myIndex: number
  tabIndex: number
}

export const TrajectoryCarouselPanel = ({
  tabData,
  myIndex,
  tabIndex
}: TrajectoryCarouselPanelProps) => {
  const [active, setActive] = React.useState(false)

  useEffect(() => {
    if (tabIndex == myIndex) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [tabIndex])

  return (
    <Flex
      opacity={active ? '1' : '0'}
      transition={active ? 'opacity 0.5s linear;' : 'none'}
      background="white.100"
      // mt="40px"
      // marginLeft={"6px"}
      marginTop={{ base: '6px', sm: '10px', lg: '20px', xl: '40px' }}
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
          base: '10px',
          xs: '20px',
          sm: '20px',
          md: '20px',
          lg: '67px',
          xl: '67px'
        }}
        // bg="red"
      >
        <Text as="h1" variant={'h1' as any} color="gray.300">
          {tabData.name}
        </Text>
        <Flex
          alignItems="center"
          // justifyContent="center"
        >
          <Arrow
            width={{ base: '10px', sm: '12px', lg: '16px', xl: '20px' }}
            height={{ base: '14px', sm: '14px', lg: '20px', xl: '30px' }}
            color="green.600"
            mt={{ base: '5px', md: '8px' }}
          ></Arrow>
          <Text
            as="h3"
            variant={'h3' as any}
            color="green.900"
            ml={{ base: '12px', sm: '20px', lg: '22px', xl: '24px' }}
          >
            {tabData.content.title}
          </Text>
        </Flex>
        <Box
          // bg="green.300"
          marginTop="5px"
        >
          <Text fontFamily="body">
            <HtmlTextParser>{tabData.content.text}</HtmlTextParser>
          </Text>
        </Box>
      </Flex>
      <Box
        flex={1}
        padding={{
          base: '0',
          md: '50px',
          lg: '0',
          xl: '90px'
        }}
        alignSelf="center"
      >
        <Image width="90%" src={tabData.content.image}></Image>
      </Box>
    </Flex>
  )
}
