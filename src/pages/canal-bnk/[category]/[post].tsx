import { PostsView } from 'views/Canal-BNK/Posts/PostsView'
import { Post } from '../../../types/data/Post/Post'
import { GetServerSideProps } from 'next'
import DOMPurify from 'isomorphic-dompurify'

export type PostPageProps = {
  posts: Post[]
  currentPost: Post
}

export default function PostPage(props: PostPageProps) {
  return (
    <PostsView
      postBody={{
        category: props.currentPost.category.name,
        categoryColor: props.currentPost.category.color,
        publishDate: props.currentPost.date as string,
        postTitle: props.currentPost.title,
        postContent: props.currentPost.content,
        tags: props.currentPost.tags.map((item) => ({ name: item.Tag }))
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
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const postSlug = context.params?.post
  let res

  res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/${postSlug}`)
  const currentPost = (await res.json()) as PostResponse

  res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts`)
  const allPosts = await res.json()

  const data: Post[] = allPosts
    .filter(
      (item: PostResponse) =>
        item.url_code !== postSlug &&
        item.category.id === currentPost.category.id
    )
    .map((item: PostResponse) => {
      const post: Post = {
        category: {
          name: item.category.name,
          id: item.category.id,
          description: item.category.description,
          color: item.category.color
        },
        content: DOMPurify.sanitize(item.content),
        cover: process.env.NEXT_PUBLIC_API_URL + item.cover.url,
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
    content: DOMPurify.sanitize(currentPost.content),
    cover: process.env.NEXT_PUBLIC_API_URL + currentPost.cover.url,
    tags: currentPost.tags.map((j) => ({
      Tag: j.tag
    })),
    title: currentPost.title,
    date: new Date(currentPost.published_at).toLocaleDateString(),
    url_code: currentPost.url_code
  }

  return { props: { posts: data, currentPost: currentPostTrated } }
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
  url_code: string
}
