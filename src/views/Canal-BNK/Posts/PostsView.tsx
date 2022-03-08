// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { Flex, Image, Text } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import PostBody from '@components/PostBody'
import {
  PostRelationalContent,
  PostRelationalContentProps
} from '@components/PostRelationalContent/PostRelationalContent'
import React, { useState } from 'react'

import { PostBodyProps } from '@components/PostBody/PostBody'

export type PostViewProps = {
  postBody?: PostBodyProps
  relationalContent: PostRelationalContentProps
  coverImageUrl: string
}

export const PostsView = ({
  postBody,
  relationalContent,
  coverImageUrl
}: PostViewProps) => {
  console.log(postBody)
  return (
    <>
      <Pagebar
        paths={[
          {
            title: 'Canal BNK',
            url: '/'
          },
          {
            title: 'Mundo Berneck',
            url: '/'
          },
          {
            title: 'BERNECK® é destaque no prêmio Valor 1000',
            url: '/'
          }
        ]}
      />
      <Flex
        flexDirection="column"
        alignItems="center"
        maxWidth="1920px"
        marginX="auto"
        bg="brown.100"
        position="relative"
        overflow="hidden"
      >
        {/* Header Image */}
        <Image
          zIndex="docked"
          height={{
            base: '320px',
            sm: '300px',
            md: '349px',
            lg: '439px',
            xl: '529px',
            '2xl': '664px'
          }}
          bg="black"
          w={{
            base: '100vw',

            md: '758px',
            lg: '1014px',
            xl: '1270px',
            '2xl': '1526px'
          }}
          objectFit="cover"
          src={coverImageUrl}
        />
        {/* Header Image end */}

        {/* Grafisms */}
        <Image
          src="/img/grafismo_direita_post.svg"
          right={{ base: '65%', md: '-9%' }}
          top={{ base: '-200px', sm: '-240px', md: '-5%' }}
          position="absolute"
          zIndex={{ base: 'docked', md: 'base' }}
          width={{ base: '590px', md: '43vw' }}
          maxWidth="825px"
        />
        <Image
          src="/img/grafismo_superior_post.svg"
          zIndex="docked"
          position="absolute"
          top={{ base: '5%', xl: '10%', '2xl': '15%' }}
          right="5%"
          width={'20vw'}
          maxWidth={'384px'}
          display={{ base: 'none', md: 'block' }}
        />
        <Image
          src="/img/grafismo_esquerda_post.svg"
          left={{ base: '85%', md: '0' }}
          transform={{ base: 'rotate(180deg)', md: '' }}
          top={{ base: '2%', md: '5%', xl: '10%', '2xl': '15%' }}
          position="absolute"
          width={{ base: '25vw', md: '12vw' }}
          maxWidth="230px"
          zIndex={{ base: 'docked', md: 'base' }}
        />
        {/* End of Grafisms */}

        {/* Post body section */}
        <PostBody {...postBody} />
        {/* End of post body section */}

        {/* Relational content */}
        <PostRelationalContent {...relationalContent} />
        {/* End od relational content */}
      </Flex>
    </>
  )
}
