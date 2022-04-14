/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useContext } from 'react'

import { Flex, Box, Image, Text, Link } from '@chakra-ui/react'

import { PlayIcon } from '@components/Icons'
import { Section } from './Section'
import { CategoryContext } from '..'

const YOUTUBE_LAST_VIDEOS_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${
  process.env.YOUTUBE_CHANNEL_ID
}&maxResults=${4}&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}`

const YOUTUBE_PLAYLIST_ITEMS_URL = (playlistId?: string) =>
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${4}&playlistId=${playlistId}&key=${
    process.env.YOUTUBE_API_KEY
  }`

function getPlaylist(currentCategory: number) {
  if (currentCategory === -1)
    return {
      id: 'PL0jp-uZ7a4g9FQWW5R_u0pz4yzV4RiOXu',
      url: 'https://www.youtube.com/c/Berneckoficial/videos'
    }
  else
    return {
      0: {
        id: 'PLOtoyzs6hjIo4VNi3CNXtWBk-RTKg_eEI',
        url: 'https://www.youtube.com/watch?v=GG-UvXBUx54&list=PLOtoyzs6hjIo4VNi3CNXtWBk-RTKg_eEI'
      },
      1: {
        id: 'PLOtoyzs6hjIoqzOctI-pgk--rPWS4ELKQ',
        url: 'https://www.youtube.com/watch?v=v5n_MIjNM6E&list=PLOtoyzs6hjIqvJfJBt5dRdJDuh3yPl7RM'
      },
      2: {
        id: 'PLOtoyzs6hjIqvJfJBt5dRdJDuh3yPl7RM',
        url: 'https://www.youtube.com/watch?v=PtRcMibSJgk&list=PLOtoyzs6hjIoqzOctI-pgk--rPWS4ELKQ'
      }
    }[currentCategory]
}

interface IVideos {
  id: any
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
  const { currentCategory } = useContext(CategoryContext)

  useEffect(() => {
    const fetchData = async () => {
      let data

      data = await fetch(
        currentCategory === -1
          ? YOUTUBE_LAST_VIDEOS_URL
          : YOUTUBE_PLAYLIST_ITEMS_URL(getPlaylist(currentCategory)?.id)
      )

      data = await data.json()

      setVideos([])
      setVideos(data.items)
    }

    fetchData()
  }, [currentCategory])

  return (
    <Section
      title="Vídeos"
      seeMore={{
        text: 'Veja mais vídeos',
        link: getPlaylist(currentCategory)?.url
      }}
      bg={
        currentCategory === -1 || currentCategory === 0
          ? 'gray.150'
          : 'brown.100'
      }
      py={{ base: '54px', lg: '100px' }}
      px={{ base: '20px', lg: '5%', '2xl': '3%' }}
      maxWidth={'1536px'}
    >
      <Flex align="center" justify="center" py="25px">
        <Text color="green.800">Aguardando chave da API do YouTube</Text>
      </Flex>
      <Flex
        w="100%"
        data-testid="videos"
        gap="34px"
        px={{ base: '0', lg: '88px' }}
        pt="60px"
        pb={{ base: '20px', lg: '0' }}
        justify={{ base: 'flex-start', lg: 'center' }}
        overflowX={{ base: 'scroll', lg: 'hidden' }}
        overflowY="hidden"
      >
        {videos?.map(({ id, snippet }) => (
          <Link
            key={id.videoId}
            href={`https://www.youtube.com/watch?v=${id.videoId}`}
            _hover={{}}
            _focus={{ border: 'none', outline: 0 }}
            isExternal
          >
            <Flex gap="12px" direction="column" w="410px">
              <Box h="230px" pos="relative">
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
        ))}
      </Flex>
    </Section>
  )
}
