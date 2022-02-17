import { Text, Center, Flex, Box } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'
import useMobile from 'hooks/useMobile'
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
  closeMenuMobile: () => void
  borderBottom?: boolean
}

export const HeaderMenuItem = ({
  title = 'Title Here',
  subItems,
  href = '/',
  closeMenuMobile,
  borderBottom = true
}: HeaderMenuItemProps) => {
  const [open, setOpen] = useState(false)
  const { isMobile } = useMobile(568)

  return (
    <Center
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
      position="relative"
      h={{ base: '9vh', sm: '100%' }}
      maxHeight={115}
      marginX={{ base: '0px', sm: '1.3%', md: '1%', xl: '1%', '2xl': '1%' }}
      paddingX={{
        base: '0px',
        sm: '1.9%',
        md: '2.6%',
        lg: '2.5%',
        xl: '2.3%',
        '2xl': '2.3%'
      }}
      {...(isMobile && {
        _hover: {
          bg: 'green.700'
        }
      })}
      cursor="pointer"
      transition="0.4s"
      bg={isMobile || open ? 'green.700' : 'green.800'}
      {...(isMobile &&
        borderBottom && {
          borderBottom: '2px solid',
          borderBottomColor: 'green.800'
        })}
    >
      {!isMobile && (
        <Link href={href} passHref>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            h="100%"
            {...(isMobile && { paddingX: '10px' })}
          >
            <Text
              fontSize={{
                base: '10px',
                sm: '6.3px',
                md: '8.3px',
                lg: '10px',
                xl: '13px',
                '2xl': '16.5px'
              }}
              color="#FFF"
              variant={'header-menu' as any}
              whiteSpace="nowrap"
            >
              {title}
            </Text>
            {isMobile && <ArrowIcon width="10px" stroke="green.800" />}
          </Flex>
        </Link>
      )}

      {isMobile && (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          h="100%"
          {...(isMobile && { paddingX: '10px' })}
          onClick={() => setOpen(true)}
        >
          <Text
            fontSize={{
              base: '10px',
              sm: '6.3px',
              md: '8.3px',
              lg: '10px',
              xl: '13px',
              '2xl': '16.5px'
            }}
            color="#FFF"
            variant={'header-menu' as any}
            whiteSpace="nowrap"
          >
            {title}
          </Text>
          {isMobile && <ArrowIcon width="10px" stroke="green.800" />}
        </Flex>
      )}

      <Flex
        borderTop="solid #135740"
        borderTopWidth={{ base: '2px', md: '3px', xl: '4px', '2xl': '6px' }}
        flexDir="column"
        position={{ base: 'fixed', sm: 'absolute' }}
        top={{ base: '90px', sm: '100%' }}
        left={{ base: '0' }}
        w={{ base: '100vw', sm: 'calc(150%)' }}
        display={open ? 'flex' : 'none'}
        h={{ base: 'calc(100vh - 75px)', sm: 'auto' }}
        zIndex="modal"
        bg="green.700"
        {...(isMobile && { overflowY: 'scroll', paddingBottom: '20px' })}
      >
        {isMobile && (
          <Flex
            justifyContent="space-between"
            p="15px"
            w="100%"
            h="60px"
            bg="green.800"
            alignItems="center"
            onClick={() => setOpen(false)}
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
              {title}
            </Text>
            <Box transform="rotate(180deg)">
              <ArrowIcon stroke="#FFF" width="10px" />
            </Box>
          </Flex>
        )}
        {subItems &&
          subItems.map((i, j) => {
            if (j !== subItems.length - 1 && i.subItems) {
              return (
                <Box
                  key={j}
                  borderBottom="2px solid"
                  borderBottomColor="green.800"
                  marginX={{ base: '15px', sm: '0' }}
                >
                  <HeaderMenuSubItem
                    key={i.title}
                    title={i.title}
                    href={i.href}
                    subItems={i.subItems}
                    onClick={() => {
                      setOpen(false)
                      closeMenuMobile()
                    }}
                  />
                </Box>
              )
            } else {
              return (
                <Box key={j} marginX={{ base: '15px', sm: '0' }}>
                  <HeaderMenuSubItem
                    key={i.title}
                    title={i.title}
                    href={i.href}
                    subItems={i.subItems}
                    onClick={() => {
                      setOpen(false)
                      closeMenuMobile()
                    }}
                  />
                </Box>
              )
            }
          })}
      </Flex>
    </Center>
  )
}
