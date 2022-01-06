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
import { useTranslation } from 'react-i18next'

import { colors } from '../../theme/colors'
export type AppHeaderProps = null

export const AppHeader = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false)

  const header = useTranslation('header')
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
            <HeaderTopMenuItem href="/somos-berneck" title={header.t('btn1')} />
            <HeaderTopMenuItem href="/somos-berneck" title={header.t('btn2')} />
            <HeaderTopMenuItem href="/somos-berneck" title={header.t('btn3')} />
            <HeaderTopMenuItem href="/somos-berneck" title={header.t('btn4')} />
          </Grid>
        </Flex>
        <Flex paddingInline={100} h={115} bg="green.800" alignItems="center">
          <NavLink href="/">
            <LogoBerneck />
          </NavLink>
          <Flex h="100%" ml="auto">
            <HeaderMenuItem
              subItems={menuContent.whoWeAre.subItems.map((i) => ({
                title: header.t(i.key),
                href: i.href
              }))}
              href={menuContent.whoWeAre.href}
              title={header.t('btn5')}
            />
            <HeaderMenuItem
              subItems={menuContent.ourCommitment.subItems.map((i) => ({
                title: header.t(i.key),
                href: i.href
              }))}
              href={menuContent.ourCommitment.href}
              title={header.t('btn6')}
            />
            <HeaderMenuItem
              subItems={menuContent.florestalDivision.subItems.map((i) => ({
                title: header.t(i.key),
                href: i.href
              }))}
              href={menuContent.florestalDivision.href}
              title={header.t('btn7')}
            />
            <HeaderMenuItem
              subItems={menuContent.products.subItems.map((i) => ({
                title: header.t(i.key),
                href: i.href,
                subItems: i.subItems.map((i) => ({
                  title: header.t(i.key),
                  href: i.href
                }))
              }))}
              href={menuContent.products.href}
              title={header.t('btn8')}
            />
            <HeaderMenuItem
              subItems={menuContent.channelBNK.subItems.map((i) => ({
                title: header.t(i.key),
                href: i.href
              }))}
              href={menuContent.channelBNK.href}
              title={header.t('btn5')}
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
    key: 'btn5',
    href: '/somos-berneck',
    subItems: [
      { key: 'btn5_subItem1', href: '/' },
      { key: 'btn5_subItem2', href: '/' },
      { key: 'btn5_subItem3', href: '/' },
      { key: 'btn5_subItem4', href: '/' }
    ]
  },
  ourCommitment: {
    key: 'btn6',
    href: '/',
    subItems: [
      {
        key: 'btn6_subItem1',
        href: '/'
      },
      {
        key: 'btn6_subItem2',
        href: '/'
      },
      {
        key: 'btn6_subItem3',
        href: '/'
      },
      {
        key: 'btn6_subItem4',
        href: '/'
      }
    ]
  },
  florestalDivision: {
    key: 'btn7',
    href: '/',
    subItems: [
      {
        key: 'btn7_subItem1',
        href: '/'
      },
      {
        key: 'btn7_subItem2',
        href: '/'
      },
      {
        key: 'btn7_subItem3',
        href: '/'
      },
      {
        key: 'btn7_subItem4',
        href: '/'
      }
    ]
  },
  products: {
    key: 'btn8',
    href: '/',
    subItems: [
      {
        key: 'btn8_subItem1',
        href: '/',
        subItems: [
          {
            key: 'btn8_subItem2',
            href: '/'
          },
          {
            key: 'btn8_subItem3',
            href: '/'
          },
          {
            key: 'btn8_subItem4',
            href: '/'
          },
          {
            key: 'btn8_subItem5',
            href: '/'
          },
          {
            key: 'btn8_subItem6',
            href: '/'
          }
        ]
      },
      {
        key: 'btn8_subItem7',
        href: '/',
        subItems: [
          {
            key: 'btn8_subItem8',
            href: '/'
          },
          {
            key: 'btn8_subItem9',
            href: '/'
          }
        ]
      }
    ]
  },
  channelBNK: {
    key: 'btn9',
    href: '/',
    subItems: [
      {
        key: 'btn9_subItem1',
        href: '/'
      },
      {
        key: 'btn9_subItem2',
        href: '/'
      },
      {
        key: 'btn9_subItem3',
        href: '/'
      },
      {
        key: 'btn9_subItem4',
        href: '/'
      }
    ]
  }
}
