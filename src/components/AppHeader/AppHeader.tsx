import { Flex, Box, Container, Text, Grid, Center } from '@chakra-ui/react'
import LogoBerneck from '@components/LogoBerneck'
import NavLink from '../NavLink'
import { HeaderMenuItem } from '../HeaderMenuItem/HeaderMenuItem'
import SearchIcon from '@components/SearchIcon'

export type AppHeaderProps = {
  title?: string
}

export const AppHeader = ({ title }: AppHeaderProps) => {
  return (
    <Box h={172} bg="green.850">
      <Container maxWidth="1920" padding={0}>
        <Flex h={51}>
          <Box></Box>
          <Grid ml="auto" templateColumns="repeat(4, 1fr)" gap={10}>
            <NavLink href="/somos-berneck">Fale conosco</NavLink>
            <NavLink href="/somos-berneck">Trabalhe conosco</NavLink>
            <NavLink href="/somos-berneck">Onde comprar</NavLink>
            <NavLink href="/somos-berneck">Acesso restrito</NavLink>
          </Grid>
        </Flex>
        <Flex paddingInline={100} h={115} bg="green.700" alignItems="center">
          <NavLink href="/">
            <LogoBerneck />
          </NavLink>
          <Flex h="100%" ml="auto">
            <HeaderMenuItem href="/somos-berneck" title="SOMOS BERNECK" />
            <HeaderMenuItem
              href="/nosso-compromisso"
              title="NOSSO COMPROMISSO"
            />
            <HeaderMenuItem
              href="/divisao-florestal"
              title="DIVISÃO FLORESTAL"
            />
            <HeaderMenuItem href="/produtos" title="PRODUTOS" />
            <HeaderMenuItem href="/canal-bnk" title="CANAL BNK" />

            <SearchIcon />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
