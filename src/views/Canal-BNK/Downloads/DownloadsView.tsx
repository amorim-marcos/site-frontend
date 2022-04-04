import { Flex, Text, Image, Box } from '@chakra-ui/react'
import CompletedTitle from '@components/CompletedTitle'
import DownloadSection from '@components/DownloadSection'
import { SectionPackBpDownloads } from '@components/SectionPackBpDownloads/SectionPackBpDownloads'

export type DownloadItem = {
  id: number
  type: string
  description: string
  items: {
    description: string
    id: number
    title: string
    image: {
      url: string
    }
    file: {
      url: string
    }
    download_type: {
      description: string
      id: number
      type: string
    }
  }[]
}

export type DownloadsViewProps = {
  items: DownloadItem[]
}

export const DownlodasView = ({ items }: DownloadsViewProps) => {
  return (
    <Flex 
      flexDir="column"
      bg="brown.100"
    >
      {/* Downloads Header */}
      <Flex
        flexDir="column"
        width="100%"
        bg="brown.100"
        paddingX="5%"
        paddingY={{ base: '20px', md: '0' }}
        height={{ base: 'auto', md: '25vw' }}
        maxHeight="298px"
        position="relative"
        justifyContent="center"
        overflow="hidden"
        alignItems={{ base: 'center', md: 'flex-start' }}
        maxWidth="1536px" 
        marginX="auto"
      >
        <Box 
          display={{ base: 'none', md: 'block' }}
        >
          <CompletedTitle
            titleString="Downloads"
            textAlign="left"
            alignSelf="left"
            zIndex="docked"
          />
        </Box>

        <Box display={{ base: 'block', md: 'none' }}>
          <CompletedTitle
            titleString="Downloads"
            textAlign="center"
            alignSelf="center"
            zIndex="docked"
          />
        </Box>
        <Text
          variant={'body' as any}
          w={{ base: '100%', md: '50%' }}
          marginTop={{ base: '1%', xl: '3%' }}
          color="brown.300"
        >
          Encontre materiais de divulgação da BERNECK® e de nossos produtos,
          além de revistas, informativos, fichas técnicas, pack de padrões BP
          BERNECK® e muito mais em um só lugar.
        </Text>
        <Box
          h="100%"
          position={'absolute'}
          top="0"
          left={{ base: '55%', md: '47%' }}
          overflow="hidden"
        >
          <Box w="100vw" h="100%">
            <Image
              src="/img/downloads_header_img.png"
              width={'auto'}
              height={'100%'}
              display={{ base: 'none', md: 'block' }}
            />
          </Box>
        </Box>
      </Flex>
      {/* End Downloads Header */}
      
      {/* Start Downloads sections */}
      <Flex p="5%" w="100%" bg="white.100" flexDir="column">
        {items.map((i, j) => {
          return (
            j < 2 && (
              <Box key={j} id={i.type.normalize("NFD").replace(/[^\w ]/g, "").split(' ').join('-').toLowerCase()}>
                <DownloadSection
                  title={i.type}
                  description={i.description}
                  items={i.items.map((w) => {
                    return {
                      title: w.title,
                      urlImage: w.image.url,
                      downloadUrl: w.file.url
                    }
                  })}
                  key={0}
                  grafism={
                    (j + 1) % 3 === 0
                      ? 'type3'
                      : (j + 1) % 3 === 1
                      ? 'type1'
                      : 'type2'
                  }
                />
              </Box>
            )
          )
        })}
        
        <SectionPackBpDownloads />

        {items.map((i, j) => {
          return (
            j >= 2 && (
              <Box key={j} id={i.type.normalize("NFD").replace(/[^\w ]/g, "").split(' ').join('-').toLowerCase()}>
                <DownloadSection
                  title={i.type}
                  description={i.description}
                  items={i.items.map((w) => {
                    return {
                      title: w.title,
                      urlImage: w.image.url,
                      downloadUrl: w.file.url
                    }
                  })}
                  key={0}
                  grafism={
                    (j + 1) % 3 === 0
                      ? 'type3'
                      : (j + 1) % 3 === 1
                      ? 'type1'
                      : 'type2'
                  }
                />
              </Box>
            )
          )
        })}
      </Flex>
    </Flex>
  )
}
