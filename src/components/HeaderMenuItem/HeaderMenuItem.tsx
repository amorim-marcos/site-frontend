import * as S from './styles'
import { Text, Center, Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'

export type HeaderMenuItemProps = {
  title?: string
  href?: string
  items?: Array<ItemProps>
}

export type ItemProps = {
  title?: string
  href?: string
  subItems: Array<SubItemProps>
}

export type SubItemProps = {
  title?: string
  href?: string
}

export const HeaderMenuItem = ({
  title = 'Title Here',
  href = '/'
}: HeaderMenuItemProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      position="relative"
    >
      <Link href={href}>
        <Center
          h="100%"
          maxHeight={115}
          paddingInline={50}
          _hover={{
            bg: 'green.550'
          }}
          cursor="pointer"
        >
          <Text color="white.100" variant="header-menu">
            {title}
          </Text>
        </Center>
      </Link>
      <Flex
        display="none"
        flexDir="column"
        position="absolute"
        top="100%"
        left={0}
      >
        <SubItem />
        <SubItem />
        <SubItem />
        <SubItem />
        <SubItem />
        <SubItem />
        <SubItem />
      </Flex>
    </Box>
  )
}

const SubItem = ({ title = 'SubItem', href = '/' }: SubItemProps) => {
  return (
    <Link href={href} passHref>
      <Flex paddingLeft={5} alignItems="center" h="40px" w={290} bg="green.700">
        <Text color="white.100" variant="header-menu">
          {title}
        </Text>
      </Flex>
    </Link>
  )
}
