import * as S from './styles'
import { Tab, Tabs, TabList, TabPanels, TabPanel  } from '@chakra-ui/react'
import { Props } from 'react'
import TrajectoryCarouselTab from '@components/TrajectoryCarouselTab'
import TrajectoryCarouselPanel from '@components/TrajectoryCarouselPanel'

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
    contents.push(<TabPanel><TrajectoryCarouselPanel tabData={tab}></TrajectoryCarouselPanel></TabPanel>)
  }

  return contents
}

export const TrajectoryCarousel = ({ tabs }: Props) => {
  const tabNames = tabs.map((tab: TrajectoryTab) => tab.name)

  return (
    <Tabs variant='unstyled' defaultIndex={0}>
      <TabList>
        {listTabNames(tabNames)}
      </TabList>
  
      <TabPanels >
        {listTabContents(tabs)}
      </TabPanels>
    </Tabs>
  )
}

