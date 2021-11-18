import * as S from './styles'

const Main = () => (
  <S.Container>
    <S.Title>Berneck Frontend</S.Title>
    <S.Menu>
      <S.Link href="/somos-berneck">
        <S.Card>
          <S.PageTitle>Somos Berneck &rarr;</S.PageTitle>
        </S.Card>
      </S.Link>

      <S.Link href="/nosso-compromisso">
        <S.Card>
          <S.PageTitle>Nosso Compromisso &rarr;</S.PageTitle>
        </S.Card>
      </S.Link>

      <S.Link href="/divisao-florestal">
        <S.Card>
          <S.PageTitle>Divisão Florestal &rarr;</S.PageTitle>
        </S.Card>
      </S.Link>

      <S.Link href="/produtos">
        <S.Card>
          <S.PageTitle>Produtos &rarr;</S.PageTitle>
        </S.Card>
      </S.Link>

      <S.Link href="/canal-bnk">
        <S.Card>
          <S.PageTitle>Canal BNK &rarr;</S.PageTitle>
        </S.Card>
      </S.Link>
    </S.Menu>
  </S.Container>
)

export default Main
