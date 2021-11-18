import Main from 'components/Main'
import { useRouter } from 'next/router'

const posts = ['Post1', 'Post2', 'Post3']

export default function Category() {
  const { query } = useRouter()
  return (
    <div>
      <Main title={`${query.category}`}>
        <div>
          <ul>
            {posts.map((p) => (
              <li key={p}>
                <a href={`/canal-bnk/${query.category}/${p}`}>{p}</a>
              </li>
            ))}
          </ul>
        </div>
      </Main>
    </div>
  )
}
