import {
  Flex,
  Box,
  Text,
  Image,
  Link,
  FlexProps,
  Spinner
} from '@chakra-ui/react'
import CustomLink from '@components/CustomLink'
import HtmlTextParser from '@components/HtmlTextParser'
import UrlCopyIcon from '@components/UrlCopyIcon'
import axios from 'axios'
import useMobile from 'hooks/useMobile'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FileProps } from 'types/utils'
import { getPageCompleteUrl } from 'utils/utils'

export type SectionPackBpDownloadsProps = {
  title: string
  sectionId: string
  text: string
  // todo
  // remove this property in the future
  download_url: string | null
  download_url_jpgs: string | null
  download_url_skps: string | null
  patterns_pack_download_jpgs: FileProps | undefined
  patterns_pack_download_skps: FileProps | undefined
}

const LoadingComponent = () => {
  return (
    <Flex position="fixed" right={'50%'} height={'100%'} zIndex={100000}>
      <Spinner size="xl" />
    </Flex>
  )
}

export const SectionPackBpDownloads = ({
  title,
  sectionId,
  text,
  download_url,
  download_url_jpgs,
  download_url_skps,
  patterns_pack_download_jpgs,
  patterns_pack_download_skps
}: SectionPackBpDownloadsProps) => {
  const [isLoadingDownload, setIsLoadingDownload] = useState(false)
  const { width } = useMobile(568)

  const componentsLabels = useTranslation('components')

  const { asPath } = useRouter()

  const pathWithouHash = asPath.split('#')[0]

  const completePageBaseUrl = getPageCompleteUrl(pathWithouHash)

  const handleRenameAndDownload = async (
    fileUrl: string | undefined,
    fileName: string | undefined
  ) => {
    setIsLoadingDownload(true)
    try {
      const fileType = 'application/zip'

      const fileResponse = await axios.get(fileUrl!, {
        headers: {
          'Content-Type': `application/${fileType}`
        },
        responseType: 'blob'
      })

      const fileData = fileResponse.data

      const blob = new Blob([fileData], {
        type: `application/${fileType}`
      })

      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName!

      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.log('error when trying to download file: ', error)
    } finally {
      setIsLoadingDownload(false)
    }
  }

  return (
    <Flex
      id={sectionId}
      w="100%"
      // marginBottom={{ base: '400px', md: '10%' }}
      marginBottom={'2%'}
      justifyContent="center"
    >
      <Flex
        bg="#F6EFE3"
        maxWidth="1536px"
        minWidth={width && width < 1536 ? '100vw' : '1536px'}
        h={{ base: 'auto', md: '23vw' }}
        maxHeight="441px"
        position="relative"
        justifyContent="space-around"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {/* link icon */}

        <UrlCopyIcon urlToCopy={completePageBaseUrl + '#' + sectionId} />
        <Box
          bg="brown.300"
          w={{ base: '100vw', md: '38%' }}
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
            flexShrink={0}
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
          <Text as="h3" variant="h3">
            {title}
          </Text>
          <Text
            w={{ base: '70%', xl: '80%', '2xl': '100%' }}
            color="green.800"
            variant="body"
            textAlign="center"
          >
            <HtmlTextParser>{text}</HtmlTextParser>
          </Text>
          {/* wrapper */}
          <Flex
            marginTop="6%"
            flexDirection="column"
            w="100%"
            alignItems="center"
            justifyContent="center"
            rowGap="10px"
          >
            <Flex
              w="60%"
              border={'1px'}
              borderColor="green.600"
              fontWeight="bold"
              borderRadius="18px"
              color="green.600"
              transition="all .2s ease-in-out"
              _hover={{ outline: 'none', bg: 'green.700', color: 'white.100' }}
              _focus={{ outline: 'none' }}
            >
              <Flex
                h="100%"
                w="100%"
                paddingY="10px"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontWeight="bold" variant="body">
                  <Flex
                    cursor="pointer"
                    onClick={() =>
                      handleRenameAndDownload(
                        download_url_jpgs!,
                        patterns_pack_download_jpgs?.name
                      )
                    }
                  >
                    {componentsLabels.t(
                      'sectionPackBpDownloads.patternPacksJpgs'
                    )}
                  </Flex>
                </Text>
              </Flex>
            </Flex>
            <Flex
              w="60%"
              border={'1px'}
              borderColor="green.600"
              fontWeight="bold"
              borderRadius="18px"
              color="green.600"
              transition="all .2s ease-in-out"
              _hover={{ outline: 'none', bg: 'green.700', color: 'white.100' }}
              _focus={{ outline: 'none' }}
            >
              <Flex
                h="100%"
                w="100%"
                paddingY="10px"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontWeight="bold" variant="body">
                  <Flex
                    cursor="pointer"
                    onClick={() =>
                      handleRenameAndDownload(
                        download_url_skps!,
                        patterns_pack_download_skps?.name
                      )
                    }
                  >
                    {componentsLabels.t(
                      'sectionPackBpDownloads.patternPacksSkps'
                    )}
                  </Flex>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {isLoadingDownload && <LoadingComponent />}

        <Box w={{ base: '40%', md: '30%', lg: '25%' }}></Box>
      </Flex>
    </Flex>
  )
}
