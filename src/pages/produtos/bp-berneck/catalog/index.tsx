import Main from 'components/Main'
import Link from 'next/link'

const items = ['terraza', 'volakas', 'galiano', 'etc']

export default function Catalog() {
  return (
    <div>
      <Main title="Catalog Berneck">
        <ul>
          {items.map((i) => (
            <li key={i}>
              <Link href={`/produtos/bp-berneck/catalog/${i}`}>{i}</Link>
            </li>
          ))}
        </ul>
      </Main>
    </div>
  )
}
