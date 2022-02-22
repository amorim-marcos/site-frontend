import { Flex, Box, Text, Image } from '@chakra-ui/react'
import BpPatternImage from '@components/BpPatternImage'

export const SectionProducts = (props: { content: unknown[] }) => (
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

    <Flex
      bg="#FFFBF4"
      w="100%"
      borderTop={'3px solid'}
      borderColor="green.600"
      overflowX="scroll"
    >
      {props.content.map((item: any) => (
        <Flex
          key={item.id}
          minW="400px"
          gap="28px"
          cursor="pointer"
          role="group"
          padding="33px"
          direction={'column'}
        >
          <BpPatternImage
            image_url={'/bps/patterns/volakas.jpg'} // item.pattern_image
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
              {item.name}
            </Text>

            <Text
              as={'h1' as any}
              color="gray.300"
              letterSpacing="-0.56px"
              fontSize={'14px'}
              fontWeight={'medium'}
            >
              {item.description}
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  </Flex>
)
