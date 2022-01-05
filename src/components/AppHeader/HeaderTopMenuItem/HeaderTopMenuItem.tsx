import { Flex, Text } from '@chakra-ui/react'
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
    <Flex alignItems="center" marginLeft={'9%'}>
      <Link href={href} passHref>
        <Text
          _hover={{ color: '#FFF' }}
          variant="header-menu-small"
          color="green.200"
          cursor="pointer"
          whiteSpace="nowrap"
        >
          {title}
        </Text>
      </Link>
    </Flex>
  )
}
