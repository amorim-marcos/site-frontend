import { Flex, Box, Text, Image, Button } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const PostContentSanitize = dynamic(import('./PostContentSanitize'), {
  ssr: false
})

export const SectionPosts = (props: { content: unknown[] }) => {
  const post = props.content as any

  return (
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
                src={`${process.env.NEXT_PUBLIC_API_URL}${post[0].cover.url}`}
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
                    {item.title}
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
                    <PostContentSanitize content={item.content} />
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
}
