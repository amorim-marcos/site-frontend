import { Flex, Box, Text } from '@chakra-ui/react'
import BpPatternImage from '@components/BpPatternImage'

export const SectionProducts = (props: { content: unknown[] }) => (
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
        BPs BERNECK®
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
      borderTop={'3px solid'}
      borderColor="green.600"
      overflowX="scroll"
      gap="52px"
    >
      {props.content.map((item: any) => (
        <Product
          key={item.id}
          image={`${process.env.NEXT_PUBLIC_API_URL}${item.pattern_image.url}`}
          content={{
            title: item.name,
            description: item.product_collections[0].name
          }}
        />
      ))}
    </Flex>
  </Flex>
)

const Product = (props: {
  image: string
  content: {
    title: string
    description: string
  }
}) => (
  <Flex
    w="233px"
    gap="28px"
    cursor="pointer"
    role="group"
    padding="33px 33px 28px"
    direction={'column'}
  >
    <BpPatternImage
      image_url={props.image}
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
        {props.content.title}
      </Text>

      <Text
        as={'h1' as any}
        color="gray.300"
        letterSpacing="-0.56px"
        fontSize={'14px'}
        fontWeight={'medium'}
      >
        {props.content.description}
      </Text>
    </Box>
  </Flex>
)
