import { Box, Flex, Text, FlexProps, Link } from '@chakra-ui/react'
import Arrow from '@components/Arrow'
import useMobile from 'hooks/useMobile'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { CategoryContext } from '..'
import CompletedTitle from '@components/CompletedTitle'

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
    w="100%"
    pb={{ base: '58px', lg: '0' }} 
    {...rest}
  >
      
      <Flex
        align="center"
        justify={{ base: 'center', lg: 'space-between' }}
        pl={{ lg: '110px' }}
        pr={{ lg: '115px' }}
        
      
      >
        {title ? (
          <CompletedTitle
            titleString={title}
            textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            alignSelf={{
              base: 'flex-start',
              sm: 'flex-start',
              lg: 'flex-start',
              xl: 'flex-start'
            }}
        />  
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
      cursor="pointer"
      //bg="black"
    >
      <Link
        letterSpacing="-0.4px"
        fontSize={{
          base: '16px',
          md: '12px',
          lg: '14px',
          xl: '14px',
          '2xl': '16px'
        }}
        color={props.textColor ? props.textColor : 'green.550'}
        whiteSpace="nowrap"
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
