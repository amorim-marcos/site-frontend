import Link from 'next/link'

const items = ['terraza', 'volakas', 'galiano', 'etc']

export default function Catalog() {
  return (
    <div>
      <h1>Catalog Berneck</h1>

      <ul>
        {items.map((i) => (
          <li key={i}>
            <Link href={`/produtos/bp-berneck/catalog/${i}`}>{i}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
