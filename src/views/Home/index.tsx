import * as S from './styles'
import { Button, Heading, Flex, Text } from '@chakra-ui/react'
import TrajectoryCarousel from '@components/TrajectoryCarousel'

const tabs = [
  {
    name: "1950",
    content: {
      title: "Nascemos em raízes fortes",
      text: "Nossa fundação foi marcada por grandes desafios: nossas duas fábricas no Paraná foram destruídas por incêndios independentes no ano de sua abertura. A perseverança e a certeza de cultivar negócios sustentáveis não nos permitiu desistir, seguimos investindo em madeira e colhendo seus frutos desde então. A resiliência de nosso fundador Bernardo von Muller Berneck faz parte da nossa essência.",
      imagem: "/images/image.png"
    }
  },
  {
    name: "1960",
    content: {
      title: "Madeira para o mundo",
      text: "Modernizando nossas tecnologias e ampliando nossos negócios, conquistamos 7 unidades produtoras de matéria-prima para a produção de compensado. Em 1966 nossa identidade corporativa ganhou forma, revelando a essência da empresa: da tora à lâmina torneada, prensa e os compensados produzidos e comercializados, do Brasil para o mundo.",
      imagem: "/images/image.png"
    }
  }
]

export default function Home({ title = 'HomePage' }) {
  return (
    <S.Wrapper>
      <Flex flexDirection="column" background="#F7EFE2">
        <S.Title>{title}</S.Title>
        <Button mb={3}>Test</Button>
        <Button size="large">Test</Button>
        <Heading>Heading 1</Heading>
        <Heading variant="h2">Heading 2</Heading>
        <Heading variant="h3">Heading 3</Heading>
        <Heading variant="h4">Heading 5</Heading>
        <Heading variant="h5">Heading 6</Heading>

        <Text variant="body-bold">Body Bold</Text>
        <Text variant="body">Body</Text>
        <Text variant="larger-body-bold">Larger Body Bold</Text>
        <Text variant="larger-body">Larger Body</Text>

        <Text variant="breadcrumbs-selected">Breadcrumbs selected</Text>
        <Text variant="breadcrumbs">Breadcrumbs</Text>
        <Text variant="header-menu">Header Menu</Text>
        <Text variant="header-menu-small">Header Menu Small</Text>
        <Text variant="canal-bnk-menu">CANAL BNK MENU</Text>
        <Text variant="primary-button">PRIMARY BUTTON</Text>
        <Text variant="larger-button">LARGER BUTTON</Text>
        <Text variant="tags">Tags</Text>
        <TrajectoryCarousel tabs={tabs}></TrajectoryCarousel>
      </Flex>
    </S.Wrapper>
  )
}
