import { Flex, Box, Text, Image } from '@chakra-ui/react'
import CarouselMultiElements from '@components/CarouselMultiElements'
import CompletedTitle from '@components/CompletedTitle'
import ArrowIcon from '@components/Icons/ArrowIcon'
import Pagebar from '@components/Pagebar'

export type EnvViewProps = {
  otherEnvs: {
    id: number
    imgSrc: string
    title: string
    subTitle: string
  }[]
  imgs: {
    imgSrc: string
    id: string | number
  }[]
  tableContent: {
    column1: string
    column2: string
  }[]
}

export const EnvView = ({ otherEnvs, imgs, tableContent }: EnvViewProps) => {
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
        <CompletedTitle titleString="Cozinha" alignSelf={'left'} />
        <Text marginY="3%" as="h3" variant={'h3' as any} color="brown.300">
          Vitrine Artefacto Curitiba
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
                        <Text
                          variant={'body' as any}
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
                        <Text variant={'body' as any} color="gray.250">
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
                variant={'body' as any}
                fontWeight={'bold'}
                color="brown.300"
                marginBottom={'3%'}
              >
                Padrões BP BERNECK® utilizados neste ambiente
              </Text>
              <Flex w="100%">
                <Box w="25%" h={{ base: '35vw', md: '18vw' }} maxHeight="380px">
                  <Image
                    src="/img/bp-gallery/sky.png"
                    w="100%"
                    h="100%"
                    objectFit={'cover'}
                  />
                </Box>
              </Flex>
              <Text
                variant={'body' as any}
                fontWeight={'bold'}
                color="brown.300"
                marginTop={'3%'}
              >
                Sky
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      {/* Other Envs */}
      <Flex flexDirection={'column'} padding={'5%'} bg="brown.100" w="100%">
        <Flex w="100%" alignItems={'center'} justifyContent={'space-between'}>
          <Text marginY="3%" as="h3" variant={'h3' as any} color="brown.300">
            Outros ambientes
          </Text>
          <Flex
            alignItems={'center'}
            _hover={{ opacity: '0.6' }}
            cursor={'pointer'}
            onClick={() => alert('ir para galeria')}
          >
            <Text
              variant={'body' as any}
              color="green.600"
              marginRight={'4%'}
              whiteSpace={'nowrap'}
            >
              Veja mais ambientes
            </Text>
            <ArrowIcon
              stroke={'green.500'}
              width={{
                base: '18px',
                sm: '13px',
                md: '15px',
                lg: '18px',
                xl: '20px'
              }}
            />
          </Flex>
        </Flex>

        <Flex
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={'space-between'}
        >
          {otherEnvs.map((item) => {
            return (
              <Flex
                w={{ base: '100%', md: '23%' }}
                key={item.id}
                flexDirection={'column'}
                _hover={{ opacity: '0.9' }}
                cursor={'pointer'}
              >
                <Image
                  w="100%"
                  objectFit={'cover'}
                  maxHeight={'80%'}
                  src={item.imgSrc}
                />
                <Text
                  marginTop="3%"
                  as="h3"
                  variant={'h3' as any}
                  color="brown.300"
                >
                  {item.title}
                </Text>

                <Text
                  as="body"
                  bg="none"
                  variant={'body' as any}
                  color="brown.300"
                  marginBottom={{ base: '10%', md: '0' }}
                >
                  {item.subTitle}
                </Text>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}
