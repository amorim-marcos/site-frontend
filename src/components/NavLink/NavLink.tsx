import NextLink from 'next/link'
import { LinkOverlay, LinkBox } from '@chakra-ui/react'

import { Box, useStyleConfig, BoxProps } from '@chakra-ui/react'

type NavLinkProps = BoxProps & {
  href: string
  variant?: string
}

export const NavLink = ({ variant, children, href, ...rest }: NavLinkProps) => {
  const styles = useStyleConfig('NavLink', { variant })

  return (
    <LinkBox>
      <NextLink href={href} passHref>
        <LinkOverlay>
          <Box as="span" __css={styles} {...rest}>
            {children}
          </Box>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  )
}
