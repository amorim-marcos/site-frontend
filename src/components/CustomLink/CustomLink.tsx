import Link from 'next/link'
import { ReactNode } from 'react'

export type CustomLinkProps = {
  linkTo?: string
  children?: ReactNode
  target?: '_blank' | '_self'
}
export const CustomLink = ({ linkTo, children, target }: CustomLinkProps) => {
  return (
    <Link href={linkTo ?? '#'} target={target ?? '_self'}>
      {children}
    </Link>
  )
}
