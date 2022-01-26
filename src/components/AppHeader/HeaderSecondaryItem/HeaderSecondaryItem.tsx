import { Flex, Text } from '@chakra-ui/react'
import useMobile from 'hooks/useMobile'
import Link from 'next/link'
export type HeaderSecondaryItemProps = {
  title?: string
  href?: string
}
export const HeaderSecondaryItem = ({
  title = 'TopMenuItem',
  href = '/'
}: HeaderSecondaryItemProps) => {
  const { isMobile } = useMobile(568)
  return (
    <Flex
      alignItems="center"
      marginLeft={{ base: '0', sm: '6%', xl: '7%', '2xl': '8%' }}
      {...(isMobile && {
        width: 'calc(100vw - 20px)',
        height: '9vh',
        borderBottom: '2px solid',
        borderBottomColor: 'green.900',
        paddingX: '10px',
        marginX: '10px'
      })}
    >
      <Link href={href} passHref>
        <Text
          _hover={{ color: '#FFF' }}
          variant={'header-menu-small' as any}
          color={{ base: 'white.100', sm: 'green.200' }}
          cursor="pointer"
          whiteSpace="nowrap"
          fontSize={{
            base: '10px',
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
