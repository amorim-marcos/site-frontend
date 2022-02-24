import { Flex, Box, Container, Input, CloseButton } from '@chakra-ui/react'
import LogoBerneck from '@components/LogoBerneck'
import { HeaderMenuItem } from './HeaderMenuItem/HeaderMenuItem'
import SearchIcon from '@components/Icons/SearchIcon'
import { HeaderSecondaryItem } from './HeaderSecondaryItem/HeaderSecondaryItem'
import { LanguageSelector } from './LanguageSelector/LanguageSelector'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useMobile from '../../hooks/useMobile'
import { menuNavigation } from './MenuNavigation'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

import { colors } from '../../theme/colors'
export type AppHeaderProps = null

export const AppHeader = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false)
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)
  const { isMobile } = useMobile(568)

  const header = useTranslation('header')
  return (
    <Box
      data-testid="header-container"
      marginX="auto"
      h={{
        base: '75px',
        sm: '60px',
        md: '88px',
        lg: '103px',
        xl: '140px',
        '2xl': '172px'
      }}
      maxWidth="1920px"
      bg={'green.900'}
      position="relative"
    >
      <Container
        zIndex="modal"
        position={{ base: 'fixed', sm: 'relative' }}
        maxWidth="1920"
        padding={0}
      >
        <Flex
          paddingX={{ base: '4.5%', sm: '4%', md: '3.5%' }}
          h={{
            base: '25px',
            sm: '20px',
            md: '25px',
            lg: '30px',
            xl: '40px',
            '2xl': '51px'
          }}
          justifyContent="space-between"
          bg="green.900"
        >
          <Flex height="100%">
            <LanguageSelector />
          </Flex>
          {!isMobile && (
            <Flex
              justifyContent="flex-end"
              align="center"
              flexDir="row"
              width="100%"
            >
              <HeaderSecondaryItem
                href={menuNavigation.speakWithUs.href}
                title={header.t(menuNavigation.speakWithUs.key)}
              />
              <HeaderSecondaryItem
                href={menuNavigation.workWithUs.href}
                title={header.t(menuNavigation.workWithUs.key)}
                target="_blank"
              />
              <HeaderSecondaryItem
                href={menuNavigation.whereBuy.href}
                title={header.t(menuNavigation.whereBuy.key)}
              />
              <HeaderSecondaryItem
                href={menuNavigation.restrictAccess.href}
                title={header.t(menuNavigation.restrictAccess.key)}
                target="_blank"
              />
            </Flex>
          )}
        </Flex>
        <Flex
          paddingInline={{ base: '4%', xl: '4%', '2xl': '4%' }}
          h={{
            base: '50px',
            sm: '38px',
            md: '60px',
            lg: '70px',
            xl: '95px',
            '2xl': '115px'
          }}
          bg="green.800"
          alignItems="center"
          justifyContent={{ base: 'center' }}
          position="relative"
        >
          {isMobile && (
            <Flex
              onClick={() => setMenuMobileOpen(!menuMobileOpen)}
              position="absolute"
              top="0"
              left="10px"
              cursor="pointer"
              h="100%"
              alignItems="center"
            >
              {menuMobileOpen ? (
                <IoMdClose color="#FFF" size={'30px'} />
              ) : (
                <IoMdMenu color="#FFF" size={'30px'} />
              )}
            </Flex>
          )}

          <LogoBerneck
            width={{
              base: '110px',
              sm: '80px',
              md: '120px',
              lg: '150px',
              xl: '180px',
              '2xl': '220px'
            }}
          />

          <Flex
            paddingLeft={{ base: '0', sm: '70px' }}
            justifyContent={{ base: 'flex-start', sm: 'flex-end' }}
            h={{ base: 'calc(100vh - 75px)', sm: '100%' }}
            position={{ base: 'absolute', sm: 'inherit' }}
            width={{ base: '100vw', sm: '100%' }}
            top={{ base: '100%', sm: '0' }}
            zIndex="dropdown"
            bg={{ base: 'green.800', sm: 'none' }}
            flexDirection={{ base: 'column', sm: 'row' }}
            display={isMobile && !menuMobileOpen ? 'none' : 'flex'}
          >
            <Flex
              {...(isMobile && {
                paddingX: '10px',
                bg: 'green.700',
                flexDirection: 'column'
              })}
              {...(!isMobile && {
                justifyContent: 'flex-end'
              })}
              w="100%"
            >
              <HeaderMenuItem
                subItems={menuNavigation.whoWeAre.subItems.map((i) => ({
                  title: header.t(i.key),
                  href: i.href
                }))}
                href={menuNavigation.whoWeAre.href}
                title={header.t('btn5')}
                closeMenuMobile={() => setMenuMobileOpen(false)}
              />
              <HeaderMenuItem
                subItems={menuNavigation.ourCommitment.subItems.map((i) => ({
                  title: header.t(i.key),
                  href: i.href
                }))}
                href={menuNavigation.ourCommitment.href}
                title={header.t('btn6')}
                closeMenuMobile={() => setMenuMobileOpen(false)}
              />
              <HeaderMenuItem
                subItems={menuNavigation.florestalDivision.subItems.map(
                  (i) => ({
                    title: header.t(i.key),
                    href: i.href
                  })
                )}
                href={menuNavigation.florestalDivision.href}
                title={header.t('btn7')}
                closeMenuMobile={() => setMenuMobileOpen(false)}
              />
              <HeaderMenuItem
                subItems={menuNavigation.products.subItems.map((i) => ({
                  title: header.t(i.key),
                  href: i.href,
                  subItems: i.subItems.map((i) => ({
                    title: header.t(i.key),
                    href: i.href
                  }))
                }))}
                href={menuNavigation.products.href}
                title={header.t('btn8')}
                closeMenuMobile={() => setMenuMobileOpen(false)}
              />
              <HeaderMenuItem
                subItems={menuNavigation.channelBNK.subItems.map((i) => ({
                  title: header.t(i.key),
                  href: i.href
                }))}
                href={menuNavigation.channelBNK.href}
                title={header.t('btn9')}
                closeMenuMobile={() => setMenuMobileOpen(false)}
                borderBottom={false}
              />
            </Flex>
            {isMobile && (
              <Box onClick={() => setMenuMobileOpen(false)} bg="green.800">
                <HeaderSecondaryItem
                  href={menuNavigation.speakWithUs.href}
                  title={header.t(menuNavigation.speakWithUs.key)}
                />
                <HeaderSecondaryItem
                  href={menuNavigation.workWithUs.href}
                  title={header.t(menuNavigation.workWithUs.key)}
                />
                <HeaderSecondaryItem
                  href={menuNavigation.whereBuy.href}
                  title={header.t(menuNavigation.whereBuy.key)}
                />
                <HeaderSecondaryItem
                  href={menuNavigation.restrictAccess.href}
                  title={header.t(menuNavigation.restrictAccess.key)}
                />
              </Box>
            )}
            {!isMobile && (
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
            )}
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
