import * as S from './styles'
import { Button, Heading, Flex, Text } from '@chakra-ui/react'
import TrajectoryCarousel, { mockCarouselObj } from '@components/TrajectoryCarousel'

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
      </Flex>
    </S.Wrapper>
  )
}
