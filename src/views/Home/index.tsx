import * as S from './styles'
import { Button, Heading, Flex, Text } from '@chakra-ui/react'
import TrajectoryCarousel from '@components/TrajectoryCarousel'

const tabs = [
  {
    name: "1950",
    content: {
      text: "Texto 1",
      imagem: "/images/image.png"
    }
  },
  {
    name: "1960",
    content: {
      text: "Texto 2",
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
        <Text>Simple text example</Text>
        <Text variant="body-bold">Simple text example</Text>
        <TrajectoryCarousel tabs={tabs}></TrajectoryCarousel>
      </Flex>
    </S.Wrapper>
  )
}
