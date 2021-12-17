import { Flex, Container, Text } from '@chakra-ui/react'

export type AppFooterProps = {
  title?: string
}

export const AppFooter = ({ title }: AppFooterProps) => (
  <Flex h={40} bg="green.800">
    <Container maxWidth="container.xl">
      <Text color="white">Berneck {title}</Text>
    </Container>
  </Flex>
)
