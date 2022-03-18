import { Link, Flex, Box, Text, Center, Container } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import Arrow from '@components/Arrow'

export type SeeMoreProps = {
  text?: string
  link?: string
  onClick?: () => void
  textColor?: string
}
export const SeeMore = (props: SeeMoreProps) => {
  const router = useRouter()

  return (
    <Flex
      onClick={() => {
        if (props.onClick) {
          props.onClick()
        } else if (typeof props.link !== 'undefined') {
          router.push(props.link)
        }
      }}
      alignSelf="flex-end"
      align="center"
      justify="center"
      gap="14px"
      //bg="black"
    >
      <Link
        letterSpacing="-0.4px"
        fontSize={{  base: '16px',
            md: '16px',
            lg: '18px',
            xl: '20px',
            '2xl': '24px' }}
        color={props.textColor ? props.textColor : 'green.550'}
      >
        {props?.text}
      </Link>
      <Arrow
        width={{ base: '8px', lg: '11px' }}
        height={{ base: '11px', lg: '16px' }}
        color={props.textColor ? props.textColor : 'green.550'}
      />
    </Flex>
  )
}
