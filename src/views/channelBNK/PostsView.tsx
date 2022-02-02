// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { Flex, Box, Image, Text } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import PostBody from '@components/PostBody'
import PostRelationalContent from '@components/PostRelationalContent'
import React, { useState } from 'react'
import parser from 'react-html-parser'

export const PostsView = () => {
  const [data, setData] = useState(
    '<h1>Hello</h1><script>console.log("AAAAA"); alert("Deu ruim")</script>'
  )

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
            sm: '259px',
            md: '349px',
            lg: '439px',
            xl: '529px',
            '2xl': '664px'
          }}
          bg="black"
          w={{
            base: '320px',
            sm: '558px',
            md: '758px',
            lg: '1014px',
            xl: '1270px',
            '2xl': '1526px'
          }}
          objectFit="cover"
          src="/img/post_cover.png"
        />
        {/* Header Image end */}

        {/* Grafisms */}
        <Image
          src="/img/grafismo_direita_post.svg"
          right="-9%"
          top="-5%"
          position="absolute"
          zIndex="base"
          width="43vw"
          maxWidth="825px"
        />
        <Image
          src="/img/grafismo_superior_post.svg"
          zIndex="docked"
          position="absolute"
          top={{ base: '5%', xl: '10%', '2xl': '15%' }}
          right="5%"
          width="20vw"
          maxWidth="384px"
        />
        <Image
          src="/img/grafismo_esquerda_post.svg"
          left="0"
          top={{ base: '5%', xl: '10%', '2xl': '15%' }}
          position="absolute"
          width="12vw"
          maxWidth="230px"
        />
        {/* End of Grafisms */}

        {/* Post body section */}
        <PostBody />
        {/* End of post body section */}

        {/* Relational content */}
        <PostRelationalContent />
        {/* End od relational content */}
      </Flex>
    </>
  )
}
