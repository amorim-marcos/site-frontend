import { Text, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export type HeaderMenuSubItemProps = {
  title?: string
  href?: string
}

export const HeaderMenuSubItem = ({
  title,
  href = '/'
}: HeaderMenuSubItemProps) => {
  return (
    <Link href={href} passHref>
      <Flex
        paddingLeft={5}
        cursor="pointer"
        _hover={{ bg: '#79B928' }}
        alignItems="center"
        h="50px"
        w="100%"
        bg="green.800"
      >
        <Text color="white.100" variant="header-menu">
          {title || 'Component text'}
        </Text>
      </Flex>
    </Link>
  )
}
