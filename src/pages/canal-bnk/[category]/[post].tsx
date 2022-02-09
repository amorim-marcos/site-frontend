import { PostsView } from 'views/Canal-BNK/Posts/PostsView'

import { useEffect, useState } from 'react'

export default function Post() {
  const [postContent, setPostContent] = useState('')
  async function f() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/${1}`)
    const data = await res.json()
    setPostContent(data.content)
  }
  useEffect(() => {
    f()
  }, [])
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
