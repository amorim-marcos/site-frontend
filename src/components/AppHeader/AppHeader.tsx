import { Flex, Box, Container, Text } from '@chakra-ui/react'
import NavLink from '@components/NavLink'

export const AppHeader = () => (
  <Box h={40} bg="brand.primary.800">
    <Container maxWidth="container.xl">
      <Flex alignItems="center">
        <NavLink href="/">
          <Text color="white">Berneck</Text>
        </NavLink>
        <Flex ml="auto">
          <NavLink href="/somos-berneck">Some blog post</NavLink>
          <NavLink href="/nosso-compromisso">Nosso Compromisso</NavLink>
          <NavLink href="/divisao-florestal">Divisão Florestal</NavLink>
          <NavLink href="/produtos">Produtos</NavLink>
          <NavLink href="/canal-bnk">Canal BNK</NavLink>
        </Flex>
      </Flex>
    </Container>
  </Box>
)
