import { useRouter } from 'next/router'
import * as S from './styles'

export const Pagebar = () => {
  const { pathname } = useRouter()

  return (
    <S.Wrapper>
      <S.Tail>Somos Berneck</S.Tail>
    </S.Wrapper>
  )
}
