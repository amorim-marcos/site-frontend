import { Flex, Text, Image } from '@chakra-ui/react'
import CompletedTitle from '@components/CompletedTitle'
import DownloadSection from '@components/DownloadSection'

export const DownlodasView = () => {
  return (
    <Flex flexDir="column" maxWidth="1920px" marginX="auto">
      {/* Downloads Header */}
      <Flex
        flexDir="column"
        width="100%"
        bg="brown.100"
        paddingX="5%"
        paddingY={{ base: '20px', sm: '0' }}
        height={{ base: 'auto', sm: '18vw' }}
        maxHeight="298px"
        position="relative"
        justifyContent="center"
        overflow="hidden"
      >
        <CompletedTitle
          titleString="Downloads"
          textAlign="left"
          alignSelf="left"
        />
        <Text
          variant={'body' as any}
          w={{ base: '70%', sm: '50%' }}
          marginTop={{ base: '1%', xl: '3%' }}
          color="brown.300"
        >
          Encontre materiais de divulgação da BERNECK® e de nossos produtos,
          além de revistas, informativos, fichas técnicas, pack de padrões BP
          BERNECK® e muito mais em um só lugar.
        </Text>
        <Image
          src="/img/downloads_header_img.png"
          position={'absolute'}
          top="0"
          left={{ base: '55%', sm: '47%' }}
          height={{ base: '100%', sm: '18vw' }}
          maxHeight="298px"
        />
      </Flex>
      {/* End Downloads Header */}
      {/* Start Downloads sections */}
      <Flex p="5%" w="100%" bg="white.100" flexDir="column">
        <DownloadSection />
        <DownloadSection />
      </Flex>
    </Flex>
  )
}
