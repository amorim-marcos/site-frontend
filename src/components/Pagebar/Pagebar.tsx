import {
  Flex,
  Text,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import Link from 'next/link'

export type Path = {
  title: string
  url: string
}

export type PagebarProps = {
  paths?: Array<Path>
}
export const Pagebar = ({ paths }: PagebarProps) => {
  return (
    <S.Wrapper>
      <S.Tail>{title}</S.Tail>
    </S.Wrapper>
  )
}
