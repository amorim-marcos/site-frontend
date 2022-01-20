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
        <Heading variant={"h2" as any}>Heading 2</Heading>
        <Heading variant={"h3" as any}>Heading 3</Heading>
        <Heading variant={"h4" as any}>Heading 5</Heading>
        <Heading variant={"h5" as any}>Heading 6</Heading>

        <Text variant={"body-bold" as any}>Body Bold</Text>
        <Text variant={"body" as any}>Body</Text>
        <Text variant={"larger-body-bold" as any}>Larger Body Bold</Text>
        <Text variant={"larger-body" as any}>Larger Body</Text>

        <Text variant={"breadcrumbs-selected" as any}>Breadcrumbs selected</Text>
        <Text variant={"breadcrumbs" as any}>Breadcrumbs</Text>
        <Text variant={"header-menu" as any}>Header Menu</Text>
        <Text variant={"header-menu-small" as any} >Header Menu Small</Text>
        <Text variant={"canal-bnk-menu" as any}>CANAL BNK MENU</Text>
        <Text variant={"primary-button" as any}>PRIMARY BUTTON</Text>
        <Text variant={"larger-button" as any}>LARGER BUTTON</Text>
        <Text variant={"tags" as any}>Tags</Text>
      </Flex>
    </S.Wrapper>
  )
}
