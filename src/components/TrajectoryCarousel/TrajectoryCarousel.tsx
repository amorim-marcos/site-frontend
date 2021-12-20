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

export const mockCarouselObj: TrajectoryCarouselProps = {
  tabs: [
    {
      name: "1950",
      content: {
        title: "Nascemos em raízes fortes",
        text: "Nossa fundação foi marcada por grandes desafios: nossas duas fábricas no Paraná foram destruídas por incêndios independentes no ano de sua abertura. A perseverança e a certeza de cultivar negócios sustentáveis não nos permitiu desistir, seguimos investindo em madeira e colhendo seus frutos desde então. A resiliência de nosso fundador Bernardo von Muller Berneck faz parte da nossa essência.",
        image: "/img/montagem_1_painel_trajetoria.png"
      }
    },
    {
      name: "1960",
      content: {
        title: "Madeira para o mundo",
        text: "Modernizando nossas tecnologias e ampliando nossos negócios, conquistamos 7 unidades produtoras de matéria-prima para a produção de compensado. Em 1966 nossa identidade corporativa ganhou forma, revelando a essência da empresa: da tora à lâmina torneada, prensa e os compensados produzidos e comercializados, do Brasil para o mundo.",
        image: "/img/montagem_2_painel_trajetoria.png"
      }
    }
  ]
}

