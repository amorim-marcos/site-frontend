import { Text, Center, Flex, Box } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'
import useMobile from 'hooks/useMobile'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  return (
    <Center
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
      position="relative"
      h={{ base: '9vh', md: '100%' }}
      maxHeight={115}
      marginX={{ base: '0px', md: '1%', xl: '1%' }}
      paddingX={{
        base: '0px',
        md: '2.6%',
        lg: '2.5%',
        xl: '2.3%'
      }}
      _hover={{
        base: {
          bg: 'green.700'
        },
        md: {
          bg: 'none'
        }
      }}
      cursor="pointer"
      transition="0.4s"
      bg={{ base: 'green.700', md: open ? 'green.700' : 'green.800' }}
      borderBottom={{ base: borderBottom ? '2px solid' : '', md: 'none' }}
      borderBottomColor={{ base: borderBottom ? 'green.800' : '', md: 'none' }}
    >
      <Box display={{ base: 'none', md: 'block' }}>
        <Link href={href} passHref>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            h="100%"
            paddingX={{ base: '10px', md: '0' }}
          >
            <Text
              fontSize={{
                base: '10px',
                md: '8.3px',
                lg: '10px',
                xl: '13px'
              }}
              color="#FFF"
              variant={'header-menu' as any}
              whiteSpace="nowrap"
            >
              {title.toUpperCase()}
            </Text>
            <Box display={{ base: 'block', md: 'none' }}>
              <ArrowIcon width="10px" stroke="green.800" />
            </Box>
          </Flex>
        </Link>
      </Box>

      <Flex
        display={{ base: 'flex', md: 'none' }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h="100%"
        paddingX={{ base: '10px', md: '0' }}
        onClick={() => setOpen(true)}
      >
        <Text
          fontSize={{
            base: '10px',
            md: '8.3px',
            lg: '10px',
            xl: '13px'
          }}
          color="#FFF"
          variant={'header-menu' as any}
          whiteSpace="nowrap"
        >
          {title}
        </Text>
        <Box display={{ base: 'block', md: 'none' }}>
          <ArrowIcon width="10px" stroke="green.800" />
        </Box>
      </Flex>

      <Flex
        borderTop="solid #135740"
        borderTopWidth={{ base: '2px', md: '3px', xl: '4px' }}
        flexDir="column"
        position={{ base: 'fixed', md: 'absolute' }}
        top={{ base: '90px', md: '100%' }}
        left={{ base: '0' }}
        w={{ base: '100vw', md: 'calc(150%)' }}
        display={open ? 'flex' : 'none'}
        h={{ base: 'calc(100vh - 75px)', md: 'auto' }}
        zIndex="modal"
        bg="green.700"
        overflow={{ base: 'scroll', md: 'visible' }}
        paddingBottom={{ base: '20px', md: '0' }}
      >
        <Flex
          display={{ base: 'flex', md: 'none' }}
          justifyContent="space-between"
          p="15px"
          w="100%"
          h="60px"
          bg="green.800"
          alignItems="center"
        >
          <Text
            fontSize={{
              base: '14px',
              md: '8.3px',
              lg: '10px',
              xl: '13px'
            }}
            color="white.100"
            variant={'header-menu' as any}
            onClick={() => {
              setOpen(false)
              closeMenuMobile()
              router.push(href)
            }}
          >
            {title}
          </Text>
          <Box onClick={() => setOpen(false)} transform="rotate(180deg)">
            <ArrowIcon stroke="#FFF" width="10px" />
          </Box>
        </Flex>

        {subItems &&
          subItems.map((i, j) => {
            if (j !== subItems.length - 1 && i.subItems) {
              return (
                <Box
                  key={j}
                  borderBottom="2px solid"
                  borderBottomColor="green.800"
                  marginX={{ base: '15px', md: '0' }}
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
                <Box key={j} marginX={{ base: '15px', md: '0' }}>
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
