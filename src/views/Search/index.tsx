import { Box, Image, Text, Flex, Button } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'

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
            color="green.900"
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

const SectionPages = (props: { content: unknown[] }) => (
  <Flex direction="column" px={'120px'} pt="84px">
    <Flex align="center" justify="space-between" pb="20px">
      <Text
        as={'h2' as any}
        fontSize={'30px'}
        fontWeight={800}
        color="green.900"
        pb="20px"
      >
        Páginas
      </Text>

      <Text
        as={'h3' as any}
        color="green.900"
        letterSpacing="-0.4px"
        fontSize={'20px'}
        fontWeight={'regular'}
      >
        {props.content.length}{' '}
        {props.content.length > 1 ? 'páginas encontradas' : 'página encontrada'}
      </Text>
    </Flex>

    <Flex
      bg="#FFFBF4"
      w="100%"
      direction={'column'}
      borderTop={'3px solid'}
      borderColor="green.600"
    >
      {props.content.map((item: any) => (
        <Box key={item.id} w="100%">
          <Flex
            w="100%"
            gap="28px"
            cursor="pointer"
            role="group"
            padding="33px"
          >
            <Image
              src="/assets/imgs/search/pages_placeholder.png"
              w="269px"
              h="200px"
              transition={'all .2s ease-in-out'}
              _groupHover={{
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'
              }}
            />

            <Flex justify="space-between" w="100%">
              <Box>
                <Text
                  as={'h1' as any}
                  color="gray.300"
                  letterSpacing="-0.6px"
                  fontSize={'29px'}
                  fontWeight={'extrabold'}
                >
                  {item.header_subtitle}
                </Text>

                <Text
                  as={'h1' as any}
                  color="gray.300"
                  letterSpacing="-0.5px"
                  fontSize={'25px'}
                  fontWeight={'medium'}
                >
                  {item.header_subtitle_description}
                </Text>
              </Box>

              <Flex h="100%" justify="center" align="center">
                <Button
                  w="221px"
                  h="78px"
                  bg="green.600"
                  _hover={{
                    bg: 'green.800'
                  }}
                >
                  Veja mais
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Box w="100%" border="2px solid" color="brown.100" />
        </Box>
      ))}
    </Flex>
  </Flex>
)

const SectionProducts = (props: { content: unknown[] }) => (
  <Flex direction="column" px={'120px'} pt="84px">
    <Flex align="center" justify="space-between" pb="20px">
      <Text
        as={'h2' as any}
        fontSize={'30px'}
        fontWeight={800}
        color="green.900"
        pb="20px"
      >
        BPs BERNECK®
      </Text>

      <Text
        as={'h3' as any}
        color="green.900"
        letterSpacing="-0.4px"
        fontSize={'20px'}
        fontWeight={'regular'}
      >
        {props.content.length}{' '}
        {props.content.length > 1
          ? 'produtos encontrados'
          : 'produto encontrado'}
      </Text>
    </Flex>

    {console.log(props.content)}

    <Flex bg="#FFFBF4" w="100%" borderTop={'3px solid'} borderColor="green.600">
      {props.content.map((item: any) => (
        <Flex
          key={item.id}
          w="400px"
          gap="28px"
          cursor="pointer"
          role="group"
          padding="33px"
          direction={'column'}
        >
          <Image
            src="/assets/imgs/search/pages_placeholder.png"
            w="233px"
            h="386px"
            transition={'all .2s ease-in-out'}
            _groupHover={{
              boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'
            }}
          />

          <Box>
            <Text
              as={'h1' as any}
              color="gray.300"
              fontSize={'23px'}
              fontWeight={'bold'}
            >
              {item.header_subtitle}
            </Text>

            <Text
              as={'h1' as any}
              color="gray.300"
              letterSpacing="-0.56px"
              fontSize={'14px'}
              fontWeight={'medium'}
            >
              {item.header_subtitle_description}
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  </Flex>
)

const SectionPosts = (props: { content: unknown[] }) => (
  <Flex direction="column" px={'120px'} pt="84px">
    <Flex align="center" justify="space-between" pb="20px">
      <Text
        as={'h2' as any}
        fontSize={'30px'}
        fontWeight={800}
        color="green.900"
        pb="20px"
      >
        Conteúdos
      </Text>

      <Text
        as={'h3' as any}
        color="green.900"
        letterSpacing="-0.4px"
        fontSize={'20px'}
        fontWeight={'regular'}
      >
        {props.content.length}{' '}
        {props.content.length > 1
          ? 'conteúdos encontrados'
          : 'conteúdo encontrado'}
      </Text>
    </Flex>

    {console.log(props.content)}

    <Flex
      bg="#FFFBF4"
      w="100%"
      direction={'column'}
      borderTop={'3px solid'}
      borderColor="green.600"
    >
      {props.content.map((item: any) => (
        <Box key={item.id} w="100%">
          <Flex
            w="100%"
            gap="28px"
            cursor="pointer"
            role="group"
            padding="33px"
          >
            <Image
              src="/assets/imgs/search/pages_placeholder.png"
              w="269px"
              h="200px"
              transition={'all .2s ease-in-out'}
              _groupHover={{
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'
              }}
            />

            <Flex justify="space-between" w="100%">
              <Box>
                <Text
                  as={'h1' as any}
                  color="gray.300"
                  letterSpacing="-0.6px"
                  fontSize={'29px'}
                  fontWeight={'extrabold'}
                >
                  {item.header_subtitle}
                </Text>

                <Text
                  as={'h1' as any}
                  color="gray.300"
                  letterSpacing="-0.5px"
                  fontSize={'25px'}
                  fontWeight={'medium'}
                >
                  {item.header_subtitle_description}
                </Text>
              </Box>

              <Flex h="100%" justify="center" align="center">
                <Button
                  w="221px"
                  h="78px"
                  bg="green.600"
                  _hover={{
                    bg: 'green.800'
                  }}
                >
                  Veja mais
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Box w="100%" border="2px solid" color="brown.100" />
        </Box>
      ))}
    </Flex>
  </Flex>
)
