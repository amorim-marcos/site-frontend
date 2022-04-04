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
    <Link {...props} _hover={{ outline: 'none' }}>
      <Flex direction="column">
        <BpPatternImage
          flex={1}
          image_url={pattern_image}
          transition="all 0.3s ease-in-out"
          _hover={{
            boxShadow: '0 3px 10px 4px rgb(0 0 0 / 0.25)',
            transform: 'scale(1.01)'
          }}
        />
        <Text
          pt="13px"
          flex={1}
          fontSize={{
            base: '20px',
            sm: '24px',
            md: '28px',
            lg: '25px',
            xl: '26px',
            '2xl': '28px'
          }}
          variant={'body-bold' as any}
        >
          {name}
        </Text>
        <Text flex={1} fontSize={{ base: '15px', '2xl': '20px' }}>
          {product_texture}
        </Text>
      </Flex>
    </Link>
  )
}
