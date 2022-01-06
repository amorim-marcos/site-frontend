import { Text, Center, Box, Flex } from '@chakra-ui/react'
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
    <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      position="relative"
      zIndex="dropdown"
    >
      <Link href={href} passHref>
        <Center
          h="100%"
          maxHeight={115}
          paddingInline={'50px'}
          _hover={{
            bg: 'green.700'
          }}
          cursor="pointer"
          bg={open ? 'green.700' : 'green.800'}
          transition="0.4s"
        >
          <Text fontSize="14px" color="#FFF" variant="header-menu">
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
              subItems={i.subItems}
            />
          ))}
      </Flex>
    </Box>
  )
}
