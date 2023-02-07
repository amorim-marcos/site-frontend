/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  ReactNode
} from 'react'

import { Box, Flex } from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'
import Connect from '@components/Connect'
import { Intro, Videos, Downloads } from './sections'

import { Post, Category } from 'types/data/Post'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

export const CategoryContext = createContext(
  {} as {
    currentCategory: number
    changeCurrentCategory: (category: number) => void
    categories: Category[]
    setCategories: (v: Category[]) => void
    seeOnlyPosts: boolean
    setSeeOnlyPosts: (v: boolean) => void
    youtubeDownloadLink?: string
    youtubeVideos?: IVideos[]
    lastYoutubeVideo?: string
  }
)

export function CategoryCtxProvider(props: {
  children: ReactNode
  seeOnlyPostsDefault?: boolean
}) {
  const router = useRouter()

  const [currentCategory, setCurrentCategory] = useState<number>(-1)
  const [categories, setCategories] = useState<Category[]>([])
  const [seeOnlyPosts, setSeeOnlyPosts] = useState(false)

  const [youtubeDownloadLink, setYoutubeDownloadLink] = useState('')
  const [youtubeVideos, setYoutubeVideos] = useState<IVideos[]>([])
  const [lastYoutubeVideo, setLastYoutubeVideo] = useState('')

  const changeCurrentCategory = useCallback(
    (i: number) => {
      if (i < categories.length) {
        setCurrentCategory(i)
      }
    },
    [categories]
  )

  useEffect(() => {
    const fetchYoutube = async () => {
      let res: any, data: any

      try {
        res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/connect`)
        data = await res.json()
        setYoutubeDownloadLink(data.youtube_video_link)

        res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${
            process.env.YOUTUBE_CHANNEL_ID
          }&maxResults=${4}&order=date&type=video&key=${
            process.env.YOUTUBE_API_KEY
          }`
        )
        data = await res.json()
        setYoutubeVideos(data.items)

        res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${
            process.env.YOUTUBE_CHANNEL_ID
          }&maxResults=${1}&order=date&type=video&key=${
            process.env.YOUTUBE_API_KEY
          }`
        )
        data = await res.json()

        if (data.items?.length > 0) {
          setLastYoutubeVideo(data.items[0].id.videoId)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchYoutube()
  })

  useEffect(() => {
    if (categories.length <= 0) {
      setCurrentCategory(-1)
    } else {
      const category = categories[currentCategory]

      if (category) {
        const target = `/canal-bnk/${category.id}`

        if (router.asPath !== target) {
          router.push(target)
        }
      }
    }
  }, [currentCategory, categories, router])

  useEffect(() => {
    setSeeOnlyPosts(props.seeOnlyPostsDefault || false)
  }, [props.seeOnlyPostsDefault])

  return (
    <Box>
      <CategoryContext.Provider
        value={{
          currentCategory,
          changeCurrentCategory,
          categories,
          setCategories,
          seeOnlyPosts,
          setSeeOnlyPosts,
          youtubeDownloadLink,
          youtubeVideos,
          lastYoutubeVideo
        }}
      >
        {props.children}
      </CategoryContext.Provider>
    </Box>
  )
}

function CanalBNKFC(props: CanalBNKProps) {
  const {
    currentCategory,
    setCategories,
    categories,
    seeOnlyPosts,
    changeCurrentCategory,
    youtubeDownloadLink,
    youtubeVideos,
    lastYoutubeVideo
  } = useContext(CategoryContext)

  useEffect(() => {
    if (props.categories) {
      setCategories(props.categories)
      changeCurrentCategory(props.defaultCategory)
    }
  }, [props, setCategories, changeCurrentCategory])

  const channelBnkLabels = useTranslation('channelBnkView')

  return (
    <Box>
      {currentCategory !== -1 ? (
        <Pagebar
          paths={[
            {
              title: channelBnkLabels.t('pagebar.channelBnk'),
              url: '/canal-bnk'
            },
            {
              title: categories[currentCategory].name
                .split(' ')
                .map(
                  (name) => name[0].toUpperCase() + name.slice(1).toLowerCase()
                )
                .join(' '),
              url: '/canal-bnk'
            }
          ]}
        />
      ) : (
        <Pagebar
          paths={[
            {
              title: channelBnkLabels.t('pagebar.channelBnk'),
              url: '/canal-bnk'
            }
          ]}
        />
      )}

      <Intro
        posts={
          currentCategory === -1
            ? props.posts
            : props.posts.filter(
                (post) =>
                  post.category.name === categories[currentCategory].name
              )
        }
      />

      <Flex
        bg={
          currentCategory === -1 || currentCategory === 0
            ? 'gray.150'
            : 'brown.100'
        }
        justify={'center'}
      >
        <Videos videos={youtubeVideos} />
      </Flex>
      {!seeOnlyPosts && (
        <>
          <Flex bg="white.100" justify={'center'}>
            <Downloads patterns_pack_url={props.patterns_pack_url} />
          </Flex>
          <Connect
            youtubeLink={youtubeDownloadLink}
            lastYoutubeVideo={lastYoutubeVideo}
          />
        </>
      )}
    </Box>
  )
}

export interface IVideos {
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

export interface CanalBNKProps {
  posts: Post[]
  categories: Category[]
  defaultCategory: number
  patterns_pack_url?: string | null
  youtubeDownloadLink?: string
  youtubeVideos?: IVideos[]
  lastYoutubeVideo?: string
}

export default function CanalBNK(props: CanalBNKProps) {
  return (
    <CategoryCtxProvider>
      <CanalBNKFC {...props} />
    </CategoryCtxProvider>
  )
}
