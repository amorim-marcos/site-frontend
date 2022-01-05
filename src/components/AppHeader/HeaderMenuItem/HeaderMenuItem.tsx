import { Text, Center, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { HeaderMenuSubItem } from './HeaderMenuSubItem/HeaderMenuSubItem'

export type HeaderMenuItemProps = {
  title?: string
  href?: string
  subItems?: {
    title?: string
    href?: string
    subItems?: {
      title?: string
      href?: string
    }[]
  }[]
}

export const HeaderMenuItem = ({
  title = 'Title Here',
  href = '/',
  subItems
}: HeaderMenuItemProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Center
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      position="relative"
      zIndex="dropdown"
      h="100%"
      maxHeight={115}
      marginX={{ xl: '1%', '2xl': '1%' }}
      paddingX={{ xl: '2.3%', '2xl': '2.3%' }}
      _hover={{
        bg: 'green.700'
      }}
      cursor="pointer"
      transition="0.4s"
      bg={open ? 'green.700' : 'green.800'}
    >
      <Link href={href} passHref>
        <Center w="100%" h="100%">
          <Text
            fontSize={{ base: '14px', xl: '14px', '2xl': '16.5px' }}
            color="#FFF"
            variant="header-menu"
            whiteSpace="nowrap"
          >
            {title}
          </Text>
        </Center>
      </Link>
      <Flex
        borderTop="6px solid #135740"
        flexDir="column"
        position="absolute"
        top="100%"
        left={0}
        w="calc(100% + 60px)"
        display={open ? 'flex' : 'none'}
      >
        {subItems &&
          subItems.map((i) => (
            <HeaderMenuSubItem
              key={i.title}
              title={i.title}
              href={i.href}
              subItems={i.subItems}
            />
          ))}
      </Flex>
    </Center>
  )
}
