/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router'

import { Flex, Box, Text, Image, Grid, GridItem, Link } from '@chakra-ui/react'

import CarouselMultiElements from '@components/CarouselMultiElements'
import CompletedTitle from '@components/CompletedTitle'
import Pagebar from '@components/Pagebar'
import SeeMore from '@components/SeeMore'
import { Env } from './EnvGallery/Env'

export type EnvViewProps = {
  env: {
    id: number
    title: string
    subTitle: string
    panels: {
      id: string
      name: string
      imgSrc: string
      product_texture: string
    }[]
  }
  otherEnvs: {
    id: number
    url_code: string
    imgSrc: string
    title: string
    subTitle: string
  }[]
  imgs: {
    imgSrc: string
    id: number
  }[]
  tableContent: {
    column1: string
    column2: string
  }[]
}

export const EnvView = ({
  env,
  otherEnvs,
  imgs,
  tableContent
}: EnvViewProps) => {
  const router = useRouter()

  return (
    <Box maxWidth={'1536px'} marginX="auto">
      <Pagebar
        paths={[
          {
            title: 'Produtos',
            url: '/products'
          },
          {
            title: 'BP BERNECK',
            url: '/products/bp-berneck'
          },
          {
            title: 'Galeria de Ambientes',
            url: '/products/bp-berneck/gallery'
          }
        ]}
      />
      <Flex
        flexDirection={'column'}
        maxWidth={'1536px'}
        padding="5%"
        marginX="auto"
      >
        <CompletedTitle titleString={env.title} alignSelf={'left'} />
        <Text
          as={'h3'}
          variant={'h3'}
          fontWeight="extrabold"
          color={'gray.300'}
          marginY={'3%'}
        >
          {env.subTitle}
        </Text>

        <Box bg="white.200" w="100%">
          <CarouselMultiElements numberOfEvidenceElements={1}>
            {imgs.map((i) => {
              return (
                <Flex
                  alignItems={'center'}
                  justifyContent={'center'}
                  key={i.id}
                  w="100%"
                  h="65vw"
                  maxHeight={'1268px'}
                >
                  <Image src={i.imgSrc} h="100%" objectFit={'cover'} />
                </Flex>
              )
            })}
          </CarouselMultiElements>

          <Flex
            marginTop={{ base: '80px', md: '0' }}
            flexDirection={{ base: 'column-reverse', md: 'row' }}
            padding="0 7% 5%"
          >
            <Flex
              marginTop={{ base: '7%', md: '0' }}
              w={{ base: '100%', md: '50%' }}
            >
              <Flex w={{ base: '100%', md: '80%' }} flexDirection={'column'}>
                {tableContent.map((item, i) => {
                  return (
                    item.column2 && (
                      <Flex key={i} w="100%">
                        <Flex
                          bg="white.100"
                          padding={{
                            base: '5px',
                            xs: '5px 10px',
                            lg: '5px 20px'
                          }}
                          border="3px solid"
                          borderColor="white.200"
                          minHeight="40px"
                          minWidth={{
                            base: '85px',
                            xs: '100px',
                            sm: '180px',
                            md: '90px',
                            lg: '180px'
                          }}
                          alignItems="center"
                        >
                          <Text
                            variant="body"
                            fontWeight="bold"
                            color="gray.250"
                          >
                            {item.column1}
                          </Text>
                        </Flex>
                        <Flex
                          bg="white.100"
                          padding={{ base: '5px 5px', lg: '5px 20px' }}
                          border="3px solid"
                          borderColor="white.200"
                          minHeight="40px"
                          minWidth="180px"
                          alignItems="center"
                          w="full"
                        >
                          <Text variant="body" color="gray.250">
                            {item.column2}
                          </Text>
                        </Flex>
                      </Flex>
                    )
                  )
                })}
              </Flex>
            </Flex>
            <Flex flexDirection={'column'} w={{ base: '100%', md: '50%' }}>
              <Text
                variant="h5"
                fontWeight={'bold'}
                color="gray.300"
                marginBottom={'3%'}
              >
                Padrões BP BERNECK® utilizados neste ambiente
              </Text>

              <Flex
                flexDirection={'row'}
                w="100%"
                // gap={{ base: '5px', lg: '10px' }}
                justifyContent={{ base: 'center', md: 'start' }}
                flexDir={{ base: 'column', sm: 'row' }}
              >
                {env.panels.map((panel: any, i) => {
                  return (
                    i < 4 && (
                      <Box key={i}>
                        <Flex w="100%">
                          <Box
                            w={{ base: '80vw', sm: '150px' }}
                            h={{ base: '120px', sm: '275px' }}
                          >
                            <Link href={panel.href}>
                              <Image
                                src={panel.imgSrc}
                                w="100%"
                                h="100%"
                                objectFit={'cover'}
                              />
                            </Link>
                          </Box>
                        </Flex>

                        <Text
                          variant="body"
                          fontWeight={'extrabold'}
                          color="gray.300"
                          marginTop={'3%'}
                        >
                          {panel.name}
                        </Text>

                        <Text
                          variant="body"
                          fontWeight={'bold'}
                          color="gray.300"
                          marginTop={'3%'}
                        >
                          {/* {panel.product_texture} */}
                        </Text>
                      </Box>
                    )
                  )
                })}
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      {/* Other Envs */}
      <Flex flexDirection={'column'} padding={'5%'} bg="brown.100" w="100%">
        <Flex
          w="100%"
          flexDirection={{ base: 'column', sm: 'row' }}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Text marginY="3%" as="h3" variant="h3" color="gray.300">
            Outros ambientes
          </Text>
          <Flex margin={{ base: '5px 0 15px 0', sm: '0' }}>
            <SeeMore
              text="Veja mais ambientes"
              link="/products/bp-berneck/gallery"
            />
          </Flex>
        </Flex>

        <Flex
          // border="1px solid red"
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent={otherEnvs.length > 3 ? 'space-between' : 'flex-start'}
        >
          {otherEnvs.map((item, i) => {
            return (
              i < 4 && (
                <Flex
                  w={{ base: '100%', lg: '23%' }}
                  // h="300px"
                  // border="1px solid green"
                  marginRight={otherEnvs.length > 3 ? '0' : '2%'}
                  key={i}
                  flexDirection="column"
                  cursor="pointer"
                  onClick={() =>
                    router.push(`/products/bp-berneck/gallery/${item.url_code}`)
                  }
                >
                  <Image
                    w="100%"
                    h={{
                      base: '350px',
                      lg: '250px',
                      xl: '270px',
                      '2xl': '300px'
                    }}
                    objectFit={'cover'}
                    src={item.imgSrc}
                  />
                  <Text
                    as={'h4'}
                    variant={'h4'}
                    fontWeight="bold"
                    color={'gray.300'}
                    marginTop="10px"
                  >
                    {item.title}
                  </Text>
                  <Text
                    as={'h5'}
                    variant={'h5'}
                    fontWeight="medium"
                    color={'gray.300'}
                    marginBottom={{ base: '40px', lg: '0' }}
                  >
                    {item.subTitle}
                  </Text>
                </Flex>
              )
            )
          })}
        </Flex>

        {/* <Flex
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={'space-between'}
          // border="1px solid red"
        >
          <Grid
            width="100%"
            overflow="hidden"
            templateRows="repeat(auto, 1fr)"
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              xl: 'repeat(4, 1fr)'
            }}
            gridGap={{
              base: 'none',
              sm: '10px',
              md: '30px',
              xl: '20px'
            }}
            // justifyItems="center"
            // bg="pink"
          >
            {otherEnvs.map((item) => (
              <GridItem
                key={item.id}
                // bg="red"
                // gap={"10px"}
              >
                <Env
                  href={`/products/bp-berneck/gallery/${item.url_code}`}
                  title={item.title}
                  place={item.subTitle}
                  image_url={item.imgSrc}
                  others
                />
              </GridItem>
            ))}
          </Grid>
        </Flex> */}
      </Flex>
    </Box>
  )
}
