import Link from 'next/link'
import { ReactNode } from 'react'

export type CustomLinkProps = {
  linkTo?: string
  children?: ReactNode
  target?: '_blank' | '_self'
  download?: boolean
}
export const CustomLink = ({
  linkTo,
  children,
  target,
  ...props
}: CustomLinkProps) => {
  return (
    <Link href={linkTo ?? '#'} target={target ?? '_self'} {...props}>
      {children}
    </Link>
  )
}
