import { Flex, Box, Text, Button, Image } from '@chakra-ui/react'
import useMobile from 'hooks/useMobile'

export const SectionPackBpDownloads = () => {
  const { isMobile, width } = useMobile(568)
  return (
    <Flex
      id="pack-bp-downloads"
      w="100%"
      marginBottom={{ base: '400px', md: '10%' }}
      justifyContent="center"
    >
      <Flex
        bg="#F6EFE3"
        maxWidth="1920px"
        minWidth={width && width < 1920 ? '100vw' : '1920px'}
        h={{ base: 'auto', md: '23vw' }}
        maxHeight="441px"
        position="relative"
        justifyContent="space-around"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box
          bg="brown.300"
          w={{ base: '100vw', md: '40%' }}
          height={{ base: '335px', md: '100%' }}
          right="0"
          position="absolute"
          top={{ base: '100%', md: '0' }}
        >
          <Image
            position="absolute"
            w={{ base: '100vw', md: 'auto' }}
            height={{ base: 'auto', md: '23vw' }}
            maxHeight={{ base: 'auto', md: '442px' }}
            left={{ base: '0', md: '-25%' }}
            top={{ base: '0', md: '0' }}
            src="/img/grafism_bp_downloads.png"
          />
          <Image
            position="absolute"
            height={{ base: '100%', md: '23vw' }}
            maxHeight={{ md: '442px' }}
            right="0"
            top={{ base: '0', md: '0' }}
            src="/img/pack_bp_downlodas.png"
            flexShrink="0"
            objectFit="cover"
          />
        </Box>

        <Flex
          paddingY={{ base: '50px', md: '0' }}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          textAlign={'center'}
        >
          <Text  as="h3" variant={'h3' as any}>
            Pack de Padrões BP BERNECK®
          </Text>
          <Text
            w={{ base: '70%', xl: '80%', '2xl': '100%' }}
            color="green.800"
            variant={'body' as any}
            textAlign="center"
          >
            Faça o download do pack de padrões BP BERNECK® para utilizar em seus
            projetos.
          </Text>
          <Button
            marginTop="6%"
            bg="green.600"
            color="white.100"
            w="60%"
            variant="unstyled"
            height={{ base: '50px', md: '20%' }}
          >
            <Text color="white.100" fontWeight="bold" variant={'body' as any}>
              Pack de Padrões
            </Text>
          </Button>
        </Flex>

        <Box w={{ base: '40%', md: '30%', lg: '25%' }}></Box>
      </Flex>
    </Flex>
  )
}
