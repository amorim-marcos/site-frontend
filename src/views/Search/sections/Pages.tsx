import { Flex, Box, Text, Image, Button } from '@chakra-ui/react'

export const SectionPages = (props: { content: unknown[] }) => (
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
      {props.content.map((item: any) =>
        item.id.includes('berneck-teca') ? (
          <Page
            key={item.id}
            image={'/assets/imgs/search/teca_page.png'}
            content={{
              title: item.header_subtitle,
              description: item.description
            }}
          />
        ) : item.id.includes('berneck-pinus') ? (
          <Page
            key={item.id}
            image={'/assets/imgs/search/pinus_page.png'}
            content={{
              title: item.header_subtitle,
              description: item.description
            }}
          />
        ) : item.id.includes('forest-division') ? (
          <Page
            key={item.id}
            image={'/assets/imgs/divisao-florestal-1x.jpg'}
            content={{
              title: 'Divisão Florestal',
              description: item.header_text
            }}
          />
        ) : item.id.includes('hdf-berneck') ? (
          <Page
            key={item.id}
            image={'/assets/imgs/search/hdf_page.png'}
            content={{
              title: 'HDF Berneck©',
              description: item.hdf_berneck.description
            }}
          />
        ) : item.id.includes('mdf-berneck') ? (
          <Page
            key={item.id}
            image={'/assets/imgs/search/mdf_page.png'}
            content={{
              title: 'MDF Berneck©',
              description: item.mdf_berneck.description
            }}
          />
        ) : item.id.includes('mdp-berneck') ? (
          <Page
            key={item.id}
            image={'/assets/imgs/search/mdp_page.png'}
            content={{
              title: 'MDP Berneck©',
              description: item.mdp_berneck.description
            }}
          />
        ) : item.id.includes('our-commitment') ? (
          <Page
            key={item.id}
            image={'/assets/imgs/nosso-compromisso-1x.jpg'}
            content={{
              title: 'Nosso Compromisso',
              description: item.header_text
            }}
          />
        ) : item.id.includes('our-trajectory') ? (
          <Page
            key={item.id}
            image={'/assets/imgs/foto_fabrica@2x.png'}
            content={{
              title: 'Nossa Trajetória',
              description: item.year[item.year.length - 1].description
            }}
          />
        ) : (
          item.id.includes('who-we-are') && (
            <Page
              key={item.id}
              image={'/assets/imgs/capa_somos_berneck.png'}
              content={{
                title: 'Quem Somos',
                description: item.header_text
              }}
            />
          )
        )
      )}
    </Flex>
  </Flex>
)

const Page = (props: {
  image: string
  content: {
    title: string
    description: string
  }
}) => (
  <Box w="100%">
    <Flex
      w="100%"
      gap="28px"
      cursor="pointer"
      role="group"
      padding="33px 0px 33px 33px"
    >
      <Image
        src={props.image}
        minW="269px"
        w="269px"
        h="200px"
        objectFit="cover"
        transition={'all .2s ease-in-out'}
        _groupHover={{
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'
        }}
      />

      <Flex justify="space-between" w="100%" pr="29px">
        <Box w="1030px" h="168px">
          <Text
            as={'h1' as any}
            color="gray.300"
            letterSpacing="-0.6px"
            fontSize={'29px'}
            fontWeight={'extrabold'}
          >
            {props.content.title}
          </Text>

          <Text
            as={'h1' as any}
            color="gray.300"
            letterSpacing="-0.5px"
            fontSize={'25px'}
            fontWeight={'medium'}
            lineHeight="35px"
            textOverflow="ellipsis"
            overflow="hidden"
            noOfLines={4}
          >
            {props.content.description}
          </Text>
        </Box>

        <Flex h="100%" align="center">
          <Button
            borderRadius="17px"
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
)
