import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
export type HeaderSecondaryItemProps = {
  title?: string
  href?: string
}
export const HeaderSecondaryItem = ({
  title = 'TopMenuItem',
  href = '/'
}: HeaderSecondaryItemProps) => {
  return (
    <Flex
      alignItems="center"
      marginLeft={{ base: '0', md: '6%', xl: '7%', '2xl': '8%' }}
      width={{ base: 'calc(100vw - 20px)', md: 'auto' }}
      height={{ base: '9vh', md: 'auto' }}
      borderBottom={{ base: '2px solid', md: 'none' }}
      borderBottomColor={{ base: 'green.900', md: 'none' }}
      paddingX={{ base: '10px', md: '0' }}
      marginX={{ base: '10px', md: '0' }}
    >
      <Link href={href} passHref>
        <Text
          _hover={{ color: '#FFF' }}
          variant={'header-menu-small' as any}
          color={{ base: 'white.100', md: 'green.200' }}
          cursor="pointer"
          whiteSpace="nowrap"
          fontSize={{
            base: '10px',
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
