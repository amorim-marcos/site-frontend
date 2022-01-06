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
          paddingLeft={{
            base: '3px',
            sm: '5px',
            md: '12px',
            lg: '15px',
            xl: '20px',
            '2xl': '25px'
          }}
          cursor="pointer"
          _hover={{
            bg: subItems ? 'green.800' : '#79B928'
          }}
          alignItems="center"
          h={{ sm: '20px', md: '30px', lg: '35px', xl: '40px', '2xl': '50px' }}
          w="100%"
          bg="green.800"
        >
          <Text
            fontSize={{
              base: '4px',
              sm: '6.3px',
              md: '8.3px',
              lg: '10px',
              xl: '13px',
              '2xl': '16.5px'
            }}
            color="white.100"
            variant="header-menu"
          >
            {title || 'Component text'}
          </Text>
          <Flex flexDir="column"></Flex>
        </Flex>
      </Link>
      {subItems?.map((i) => {
        return (
          <Link passHref href={i.href || '/'} key={i.title}>
            <Flex
              paddingLeft={{
                base: '3px',
                sm: '5px',
                md: '12px',
                lg: '15px',
                xl: '20px',
                '2xl': '25px'
              }}
              cursor="pointer"
              _hover={{ bg: '#79B928' }}
              alignItems="center"
              h={{
                sm: '20px',
                md: '30px',
                lg: '35px',
                xl: '40px',
                '2xl': '50px'
              }}
              w="100%"
              bg="green.700"
            >
              <Text
                fontSize={{
                  base: '4px',
                  sm: '6.3px',
                  md: '8.3px',
                  lg: '10px',
                  xl: '13px',
                  '2xl': '16.5px'
                }}
                color="white.100"
                variant="header-menu-small"
              >
                {i.title}
              </Text>
            </Flex>
          </Link>
        )
      })}
    </Flex>
  )
}
