import {
  Heading,
  Flex,
  Box,
  Text,
  Center,
  Image,
  FlexProps
} from '@chakra-ui/react'
import GrafismLeft from '@components/GrafismLeft'
import Link from 'next/link'
import React, { ReactNode } from 'react'

export type PatternInfoProps = FlexProps & {
  title?: string
  description?: string
  icon?: ReactNode
  onClick?: () => void
  linkTo?: string
}
export const PatternInfo = ({
  title = '',
  description = '',
  icon = '',
  onClick,
  linkTo,
  ...props
}: PatternInfoProps) => {
  return (
    <Link href={linkTo ?? ''}>
      <a>
        <Flex
          data-testid="pattern-info-box"
          align="center"
          bg="green.800"
          // bg="red.800"
          cursor="pointer"
          pos="relative"
          zIndex="base"
          onClick={onClick}
          _hover={{
            filter: 'brightness(1.2)'
          }}
          overflowY="hidden"
          overflowX="hidden"
          padding={{ base: '5%', sm: '5%', lg: '8%', xl: '0' }}
          w={'100%'}
          {...props}
        >
          <Box position={'absolute'} zIndex="base" left="-50px" top="-70px">
            <Image src="/img/grafismo_banner_1.svg" />
          </Box>

          <Flex
            zIndex={10}
            padding={{ base: '1%', sm: '1%', lg: '2%', xl: '5%' }}
            // bg="gray"
            flex="1"
            justifyContent={'center'}
          >
            {icon}
          </Flex>

          <Flex
            zIndex={10}
            padding={{ base: '4%', sm: '1%', lg: '2%', xl: '1%' }}
            // bg="blue"
            flex="4"
            direction={{
              base: 'column',
              sm: 'column',
              lg: 'column',
              xl: 'column'
            }}
          >
            <Flex
              // bg="pink"
              flex="1"
            >
              <Text
                as="h4"
                variant={'h4' as any}
                fontWeight="medium"
                letterSpacing="-0.45px"
                color="green.600"
              >
                {title}
              </Text>
            </Flex>
            <Flex
              // bg="white"
              flex="1"
            >
              <Text
                as="h2"
                variant={'h2' as any}
                fontWeight="extrabold"
                letterSpacing="-0.68px"
                color="white"
              >
                {description}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </a>
    </Link>
  )
}
