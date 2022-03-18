import { Box, Flex, Text, FlexProps, Link } from '@chakra-ui/react'
import Arrow from '@components/Arrow'
import useMobile from 'hooks/useMobile'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { CategoryContext } from '..'

interface SectionProps extends FlexProps {
  title?: string
  seeMore?: SeeMoreProps
}

export const Section = (props: SectionProps) => {
  const { title, seeMore, children, ...rest } = props

  return (
    <Flex 
      // bg="tomato"
      direction="column" 
      pb={{ base: '58px', lg: '0' }} 
      {...rest}>
      <Flex
        align="center"
        justify={{ base: 'center', lg: 'space-between' }}
        pl={{ lg: '110px' }}
        pr={{ lg: '115px' }}
        w="100%"
      >
        {title ? (
          <Flex
            data-testid="section-title"
            gap="30px"
            direction="column"
            align={{ base: 'center', lg: 'flex-start' }}
          >
            <Text
              as="h2"
              fontWeight="bold"
              fontSize={{ base: '42px', lg: '50px' }}
              letterSpacing="-1px"
              color="green.800"
            >
              {title}
            </Text>

            <Box border="3px solid" borderColor="green.600" w="87px" />
          </Flex>
        ) : (
          <Box />
        )}

        {seeMore && (
          <Box display={{ base: 'none', lg: 'block' }}>
            <SeeMore {...seeMore} />
          </Box>
        )}
      </Flex>

      {children}

      {seeMore && (
        <Flex
          display={{ base: 'flex', lg: 'none' }}
          pt="19px"
          w="100%"
          justify="flex-end"
        >
          <SeeMore {...seeMore} />
        </Flex>
      )}
    </Flex>
  )
}

type SeeMoreProps = {
  text?: string
  link?: string
  onClick?: () => void
  textColor?: string
}

const SeeMore = (props: SeeMoreProps) => {
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
      marginRight={{ base: '22px', md: '30px', lg: '-65px', xl: '-18px' }}
      marginTop={{ base: '15px', md: '10px', lg: '20px' , xl: '25px' }}
      // bg="black"
    >
      <Link
        letterSpacing="-0.4px"
        fontSize={{ base: '16px', lg: '20px' }}
        color={props.textColor ? props.textColor : 'green.500'}
      >
        {props?.text}
      </Link>
      <Arrow
        width={{ base: '8px', lg: '11px' }}
        height={{ base: '11px', lg: '16px' }}
        color={props.textColor ? props.textColor : 'green.500'}
      />
    </Flex>
  )
}
