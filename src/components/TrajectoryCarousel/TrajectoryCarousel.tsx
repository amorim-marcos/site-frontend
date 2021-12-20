import { Tabs, TabList, TabPanels, TabPanel  } from '@chakra-ui/react'
import { Props } from 'react'
import { TrajectoryCarouselTab, TrajectoryCarouselPanel } from '@components/TrajectoryCarousel'

export type TrajectoryContent = {
  text: string
  title: string
  image: string
}

export type TrajectoryTab = {
  name: string
  content: TrajectoryContent
}

export type TrajectoryCarouselProps = {
  tabs: Array<TrajectoryTab>
}

function listTabNames(tabNames: Array<string>){
  let tabs = []

  for(let index in tabNames){
    tabs.push(<TrajectoryCarouselTab key={`tab_`+index}>{tabNames[index]}</TrajectoryCarouselTab>)
  }

  return tabs
}


function listTabContents(tabs: Array<TrajectoryTab>){
  let contents = []

  for(let index in tabs){
    contents.push(<TabPanel padding={0} key={`panel_`+index}><TrajectoryCarouselPanel tabData={tabs[index]}></TrajectoryCarouselPanel></TabPanel>)
  }

  return contents
}

export const TrajectoryCarousel = ({ tabs }: TrajectoryCarouselProps) => {
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

