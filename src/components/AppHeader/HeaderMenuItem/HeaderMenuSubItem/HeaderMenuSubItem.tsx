import { Text, Flex, Center } from '@chakra-ui/react'
import Link from 'next/link'

export type HeaderMenuSubItemProps = {
  title?: string
  href?: string
  subItems?: {
    title?: string
    href?: string
  }[]
}

export const HeaderMenuSubItem = ({
  title,
  href = '/',
  subItems
}: HeaderMenuSubItemProps) => {
  return (
    <Flex flexDir="column">
      <Link href={href} passHref>
        <Flex
          paddingLeft={5}
          cursor="pointer"
          _hover={{
            bg: subItems ? 'green.800' : '#79B928'
          }}
          alignItems="center"
          h="50px"
          w="100%"
          bg="green.800"
        >
          <Text color="white.100" variant="header-menu">
            {title || 'Component text'}
          </Text>
          <Flex flexDir="column"></Flex>
        </Flex>
      </Link>
      {subItems?.map((i) => {
        return (
          <Link passHref href={i.href || '/'} key={i.title}>
            <Flex
              paddingLeft={5}
              cursor="pointer"
              _hover={{ bg: '#79B928' }}
              alignItems="center"
              h="50px"
              w="100%"
              bg="green.700"
            >
              <Text color="white.100" variant="header-menu-small">
                {i.title}
              </Text>
            </Flex>
          </Link>
        )
      })}
    </Flex>
  )
}
