// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { Flex, Box, Image, Text } from '@chakra-ui/react'
import PostBody from '@components/PostBody'
import React, { useEffect, useRef, useState } from 'react'
import parser from 'react-html-parser'

const createMarkup = (data: string) => {
  return { __html: data }
}

export const PostsView = () => {
  const [data, setData] = useState(
    '<h1>Hello</h1><script>console.log("AAAAA"); alert("Deu ruim")</script>'
  )

  return (
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
      <Box zIndex="docked" height="674px" bg="black" w="1536px">
        <h1>Image</h1>
      </Box>
      {/* Header Image end */}

      {/* Grafisms */}
      <Image
        src="/img/grafismo_direita_post.svg"
        right="-9%"
        top="-5%"
        position="absolute"
        zIndex="base"
      />
      <Image
        src="/img/grafismo_superior_post.svg"
        zIndex="docked"
        position="absolute"
        top="15%"
        right="5%"
      />
      <Image
        src="/img/grafismo_esquerda_post.svg"
        left="0"
        top="15%"
        position="absolute"
      />
      {/* End of Grafisms */}

      {/* Post body section */}
      <PostBody />
      {/* End of post body section */}

      {/* Relational content */}
      {/* End od relational content */}
    </Flex>
  )
}
