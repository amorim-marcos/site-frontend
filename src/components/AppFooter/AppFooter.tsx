import { Flex, Grid, Text, Box, Image, Link } from '@chakra-ui/react'
import LogoBerneck from '../LogoBerneck'
import SocialIcon from '@components/Icons/SocialIcon'
import { FooterList } from './FooterList/FooterList'
import { Grafism } from './Grafism/Grafism'
import { useTranslation } from 'react-i18next'
import { footerNavigation } from './footerNavigation'
import { useRouter } from 'next/router'

export const AppFooter = () => {
  const footer = useTranslation('footer')
  const router = useRouter()
  return (
    <Box 
      w="100%" 
      bg="green.900"

    >
      <Flex
        aria-label="footer-container"
        data-testid="footer-container"
        flexDir="column"
        maxWidth="1536px"
        marginX="auto"
        // h={{
        //   base: '240px',
        //   md: '460px',
        //   lg: '320px',
        //   xl: '400px'
        // }}
        bg="green.900"
        // bg="pink"
        position="relative"
      >
        <Flex
          paddingInline={{ base: '4%', xl: '4%' }}
          overflow="hidden"
          position="relative"
          // marginTop={{ base: '0', md: '20%' }}
          width="100%"
          flexDir="column"
          // bg="darkcyan"
        >
          <Flex
            flex="1"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'center', md: 'center' }}
            zIndex="docked"
            marginTop={{ base: '20px', md: '0' }}
            // bg={"grey"}
          >
            
            <LogoBerneck
                  width={{
                    base: '110px',
                    md: '110px',
                    lg: '130px',
                    xl: '145px',
                    '2xl': '189px'
                  }}
                />
            <Flex
              w={{ base: '100%', md: '30%' }}
              ml={{ base: '0', md: 'auto' }}
              justifyContent={{ base: 'space-around', lg: 'flex-end' }}
              marginY={{ base: '30px', md: 'none' }}
            >
              <SocialIcon
                marginLeft={socialIconMarginLeft}
                width={socialIconWidth}
                media="facebook"
                href="https://www.facebook.com/BerneckSA"
              />
              <SocialIcon
                marginLeft={socialIconMarginLeft}
                width={socialIconWidth}
                media="instagram"
                href="https://www.instagram.com/berneckoficial"
              />
              <SocialIcon
                marginLeft={socialIconMarginLeft}
                width={socialIconWidth}
                media="linkedin"
                href="https://www.linkedin.com/company/berneck-s.a.-pain-is-e-serrados"
              />
              <SocialIcon
                marginLeft={socialIconMarginLeft}
                width={socialIconWidth}
                media="youtube"
                href=" https://www.youtube.com/Berneckoficial"
              />
              <SocialIcon
                marginLeft={socialIconMarginLeft}
                width={socialIconWidth}
                media="pinterest"
                href="https://br.pinterest.com/berneckoficial"
              />
            </Flex>
          </Flex>

          <Flex
            flex="1"
            display={{ base: 'none', md: 'flex' }}
            // paddingInline={{ base: '4%', xl: '4%' }}
            justifyContent="space-between"
            zIndex="docked"
            marginTop={{
              base: '7%',
              sm: '3%',
              lg: '3%',
              xl: '2%'
            }}
            marginBottom={{
              base: '7%',
              sm: '3%',
              lg: '3%',
              xl: '2%'
            }}
            // bg={'yellow'}
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
            <Grafism width={{ base: '1024px', md: '1280px', lg: '1536px' }} />
          </Box>
        </Flex>
        <Flex
          w="100%"
          h={{ base: '120px', md: '50px' }}
          padding={{ base: '1%', md: '0' }}
          alignItems="center"
          justifyContent={{ base: 'space-evenly', md: 'space-between' }}
          position="relative"
          flexDirection={{ base: 'column', md: 'row' }}
          // bg="darksalmon"
        >
          <Flex 
           flex="1"
          //  bg="bisque"
           alignItems="center"
          //  justifyContent="center"
           margin={{ base: '2%' }}
          >
            <Text
              left={{ base: '0' }}
              right={{ base: '0' }}
              fontSize={{
                base: '12px',
                md: '8px',
                lg: '10px',
                xl: '12px'
              }}
              color="green.300"
            >
              ©2022 BERNECK. Todos os direitos reservados.
            </Text>
          </Flex>
          <Flex 
           flex="1"
          //  bg="limegreen"
           alignItems="center"
           justifyContent="center"
          //  padding={{ base: '0', md: '5%' }}
          >
            <Text
              fontSize={{
                base: '11px',
                md: '8px',
                lg: '10px',
                xl: '12px'
              }}
              color="green.600"
              cursor={'pointer'}
              _hover={{ opacity: '0.9' }}
              onClick={() => router.push('politica-de-privacidade')}
            >
              Termos de Uso e Política de Privacidade
            </Text>
          </Flex>
          <Flex 
            flex="1"
            // bg="yellowgreen"
            alignItems="center"
            justifyContent="flex-end"
            margin={{ base: '2%' }}
          >
            <Link href="http://www.commcepta.com.br/" isExternal>
              <Image
                cursor="pointer"
                // height={{
                //   base: '23px',
                //   md: '12px',
                //   lg: '15px',
                //   xl: '18px'
                // }}
                width={{
                  base: '80px',
                  md: '61px',
                  lg: '77px',
                  xl: '92px'
                }}
                src="/img/logo-commcepta.png"
                alt="Logo Commcepta"
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

const socialIconWidth = {
  base: '30px',
  sm: '40px',
  md: '25px',
  lg: '30px',
  xl: '35px'
}

const socialIconMarginLeft = {
  base: '15px',
  lg: '30px',
  xl: '40px'
}
