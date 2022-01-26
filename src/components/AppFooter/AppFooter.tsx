import { Flex, Grid, Text, Box, Image } from '@chakra-ui/react'
import LogoBerneck from '../LogoBerneck'
import SocialIcon from '@components/Icons/SocialIcon'
import { FooterList } from './FooterList/FooterList'
import { Grafism } from './Grafism/Grafism'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { footerNavigation } from './footerNavigation'

export const AppFooter = () => {
  const footer = useTranslation('footer')
  return (
    <Flex
      aria-label="footer-container"
      data-testid="footer-container"
      flexDir="column"
      maxWidth="1920px"
      marginX="auto"
      h={{
        base: '280px',
        sm: '380px',
        md: '460px',
        lg: '600px',
        xl: '670px',
        '2xl': '732px'
      }}
      bg="green.900"
      position="relative"
    >
      <Flex
        padding="5%"
        overflow="hidden"
        position="relative"
        height="643px"
        width="100%"
        flexDir="column"
      >
        <Flex w="100%" alignItems="center" zIndex="docked">
          <LogoBerneck
            width={{
              base: '70px',
              sm: '100px',
              md: '120px',
              lg: '150px',
              xl: '180px',
              '2xl': '220px'
            }}
          />
          <Grid
            ml="auto"
            templateColumns="repeat(5, 1fr)"
            gap={{ base: '15px', sm: '17px', md: '30px', '2xl': '50px' }}
          >
            <SocialIcon width={socialIconWidth} media="facebook" />
            <SocialIcon width={socialIconWidth} media="instagram" />
            <SocialIcon width={socialIconWidth} media="linkedin" />
            <SocialIcon width={socialIconWidth} media="youtube" />
            <SocialIcon width={socialIconWidth} media="pinterest" />
          </Grid>
        </Flex>
        <Flex
          justifyContent="space-between"
          zIndex="docked"
          marginTop={{
            base: '7%',
            sm: '10%',
            lg: '11%',
            '2xl': '6%'
          }}
        >
          <FooterList
            title={{
              title: footer.t(footerNavigation.column1.titleKey),
              href: footerNavigation.column1.href
            }}
            items={footerNavigation.column1.items.map((i) => ({
              title: footer.t(i.titleKey),
              href: i.href
            }))}
          />

          <FooterList
            title={{
              title: footer.t(footerNavigation.column2.titleKey),
              href: footerNavigation.column2.href
            }}
            items={footerNavigation.column2.items.map((i) => ({
              title: footer.t(i.titleKey),
              href: i.href
            }))}
          />

          <FooterList
            title={{
              title: footer.t(footerNavigation.column3.titleKey),
              href: footerNavigation.column3.href
            }}
            items={footerNavigation.column3.items.map((i) => ({
              title: footer.t(i.titleKey),
              href: i.href
            }))}
          />

          <FooterList
            title={{
              title: footer.t(footerNavigation.column4.titleKey),
              href: footerNavigation.column4.href
            }}
            items={footerNavigation.column4.items.map((i) => ({
              title: footer.t(i.titleKey),
              href: i.href
            }))}
          />

          <FooterList
            title={{
              title: footer.t(footerNavigation.column5.titleKey),
              href: footerNavigation.column5.href
            }}
            items={footerNavigation.column5.items.map((i) => ({
              title: footer.t(i.titleKey),
              href: i.href,
              empty: i.empty
            }))}
          />
        </Flex>

        <Box zIndex="base" position="absolute" top="-35px" left="0">
          <Grafism />
        </Box>
      </Flex>
      <Flex
        w="100%"
        h="100px"
        alignItems="center"
        justifyContent="space-between"
        paddingX="70px"
      >
        <Text fontSize="14px" color="green.300">
          © 2021 BERNECK . Todos os direitos reservados.
        </Text>
        <Text fontSize="14px" color="green.600">
          Termos de Uso e Política de Privacidade
        </Text>
        <Link passHref href="http://www.commcepta.com.br/">
          <Image
            cursor="pointer"
            height={23}
            width={116}
            src="/img/logo-commcepta.png"
            alt="Logo Commcepta"
          />
        </Link>
      </Flex>
    </Flex>
  )
}

const socialIconWidth = {
  base: '20px',
  sm: '23px',
  md: '25px',
  lg: '30px',
  xl: '35px',
  '2xl': '42px'
}
