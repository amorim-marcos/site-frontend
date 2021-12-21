import {
  Flex,
  Box,
  Container,
  Grid,
  Input,
  CloseButton
} from '@chakra-ui/react'
import LogoBerneck from '@components/LogoBerneck'
import NavLink from '../NavLink'
import { HeaderMenuItem } from './HeaderMenuItem/HeaderMenuItem'
import SearchIcon from '@components/SearchIcon'
import { HeaderTopMenuItem } from './HeaderTopMenuItem/HeaderTopMenuItem'
import { LanguageSelector } from './LanguageSelector/LanguageSelector'
import { useState } from 'react'

import { colors } from '../../theme/colors'
export type AppHeaderProps = {
  title?: string
}

export const AppHeader = ({ title }: AppHeaderProps) => {
  const [openSearchBar, setOpenSearchBar] = useState(false)
  return (
    <Box
      marginX="auto"
      h={172}
      maxWidth="1920px"
      bg="green.900"
      position="relative"
    >
      <Container maxWidth="1920" padding={0}>
        <Flex h={51}>
          <Flex marginLeft="100px" height="100%">
            <LanguageSelector />
          </Flex>
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
            <Flex
              alignItems="center"
              justifyContent="center"
              paddingLeft={10}
              paddingY={10}
            >
              {openSearchBar ? (
                <CloseButton
                  h="55px"
                  w="55px"
                  bg="green.600"
                  borderRadius="50%"
                  size="lg"
                  color="white.100"
                  onClick={() => setOpenSearchBar(false)}
                />
              ) : (
                <SearchIcon onClick={() => setOpenSearchBar(true)} />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Container>

      {openSearchBar ? (
        <Flex
          height="100px"
          bg="green.900"
          width="100%"
          position="absolute"
          top="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            width="450px"
            borderBottom="2px solid"
            borderBottomColor="white.100"
            paddingX="5px"
          >
            <Input
              placeholder="Digite sua busca"
              border="none"
              outline="none"
              _active={{ border: 'none', outline: 'none' }}
              focusBorderColor="none"
              color="white.100"
              paddingLeft="0px"
              fontSize="16px"
            />
            <SearchIcon stroke={colors.white[100]} />
          </Flex>
        </Flex>
      ) : null}
    </Box>
  )
}

const menuContent = {
  whoWeAre: {
    title: 'QUEM SOMOS',
    href: '/somos-berneck',
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
