import * as S from './styles'

const Main = () => (
  <S.Container>
    <S.TopBar />
    <S.MenuWrapper>
      <S.Logo>Berneck</S.Logo>

      <S.Menu>
        <S.Link href="/somos-berneck">
          <S.Card>
            <S.PageTitle>Somos Berneck</S.PageTitle>
          </S.Card>
        </S.Link>

        <S.Link href="/nosso-compromisso">
          <S.Card>
            <S.PageTitle>Nosso Compromisso</S.PageTitle>
          </S.Card>
        </S.Link>

        <S.Link href="/divisao-florestal">
          <S.Card>
            <S.PageTitle>Divisão Florestal</S.PageTitle>
          </S.Card>
        </S.Link>

        <S.Link href="/produtos">
          <S.Card>
            <S.PageTitle>Produtos</S.PageTitle>
          </S.Card>
        </S.Link>

        <S.Link href="/canal-bnk">
          <S.Card>
            <S.PageTitle>Canal BNK</S.PageTitle>
          </S.Card>
        </S.Link>
      </S.Menu>
    </S.MenuWrapper>
  </S.Container>
)

export default Main
