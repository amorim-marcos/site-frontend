// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { Flex, Image, Box } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import PostBody from '@components/PostBody'
import {
  PostRelationalContent,
  PostRelationalContentProps
} from '@components/PostRelationalContent/PostRelationalContent'
import React, { useState } from 'react'

import { PostBodyProps } from '@components/PostBody/PostBody'
import { Category } from 'types/data/Post'
import { useTranslation } from 'react-i18next'

export type PostViewProps = {
  postBody: PostBodyProps
  relationalContent: PostRelationalContentProps
  coverImageUrl: string
  backgroundColor: string
  postCategory: Category
}

export const PostsView = ({
  postBody,
  relationalContent,
  coverImageUrl,
  backgroundColor,
  postCategory
}: PostViewProps) => {
  const channelBnkLabels = useTranslation('channelBnkView')

  return (
    <>
      <Box>
        <Pagebar
          paths={[
            {
              title: channelBnkLabels.t('postsView.pagebar.channelBnk'),
              url: '/bnk-channel'
            },
            {
              title: postCategory.name,
              url: `/bnk-channel/${postCategory.id}`
            }
          ]}
          disconsiderCurrentPage={false}
        />

        <Box bg={backgroundColor} overflow="hidden">
          <Flex
            flexDirection="column"
            alignItems="center"
            maxWidth="1536px"
            marginX="auto"
            bg={backgroundColor}
            position="relative"
            // overflow="hidden"
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
              right={{ base: '65%', md: '-20%' }}
              top={{ base: '-0.3%' }}
              position="absolute"
              zIndex={{ base: 'docked', md: 'base' }}
              width={{ base: '590px', md: '30vw', '2xl': '43vw' }}
              maxWidth="825px"
              display={{ base: 'none', md: 'block' }}
            />
            <Image
              src="/img/grafismo_superior_post.svg"
              zIndex="docked"
              position="absolute"
              top={{ base: '2%', md: '3%', '2xl': '5%' }}
              right="-3%"
              width={{ base: '40vw', sm: '30vw', md: '20vw' }}
              maxWidth={'384px'}
              // display={{ base: 'none', md: 'block' }}
            />
            <Image
              src="/img/grafismo_esquerda_post.svg"
              left={{ base: '0', '2xl': '-13%' }}
              // transform={{ base: 'rotate(180deg)', md: '' }}
              top={{ base: '0', md: '2%' }}
              position="absolute"
              width={{ base: '22vw', md: '11vw' }}
              maxWidth="230px"
              zIndex={{ base: 'docked' }}
              opacity={{ base: '0.7', md: '1' }}
            />
            {/* End of Grafisms */}

            {/* Post body section */}
            <PostBody {...postBody} />
            {/* End of post body section */}
          </Flex>
        </Box>
        <Flex flex="1" bg="brown.150" justifyContent={'center'}>
          {/* Relational content */}
          <PostRelationalContent {...relationalContent} />
          {/* End od relational content */}
        </Flex>
      </Box>
    </>
  )
}
