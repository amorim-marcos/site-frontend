/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { Flex, Link, Text, LinkProps } from '@chakra-ui/react'

import BpPatternImage from '@components/BpPatternImage'

export type BPProps = LinkProps & {
  id: any
  name: string
  product_texture: string
  pattern_image: string
  url_code: string
}

export const BP = ({
  name,
  product_texture,
  pattern_image,
  ...props
}: BPProps) => {
  return (
    <Link {...props}>
      <Flex direction="column">
        <BpPatternImage flex={1} image_url={pattern_image} />
        <Text
          flex={1}
          fontSize={{ base: '20px', '2xl': '31px' }}
          variant={'body-bold' as any}
        >
          {name}
        </Text>
        <Text flex={1} fontSize={{ base: '15px', '2xl': '28px' }}>
          {product_texture}
        </Text>
      </Flex>
    </Link>
  )
}
