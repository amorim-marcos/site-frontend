/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'

import { Flex, Box, Image, Text, Link } from '@chakra-ui/react'

import { PlayIcon } from '@components/Icons'
import { Section } from './Section'
import { CategoryContext, IVideos } from '..'
import { useTranslation } from 'react-i18next'

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

export const Videos = (props: { videos?: IVideos[] }) => {
  const { currentCategory } = useContext(CategoryContext)

  const channelBnkLabels = useTranslation('channelBnkView')

  return (
    <Section
      title={channelBnkLabels.t('videosSection.title')}
      seeMore={{
        text: channelBnkLabels.t('videosSection.seeMoreVideos'),
        link: getPlaylist(currentCategory)?.url
      }}
      bg={
        currentCategory === -1 || currentCategory === 0
          ? 'gray.150'
          : 'brown.100'
      }
      py={{ base: '54px', lg: '100px' }}
      px={{ base: '20px', lg: '5%', '2xl': '1%' }}
      maxWidth={'1536px'}
    >
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
        {props.videos?.map(({ id, snippet }) => (
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
