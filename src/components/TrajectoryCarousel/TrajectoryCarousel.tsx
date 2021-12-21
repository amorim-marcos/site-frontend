import { Tabs, TabList, TabPanels, TabPanel  } from '@chakra-ui/react'
import React from 'react'
import { TrajectoryCarouselTab, TrajectoryCarouselPanel } from '@components/TrajectoryCarousel'
import { TrajectoryCarouselControllers } from './TrajectoryCarouselControllers'

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
    // The style index is 8 because there is 8 lines drawings on trajectory tabs layout.
    tabs.push(<TrajectoryCarouselTab key={`tab_`+index} tabStyleIndex={parseInt(index) % 8}>{tabNames[index]}</TrajectoryCarouselTab>)
  }

  return tabs
}


function listTabContents(tabs: Array<TrajectoryTab>, tabIndex: number){
  let contents = []

  for(let index in tabs){
    contents.push(<TabPanel padding={0} key={`panel_`+index}><TrajectoryCarouselPanel tabData={tabs[index]} myIndex={index} tabIndex={tabIndex}></TrajectoryCarouselPanel></TabPanel>)
  }

  return contents
}

export const TrajectoryCarousel = ({ tabs }: TrajectoryCarouselProps) => {
  const tabNames = tabs.map((tab: TrajectoryTab) => tab.name)

  const [totalTabs, setTotalTabs] = React.useState(tabs.length)

  const [tabIndex, setTabIndex] = React.useState(0)

  const previousTab = () => {
    let theTab = ( (tabIndex - 1) == -1 ) ? totalTabs - 1 : tabIndex - 1 
    setTabIndex(theTab)
  }

  const nextTab = () => {
    setTabIndex((tabIndex + 1 ) % totalTabs)
  }

  return (
    <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)} minW="1700px" margin="20px" variant='unstyled' defaultIndex={0}>
      <TabList>
        {listTabNames(tabNames)}
      </TabList>
  
      <TabPanels >
        {listTabContents(tabs, tabIndex)}
      </TabPanels>

      <TrajectoryCarouselControllers previousTab={previousTab} nextTab={nextTab}/>
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
    },
    {
      name: "1970",
      content: {
        title: "Madeira para o mundo",
        text: "Modernizando nossas tecnologias e ampliando nossos negócios, conquistamos 7 unidades produtoras de matéria-prima para a produção de compensado. Em 1966 nossa identidade corporativa ganhou forma, revelando a essência da empresa: da tora à lâmina torneada, prensa e os compensados produzidos e comercializados, do Brasil para o mundo.",
        image: "/img/montagem_2_painel_trajetoria.png"
      }
    },
    {
      name: "1980",
      content: {
        title: "Madeira para o mundo",
        text: "Modernizando nossas tecnologias e ampliando nossos negócios, conquistamos 7 unidades produtoras de matéria-prima para a produção de compensado. Em 1966 nossa identidade corporativa ganhou forma, revelando a essência da empresa: da tora à lâmina torneada, prensa e os compensados produzidos e comercializados, do Brasil para o mundo.",
        image: "/img/montagem_2_painel_trajetoria.png"
      }
    },
    {
      name: "1990",
      content: {
        title: "Madeira para o mundo",
        text: "Modernizando nossas tecnologias e ampliando nossos negócios, conquistamos 7 unidades produtoras de matéria-prima para a produção de compensado. Em 1966 nossa identidade corporativa ganhou forma, revelando a essência da empresa: da tora à lâmina torneada, prensa e os compensados produzidos e comercializados, do Brasil para o mundo.",
        image: "/img/montagem_2_painel_trajetoria.png"
      }
    },
    {
      name: "2000",
      content: {
        title: "Madeira para o mundo",
        text: "Modernizando nossas tecnologias e ampliando nossos negócios, conquistamos 7 unidades produtoras de matéria-prima para a produção de compensado. Em 1966 nossa identidade corporativa ganhou forma, revelando a essência da empresa: da tora à lâmina torneada, prensa e os compensados produzidos e comercializados, do Brasil para o mundo.",
        image: "/img/montagem_2_painel_trajetoria.png"
      }
    },
    {
      name: "2010",
      content: {
        title: "Madeira para o mundo",
        text: "Modernizando nossas tecnologias e ampliando nossos negócios, conquistamos 7 unidades produtoras de matéria-prima para a produção de compensado. Em 1966 nossa identidade corporativa ganhou forma, revelando a essência da empresa: da tora à lâmina torneada, prensa e os compensados produzidos e comercializados, do Brasil para o mundo.",
        image: "/img/montagem_2_painel_trajetoria.png"
      }
    },
    {
      name: "2020",
      content: {
        title: "Madeira para o mundo",
        text: "Modernizando nossas tecnologias e ampliando nossos negócios, conquistamos 7 unidades produtoras de matéria-prima para a produção de compensado. Em 1966 nossa identidade corporativa ganhou forma, revelando a essência da empresa: da tora à lâmina torneada, prensa e os compensados produzidos e comercializados, do Brasil para o mundo.",
        image: "/img/montagem_2_painel_trajetoria.png"
      }
    }
  ]
}

