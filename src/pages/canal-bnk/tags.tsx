import { Box } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { CategoryCtxProvider } from 'views/Canal-BNK'
import { Intro } from 'views/Canal-BNK/sections'
import DOMPurify from 'isomorphic-dompurify'
import { Post } from 'types/data/Post/Post'
import Pagebar from '@components/Pagebar'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'
import { loadTranslations } from 'ni18n'

export default function Tagspage(props: { posts: Post[]; tagName: string }) {
  return (
    <Box>
      <Pagebar
        paths={[
          { title: 'Canal BNK', url: '/canal-bnk' },
          {
            title: props.tagName,
            url: '/canal-bnk'
          }
        ]}
      />
      <CategoryCtxProvider seeOnlyPostsDefault>
        <Intro posts={props.posts} tagName={props.tagName} tagsSearch />
      </CategoryCtxProvider>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = context.locale
  const query = context.query

  let newQuery = ''
  let queryName = 'Todos'

  if (typeof query._tag !== 'undefined') {
    newQuery = `_where[tags.tag]=${query._tag}`
    queryName = query._tag as string
  }

  let page_content

  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/posts?_locale=${locale}&${newQuery}`
    )
    page_content = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts?${newQuery}`)
    page_content = await res.json()
  }

  const posts =
    page_content.length > 0
      ? page_content.map((item: PostResponse) => {
          const post: Post = {
            category: {
              name: item.category.name,
              id: item.category.id,
              description: item.category.description,
              color: item.category.color
            },
            content: DOMPurify.sanitize(item.content).replace(
              '/uploads',
              `${process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL}/uploads`
            ),
            cover: process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + item.cover.url,
            tags: item.tags.map((j) => ({
              Tag: j.tag
            })),
            title: item.title,
            date: item.published_at,
            url_code: item.url_code
          }
          return post
        })
      : []
  // console.log(page_content)

  return {
    props: {
      posts,
      tagName: queryName,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
    }
  }
}

type PostResponse = {
  cover: {
    url: string
  }
  category: {
    name: string
    id: number
    description: string
    color: string
  }
  content: string
  tags: {
    tag: string
  }[]
  title: string
  published_at: string
  publication_date: string
  url_code: string
}
