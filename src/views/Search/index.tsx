import { ReactNode } from 'react'
import { Box, Image, Text, Flex } from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'

import { SectionPages, SectionPosts, SectionProducts } from './sections'
import { useTranslation } from 'react-i18next'

export interface SearchProps {
  query?: string
  results?: {
    pages?: {
      id?: string
      header_text?: string
      header_subtitle?: string
      description?: string
      hdf_berneck?: string
      mdf_berneck?: string
      mdp_berneck?: string
      year_description?: string
    }[]
    products?: {
      id?: number
      name?: string
      url_code?: string
      pattern_image_url?: string
      product_collections_name?: string
    }[]
    posts?: {
      id?: number
      title?: string
      content?: string
      category?: string
      url_code?: string
      cover_url?: string
    }[]
  }
}

export default function Search(props: SearchProps) {
  const searchLabels = useTranslation('searchView')
  return (
    <Box bg="green.400">
      <Pagebar
        paths={[
          {
            title: searchLabels.t('pagebar.search'),
            url: ''
          },
          {
            title: `${searchLabels.t('pagebar.resultsFor')} ${props.query}`,
            url: `/${props.query}`
          }
        ]}
      />

      <Flex align="center" justify="center">
        <Flex
          maxWidth="1536px"
          direction="column"
          bg="green.100"
          alignSelf="center"
        >
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
                {searchLabels.t('resultsFor')} {props.query}
              </Text>

              <Box mt="24px" h="3px" w="87px" bg="green.600" />

              <Text
                as={'h3'}
                pt="42px"
                color="green.800"
                fontSize={'15px'}
                fontWeight={600}
              >
                {props.results &&
                  props.results.pages &&
                  props.results.posts &&
                  props.results.products &&
                  props.results &&
                  props.results.posts.length + props.results.pages.length}{' '}
                {searchLabels.t('resultsFound')}
              </Text>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            w="100%"
            gap={{ base: '20px', sm: '35px', md: '50px', lg: '70px' }}
            bg="brown.100"
            pb="145px"
            px={{ base: '10px', sm: '20px', md: '30px', lg: '60px' }}
          >
            {props.results &&
              props.results.pages &&
              props.results.pages.length > 0 && (
                <Section
                
                  title={searchLabels.t('pages')}
                  contentLen={props.results.pages.length}
                >
                  <SectionPages
                    content={props.results.pages ? props.results.pages : []}
                  />
                </Section>
              )}

            {props.results &&
              props.results.products &&
              props.results.products.length > 0 && (
                <Section
                  title={searchLabels.t('bpsBerneck')}
                  contentLen={props.results.products.length}
                >
                  <SectionProducts
                    content={
                      props.results.products ? props.results.products : []
                    }
                  />
                </Section>
              )}

            {props.results &&
              props.results.posts &&
              props.results.posts.length > 0 && (
                <Section
                  title={searchLabels.t('contents')}
                  contentLen={props.results.posts.length}
                >
                  <SectionPosts
                    content={props.results.posts ? props.results.posts : []}
                  />
                </Section>
              )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export const Section = (props: {
  title: string
  contentLen: number
  children: ReactNode
}) => {
  const searchLabels = useTranslation('searchView')

  return (
    <Flex
    direction="column"
    alignItems="center"
    justifyContent="center"
    px={{ base: '15px', md: '20px', lg: '50px', xl: '100px', '2xl': '120px' }}
    pt={{ base: '50px', md: '70px', lg: '84px' }}
    gap={{ base: '25px', md: '35px', lg: '20px' }}
    ml={{ base: '0', md: '20px', lg: '20px', '2xl': '60px' }}
    mr={{ base: '0', md: '10px', lg: '20px', '2xl': '60px' }}
    maxWidth="100vw"

    >
      <Flex
        h={{ base: 'auto', lg: '40px' }}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: '20px', lg: '33px' }}
        px={{ base: '0px', lg: '0px' }}
        w="100%"
        
      >
        <Text
          as={'h2'}
          fontSize={{ base: '22px', xl: '30px' }}
          fontWeight={800}
          color="green.900"
          pb={{ base: '20px', xl: '20px' }}
        >
          {props.title}
        </Text>

        <Text
          as={'h3'}
          color="green.900"
          letterSpacing="-0.4px"
          fontSize={{ base: '20px', xl: '20px' }}
          fontWeight={'regular'}
          
        >
          {props.contentLen}{' '}
          {props.contentLen > 1 ? searchLabels.t('') : searchLabels.t('')}
        </Text>
      </Flex>

      {props.children}
    </Flex>
  )
}
