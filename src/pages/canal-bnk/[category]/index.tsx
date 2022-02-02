import { GetServerSideProps } from 'next'

import Category from 'views/Canal-BNK/category'
import { Post, CategoryLabel } from 'types/data/Post'

import { POSTS } from 'mocks/canal_bnk'

export interface CategoryPageProps {
  category: CategoryLabel
  posts: Post[]
}

export default function CategoryPage(props: CategoryPageProps) {
  return <Category posts={props.posts} category={props.category} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const category = params?.category as CategoryLabel

  const getCategoryName = () => {
    return category === 'inspiration'
      ? 'INSPIRAÇÃO SOB MEDIDA'
      : category === 'feedstock'
      ? 'MATÉRIA-PRIMA: CONHECIMENTO'
      : 'MUNDO BERNECK'
  }

  const posts =
    category === 'all'
      ? POSTS
      : POSTS.filter((post) => post.Category.Name === getCategoryName())

  return { props: { category: params?.category, posts } }
}
