import { useState, useEffect } from 'react'

import { Flex, Box, Image, Text, Link } from '@chakra-ui/react'

import { PlayIcon } from '@components/Icons'
import { Section } from './Section'

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems'

interface IVideos {
  id: string
  snippet: {
    title: string
    thumbnails: {
      medium: {
        url: string
        width: number
        height: number
      }
    }
    resourceId: {
      videoId: string
    }
  }
}

export const Videos = () => {
  const [videos, setVideos] = useState<IVideos[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=${4}&playlistId=${
          process.env.YOUTUBE_PLAYLIST_ID
        }&key=${process.env.YOUTUBE_API_KEY}`
      )
      const data = await result.json()
      setVideos(data.items)
    }

    fetchData()
  }, [])

  return (
    <Section
      title="Vídeos"
      seeMore={{
        text: 'Veja mais vídeos',
        link: process.env.YOUTUBE_PLAYLIST_URL
      }}
      bg="grey.150"
      py="100px"
    >
      <Flex
        w="100%"
        data-testid="videos"
        gap="34px"
        wrap={{ base: 'wrap', lg: 'nowrap' }}
        px="88px"
        pt="60px"
        justify="center"
      >
        {videos?.map(({ id, snippet }) => {
          return (
            <Link
              key={id}
              href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
              _hover={{}}
              _focus={{ border: 'none', outline: 0 }}
              isExternal
            >
              <Flex gap="12px" direction="column">
                <Box h="230px" w="410px" pos="relative">
                  <Flex
                    h="100%"
                    w="100%"
                    justify="center"
                    align="center"
                    pos="absolute"
                    bg="#1442313f"
                    backdropFilter="blur(1px)"
                    _hover={{
                      opacity: '0'
                    }}
                  >
                    <PlayIcon width="38px" height="38px" />
                  </Flex>

                  <Image
                    h="100%"
                    w="100%"
                    src={snippet.thumbnails.medium.url}
                    alt=""
                  />
                </Box>

                <Text
                  as="h3"
                  fontSize="20px"
                  fontWeight={500}
                  letterSpacing="0px"
                  color="green.800"
                >
                  {snippet.title}
                </Text>
              </Flex>
            </Link>
          )
        })}
      </Flex>
    </Section>
  )
}
