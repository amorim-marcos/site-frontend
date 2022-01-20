import { Flex, Box, Container, Input, CloseButton } from '@chakra-ui/react'
import LogoBerneck from '@components/LogoBerneck'
import NavLink from '../NavLink'
import { HeaderMenuItem } from './HeaderMenuItem/HeaderMenuItem'
import SearchIcon from '@components/Icons/SearchIcon'
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
      data-testid="header-container"
      marginX="auto"
      h={{
        base: '50px',
        sm: '60px',
        md: '88px',
        lg: '103px',
        xl: '140px',
        '2xl': '172px'
      }}
      maxWidth="1920px"
      bg="green.900"
      position="relative"
    >
      <Container maxWidth="1920" padding={0}>
        <Flex
          paddingX={{ base: '4.5%', sm: '4%', md: '3.5%' }}
          h={{
            base: '15px',
            sm: '20px',
            md: '25px',
            lg: '30px',
            xl: '40px',
            '2xl': '51px'
          }}
          justifyContent="space-between"
        >
          <Flex height="100%">
            <LanguageSelector />
          </Flex>
          <Flex
            justifyContent="flex-end"
            align="center"
            flexDir="row"
            width="100%"
          >
            <HeaderTopMenuItem href="/somos-berneck" title={header.t('btn1')} />
            <HeaderTopMenuItem href="/somos-berneck" title={header.t('btn2')} />
            <HeaderTopMenuItem href="/somos-berneck" title={header.t('btn3')} />
            <HeaderTopMenuItem href="/somos-berneck" title={header.t('btn4')} />
          </Flex>
        </Flex>
        <Flex
          paddingInline={{ base: '4%', xl: '4%', '2xl': '4%' }}
          h={{
            base: '40px',
            sm: '38px',
            md: '60px',
            lg: '70px',
            xl: '95px',
            '2xl': '115px'
          }}
          bg="green.800"
          alignItems="center"
        >
          <NavLink href="/">
            <LogoBerneck
              width={{
                base: '70px',
                sm: '80px',
                md: '120px',
                lg: '150px',
                xl: '180px',
                '2xl': '220px'
              }}
              height={{
                base: '14px',
                sm: '14px',
                md: '20px',
                lg: '25px',
                xl: '31px',
                '2xl': '40px'
              }}
            />
          </NavLink>
          <Flex
            paddingLeft={'70px'}
            justifyContent="flex-end"
            h="100%"
            width="100%"
          >
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
              title={header.t('btn9')}
            />
            <Flex alignItems="center" justifyContent="center">
              {openSearchBar ? (
                <CloseButton
                  h={{
                    base: '20px',
                    sm: '20px',
                    md: '30px',
                    xl: '40px',
                    '2xl': '50px'
                  }}
                  w={{
                    base: '20px',
                    sm: '20px',
                    md: '30px',
                    xl: '40px',
                    '2xl': '50px'
                  }}
                  bg="green.600"
                  borderRadius="50%"
                  size="sm"
                  color="white.100"
                  onClick={() => setOpenSearchBar(false)}
                />
              ) : (
                <SearchIcon
                  width={{
                    base: '10px',
                    sm: '14px',
                    md: '18px',
                    xl: '28px',
                    '2xl': '35px'
                  }}
                  onClick={() => setOpenSearchBar(true)}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Container>

      {openSearchBar ? (
        <Flex
          height={{
            base: '35px',
            md: '50px',
            lg: '60px',
            xl: '80px',
            '2xl': '100px'
          }}
          bg="green.900"
          width="100%"
          position="absolute"
          top="100%"
          alignItems="center"
          justifyContent="center"
          zIndex="docked"
        >
          <Flex
            width={{
              base: '200px',
              md: '300px',
              lg: '350px',
              xl: '400px',
              '2xl': '450px'
            }}
            borderBottom="solid"
            borderBottomColor="white.100"
            paddingX="5px"
            height={{ base: '25px' }}
            borderBottomWidth={{ base: '1px' }}
          >
            <Input
              placeholder="Digite sua busca"
              border="none"
              outline="none"
              _active={{ border: 'none', outline: 'none' }}
              focusBorderColor="none"
              color="white.100"
              paddingLeft="0px"
              paddingBottom={{ base: '0px', md: '10px' }}
              fontSize={{
                base: '8px',
                md: '10px',
                lg: '12px',
                xl: '14px',
                '2xl': '16px'
              }}
              height={{ base: '30px' }}
            />
            <Box>
              <SearchIcon
                stroke={colors.white[100]}
                width={{
                  base: '13px',
                  md: '16px',
                  lg: '23px',
                  xl: '28px',
                  '2xl': '35px'
                }}
                height={{ base: '25px', md: '10px', '2xl': '0px' }}
              />
            </Box>
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
      { key: 'btn5_subItem1', href: '/somos-berneck' },
      { key: 'btn5_subItem2', href: '/somos-berneck' },
      { key: 'btn5_subItem3', href: '/somos-berneck' },
      { key: 'btn5_subItem4', href: '/somos-berneck' }
    ]
  },
  ourCommitment: {
    key: 'btn6',
    href: '/nosso-compromisso',
    subItems: [
      {
        key: 'btn6_subItem1',
        href: '/nosso-compromisso'
      },
      {
        key: 'btn6_subItem2',
        href: '/nosso-compromisso'
      },
      {
        key: 'btn6_subItem3',
        href: '/nosso-compromisso'
      },
      {
        key: 'btn6_subItem4',
        href: '/nosso-compromisso'
      }
    ]
  },
  florestalDivision: {
    key: 'btn7',
    href: '/divisao-florestal',
    subItems: [
      {
        key: 'btn7_subItem1',
        href: '/divisao-florestal'
      },
      {
        key: 'btn7_subItem2',
        href: '/divisao-florestal'
      },
      {
        key: 'btn7_subItem3',
        href: '/divisao-florestal'
      },
      {
        key: 'btn7_subItem4',
        href: '/divisao-florestal'
      }
    ]
  },
  products: {
    key: 'btn8',
    href: '/products',
    subItems: [
      {
        key: 'btn8_subItem1',
        href: '/products',
        subItems: [
          {
            key: 'btn8_subItem2',
            href: '/products/bp-berneck'
          },
          {
            key: 'btn8_subItem3',
            href: '/products/hdf-berneck'
          },
          {
            key: 'btn8_subItem4',
            href: '/products/mdf-berneck'
          },
          {
            key: 'btn8_subItem5',
            href: '/products/mdp-berneck'
          },
          {
            key: 'btn8_subItem6',
            href: '/products/plus-berneck'
          }
        ]
      },
      {
        key: 'btn8_subItem7',
        href: '/products',
        subItems: [
          {
            key: 'btn8_subItem8',
            href: '/products/berneck-pinus'
          },
          {
            key: 'btn8_subItem9',
            href: '/products/berneck-teca'
          }
        ]
      }
    ]
  },
  channelBNK: {
    key: 'btn9',
    href: '/canal-bnk',
    subItems: [
      {
        key: 'btn9_subItem1',
        href: '/canal-bnk'
      },
      {
        key: 'btn9_subItem2',
        href: '/canal-bnk'
      },
      {
        key: 'btn9_subItem3',
        href: '/canal-bnk'
      },
      {
        key: 'btn9_subItem4',
        href: '/canal-bnk'
      }
    ]
  }
}
