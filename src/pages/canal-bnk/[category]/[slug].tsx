import { PostsView } from 'views/Canal-BNK/Posts/PostsView'
import { Post } from '../../../types/data/Post/Post'
import { GetServerSideProps } from 'next'
import DOMPurify from 'isomorphic-dompurify'
import { smartDate } from 'utils/utils'
import { nameSpaces, ni18nConfig } from '../../../../ni18n.config'
import { loadTranslations } from 'ni18n'

export type PostPageProps = {
  posts: Post[]
  currentPost: Post
}

export default function PostPage(props: PostPageProps) {
  return (
    <PostsView
      postBody={{
        category: props.currentPost.category,
        publishDate: props.currentPost.date,
        postTitle: props.currentPost.title,
        postContent: props.currentPost.content,
        tags: props.currentPost.tags.map((item) => ({ name: item.Tag })),
        postSlug: props.currentPost.url_code
      }}
      coverImageUrl={props.currentPost.cover}
      relationalContent={{
        items: props.posts.map((item) => {
          return {
            category: {
              id: item.category.id,
              name: item.category.name,
              color: item.category.color
            },
            url_code: item.url_code,
            urlImage: item.cover,
            title: item.title
          }
        })
      }}
      backgroundColor="brown.100"
      postCategory={props.currentPost.category}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query
  let res

  res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/${slug}`)
  const currentPost = (await res.json()) as PostResponse

  res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts`)
  const allPosts = await res.json()

  const data: Post[] = allPosts
    .filter(
      (item: PostResponse) =>
        item.url_code !== slug && item.category.id === currentPost.category.id
    )
    .map((item: PostResponse) => {
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

  const currentPostTrated: Post = {
    category: {
      name: currentPost.category.name,
      id: currentPost.category.id,
      description: currentPost.category.description,
      color: currentPost.category.color
    },
    content: DOMPurify.sanitize(currentPost.content, {
      ADD_TAGS: ['oembed', 'figure'],
      ADD_ATTR: ['url', 'allow', 'allowfullscreen', 'frameborder', 'scrolling']
    }),
    cover: process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + currentPost.cover.url,
    tags: currentPost.tags.map((j) => ({
      Tag: j.tag
    })),
    title: currentPost.title,
    date: currentPost.publication_date
      ? getCorrectDate(currentPost.publication_date, ctx.locale || 'pt-BR')
      : getCorrectDate(currentPost.published_at, ctx.locale || 'pt-BR'),
    url_code: currentPost.url_code
  }

  return {
    props: {
      posts: data,
      currentPost: currentPostTrated,
      ...(await loadTranslations(ni18nConfig, ctx.locale, nameSpaces))
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

function getCorrectDate(a: string | Date, locale: string) {
  const r = smartDate(a, locale)

  if (typeof r === 'string') {
    return r
  }

  return r === null ? '' : r.toLocaleDateString()
}
