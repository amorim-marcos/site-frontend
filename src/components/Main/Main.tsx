import * as S from './styles'
import { ReactNode } from 'react'

export type MainProps = {
  children?: ReactNode
  title?: string
}
export const Main = ({ title = 'HomePage', children }: MainProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {children}
    </S.Wrapper>
  )
}
