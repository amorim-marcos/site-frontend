import Link from 'next/link'
import { ReactNode } from 'react'

export type CustomLinkProps = {
  linkTo?: string
  children?: ReactNode
}
export const CustomLink = ({ linkTo, children }: CustomLinkProps) => {
  return (
    <Link href={linkTo ?? '#'}>
      <a>{children}</a>
    </Link>
  )
}
