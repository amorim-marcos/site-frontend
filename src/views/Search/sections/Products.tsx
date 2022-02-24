import { useRouter } from 'next/router'
import { Flex, Box, Text } from '@chakra-ui/react'

import BpPatternImage from '@components/BpPatternImage'

export const SectionProducts = (props: { content: unknown[] }) => {
  const router = useRouter()

  return (
    <Flex
      bg="#FFFBF4"
      w="100%"
      borderTop={'3px solid'}
      borderColor="green.600"
      overflowX="scroll"
      gap="52px"
    >
      {props.content.map((item: any) => (
        <Flex
          key={item.id}
          w="233px"
          gap="28px"
          cursor="pointer"
          role="group"
          padding="33px 33px 28px"
          direction="column"
          onClick={() => router.push(`/products/bp-berneck/catalog/${item.id}`)}
        >
          <BpPatternImage
            image_url={`${process.env.NEXT_PUBLIC_API_URL}${item.pattern_image.url}`}
            w="233px"
            h="386px"
            transition={'all .2s ease-in-out'}
            _groupHover={{
              boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'
            }}
          />

          <Box>
            <Text
              as={'h1'}
              color="gray.300"
              fontSize={'23px'}
              fontWeight={'bold'}
            >
              {item.name}
            </Text>

            <Text
              as={'h2'}
              color="gray.300"
              letterSpacing="-0.56px"
              fontSize={'14px'}
              fontWeight={'medium'}
            >
              {item.product_collections[0].name}
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  )
}
