import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react'
import { Intro, Videos, Downloads, Connect } from './sections'
import { Post, Category } from 'types/data/Post'
import Pagebar from '@components/Pagebar'
import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

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

export function CategoryCtxProvider(props: { children: ReactNode }) {
  const [currentCategory, setCurrentCategory] = useState<number>(-1)
  const [categories, setCategories] = useState<Category[]>([])
  const [seeOnlyPosts, setSeeOnlyPosts] = useState(false)

  const changeCurrentCategory = useCallback(
    (i: number) => {
      if (i < categories.length) {
        setCurrentCategory(i)
      }
    },
    [categories]
  )

  useEffect(() => {
    if (!!categories && categories.length <= 0) {
      setCurrentCategory(-1)
    }
  }, [currentCategory, categories])
  return (
    <Box maxWidth={'1920px'} marginX="auto">
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

  return (
    <Box>
      {currentCategory !== -1 ? (
        <Pagebar
          paths={[
            { title: 'Canal BNK', url: '/canal-bnk' },
            {
              title: categories[currentCategory].name,
              url: '/canal-bnk'
            }
          ]}
        />
      ) : (
        <Pagebar paths={[{ title: 'Canal BNK', url: '/canal-bnk' }]} />
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
      <Videos videos={[]} />
      {!seeOnlyPosts && (
        <>
          <Downloads />
          <Connect />
        </>
      )}
    </Box>
  )
}

export interface CanalBNKProps {
  posts: Post[]
  categories: Category[]
  defaultCategory: number
}

export default function CanalBNK(props: CanalBNKProps) {
  return (
    <CategoryCtxProvider>
      <CanalBNKFC {...props} />
    </CategoryCtxProvider>
  )
}
