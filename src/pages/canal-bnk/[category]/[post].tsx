import Main from '@components/Main'
import { useRouter } from 'next/router'

export default function Post() {
  const { query } = useRouter()
  return (
    <div>
      <Main title={`Post: ${query.post}`} />
    </div>
  )
}
