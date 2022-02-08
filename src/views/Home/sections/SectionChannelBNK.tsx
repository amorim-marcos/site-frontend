import { Flex, Image, Text } from '@chakra-ui/react'
import ChannelBnkRelationalItem from '@components/ChannelBnkRelationalItem'

export const SectionChannelBNK = () => {
  return (
    <Flex
      justifyContent={'center'}
      paddingY="4%"
      bg="brown.100"
      maxW={'1920px'}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Flex
        flexDirection={'column'}
        alignItems={{ base: 'flex-start', md: 'center' }}
        justifyContent={'center'}
        w={{ base: '100%', md: '25%' }}
        paddingX={{ base: '5%', md: '0' }}
        paddingY={{ base: '10%', md: '0' }}
        paddingTop={{ base: '0', md: '10%' }}
      >
        <Image
          w={{ base: '45%', md: '50%' }}
          src="/assets/imgs/canal-bnk/Canal_Berneck.svg"
        />
        <Text
          marginTop="5%"
          w={{ md: '50%' }}
          as="h4"
          variant={'h4' as any}
          fontWeight={'normal'}
        >
          Nosso canal de conteúdos sobre madeira, inspiração e muito mais.
        </Text>
      </Flex>
      <Flex
        justifyContent={{ md: 'space-evenly' }}
        overflowX={{ base: 'scroll', md: 'hidden' }}
        w={{ base: '100vw', md: '75%' }}
        paddingLeft={{ base: '5%', md: '0' }}
        css={{
          '-webkit-scrollbar': {
            display: 'none'
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }}
      >
        <ChannelBnkRelationalItem
          category="INSPIRAÇÃO SOB MEDIDA"
          urlImage="https://casaclaudia.abril.com.br/wp-content/uploads/2017/06/sala31.jpg"
          color="brown.150"
          title="Como usar o círculo cromático para combinar padrões BP"
          w="28%"
        />

        <ChannelBnkRelationalItem
          category="INSPIRAÇÃO SOB MEDIDA"
          urlImage="https://casaclaudia.abril.com.br/wp-content/uploads/2017/06/sala31.jpg"
          color="brown.150"
          title="Como usar o círculo cromático para combinar padrões BP"
          w="28%"
        />

        <ChannelBnkRelationalItem
          category="INSPIRAÇÃO SOB MEDIDA"
          urlImage="https://casaclaudia.abril.com.br/wp-content/uploads/2017/06/sala31.jpg"
          color="brown.150"
          title="Como usar o círculo cromático para combinar padrões BP"
          w="28%"
        />
      </Flex>
    </Flex>
  )
}
