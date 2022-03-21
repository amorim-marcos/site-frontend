import { Text, Flex, Box } from '@chakra-ui/react'
import Arrow from '@components/Arrow'
import ArrowIcon from '@components/Icons/ArrowIcon'
import Link from 'next/link'
import useMobile from '../../../../hooks/useMobile'

export type HeaderMenuSubItemProps = {
  title?: string
  href?: string
  subItems?: {
    title?: string
    href?: string
    arrow?: boolean
  }[]
  onClick?: () => void
}

export const HeaderMenuSubItem = ({
  title,
  href = '/',
  subItems,
  onClick
}: HeaderMenuSubItemProps) => {
  return (
    <Flex onClick={onClick} flexDir="column">
      <Link href={href} passHref>
        <Flex
          paddingLeft={{
            base: '15px',
            md: '12px',
            lg: '15px',
            xl: '20px',
            '2xl': '25px'
          }}
          cursor="pointer"
          _hover={{ md: { bg: subItems ? 'green.800' : '#79B928' } }}
          alignItems="center"
          h={{
            base: '60px',
            md: '30px',
            lg: '35px',
            xl: '40px',
            '2xl': '50px'
          }}
          w={{ base: '100%', md: '100%' }}
          bg={{ base: 'green.700', md: 'green.800' }}
          borderBottom={{ base: '2px solid', md: 'none' }}
          borderBottomColor={{ base: 'green.800', md: 'none' }}
        >
          <Text
            fontSize={{
              base: '14px',
              md: '8.3px',
              lg: '10px',
              xl: '13px',
              '2xl': '16.5px'
            }}
            color="white.100"
            variant={'header-menu' as any}
          >
            {title || 'Component text'}
          </Text>
          <Flex flexDir="column"></Flex>
        </Flex>
      </Link>
      <Box>
        {subItems?.map((i, j) => {
          return (
            <Link key={j} passHref href={i.href || '/'}>
              <Flex
                paddingLeft={{
                  base: '15px',
                  md: '12px',
                  lg: '15px',
                  xl: '20px',
                  '2xl': '25px'
                }}
                cursor="pointer"
                _hover={{ bg: '#79B928' }}
                alignItems="center"
                h={{
                  base: '40px',
                  md: '30px',
                  lg: '35px',
                  xl: '40px',
                  '2xl': '50px'
                }}
                w="100%"
                bg="green.700"
              >
                { i.arrow && 
                  <ArrowIcon 
                    stroke="#CCD3CA"
                    w={{
                      base: '12px',
                      md: '7px',
                      lg: '9px',
                      xl: '12px',
                      '2xl': '10px'
                    }} 
                  /> }
                <Text
                  ml={(i.arrow) ? "10px" :  "0" }
                  fontSize={{
                    base: '14px',
                    md: '8.3px',
                    lg: '10px',
                    xl: '13px',
                    '2xl': '16.5px'
                  }}
                  color="white.100"
                  variant={'header-menu-small' as any}
                >
                  {i.title}
                </Text>
              </Flex>
            </Link>
          )
        })}
      </Box>
    </Flex>
  )
}
