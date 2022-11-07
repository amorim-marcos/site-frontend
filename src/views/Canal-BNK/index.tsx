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
  }
)

export function CategoryCtxProvider(props: {
  children: ReactNode
  seeOnlyPostsDefault?: boolean
}) {
  const [currentCategory, setCurrentCategory] = useState<number>(-1)
  const [categories, setCategories] = useState<Category[]>([])
  const [seeOnlyPosts, setSeeOnlyPosts] = useState(false)

  const router = useRouter()

  const changeCurrentCategory = useCallback(
    (i: number) => {
      if (i < categories.length) {
        setCurrentCategory(i)
      }
    },
    [categories]
  )

  useEffect(() => {
    if (categories.length <= 0) {
      setCurrentCategory(-1)
    } else {
      const category = categories[currentCategory]

      if (category) {
        const target = `/canal-bnk/${category.id}`

        if (router.asPath !== target) {
          router.push(target, undefined, { shallow: true })
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
          setSeeOnlyPosts
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
    changeCurrentCategory
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
        <Videos videos={props.youtubeVideos} />
      </Flex>
      {!seeOnlyPosts && (
        <>
          <Flex bg="white.100" justify={'center'}>
            <Downloads patterns_pack_url={props.patterns_pack_url} />
          </Flex>
          <Connect youtubeLink={props.youtubeDownloadLink} />
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
}

export default function CanalBNK(props: CanalBNKProps) {
  return (
    <CategoryCtxProvider>
      <CanalBNKFC {...props} />
    </CategoryCtxProvider>
  )
}
