import { useRouter } from 'next/router'
import { Flex, Box, Text, Image, Button } from '@chakra-ui/react'

export const SectionPages = (props: {
  content: {
    id: string
    header_text?: string
    header_subtitle?: string
    description?: string
    hdf_berneck?: string
    mdf_berneck?: string
    mdp_berneck?: string
    year_description?: string
  }[]
}) => {
  const router = useRouter()

  return (
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
            onClick={() => router.push('/products/berneck-teca')}
            image={'/assets/imgs/search/teca_page.png'}
            content={{
              title: item.header_subtitle,
              description: item.description
            }}
          />
        ) : item.id.includes('berneck-pinus') ? (
          <Page
            key={item.id}
            onClick={() => router.push('/products/berneck-pinus')}
            image={'/assets/imgs/search/pinus_page.png'}
            content={{
              title: item.header_subtitle,
              description: item.description
            }}
          />
        ) : item.id.includes('forest-division') ? (
          <Page
            key={item.id}
            onClick={() => router.push('/divisao-florestal')}
            image={'/assets/imgs/divisao-florestal-1x.jpg'}
            content={{
              title: 'Divisão Florestal',
              description: item.header_text
            }}
          />
        ) : item.id.includes('hdf-berneck') ? (
          <Page
            key={item.id}
            onClick={() => router.push('/products/hdf-berneck')}
            image={'/assets/imgs/search/hdf_page.png'}
            content={{
              title: 'HDF Berneck©',
              description: item.hdf_berneck
            }}
          />
        ) : item.id.includes('mdf-berneck') ? (
          <Page
            key={item.id}
            onClick={() => router.push('/products/mdf-berneck')}
            image={'/assets/imgs/search/mdf_page.png'}
            content={{
              title: 'MDF Berneck©',
              description: item.mdf_berneck
            }}
          />
        ) : item.id.includes('mdp-berneck') ? (
          <Page
            key={item.id}
            onClick={() => router.push('/products/mdp-berneck')}
            image={'/assets/imgs/search/mdp_page.png'}
            content={{
              title: 'MDP Berneck©',
              description: item.mdp_berneck
            }}
          />
        ) : item.id.includes('our-commitment') ? (
          <Page
            key={item.id}
            onClick={() => router.push('/nosso-compromisso')}
            image={'/assets/imgs/nosso-compromisso-1x.jpg'}
            content={{
              title: 'Nosso Compromisso',
              description: item.header_text
            }}
          />
        ) : item.id.includes('our-trajectory') ? (
          <Page
            key={item.id}
            onClick={() =>
              router.push('/somos-berneck#:~:text=Nossa%20Trajet%C3%B3ria')
            }
            image={'/assets/imgs/foto_fabrica@2x.png'}
            content={{
              title: 'Nossa Trajetória',
              description: item.year_description
            }}
          />
        ) : (
          item.id.includes('who-we-are') && (
            <Page
              key={item.id}
              onClick={() => router.push('/somos-berneck')}
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
  )
}

const Page = (props: {
  image: string
  content: {
    title: string
    description: string
  }
  onClick: () => void
}) => (
  <Flex w="100%" direction="column">
    <Flex
      role="group"
      w="100%"
      cursor="pointer"
      onClick={props.onClick}
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
            as={'h1'}
            color="gray.300"
            letterSpacing="-0.6px"
            fontSize={{ base: '22px', xl: '29px' }}
            fontWeight={'extrabold'}
          >
            {props.content.title}
          </Text>

          <Text
            as={'h1'}
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
