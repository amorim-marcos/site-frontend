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
    <Box aria-label="footer-list">
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
                xl: '15px',
                '2xl': '17px'
              }}
              color="white.100"
            >
              {title.title}
            </Text>
          </Link>
        </ListItem>
        {items.map((i) =>
          i.empty ? (
            <Box height="20px"></Box>
          ) : (
            <ListItem cursor="pointer" key={i.title}>
              <Link passHref href={i.href}>
                <Text
                  _hover={{ color: '#FFF' }}
                  variant={"tags" as any}
                  fontSize={{
                    base: '6px',
                    sm: '7px',
                    md: '9px',
                    lg: '12px',
                    xl: '14px',
                    '2xl': '17px'
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
