import { createContext, ReactNode, useContext, useState } from 'react'
import { Box } from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'
import { Intro, Videos, Downloads, Connect } from './sections'

import { Post, CategoryLabel } from 'types/data/Post'

export type Category = CategoryLabel

export const CategoryContext = createContext(
  {} as {
    category: Category
    setCategory: (category: Category) => void
  }
)

export function CategoryCtxProvider(props: { children: ReactNode }) {
  const [category, setCategory] = useState<Category>('all')

  return (
    <Box maxWidth={'1920px'} marginX="auto">
      <CategoryContext.Provider
        value={{
          category,
          setCategory
        }}
      >
        {props.children}
      </CategoryContext.Provider>
    </Box>
  )
}

function CanalBNKFC(props: CanalBNKProps) {
  const { category } = useContext(CategoryContext)

  const getCategoryName = () => {
    return category === 'inspiration'
      ? 'INSPIRAÇÃO SOB MEDIDA'
      : category === 'feedstock'
      ? 'MATÉRIA-PRIMA: CONHECIMENTO'
      : 'MUNDO BERNECK'
  }

  return (
    <Box>
      {category !== 'all' ? (
        <Pagebar
          paths={[
            { title: 'Canal Bnk', url: '/canal-bnk' },
            {
              title:
                category === 'inspiration'
                  ? 'Inspiração sob medida'
                  : category === 'feedstock'
                  ? 'Matéria-prima: conhecimento'
                  : 'Mundo Berneck',
              url: '/canal-bnk'
            }
          ]}
        />
      ) : (
        <Pagebar paths={[{ title: 'Canal Bnk', url: '/canal-bnk' }]} />
      )}

      <Intro
        posts={
          category === 'all'
            ? props.posts
            : props.posts.filter(
                (post) => post.Category.Name === getCategoryName()
              )
        }
      />
      <Videos />
      <Downloads />
      <Connect />
    </Box>
  )
}

export interface CanalBNKProps {
  posts: Post[]
}

export default function CanalBNK(props: CanalBNKProps) {
  return (
    <CategoryCtxProvider>
      <CanalBNKFC {...props} />
    </CategoryCtxProvider>
  )
}
