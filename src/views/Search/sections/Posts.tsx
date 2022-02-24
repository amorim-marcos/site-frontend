import { Flex, Box, Text, Image, Button } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const PostContentSanitize = dynamic(import('./PostContentSanitize'), {
  ssr: false
})

export const SectionPosts = (props: { content: unknown[] }) => (
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
        Conteúdos
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
      {props.content.map((item: any) => (
        <Post
          key={item.id}
          image={`${process.env.NEXT_PUBLIC_API_URL}${item.cover.url}`}
          content={{
            title: item.title,
            description: item.content
          }}
        />
      ))}
    </Flex>
  </Flex>
)

const Post = (props: {
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

        <Flex direction="column" justify="space-between">
          <Text
            as={'h1' as any}
            color="gray.300"
            letterSpacing="-0.6px"
            fontSize={{ base: '22px', xl: '24px', '2xl': '29px' }}
            fontWeight={'extrabold'}
          >
            {props.content.title}
          </Text>

          <Text
            as={'h1' as any}
            color="gray.300"
            letterSpacing="-0.5px"
            fontSize={{ base: '18px', xl: '20px', '2xl': '25px' }}
            textAlign={{ base: 'justify', xl: 'left' }}
            fontWeight={'medium'}
            lineHeight="35px"
            textOverflow="ellipsis"
            overflow="hidden"
            noOfLines={4}
          >
            <PostContentSanitize content={props.content.description} />
          </Text>
        </Flex>
      </Flex>

      <Flex w={{ base: '100%', lg: 'auto' }} h="100%" alignSelf="center">
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
