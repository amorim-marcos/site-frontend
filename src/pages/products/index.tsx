import Main from '@components/Main'

const produtos = [
  'bp-berneck',
  'hdf-berneck',
  'mdf-berneck',
  'mdp-berneck',
  'plus-berneck',
  'berneck-pinus',
  'berneck-teca'
]

export default function Produtos() {
  return (
    <div>
      <Main title="Nossos Produtos">
        <div>
          <ul>
            {produtos.map((p) => (
              <li key={p}>
                <a style={{ fontSize: '2rem' }} href={`/produtos/${p}`}>
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Main>
    </div>
  )
}
