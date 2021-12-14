import Main from '@components/Main'
import Link from 'next/link'

const items = ['Sala de estar', 'Quarto', 'Cozinha', 'etc']

export default function Gallery() {
  return (
    <div>
      <Main title="Gallery">
        <ul>
          {items.map((i) => (
            <li key={i}>
              <Link href={`/produtos/bp-berneck/gallery/${i}`}>{i}</Link>
            </li>
          ))}
        </ul>
      </Main>
    </div>
  )
}
