import Main from 'components/Main'

const categories = [
  {
    slug: 'inspiracao-sob-medida',
    title: 'INSPIRAÇÃO SOB MEDIDA'
  },
  {
    slug: 'materia-prima',
    title: 'MATÉRIA-PRIMA: CONHECIMENTO'
  },
  {
    slug: 'mundo-berneck',
    title: 'MUNDO BERNECK'
  }
]

export default function CanalBnk() {
  return (
    <div>
      <Main title="Canal BNK">
        <div>
          <ul>
            {categories.map((p) => (
              <li key={p.slug}>
                <a href={`/canal-bnk/${p.slug}`}>{p.title}</a>
              </li>
            ))}

            <li>
              <a href={`/canal-bnk/downloads`}>Downloads</a>
            </li>
          </ul>
        </div>
      </Main>
    </div>
  )
}
