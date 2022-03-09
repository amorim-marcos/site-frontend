import { Flex, Grid, Text, Box, Image } from '@chakra-ui/react'
import LogoBerneck from '../LogoBerneck'
import SocialIcon from '@components/Icons/SocialIcon'
import { FooterList } from './FooterList/FooterList'
import { Grafism } from './Grafism/Grafism'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { footerNavigation } from './footerNavigation'
import { useRouter } from 'next/router'

export const AppFooter = () => {
  const footer = useTranslation('footer')
  const router = useRouter()
  return (
    <Flex
      aria-label="footer-container"
      data-testid="footer-container"
      flexDir="column"
      maxWidth="1920px"
      marginX="auto"
      h={{
        base: '240px',
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
        <Flex
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          zIndex="docked"
          marginTop={{ base: '20px', sm: '0' }}
        >
          <LogoBerneck
            width={{
              base: '110px',
              md: '120px',
              lg: '150px',
              xl: '180px',
              '2xl': '220px'
            }}
          />
          <Flex
            // border="1px solid pink"
            w={{ base: '100%', md: '30%' }}
            ml={{ base: '0', md: 'auto' }}
            justifyContent={{ base: 'space-around', md: 'flex-end' }}
            marginY={{ base: '30px', md: 'none' }}
          >
            <SocialIcon
              marginLeft={socialIconMarginLeft}
              width={socialIconWidth}
              media="facebook"
            />
            <SocialIcon
              marginLeft={socialIconMarginLeft}
              width={socialIconWidth}
              media="instagram"
            />
            <SocialIcon
              marginLeft={socialIconMarginLeft}
              width={socialIconWidth}
              media="linkedin"
            />
            <SocialIcon
              marginLeft={socialIconMarginLeft}
              width={socialIconWidth}
              media="youtube"
            />
            <SocialIcon
              marginLeft={socialIconMarginLeft}
              width={socialIconWidth}
              media="pinterest"
            />
          </Flex>
        </Flex>

        <Flex
          display={{ base: 'none', md: 'flex' }}
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
            key={0}
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
            key={1}
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
            key={2}
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
            key={3}
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
            key={4}
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
          <Grafism width={{ base: '1024px', md: '1280px', lg: '1920px' }} />
        </Box>
      </Flex>
      <Flex
        w="100%"
        h={{ base: '230px', md: '100px' }}
        alignItems="center"
        justifyContent={{ base: 'space-evenly', md: 'space-between' }}
        paddingX="70px"
        position="relative"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Text
          width="fit-content"
          position={{ base: 'absolute', md: 'relative' }}
          top={{ base: '-30px', md: '0' }}
          left={{ base: '0' }}
          right={{ base: '0' }}
          marginX={{ base: 'auto', md: '0' }}
          fontSize={{
            base: '12px',
            md: '8px',
            lg: '10px',
            xl: '12px',
            '2xl': '14px'
          }}
          color="green.300"
        >
          © 2021 BERNECK . Todos os direitos reservados.
        </Text>
        <Text
          fontSize={{
            base: '11px',
            md: '8px',
            lg: '10px',
            xl: '12px',
            '2xl': '14px'
          }}
          color="green.600"
          cursor={'pointer'}
          _hover={{ opacity: '0.9' }}
          onClick={() => router.push('politica-de-privacidade')}
        >
          Termos de Uso e Política de Privacidade
        </Text>
        <Link passHref href="http://www.commcepta.com.br/">
          <Image
            cursor="pointer"
            height={{
              base: '23px',
              md: '12px',
              lg: '15px',
              xl: '18px',
              '2xl': '23px'
            }}
            width={{
              base: '116px',
              md: '61px',
              lg: '77px',
              xl: '92px',
              '2xl': '116px'
            }}
            src="/img/logo-commcepta.png"
            alt="Logo Commcepta"
          />
        </Link>
      </Flex>
    </Flex>
  )
}

const socialIconWidth = {
  base: '30px',
  sm: '40px',
  md: '25px',
  lg: '30px',
  xl: '35px',
  '2xl': '42px'
}

const socialIconMarginLeft = {
  base: '0px',
  lg: '30px',
  xl: '40px',
  '2xl': '50px'
}
