import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps
} from 'next'

import { Post, Category as CategoryProps } from 'types/data/Post'

import { POSTS } from 'mocks/canal_bnk'
import CanalBNK from 'views/Canal-BNK'

export interface CategoryPageProps {
  category: CategoryProps
  posts: Post[]
  allCategories: CategoryProps[]
}

export default function CategoryPage(props: CategoryPageProps) {
  const index = props.allCategories.findIndex(
    (item) => item.id === props.category.id
  )

  return (
    <CanalBNK
      posts={props.posts}
      categories={props.allCategories}
      defaultCategory={index}
    />
  )
  // return <Category posts={props.posts} category={props.category} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const category = params?.category
  const locale = context.locale
  let res

  res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/categories?_locale=${locale}`
  )
  let allCategories = await res.json()

  res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `/categories/${category}?_locale=${locale}`
  )
  const currentCategory = await res.json()

  res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/posts?_locale=${locale}`
  )
  const allPosts = await res.json()
  let posts

  if (allPosts && allPosts.length) {
    posts = allPosts.map((item: { cover: { url: string } }) => {
      return {
        ...item,
        cover: process.env.NEXT_PUBLIC_API_URL + item.cover.url
      }
    })
  }

  allCategories = allCategories.sort(
    (a: { name: string }, b: { name: string }) => {
      if (a.name < b.name) {
        return -1
      }
      if (b.name < a.name) {
        return 1
      }
      return 0
    }
  )

  return {
    props: { category: currentCategory, allCategories, posts }
  }
}
