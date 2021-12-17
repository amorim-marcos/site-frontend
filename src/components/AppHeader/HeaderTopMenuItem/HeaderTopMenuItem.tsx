import { Center, Text } from '@chakra-ui/react'
import Link from 'next/link'
export type HeaderTopMenuItemProps = {
  title?: string
  href?: string
}
export const HeaderTopMenuItem = ({
  title = 'TopMenuItem',
  href = '/'
}: HeaderTopMenuItemProps) => {
  return (
    <Center>
      <Link href={href} passHref>
        <Text
          _hover={{ color: '#FFF' }}
          variant="header-menu-small"
          color="green.200"
          cursor="pointer"
        >
          {title}
        </Text>
      </Link>
    </Center>
  )
}
