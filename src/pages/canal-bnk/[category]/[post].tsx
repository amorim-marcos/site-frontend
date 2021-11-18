import { useRouter } from 'next/router'

export default function Post() {
  const { query } = useRouter()
  return (
    <div>
      <h1>Post: {query.post}</h1>
    </div>
  )
}
