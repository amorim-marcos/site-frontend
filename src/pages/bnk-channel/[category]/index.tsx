import { GetServerSideProps } from 'next'
import { loadTranslations } from 'ni18n'

import { Post, Category as CategoryProps } from 'types/data/Post'

import CanalBNK, { IVideos } from 'views/Canal-BNK'
import { nameSpaces, ni18nConfig } from '../../../../ni18n.config'

export interface CategoryPageProps {
  category: CategoryProps
  posts: Post[]
  patterns_pack_url: string
  allCategories: CategoryProps[]
  youtubeVideos: IVideos[]
}

export default function CategoryPage(props: CategoryPageProps) {
  const index = props.allCategories.findIndex(
    (item) => item.id === props.category.id
  )

  return (
    <CanalBNK
      posts={props.posts}
      categories={props.allCategories}
      patterns_pack_url={props.patterns_pack_url}
      defaultCategory={index}
      youtubeVideos={props.youtubeVideos || []}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const category = params?.category
  const locale = context.locale

  let res
  let allCategories
  let downloads_page
  let posts
  let allPosts
  let currentCategory
  let youtubeVideos

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/categories?_locale=${locale}`
    )
    allCategories = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/categories/${category}?_locale=${locale}`
    )

    currentCategory = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/posts?_locale=${locale}`
    )

    allPosts = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/downloads-page?_locale=${locale}`
    )

    downloads_page = await res.json()

    res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${4}&playlistId=${
        {
          '1': 'PLOtoyzs6hjIo4VNi3CNXtWBk-RTKg_eEI',
          '2': 'PLOtoyzs6hjIoqzOctI-pgk--rPWS4ELKQ',
          '3': 'PLOtoyzs6hjIqvJfJBt5dRdJDuh3yPl7RM'
        }[category as string]
      }&key=${process.env.YOUTUBE_API_KEY}`
    )

    youtubeVideos = (await res.json()).items
  } catch (e) {
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/categories`)
    allCategories = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/categories/${category}`
    )

    currentCategory = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts`)

    allPosts = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/downloads-page`)

    downloads_page = await res.json()
  }

  if (allPosts && allPosts.length) {
    posts =
      allPosts && typeof allPosts.map === 'function'
        ? allPosts.map((item: { cover: { url: string } }) => {
            return {
              ...item,
              cover: process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + item.cover.url
            }
          })
        : []
  }

  allCategories =
    allCategories && typeof allCategories.sort === 'function'
      ? allCategories.sort((a: { name: string }, b: { name: string }) => {
          if (a.name < b.name) {
            return -1
          }
          if (b.name < a.name) {
            return 1
          }
          return 0
        })
      : []

  const patterns_pack_url = downloads_page.patterns_pack_file
    ? process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
      downloads_page.patterns_pack_file.url
    : null

  return {
    props: {
      category: currentCategory,
      allCategories,
      posts: posts && posts.length ? posts : [],
      patterns_pack_url,
      youtubeVideos: youtubeVideos || [],
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
    }
  }
}
