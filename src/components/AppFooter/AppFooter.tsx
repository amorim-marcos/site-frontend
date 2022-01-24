import { Flex, Grid, Text, Box, Image } from '@chakra-ui/react'
import LogoBerneck from '../LogoBerneck'
import SocialIcon from '@components/Icons/SocialIcon'
import { FooterList } from './FooterList/FooterList'
import { Grafism } from './Grafism/Grafism'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

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
            height={{
              base: '14px',
              sm: '16px',
              md: '20px',
              lg: '25px',
              xl: '31px',
              '2xl': '40px'
            }}
          />
          <Grid
            ml="auto"
            templateColumns="repeat(5, 1fr)"
            gap={{ base: '15px', sm: '17px', md: '30px', '2xl': '50px' }}
          >
            <SocialIcon
              width={{
                base: '20px',
                sm: '23px',
                md: '25px',
                lg: '30px',
                xl: '35px',
                '2xl': '42px'
              }}
              media="facebook"
            />
            <SocialIcon
              width={{
                base: '20px',
                sm: '23px',
                md: '25px',
                lg: '30px',
                xl: '35px',
                '2xl': '42px'
              }}
              media="instagram"
            />
            <SocialIcon
              width={{
                base: '20px',
                sm: '23px',
                md: '25px',
                lg: '30px',
                xl: '35px',
                '2xl': '42px'
              }}
              media="linkedin"
            />
            <SocialIcon
              width={{
                base: '20px',
                sm: '23px',
                md: '25px',
                lg: '30px',
                xl: '35px',
                '2xl': '42px'
              }}
              media="youtube"
            />
            <SocialIcon
              width={{
                base: '20px',
                sm: '23px',
                md: '25px',
                lg: '30px',
                xl: '35px',
                '2xl': '42px'
              }}
              media="pinterest"
            />
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
              title: footer.t('column1Title'),
              href: '#'
            }}
            items={[
              {
                title: footer.t('column1Subitem1'),
                href: '#'
              },
              {
                title: footer.t('column1Subitem2'),
                href: '#'
              },
              {
                title: footer.t('column1Subitem3'),
                href: '#'
              },
              {
                title: footer.t('column1Subitem4'),
                href: '#'
              }
            ]}
          />

          <FooterList
            title={{
              title: footer.t('column2Title'),
              href: '#'
            }}
            items={[
              {
                title: footer.t('column2Subitem1'),
                href: '#'
              },
              {
                title: footer.t('column2Subitem2'),
                href: '#'
              },
              {
                title: footer.t('column2Subitem3'),
                href: '#'
              },
              {
                title: footer.t('column2Subitem4'),
                href: '#'
              }
            ]}
          />

          <FooterList
            title={{
              title: footer.t('column3Title'),
              href: '#'
            }}
            items={[
              {
                title: footer.t('column3Subitem1'),
                href: '#'
              },
              {
                title: footer.t('column3Subitem2'),
                href: '#'
              },
              {
                title: footer.t('column3Subitem3'),
                href: '#'
              },
              {
                title: footer.t('column3Subitem4'),
                href: '#'
              }
            ]}
          />

          <FooterList
            title={{
              title: footer.t('column4Title'),
              href: '#'
            }}
            items={[
              {
                title: footer.t('column4Subitem1'),
                href: '#'
              },
              {
                title: footer.t('column4Subitem2'),
                href: '#'
              },
              {
                title: footer.t('column4Subitem3'),
                href: '#'
              },
              {
                title: footer.t('column4Subitem4'),
                href: '#'
              },
              {
                title: footer.t('column4Subitem5'),
                href: '#'
              },
              {
                title: footer.t('column4Subitem6'),
                href: '#'
              },
              {
                title: footer.t('column4Subitem7'),
                href: '#'
              }
            ]}
          />

          <FooterList
            title={{
              title: footer.t('column5Title'),
              href: '#'
            }}
            items={[
              {
                title: footer.t('column5Subitem1'),
                href: '#'
              },
              {
                title: '',
                href: '#',
                empty: true
              },
              {
                title: footer.t('column5Subitem2'),
                href: '#'
              },
              {
                title: footer.t('column5Subitem3'),
                href: '#'
              },
              {
                title: footer.t('column5Subitem4'),
                href: '#'
              },
              {
                title: footer.t('column5Subitem5'),
                href: '#'
              }
            ]}
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
