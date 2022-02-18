import { Flex, Text, Image, Box } from '@chakra-ui/react'
import CompletedTitle from '@components/CompletedTitle'
import DownloadSection from '@components/DownloadSection'
import { SectionPackBpDownloads } from '@components/SectionPackBpDownloads/SectionPackBpDownloads'
import useMobile from 'hooks/useMobile'

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
  const { isMobile, width } = useMobile(568)
  // console.log(items)
  return (
    <Flex flexDir="column" maxWidth="1920px" marginX="auto">
      {/* Downloads Header */}
      <Flex
        flexDir="column"
        width="100%"
        bg="brown.100"
        paddingX="5%"
        paddingY={{ base: '20px', sm: '0' }}
        height={{ base: 'auto', sm: '35vw', md: '25vw' }}
        maxHeight="298px"
        position="relative"
        justifyContent="center"
        overflow="hidden"
      >
        <CompletedTitle
          titleString="Downloads"
          textAlign="left"
          alignSelf="left"
          zIndex="docked"
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
          height={{ base: '100%', sm: '35vw', md: '25vw' }}
          maxHeight="298px"
          objectFit="cover"
        />
      </Flex>
      {/* End Downloads Header */}
      {/* Start Downloads sections */}
      <Flex p="5%" w="100%" bg="white.100" flexDir="column">
        {items.map((i, j) => {
          return (
            j < 2 && (
              <Box key={j}>
                <DownloadSection
                  title={i.type}
                  description={i.description}
                  items={i.items.map((w) => {
                    return {
                      title: w.title,
                      urlImage: w.image.url
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
            j > 2 && (
              <Box key={j}>
                <DownloadSection
                  title={i.type}
                  description={i.description}
                  items={i.items.map((w) => {
                    return {
                      title: w.title,
                      urlImage: w.image.url
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
