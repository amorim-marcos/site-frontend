import { Flex, Grid, Text, Box, Image } from '@chakra-ui/react'
import LogoBerneck from '../LogoBerneck'
import SocialIcon from '../SocialIcon'
import { FooterList } from './FooterList/FooterList'
import { Grafism } from './Grafism/Grafism'
import Link from 'next/link'

export const AppFooter = () => (
  <Flex
    flexDir="column"
    maxWidth="1920px"
    marginX="auto"
    h={732}
    bg="green.900"
  >
    <Flex
      padding="100px"
      overflow="hidden"
      position="relative"
      height="643px"
      width="100%"
      flexDir="column"
    >
      <Flex w="100%" zIndex="docked">
        <LogoBerneck />
        <Grid ml="auto" templateColumns="repeat(5, 1fr)" gap={10}>
          <SocialIcon media="facebook" />
          <SocialIcon media="instagram" />
          <SocialIcon media="linkedin" />
          <SocialIcon media="youtube" />
          <SocialIcon media="pinterest" />
        </Grid>
      </Flex>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={20}
        zIndex="docked"
        marginTop="100px"
      >
        <FooterList
          title={{
            title: 'SOMOS BERNECK®',
            href: '#'
          }}
          items={[
            {
              title: 'QUEM SOMOS',
              href: '#'
            },
            {
              title: 'NOSSA TRAJETÓRIA',
              href: '#'
            },
            {
              title: 'ONDE ESTAMOS',
              href: '#'
            },
            {
              title: 'CERTIFICAÇÕES',
              href: '#'
            }
          ]}
        />

        <FooterList
          title={{
            title: 'NOSSO COMPROMISSO',
            href: '#'
          }}
          items={[
            {
              title: 'CULTIVAMOS O MEIO AMBIENTE',
              href: '#'
            },
            {
              title: 'CULTIVAMOS NOSSA GENTE',
              href: '#'
            },
            {
              title: 'CULTIVAMOS NOSSOS VALORES',
              href: '#'
            },
            {
              title: 'RELATÓRIO ESG',
              href: '#'
            }
          ]}
        />

        <FooterList
          title={{
            title: 'DIVISÃO FLORESTAL',
            href: '#'
          }}
          items={[
            {
              title: 'MANEJO FLORESTAL',
              href: '#'
            },
            {
              title: 'PRODUÇÃO FLORESTAL',
              href: '#'
            },
            {
              title: 'FORNECEDOR FLORESTAL',
              href: '#'
            },
            {
              title: 'RESUMO PÚBLICO',
              href: '#'
            }
          ]}
        />

        <FooterList
          title={{
            title: 'PRODUTOS',
            href: '#'
          }}
          items={[
            {
              title: 'BP BERNECK®',
              href: '#'
            },
            {
              title: 'HDF BERNECK®',
              href: '#'
            },
            {
              title: 'MDF BERNECK®',
              href: '#'
            },
            {
              title: 'MDP BERNECK®',
              href: '#'
            },
            {
              title: 'PLUS BERNECK®',
              href: '#'
            },
            {
              title: 'BERNECK® PINUS',
              href: '#'
            },
            {
              title: 'BERNECK® TECA',
              href: '#'
            }
          ]}
        />

        <FooterList
          title={{
            title: 'CANAL BNK',
            href: '#'
          }}
          items={[
            {
              title: 'DOWNLOADS',
              href: '#'
            },
            {
              title: '',
              href: '#',
              empty: true
            },
            {
              title: 'FALE CONOSCO',
              href: '#'
            },
            {
              title: 'TRABALHE CONOSCO',
              href: '#'
            },
            {
              title: 'ONDE COMPRAR',
              href: '#'
            },
            {
              title: 'ACESSO RESTRITO',
              href: '#'
            }
          ]}
        />
      </Grid>

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
