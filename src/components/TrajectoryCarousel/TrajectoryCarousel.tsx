import { Tabs, TabList, TabPanels, TabPanel  } from '@chakra-ui/react'
import { Props } from 'react'
import { TrajectoryCarouselTab, TrajectoryCarouselPanel } from '@components/TrajectoryCarousel'

interface TrajectoryContent {
  text: string,
  image: string
}

interface TrajectoryTab {
  name: string,
  content: TrajectoryContent
}

function listTabNames(tabNames: Array<string>){
  let tabs = []

  for(let name of tabNames){
    tabs.push(<TrajectoryCarouselTab>{name}</TrajectoryCarouselTab>)
  }

  return tabs
}


function listTabContents(tabs: Array<TrajectoryTab>){
  let contents = []

  for(let tab of tabs){
    contents.push(<TabPanel padding={0}><TrajectoryCarouselPanel tabData={tab}></TrajectoryCarouselPanel></TabPanel>)
  }

  return contents
}

export const TrajectoryCarousel = ({ tabs }: Props) => {
  const tabNames = tabs.map((tab: TrajectoryTab) => tab.name)

  return (
    <Tabs minW="1700px" margin="20px" variant='unstyled' defaultIndex={0}>
      <TabList>
        {listTabNames(tabNames)}
      </TabList>
  
      <TabPanels >
        {listTabContents(tabs)}
      </TabPanels>
    </Tabs>
  )
}

