import * as S from './styles'

export default function Home({ title = 'HomePage' }) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  )
}
