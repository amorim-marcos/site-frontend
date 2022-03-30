import React from 'react'

import { Flex, Link, Text, Image, LinkProps } from '@chakra-ui/react'

export type EnvProps = LinkProps & {
  title: string
  place: string
  image_url: string
  others?: boolean
}

export const Env = ({
  title,
  place,
  image_url,
  others,
  ...props
}: EnvProps) => {
  return (
    <Link {...props} _hover={{ outline: 'none' }}>
      <Flex direction="column" role="group">
        <Flex
          flex={'1'}
          height={{ base: '100%' }}
          maxHeight={{
            base: others ? '150px' : '100px',
            sm: '300px',
            md: '220px',
            xl: others ? '180px' : '220px',
            '2xl': others ? '200px' : '300px'
          }}
          maxWidth={{
            base: '300px',
            sm: '500px',
            md: others ? '400px' : '600px'
          }}
          transition="all 0.3s ease-in-out"
          _groupHover={{
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          <Image objectFit="cover" objectPosition="center" src={image_url} />
        </Flex>

        <Flex
          flex={'1'}
          direction="column"
          maxWidth={{
            base: '300px',
            sm: '500px',
            md: others ? '400px' : '600px'
          }}
          margin={{ base: '2% 0% 1% 0%', sm: '2% 0% 1% 0%', md: '2% 0% 1% 0%' }}
        >
          <Flex flex={'2'}>
            <Text as={'h4'} variant={'h4'} fontWeight="bold" color={'gray.300'}>
              {title}
            </Text>
          </Flex>

          <Flex flex={'1'}>
            <Text
              as={'h5'}
              variant={'h5'}
              fontWeight="medium"
              color={'gray.300'}
            >
              {place}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  )
}
