import Link from 'next/link'
import { List, ListItem, Text, Box } from '@chakra-ui/react'

export type FooterListProps = {
  title: {
    href: string
    title: string
  }
  items: {
    href: string
    title: string
    empty?: boolean
  }[]
}

export const FooterList = ({ title, items }: FooterListProps) => {
  return (
    <Box 
      aria-label="footer-list"
      // bg={'red'}
      >
      <List spacing="10%">
        <ListItem cursor="pointer">
          <Link href={title.href} passHref>
            <Text
              _hover={{ color: 'green.600' }}
              variant={'header-menu' as any}
              fontSize={{
                base: '7px',
                sm: '8px',
                md: '10px',
                lg: '13px',
                xl: '14px'
              }}
              color="white.100"
            >
              {title.title}
            </Text>
          </Link>
        </ListItem>
        {items.map((i, j) =>
          i.empty ? (
            <Box key={j} height="20px"></Box>
          ) : (
            <ListItem cursor="pointer" key={j}>
              <Link passHref href={i.href}>
                <Text
                  _hover={{ color: '#FFF' }}
                  variant={'tags' as any}
                  fontSize={{
                    base: '6px',
                    sm: '7px',
                    md: '9px',
                    lg: '12px',
                    xl: '13px'
                  }}
                  color="green.200"
                  fontWeight="600"
                >
                  {i.title}
                </Text>
              </Link>
            </ListItem>
          )
        )}
      </List>
    </Box>
  )
}
