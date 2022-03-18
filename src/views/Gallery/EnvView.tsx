/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router'

import { Flex, Box, Text, Image } from '@chakra-ui/react'

import CarouselMultiElements from '@components/CarouselMultiElements'
import CompletedTitle from '@components/CompletedTitle'
import Pagebar from '@components/Pagebar'
import SeeMore from '@components/SeeMore'

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
    <Box maxWidth={'1920px'} marginX="auto">
      <Pagebar
        paths={[
          {
            title: 'Produtos',
            url: '/'
          },
          {
            title: 'BP BERNECK',
            url: '/'
          },
          {
            title: 'Galeria de Ambientes',
            url: '/'
          },
          {
            title: 'Cozinha',
            url: '/'
          }
        ]}
      />
      <Flex
        flexDirection={'column'}
        maxWidth={'1920px'}
        padding="5%"
        marginX="auto"
      >
        <CompletedTitle titleString={env.title} alignSelf={'left'} />
        <Text marginY="3%" as="h3" variant="h3" color="brown.300">
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
                {tableContent.map((item) => {
                  return (
                    <Flex key={item.column1} w="100%">
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
                        <Text variant="body" fontWeight="bold" color="gray.250">
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
                })}
              </Flex>
            </Flex>
            <Flex flexDirection={'column'} w={{ base: '100%', md: '50%' }}>
              <Text
                variant="body"
                fontWeight={'bold'}
                color="brown.300"
                marginBottom={'3%'}
              >
                Padrões BP BERNECK® utilizados neste ambiente
              </Text>

              <Flex flexDirection={'row'} w="100%" gap="30px">
                {env.panels.map((panel: any) => (
                  <Box key={panel.id}>
                    <Flex w="100%">
                      <Box
                        w="233px"
                        h={{ base: '35vw', md: '18vw' }}
                        maxHeight="380px"
                      >
                        <Image
                          src={panel.imgSrc}
                          w="100%"
                          h="100%"
                          objectFit={'cover'}
                        />
                      </Box>
                    </Flex>

                    <Text
                      variant="body"
                      fontWeight={'extrabold'}
                      color="brown.300"
                      marginTop={'3%'}
                    >
                      {panel.name}
                    </Text>

                    <Text
                      variant="body"
                      fontWeight={'bold'}
                      color="brown.300"
                      marginTop={'3%'}
                    >
                      {panel.product_texture}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      {/* Other Envs */}
      <Flex flexDirection={'column'} padding={'5%'} bg="brown.100" w="100%">
        <Flex w="100%" alignItems={'center'} justifyContent={'space-between'}>
          <Text marginY="3%" as="h3" variant="h3" color="brown.300">
            Outros ambientes
          </Text>
          <SeeMore
            text = "Veja mais ambientes"
            link = "/products/bp-berneck/gallery"
           />
        </Flex>

        <Flex
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={'space-between'}
        >
          {otherEnvs.map((item) => (
            <Flex
              w={{ base: '100%', md: '23%' }}
              key={item.id}
              flexDirection={'column'}
              _hover={{ opacity: '0.9' }}
              cursor={'pointer'}
              onClick={() =>
                router.push(`/products/bp-berneck/gallery/${item.url_code}`)
              }
            >
              <Image
                w="100%"
                objectFit={'cover'}
                maxHeight={'80%'}
                src={item.imgSrc}
              />
              <Text marginTop="3%" as="h3" variant="h3" color="brown.300">
                {item.title}
              </Text>

              <Text
                as="body"
                bg="none"
                variant="body"
                color="brown.300"
                marginBottom={{ base: '10%', md: '0' }}
              >
                {item.subTitle}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
