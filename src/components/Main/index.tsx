import * as S from './styles'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

export default function Main({ title = 'HomePage', children }: Props) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {children}
    </S.Wrapper>
  )
}
