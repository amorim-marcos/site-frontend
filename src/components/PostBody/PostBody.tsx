import { Flex, Box, Text, Image } from '@chakra-ui/react'
import CompletedTitle from '@components/CompletedTitle'
import { SocialIcon } from '@components/Icons'
import ArrowIcon from '@components/Icons/ArrowIcon'
import { useEffect, useState } from 'react'
import parser from 'react-html-parser'
import { Wrapper } from './styles'
import DOMPurify from 'dompurify'

export type PostBodyProps = {
  category?: string
  publishDate?: string
  postTitle?: string
  postContent?: string
}
export const PostBody = ({
  category,
  publishDate,
  postTitle,
  postContent
}: PostBodyProps) => {
  const [content, setContent] = useState('<h1>Hello world</h1>')
  useEffect(() => {
    if (!!postContent && postContent?.length > 0) {
      const dirty = postContent?.replace(
        '/uploads',
        `${process.env.NEXT_PUBLIC_API_URL}/uploads`
      )
      const clean = DOMPurify.sanitize(dirty)
      setContent(clean)
    }
  }, [postContent])
  return (
    <Flex
      flexDirection="column"
      w="100%"
      maxWidth={{
        base: '90%',

        md: '758px',
        lg: '1014px',
        xl: '1270px',
        '2xl': '1526px'
      }}
      zIndex="docked"
      paddingTop={{ base: '8%', md: '0' }}
    >
      {/* Post body header */}
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        marginTop="3%"
        w="100%"
        alignItems={'center'}
        position={'relative'}
      >
        <Flex
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          {/* Social Media */}
          <Flex
            marginX={{ base: '0', md: '2%' }}
            flexDirection={{ base: 'row', md: 'column' }}
          >
            <SocialIcon
              media="facebook"
              marginY={{ base: '20%', md: '40%' }}
              color="brown.350"
              width={{ base: '70px', md: '40px' }}
              marginRight={{ base: '15%' }}
            />
            <SocialIcon
              media="twitter"
              marginY={{ base: '20%', md: '40%' }}
              color="brown.350"
              width={{ base: '70px', md: '40px' }}
            />
          </Flex>
          {/* End Social media */}

          {/* Title and category */}
          <Flex
            maxWidth={{ base: '100%' }}
            flexDirection="column"
            paddingLeft={{ base: '0', md: '3%' }}
          >
            <Flex marginBottom={{ base: '15px', md: '0' }} alignItems="center">
              <ArrowIcon width="10px" stroke="green.600" />
              <Text marginLeft={'2%'} variant={'body' as any}>
                {category}
              </Text>
            </Flex>
            <CompletedTitle
              titleString={postTitle}
              textAlign="left"
              alignSelf="left"
            />
          </Flex>
          {/* End of title and category */}
        </Flex>

        {/* Date publish */}
        <Flex
          position={{ base: 'absolute', md: 'relative' }}
          paddingX="3%"
          h="50px"
          alignItems="center"
          bottom={{ base: '8%', md: '0' }}
          right={{ base: '0', md: '0' }}
        >
          <Image
            marginRight="15px"
            src="/img/calendario.png"
            w="30px"
            height="30px"
          />
          <Text color="grey.350" variant={'body' as any}>
            {publishDate}
          </Text>
        </Flex>
        {/* End of date publish */}
      </Flex>
      {/* End of post header */}

      {/* Post content */}
      <Box
        marginTop="3%"
        w={{ base: '100%', md: '80%', xl: '50%' }}
        marginLeft={{ base: '0', md: '12%', xl: '10%' }}
      >
        <Wrapper>{content && parser(content)}</Wrapper>
      </Box>
      {/* End of post content */}

      {/* Tags sections */}
      <Flex
        marginY="3%"
        w={{ base: '100%', md: '80%', xl: '50%' }}
        marginLeft={{ base: '0', md: '12%', xl: '10%' }}
        wrap="wrap"
      >
        <TagItem tag="materiais de construção" />
        <TagItem tag="decoração" />
        <TagItem tag="nova fábrica" />
        <TagItem tag="painéis de madeira" />
        <TagItem tag="valor 1000" />
        <TagItem tag="valor econômico" />
      </Flex>

      {/* End of tags section */}
    </Flex>
  )
}

export const TagItem = ({ tag = 'tag' }) => {
  return (
    <Box
      marginRight="2%"
      marginBottom="3%"
      padding="2%"
      bg="white.100"
      borderRadius="20px"
    >
      <Text variant={'body' as any}>{tag}</Text>
    </Box>
  )
}
