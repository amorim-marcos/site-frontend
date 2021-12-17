import { Flex, Box, Container, Grid } from '@chakra-ui/react'
import LogoBerneck from '@components/LogoBerneck'
import NavLink from '../NavLink'
import { HeaderMenuItem } from './HeaderMenuItem/HeaderMenuItem'
import SearchIcon from '@components/SearchIcon'
import HeaderTopMenuItem from './HeaderTopMenuItem'

export type AppHeaderProps = {
  title?: string
}

const menuContent = {
  whoWeAre: {
    title: 'QUEM SOMOS',
    href: '/',
    subItems: [
      { title: 'Quem Somos', href: '/' },
      { title: 'Nossa Trajetoria', href: '/' },
      { title: 'Onde Estamos', href: '/' },
      { title: 'Certificações', href: '/' }
    ]
  },
  ourCommitment: {
    title: 'NOSSO COMPROMISSO',
    href: '/',
    subItems: [
      {
        title: 'Cultivamos o Meio Ambiente',
        href: '/'
      },
      {
        title: 'Cultivamos Nossa Gente',
        href: '/'
      },
      {
        title: 'Cultivamos Nossos Valores',
        href: '/'
      },
      {
        title: 'Relatórios ESG',
        href: '/'
      }
    ]
  },
  florestalDivision: {
    title: 'DIVISÃO FLORESTAL',
    href: '/',
    subItems: [
      {
        title: 'Manejo Florestal',
        href: '/'
      },
      {
        title: 'Produção Florestal',
        href: '/'
      },
      {
        title: 'Fornecedor Florestal',
        href: '/'
      },
      {
        title: 'Resumo Público',
        href: '/'
      }
    ]
  },
  products: {
    title: 'PRODUTOS',
    href: '/',
    subItems: [
      {
        title: 'Painéis',
        href: '/',
        subItems: [
          {
            title: 'BP BERNECK®',
            href: '/'
          },
          {
            title: 'HDF BERNECK®',
            href: '/'
          },
          {
            title: 'MDF BERNECK®',
            href: '/'
          },
          {
            title: 'MDP BERNECK®',
            href: '/'
          },
          {
            title: 'Plus BERNECK®',
            href: '/'
          }
        ]
      },
      {
        title: 'Serrados',
        href: '/',
        subItems: [
          {
            title: 'BERNECK® Pinus',
            href: '/'
          },
          {
            title: 'BERNECK® Teca',
            href: '/'
          }
        ]
      }
    ]
  },
  channelBNK: {
    title: 'CANAL BERNECK',
    href: '/',
    subItems: [
      {
        title: 'Inspiração Sob Medida',
        href: '/'
      },
      {
        title: 'Matéria-Prima: Conhecimento',
        href: '/'
      },
      {
        title: 'Mundo BERNECK',
        href: '/'
      },
      {
        title: 'Downlaods',
        href: '/'
      }
    ]
  }
}

export const AppHeader = ({ title }: AppHeaderProps) => {
  return (
    <Box h={172} bg="green.900">
      <Container maxWidth="1920" padding={0}>
        <Flex h={51}>
          <Box></Box>
          <Grid
            ml="auto"
            paddingRight="80px"
            templateColumns="repeat(4, 1fr)"
            gap="110px"
          >
            <HeaderTopMenuItem href="/somos-berneck" title="Fale conosco" />
            <HeaderTopMenuItem href="/somos-berneck" title="Trabalhe conosco" />
            <HeaderTopMenuItem href="/somos-berneck" title="Onde comprar" />
            <HeaderTopMenuItem href="/somos-berneck" title="Acesso restrito" />
          </Grid>
        </Flex>
        <Flex paddingInline={100} h={115} bg="green.800" alignItems="center">
          <NavLink href="/">
            <LogoBerneck />
          </NavLink>
          <Flex h="100%" ml="auto">
            <HeaderMenuItem
              subItems={menuContent.whoWeAre.subItems}
              href={menuContent.whoWeAre.href}
              title={menuContent.whoWeAre.title}
            />
            <HeaderMenuItem
              subItems={menuContent.ourCommitment.subItems}
              href={menuContent.ourCommitment.href}
              title={menuContent.ourCommitment.title}
            />
            <HeaderMenuItem
              subItems={menuContent.florestalDivision.subItems}
              href={menuContent.florestalDivision.href}
              title={menuContent.florestalDivision.title}
            />
            <HeaderMenuItem
              subItems={menuContent.products.subItems}
              href={menuContent.products.href}
              title={menuContent.products.title}
            />
            <HeaderMenuItem
              subItems={menuContent.channelBNK.subItems}
              href={menuContent.channelBNK.href}
              title={menuContent.channelBNK.title}
            />

            <SearchIcon />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
