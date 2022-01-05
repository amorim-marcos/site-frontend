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
    <Flex
      alignItems="center"
      marginLeft={{ base: '6%', xl: '7%', '2xl': '8%' }}
    >
      <Link href={href} passHref>
        <Text
          _hover={{ color: '#FFF' }}
          variant="header-menu-small"
          color="green.200"
          cursor="pointer"
          whiteSpace="nowrap"
          fontSize={{
            base: '5px',
            sm: '6',
            md: '9px',
            lg: '11px',
            xl: '13px',
            '2xl': '16.5px'
          }}
        >
          {title}
        </Text>
      </Link>
    </Flex>
  )
}
