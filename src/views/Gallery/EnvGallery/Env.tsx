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
      >
        <Flex
          flex={"1"}
          bg="grey"
          height={{ base: '100%', sm: '100%' , lg: '100%' }}
          maxHeight={{ base: '150px', sm: '300px' , md: '220px', '2xl': '350px' }}
          maxWidth={{ base: '300px', sm: '500px', md: '600px' }}
        >
          <Image
            objectFit="cover"
            objectPosition="center"
            src={image_url}
          />
        </Flex>
       
        <Flex
          flex={"1"}
          // bg="azure"
          direction="column"
          maxWidth={{ base: '300px', sm: '500px', md: '600px' }}
          margin={{ base: "3% 3% 1% 3%", sm: '3% 3% 1% 3%', md: '3% 3% 1% 3%' }}
        >
          <Flex
            // bg="blue"
            flex={"2"}
          >
            <Text as={'h2'}
              fontWeight = 'bold'
              color={"gray.300"}
            >
              {title}
            </Text>
           </Flex>

          <Flex
            // bg="yellow"
            flex={"1"}
          >
            <Text as={'h3'}
              fontWeight = 'medium'
              color={"gray.300"}
            >
              {place}
            </Text>
          </Flex>

        </Flex>

      </Flex>

    </Link>
  )
}
