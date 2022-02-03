import { PostsView, PostViewProps } from 'views/channelBNK/PostsView'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useEffect, useState } from 'react'

export type PostPageProps = {
  page_content: {
    id: string
    title: string
    content: string
  }
}

export default function Post({ page_content }: PostPageProps) {
  const [postContent, setPostContent] = useState('')
  async function f() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/${1}`)
    const data = await res.json()
    setPostContent(data.content)
  }
  useEffect(() => {
    f()
  }, [page_content])
  return (
    <PostsView
      postBody={{
        category: 'MUNDO BERNECK',
        publishDate: '30/10/2020',
        postTitle: 'BERNECK® é destaque no prêmio Valor 1000',
        postContent: postContent
      }}
    />
  )
}

// export const getStaticPaths: GetStaticPaths = () => {
//   const arr = [{ id: '1' }]

//   const paths = arr.map((r) => {
//     return { params: { id: r.id } }
//   })

//   return { paths, fallback: false }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { id } = context.params as { id: string }
//   const locale = context.locale
//   let page_content

//   try {
//     const res = await fetch(
//       process.env.NEXT_PUBLIC_API_URL + `/posts/${id}?_locale=${locale}`
//     )
//     page_content = await res.json()
//   } catch (e) {
//     // if locale not working, get default
//     const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/${id}`)
//     page_content = await res.json()
//   }

//   return {
//     props: {
//       page_content
//     },
//     revalidate: parseInt(
//       process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
//     )
//   }
// }
