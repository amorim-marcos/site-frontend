import { Flex, Text, Image, Box } from '@chakra-ui/react'

import CompletedTitle from '@components/CompletedTitle'
import DownloadSection from '@components/DownloadSection'
import { SectionPackBpDownloads } from '@components/SectionPackBpDownloads/SectionPackBpDownloads'
import Pagebar from '@components/Pagebar'
import { useTranslation } from 'react-i18next'
import HtmlTextParser from '@components/HtmlTextParser'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import PageHead from '@components/PageHead'
import { FileProps } from 'types/utils'
import { normalizeTitleUrl } from 'utils/utils'

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

interface HeaderLimits {
  [key: string]: {
    [key: string]: number
  }
}
type PageContent = {
  title: string
  header_text: string
  patterns_pack_title: string
  patterns_pack_text: string
  patterns_pack_download_url: string | null
  patterns_pack_download_jpgs_url: string | null
  patterns_pack_download_skps_url: string | null
  sections: DownloadItem[]
  patterns_pack_download_jpgs: FileProps
  patterns_pack_download_skps: FileProps
}

export type DownloadsViewProps = {
  page_content: PageContent
}

export const DownloadsView = ({
  page_content: {
    title,
    header_text,
    patterns_pack_title,
    patterns_pack_text,
    patterns_pack_download_url,
    patterns_pack_download_jpgs_url,
    patterns_pack_download_skps_url,
    patterns_pack_download_jpgs,
    patterns_pack_download_skps,
    sections
  }
}: DownloadsViewProps) => {
  const items = sections

  const channelBnkLabels = useTranslation('channelBnkView')

  const router = useRouter()

  const headerLimits: HeaderLimits = {
    default: {
      default: 85
    }
  }

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const elementId = router.asPath.split('#')[1]

      setTimeout(() => {
        const element = document.getElementById(elementId)

        if (element) {
          let headerLimit = headerLimits.default.default
          const limitsForCurrentWidth = Object.keys(headerLimits.default)
            .reverse()
            .find((width) => window.innerWidth < Number(width))

          if (limitsForCurrentWidth) {
            headerLimit = headerLimits.default[limitsForCurrentWidth]
          }

          if (
            limitsForCurrentWidth &&
            headerLimits[elementId] &&
            headerLimits[elementId][limitsForCurrentWidth]
          ) {
            headerLimit = headerLimits[elementId][limitsForCurrentWidth]
          }

          const position =
            element.getBoundingClientRect().top + window.scrollY - headerLimit

          window.scrollTo({
            top: position,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [router.asPath])

  return (
    <Box>
      <PageHead
        page_title={channelBnkLabels.t('downloadsView.pageMetadata.pageTitle')}
        page_description={channelBnkLabels.t(
          'downloadsView.pageMetadata.pageDescription'
        )}
      />
      <Pagebar
        paths={[
          {
            title: channelBnkLabels.t('downloadsView.pagebar.downloads'),
            url: '/bnk-channel/downloads'
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
              <HtmlTextParser>{header_text}</HtmlTextParser>
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
          <SectionPackBpDownloads
            sectionId={normalizeTitleUrl(patterns_pack_title)}
            title={patterns_pack_title}
            text={patterns_pack_text}
            download_url={patterns_pack_download_url}
            download_url_jpgs={patterns_pack_download_jpgs_url}
            download_url_skps={patterns_pack_download_skps_url}
            patterns_pack_download_jpgs={patterns_pack_download_jpgs}
            patterns_pack_download_skps={patterns_pack_download_skps}
          />
          {items.map((i, j) => {
            const sectionId = normalizeTitleUrl(i.type)
            return (
              <Box key={j} id={sectionId}>
                <DownloadSection
                  sectionId={sectionId}
                  title={i.type}
                  description={i.description}
                  items={i.items.map((w) => ({
                    title: w.title,
                    urlImage: w.image.url,
                    downloadUrl: w.file.url
                  }))}
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
          })}
        </Flex>
      </Flex>
    </Box>
  )
}
