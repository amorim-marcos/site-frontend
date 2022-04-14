import { Flex, Text, Image, Box } from '@chakra-ui/react'

import CompletedTitle from '@components/CompletedTitle'
import DownloadSection from '@components/DownloadSection'
import { SectionPackBpDownloads } from '@components/SectionPackBpDownloads/SectionPackBpDownloads'
import Pagebar from '@components/Pagebar'

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

type PageContent = {
  title: string
  header_text: string
  patterns_pack_title: string
  patterns_pack_text: string
  patterns_pack_download_url: string | null
  sections: DownloadItem[]
}

export type DownloadsViewProps = {
  page_content: PageContent
}

export const DownlodasView = ({
  page_content: {
    title,
    header_text,
    patterns_pack_title,
    patterns_pack_text,
    patterns_pack_download_url,
    sections
  }
}: DownloadsViewProps) => {
  const items = sections

  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: 'Downloads',
            url: '/canal-bnk/downloads'
          }
        ]}
      />

      <Flex bg="brown.150" alignItems={'center'} flexDir="column" flex="1">
        {/* Downloads Header */}
        <Box bg="blue.150">
          <Flex
            flexDir="column"
            bg="brown.100"
            overflow="hidden"
            paddingX={{ base: '5%', '2xl': '3%' }}
            paddingY={{ base: '20px', md: '0' }}
            position="relative"
            justifyContent="center"
            alignItems={{ base: 'center', md: 'start' }}
            maxWidth={'1536px'}
            maxHeight="298px"
            height={{ base: 'auto', md: '25vw' }}
          >
            <Box display={{ base: 'none', md: 'block' }}>
              <CompletedTitle
                titleString={title}
                textAlign="left"
                alignSelf="left"
                zIndex="docked"
              />
            </Box>

            <Box display={{ base: 'block', md: 'none' }}>
              <CompletedTitle
                titleString={title}
                textAlign="center"
                alignSelf="center"
                zIndex="docked"
              />
            </Box>
            <Text
              variant="body"
              w={{ base: '100%', md: '50%' }}
              marginTop={{ base: '1%', xl: '3%' }}
              color="brown.300"
            >
              {header_text}
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
        </Box>
        {/* End Downloads Header */}
      </Flex>

      {/* Start Downloads sections */}
      <Flex alignItems={'center'} flexDir="column" flex="1">
        <Flex
          p={{ base: '5%', '2xl': '2%' }}
          w="100%"
          bg="white.100"
          flexDir="column"
          maxWidth={'1536px'}
        >
          {items.map((i, j) => {
            return (
              j < 2 && (
                <Box
                  key={j}
                  id={i.type
                    .normalize('NFD')
                    .replace(/[^\w ]/g, '')
                    .split(' ')
                    .join('-')
                    .toLowerCase()}
                >
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

          <SectionPackBpDownloads
            title={patterns_pack_title}
            text={patterns_pack_text}
            download_url={patterns_pack_download_url}
          />

          {items.map((i, j) => {
            return (
              j >= 2 && (
                <Box
                  key={j}
                  id={i.type
                    .normalize('NFD')
                    .replace(/[^\w ]/g, '')
                    .split(' ')
                    .join('-')
                    .toLowerCase()}
                >
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
    </Box>
  )
}
