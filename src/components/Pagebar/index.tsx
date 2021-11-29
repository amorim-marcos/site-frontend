import { useRouter } from 'next/router'
import * as S from './styles'

export default function Pagebar() {
  const { pathname } = useRouter()
  console.log(pathname)

  return (
    <S.Wrapper>
      <S.Tail>Somos Berneck</S.Tail>
    </S.Wrapper>
  )
}
