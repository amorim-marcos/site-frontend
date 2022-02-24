import { Flex, Box, Text, Image, Button } from '@chakra-ui/react'

export const SectionPages = (props: { content: unknown[] }) => (
  <Flex
    direction="column"
    px={{ sm: '25px', xl: '50px', '2xl': '120px' }}
    pt="84px"
    gap="20px"
  >
    <Flex
      h="40px"
      align="center"
      justify="space-between"
      px={{ base: '10px', lg: '0px' }}
    >
      <Text
        as={'h2' as any}
        fontSize={{ base: '22px', xl: '30px' }}
        fontWeight={800}
        color="green.900"
        pb={{ base: '2px', xl: '20px' }}
      >
        Páginas
      </Text>

      <Text
        as={'h3' as any}
        color="green.900"
        letterSpacing="-0.4px"
        fontSize={{ base: '15px', xl: '20px' }}
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
  <Flex w="100%" direction="column">
    <Flex
      role="group"
      w="100%"
      cursor="pointer"
      justify="space-between"
      direction={{ base: 'column', lg: 'row' }}
      gap={{ base: '25px', lg: '69px' }}
      padding={{ base: '25px', lg: '33px 29px 33px 33px' }}
    >
      <Flex gap="28px" direction={{ base: 'column', md: 'row' }}>
        <Image
          src={props.image}
          minW={{ base: '100%', md: '259px', xl: '269px' }}
          w={{ base: '100%', md: '259px', xl: '269px' }}
          h={{ base: '180px', md: '220px', lg: '200px' }}
          objectFit="cover"
          transition={'all .2s ease-in-out'}
          _groupHover={{
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'
          }}
        />

        <Flex direction="column">
          <Text
            as={'h1' as any}
            color="gray.300"
            letterSpacing="-0.6px"
            fontSize={{ base: '22px', xl: '29px' }}
            fontWeight={'extrabold'}
          >
            {props.content.title}
          </Text>

          <Text
            as={'h1' as any}
            color="gray.300"
            letterSpacing="-0.5px"
            fontSize={{ base: '18px', xl: '25px' }}
            textAlign={{ base: 'justify', xl: 'left' }}
            fontWeight={'medium'}
            lineHeight="35px"
            textOverflow="ellipsis"
            overflow="hidden"
            noOfLines={4}
          >
            {props.content.description}
          </Text>
        </Flex>
      </Flex>

      <Flex h="100%" alignSelf="center" w={{ base: '100%', lg: 'auto' }}>
        <Button
          borderRadius="17px"
          w={{ base: '100%', lg: '221px' }}
          h={{ base: '65px', lg: '78px' }}
          bg="green.600"
          _hover={{ bg: 'green.800' }}
        >
          Veja mais
        </Button>
      </Flex>
    </Flex>

    <Box w="100%" border="2px solid" color="brown.100" />
  </Flex>
)
