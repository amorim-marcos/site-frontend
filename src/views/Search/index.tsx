import { Box, Image, Text, Flex } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'

import { SectionPages, SectionPosts, SectionProducts } from './sections'

export interface SearchProps {
  query: string
  results: {
    pages: unknown[]
    products: unknown[]
    posts: unknown[]
  }
}

export default function Search(props: SearchProps) {
  return (
    <Box maxWidth="1920px" bg="green.100">
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

      <Flex direction="column" pb="145px">
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
          <Image
            src="/assets/imgs/search/graphism_left.png"
            pos="absolute"
            w="414px"
            h="551px"
            left={0}
            top="-10px"
          />

          <Image
            src="/assets/imgs/search/graphism_right.png"
            pos="absolute"
            w="414px"
            h="551px"
            right={0}
            top="50px"
          />

          <Text
            as={'h1' as any}
            fontSize={'51px'}
            letterSpacing={'-1px'}
            fontWeight={800}
            color="white"
          >
            Resultados para: {props.query}
          </Text>

          <Box mt="24px" border="3px solid" w="87px" color="green.600" />

          <Text
            as={'h3' as any}
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

        <Flex direction="column" gap="70px" bg="brown.100">
          <SectionPages content={props.results.pages} />
          <SectionProducts content={props.results.products} />
          <SectionPosts content={props.results.posts} />
        </Flex>
      </Flex>
    </Box>
  )
}
