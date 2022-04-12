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
         <Text as={'h4'} variant={'h4'} fontWeight="bold" color={'gray.300'}>
          {name}
        </Text>
        <Text
              as={'h5'}
              variant={'h5'}
              fontWeight="medium"
              color={'gray.300'}
            >
          {product_texture}
        </Text>
      </Flex>
    </Link>
  )
}
