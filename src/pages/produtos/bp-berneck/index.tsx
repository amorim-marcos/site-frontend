import Main from 'components/Main'
import Link from 'next/link'
export default function BpBerneck() {
  return (
    <div>
      <Main title="Bp Berneck">
        <ul>
          <li>
            <Link href="/produtos/bp-berneck/catalog">Catalog</Link>
          </li>
          <li>
            <Link href="/produtos/bp-berneck/gallery">gallery</Link>
          </li>
        </ul>
      </Main>
    </div>
  )
}
