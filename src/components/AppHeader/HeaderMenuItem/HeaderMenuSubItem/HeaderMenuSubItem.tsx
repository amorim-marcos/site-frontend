import { Text, Flex, Box } from '@chakra-ui/react'
import Link from 'next/link'
import useMobile from '../../../../hooks/useMobile'

export type HeaderMenuSubItemProps = {
  title?: string
  href?: string
  subItems?: {
    title?: string
    href?: string
  }[]
  onClick?: () => void
}

export const HeaderMenuSubItem = ({
  title,
  href = '/',
  subItems,
  onClick
}: HeaderMenuSubItemProps) => {
  const { isMobile } = useMobile(568)
  return (
    <Flex onClick={onClick} flexDir="column">
      <Link href={href} passHref>
        <Flex
          paddingLeft={{
            base: '15px',
            sm: '5px',
            md: '12px',
            lg: '15px',
            xl: '20px',
            '2xl': '25px'
          }}
          cursor="pointer"
          {...(!isMobile && {
            _hover: {
              bg: subItems ? 'green.800' : '#79B928'
            }
          })}
          alignItems="center"
          h={{
            base: '60px',
            sm: '20px',
            md: '30px',
            lg: '35px',
            xl: '40px',
            '2xl': '50px'
          }}
          w={{ base: '100%', sm: '100%' }}
          bg={isMobile ? 'green.700' : 'green.800'}
          {...(isMobile && {
            borderBottom: '2px solid',
            borderBottomColor: 'green.800'
          })}
        >
          <Text
            fontSize={{
              base: '14px',
              sm: '6.3px',
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
                  base: '40px',
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
                    base: '14px',
                    sm: '6.3px',
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
