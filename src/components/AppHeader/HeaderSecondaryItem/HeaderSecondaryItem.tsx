import { Flex, Text, Link } from '@chakra-ui/react'
import CustomLink from '@components/CustomLink'
// import { useRouter } from 'next/router'

export type HeaderSecondaryItemProps = {
  title?: string
  href?: string
  isExternal?: boolean
  borderBottom?: boolean
}
export const HeaderSecondaryItem = ({
  title = 'TopMenuItem',
  href = '/',
  isExternal,
  borderBottom = true
}: HeaderSecondaryItemProps) => {
  // const router = useRouter()

  // function navigate() {
  //   if (isExternal) {
  //     window.open(href, '_blank')
  //   } else {
  //     router.push(href)
  //   }
  // }

  return (
    <Flex
      alignItems="center"
      width={{ base: 'calc(100vw - 20px)', md: 'auto' }}
      height={{ base: '9vh', md: 'auto' }}
      borderBottom={borderBottom ? { base: '2px solid', md: 'none' } : ''}
      borderBottomColor={borderBottom ? { base: 'green.900', md: 'none' } : ''}
      paddingX={{ base: '10px', md: '0' }}
      marginX={{ base: '10px', md: '0' }}
      marginLeft={{ base: '0', md: '6%', xl: '7%' }}
    >
      <CustomLink linkTo={href} target={isExternal ? '_blank' : '_self'}>
        <Text
          // onClick={navigate}
          _hover={{ color: '#FFF' }}
          variant={'header-menu-small' as any}
          color={{ base: 'white.100', md: 'green.200' }}
          cursor="pointer"
          whiteSpace="nowrap"
          fontSize={{
            base: '10px',
            md: '9px',
            lg: '11px',
            xl: '13px'
          }}
        >
          {title}
        </Text>
      </CustomLink>
    </Flex>
  )
}
