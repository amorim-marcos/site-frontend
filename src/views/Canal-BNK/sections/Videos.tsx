import { useState, useEffect, useContext } from 'react'

import { Flex, Box, Image, Text, Link } from '@chakra-ui/react'

import { PlayIcon } from '@components/Icons'
import { Section } from './Section'
import { CategoryContext } from '..'

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

const PLAYLISTS = {
  all: {
    id: 'PL0jp-uZ7a4g9FQWW5R_u0pz4yzV4RiOXu',
    url: 'https://www.youtube.com/watch?v=KQetemT1sWc&list=PL0jp-uZ7a4g9FQWW5R_u0pz4yzV4RiOXu'
  },
  inspiration: {
    id: 'PL718D16542AE44430',
    url: 'https://www.youtube.com/watch?v=-tJYN-eG1zk&list=PL718D16542AE44430'
  },
  feedstock: {
    id: 'PLP02sRgldWRb9LjuQgJ4AfxCd4cxygDrA',
    url: 'https://www.youtube.com/watch?v=O4irXQhgMqg&list=PLP02sRgldWRb9LjuQgJ4AfxCd4cxygDrA'
  },
  world: {
    id: 'PL718D16542AE44430',
    url: 'https://www.youtube.com/watch?v=-tJYN-eG1zk&list=PL718D16542AE44430'
  }
}

export const Videos = () => {
  /*const { categories, currentCategory } = useContext(CategoryContext)
  const [videos, setVideos] = useState<IVideos[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=${4}&playlistId=${
          PLAYLISTS[category].id
        }&key=${process.env.YOUTUBE_API_KEY}`
      )
      const data = await result.json()
      setVideos(data.items)
    }

    fetchData()
  }, [category])

  return (
    <Section
      title="Vídeos"
      seeMore={{
        text: 'Veja mais vídeos',
        link: PLAYLISTS[category].url
      }}
      bg={
        category === 'all' || category === 'feedstock'
          ? 'gray.150'
          : 'brown.100'
      }
      py={{ base: '52px', lg: '100px' }}
      px={{ base: '20px', lg: '0' }}
    >
      <Flex
        w="100%"
        data-testid="videos"
        gap="34px"
        px={{ base: '0', lg: '88px' }}
        pt="60px"
        pb={{ base: '20px', lg: '0' }}
        justify={{
          base: 'flex-start',
          lg: 'center'
        }}
        overflowX={{ base: 'scroll', lg: 'hidden' }}
        overflowY="hidden"
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
  )*/
  return <h1>Videos sections</h1>
}
