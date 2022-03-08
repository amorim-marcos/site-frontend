/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { Box, Flex, Link, Text, Image, LinkProps } from '@chakra-ui/react'

export type EnvProps = LinkProps & {
  title: string
  place: string
  image_url: string
}

export const Env = ({ title, place, image_url, ...props }: EnvProps) => {
  return (
    <Link {...props}>
      <Flex
        direction="column"
        width={{
          base: '184px',
          xs: '367px',
          sm: '508px',
          md: '367px',
          '2xl': '508px'
        }}
      >
        <Box
          overflow="hidden"
          width={{
            base: '184px',
            xs: '367px',
            sm: '508px',
            md: '367px',
            '2xl': '508px'
          }}
          height={{
            base: '137px',
            xs: '274px',
            sm: '369px',
            md: '274px',
            '2xl': '369px'
          }}
        >
          <Image
            objectFit="cover"
            objectPosition="center"
            width="100%"
            height="100%"
            overflow="hidden"
            flex={1}
            src={image_url}
          />
        </Box>
        <Text
          width="100%"
          flex={1}
          fontSize={{ base: '23px', lg: '31px' }}
          variant={'body-bold' as any}
        >
          {title}
        </Text>
        <Text width="100%" flex={1} fontSize={{ base: '17px', lg: '20px' }}>
          {place}
        </Text>
      </Flex>
    </Link>
  )
}
