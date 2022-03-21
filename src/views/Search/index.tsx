import { ReactNode } from 'react'
import { Box, Image, Text, Flex } from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'

import { SectionPages, SectionPosts, SectionProducts } from './sections'

export interface SearchProps {
  query: string
  results: {
    pages: {
      id: string
      header_text?: string
      header_subtitle?: string
      description?: string
      hdf_berneck?: string
      mdf_berneck?: string
      mdp_berneck?: string
      year_description?: string
    }[]
    products: {
      id: number
      name: string
      url_code: string
      pattern_image_url: string
      product_collections_name: string
    }[]
    posts: {
      id: number
      title: string
      content: string
      category: string
      url_code: string
      cover_url: string
    }[]
  }
}

export default function Search(props: SearchProps) {
  return (
    <Box maxWidth="1920px" w="100%" h="100%" bg="green.100">
      <Pagebar
        paths={[
          {
            title: 'Busca',
            url: ''
          },
          {
            title: `Resultados para: ${props.query}`,
            url: `/${props.query}`
          }
        ]}
      />

      <Flex
        direction="column"
        justify="center"
        align="center"
        w="100%"
        h="264px"
        bg="green.400"
        pos="relative"
        overflow="hidden"
      >
        <Box>
          <Image
            src="/assets/imgs/search/graphism_left.png"
            pos="absolute"
            w={{ base: '114px', sm: '214px', lg: '414px' }}
            h={{ base: '251px', sm: '351px', lg: '551px' }}
            left={0}
            top="-10px"
          />

          <Image
            src="/assets/imgs/search/graphism_right.png"
            pos="absolute"
            w={{ base: '114px', sm: '214px', lg: '414px' }}
            h={{ base: '251px', sm: '351px', lg: '551px' }}
            right={0}
            top="50px"
          />
        </Box>

        <Flex align="center" direction="column" zIndex={1000}>
          <Text
            as={'h1'}
            textAlign="center"
            fontSize={{ base: '30px', xs: '41px', md: '51px' }}
            letterSpacing={'-1px'}
            fontWeight={800}
            color="white"
          >
            Resultados para: {props.query}
          </Text>

          <Box mt="24px" h="3px" w="87px" bg="green.600" />

          <Text
            as={'h3'}
            pt="42px"
            color="green.800"
            fontSize={'15px'}
            fontWeight={600}
          >
            {props.results.pages.length +
              props.results.posts.length +
              props.results.products.length}{' '}
            Resultados Encontrados
          </Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap="70px" bg="brown.100" pb="145px">
        {props.results.pages.length > 0 && (
          <Section title="Páginas" contentLen={props.results.pages.length}>
            <SectionPages content={props.results.pages} />
          </Section>
        )}

        {props.results.products.length > 0 && (
          <Section
            title="BPs BERNECK®"
            contentLen={props.results.products.length}
          >
            <SectionProducts content={props.results.products} />
          </Section>
        )}

        {props.results.posts.length > 0 && (
          <Section title="Conteúdos" contentLen={props.results.posts.length}>
            <SectionPosts content={props.results.posts} />
          </Section>
        )}
      </Flex>
    </Box>
  )
}

export const Section = (props: {
  title: string
  contentLen: number
  children: ReactNode
}) => (
  <Flex
    direction="column"
    px={{ sm: '25px', xl: '50px', '2xl': '120px' }}
    pt="84px"
    gap={{ base: '35px', md: '20px' }}
  >
    <Flex
      h="40px"
      align="center"
      justify="space-between"
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: '5px', md: '0px' }}
      px={{ base: '10px', lg: '0px' }}
    >
      <Text
        as={'h2'}
        fontSize={{ base: '22px', xl: '30px' }}
        fontWeight={800}
        color="green.900"
        pb={{ base: '2px', xl: '20px' }}
      >
        {props.title}
      </Text>

      <Text
        as={'h3'}
        color="green.900"
        letterSpacing="-0.4px"
        fontSize={{ base: '15px', xl: '20px' }}
        fontWeight={'regular'}
      >
        {props.contentLen}{' '}
        {props.contentLen > 1 ? 'páginas encontradas' : 'página encontrada'}
      </Text>
    </Flex>

    {props.children}
  </Flex>
)
