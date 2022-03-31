import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Flex, Box, Container, Input, CloseButton } from '@chakra-ui/react'
import { IoMdMenu } from 'react-icons/io'
import { useTranslation } from 'react-i18next'

import LogoBerneck from '@components/LogoBerneck'
import SearchIcon from '@components/Icons/SearchIcon'
import { HeaderMenuItem } from './HeaderMenuItem/HeaderMenuItem'
import { HeaderSecondaryItem } from './HeaderSecondaryItem/HeaderSecondaryItem'
import { LanguageSelector } from './LanguageSelector/LanguageSelector'
import { menuNavigation } from './MenuNavigation'
import { IoMdClose } from 'react-icons/io'

import { colors } from '../../theme/colors'

export type AppHeaderProps = null

export const AppHeader = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [openSearchBar, setOpenSearchBar] = useState(false)
  const [visibilitySearchBar, setvisibilityOpenSearchBar] = useState(false)
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push('/search/' + searchQuery)
  }

  function toggleSearchBar() {
    if (openSearchBar) {
      setvisibilityOpenSearchBar(false)
      setTimeout(() => setOpenSearchBar(false), 800)
    } else {
      setOpenSearchBar(!openSearchBar)
    }
  }

  useEffect(() => {
    setvisibilityOpenSearchBar(openSearchBar)
  }, [openSearchBar])

  const header = useTranslation('header')

  const [fixed, setFixed] = useState(true)
  function handleScroll(value: any) {
    if (window) {
      let headerLimit = 51

      if (window.innerWidth < 1536) {
        headerLimit = 40
      }
      if (window.innerWidth < 1280) {
        headerLimit = 30
      }
      if (window.innerWidth < 1024) {
        headerLimit = 25
      }
      if (window.innerWidth < 768) {
        headerLimit = 25
      }

      // const scrollLimit =
      //   document.body.scrollHeight - window.innerHeight - footerSize
      if (window.pageYOffset <= headerLimit) {
        setFixed(true)
      } else {
        setFixed(false)
      }
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  return (
    <>
      <Box
        data-testid="header-container"
        marginX="auto"
        // h={{
        //   base: '75px',
        //   md: '88px',
        //   lg: '103px',
        //   xl: '140px'
        // }}
        // maxWidth="1920px"
        bg='green.900'
        position="fixed"
        top="0"
        left="0"
        w="100%"
        zIndex={'overlay'}
        transition="0.2s"
      >
        <Box
          zIndex="modal"
          position={'relative'}
          padding={0}
          marginX="auto"
          flexDirection={'column'}
        >
          <Box
            w="100%"
            transition={'0.3s'}
            overflow={'hidden'}
            h={
              fixed
                ? {
                    base: '25px',
                    md: '25px',
                    lg: '30px',
                    xl: '40px'
                  }
                : '0px'
            }
            bg="green.900"
          >
            <Box w="100%" marginX="auto" maxWidth={'1920px'}>
              <Flex
                paddingX={{ base: '4.5%', md: '3.5%' }}
                h={{
                  base: '25px',
                  md: '25px',
                  lg: '30px',
                  xl: '40px'
                }}
                justifyContent="space-between"
                bg="green.900"
              >
                <Flex display="none" height="100%">
                  <LanguageSelector />
                </Flex>

                <Flex
                  justifyContent="flex-end"
                  align="center"
                  flexDir="row"
                  width="100%"
                  display={{ base: 'none', md: 'flex' }}
                >
                  <HeaderSecondaryItem
                    href={menuNavigation.speakWithUs.href}
                    title={header.t(menuNavigation.speakWithUs.key)}
                  />
                  <HeaderSecondaryItem
                    href={menuNavigation.workWithUs.href}
                    title={header.t(menuNavigation.workWithUs.key)}
                    isExternal={true}
                  />
                  <HeaderSecondaryItem
                    href={menuNavigation.whereBuy.href}
                    title={header.t(menuNavigation.whereBuy.key)}
                  />
                </Flex>
              </Flex>
            </Box>
          </Box>

          <Box w="100%" bg="green.800">
            <Box w="100%" marginX="auto" maxWidth={'1920px'}>
              <Flex
                paddingInline={{ base: '4%', xl: '4%' }}
                h={{
                  base: '50px',
                  md: '60px',
                  lg: '70px',
                  xl: '95px'
                }}
                bg="green.800"
                alignItems="center"
                justifyContent={{ base: 'center' }}
                position="relative"
              >
                <Flex
                  onClick={() => setMenuMobileOpen(!menuMobileOpen)}
                  position="absolute"
                  top="0"
                  left="10px"
                  cursor="pointer"
                  h="100%"
                  alignItems="center"
                  display={{ base: 'flex', md: 'none' }}
                >
                  {menuMobileOpen ? (
                    <IoMdClose color="#FFF" size={'30px'} />
                  ) : (
                    <IoMdMenu color="#FFF" size={'30px'} />
                  )}
                </Flex>

                <LogoBerneck
                  width={{
                    base: '110px',
                    md: '120px',
                    lg: '150px',
                    xl: '160px',
                    '2xl' : '220px'
                  }}
                />

                <Flex
                  paddingLeft={{ base: '0', md: '70px' }}
                  justifyContent={{ base: 'flex-start', md: 'flex-end' }}
                  h={{ base: 'calc(100vh - 50px)', md: '100%' }}
                  position={{ base: 'absolute', md: 'inherit' }}
                  width={{ base: '100vw', md: '100%' }}
                  top={{ base: '100%', md: '0' }}
                  zIndex="dropdown"
                  bg={{ base: 'green.800', md: 'none' }}
                  flexDirection={{ base: 'column', md: 'row' }}
                  display={{
                    base: !menuMobileOpen ? 'none' : 'flex',
                    md: 'flex'
                  }}
                >
                  <Flex
                    bg={{ base: 'green.700', md: 'none' }}
                    flexDirection={{ base: 'column', md: 'row' }}
                    paddingX={{ base: '10px', md: '0' }}
                    justifyContent={{ md: 'flex-end' }}
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
                      subItems={menuNavigation.ourCommitment.subItems.map(
                        (i) => ({
                          title: header.t(i.key),
                          href: i.href
                        })
                      )}
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
                          href: i.href,
                          arrow: i.arrow
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

                  <Box
                    display={{ base: 'block', md: 'none' }}
                    onClick={() => setMenuMobileOpen(false)}
                    bg="green.800"
                  >
                    <HeaderSecondaryItem
                      href={menuNavigation.speakWithUs.href}
                      title={header.t(menuNavigation.speakWithUs.key)}
                    />
                    <HeaderSecondaryItem
                      href={menuNavigation.workWithUs.href}
                      title={header.t(menuNavigation.workWithUs.key)}
                      isExternal={true}
                    />
                    <HeaderSecondaryItem
                      href={menuNavigation.whereBuy.href}
                      title={header.t(menuNavigation.whereBuy.key)}
                    />
                  </Box>

                  <Flex
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    {openSearchBar ? (
                      <Flex
                        transition="0.8s"
                        alignItems={'center'}
                        justifyContent="center"
                        w={{ md: '35px', xl: '45px' }}
                        h={{ md: '35px', xl: '45px' }}
                        borderRadius={{ md: '35px', xl: '45px' }}
                        bg="green.600"
                        color="white.100"
                        _hover={{ bg: 'green.750' }}
                        cursor="pointer"
                        fontSize={{ md: '25px', xl: '40px' }}
                        opacity={visibilitySearchBar ? '1' : '0'}
                      >
                        <IoMdClose onClick={toggleSearchBar} />
                      </Flex>
                    ) : (
                      <Box
                        transition={'0.5s'}
                        opacity={!visibilitySearchBar ? '1' : '0'}
                        marginX="7px"
                      >
                        <SearchIcon
                          width={{
                            base: '10px',
                            md: '18px',
                            xl: '28px'
                          }}
                          onClick={() => setOpenSearchBar(true)}
                        />
                      </Box>
                    )}
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>

        {openSearchBar ? (
          <Flex
            transition={'0.5s'}
            opacity={visibilitySearchBar ? '1' : '0'}
            height={{
              base: '35px',
              md: '50px',
              lg: '60px',
              xl: '80px'
            }}
            bg="green.900"
            width="100%"
            position="absolute"
            top="100%"
            alignItems="center"
            justifyContent="center"
            zIndex="overlay"
          >
            <form onSubmit={handleSubmit}>
              <Flex
                width={{
                  base: '200px',
                  md: '300px',
                  lg: '350px',
                  xl: '400px'
                }}
                borderBottom="solid"
                borderBottomColor="white.100"
                paddingX="5px"
                height={{ base: '25px' }}
                borderBottomWidth={{ base: '1px' }}
              >
                <Input
                  autoFocus
                  value={searchQuery}
                  onChange={handleChange}
                  placeholder="Digite sua busca"
                  _placeholder={{ color: 'white.100' }}
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
                    xl: '14px'
                  }}
                  height={{ base: '30px' }}
                />
                <Box onClick={() => router.push('/search/' + searchQuery)}>
                  <SearchIcon
                    stroke={colors.white[100]}
                    width={{
                      base: '13px',
                      md: '16px',
                      lg: '23px',
                      xl: '28px'
                    }}
                    height={{ base: '25px', md: '10px' }}
                  />
                </Box>
              </Flex>
            </form>
          </Flex>
        ) : null}
      </Box>
      <Box
        bg="green.900"
        paddingTop={{
          base: '75px',
          md: '88px',
          lg: '103px',
          xl: '140px'
        }}
      ></Box>
    </>
  )
}
