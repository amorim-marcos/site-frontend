import * as S from './styles'

export type PagebarProps = {
  title?: string
}
export const Pagebar = ({ title }: PagebarProps) => {
  return (
    <S.Wrapper>
      <S.Tail>Somos Berneck {title}</S.Tail>
    </S.Wrapper>
  )
}
