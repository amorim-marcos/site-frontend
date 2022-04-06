import { Flex, Box, Text } from '@chakra-ui/react'

import { FacebookShareButton, TwitterShareButton } from 'react-share'
import parser from 'react-html-parser'

import CompletedTitle from '@components/CompletedTitle'
import { CalendarIcon, SocialIcon, Arrow } from '@components/Icons'

import { Category } from 'types/data/Post'
import { smartDate } from 'utils/utils'

import { colors } from '../../theme/colors'
import { Wrapper } from './styles'
import { useRouter } from 'next/router'

export type PostBodyProps = {
  category?: Category
  publishDate?: string | Date
  postTitle?: string
  postContent?: string
  tags?: {
    name: string
  }[]
  postSlug: string
}
export const PostBody = ({
  category,
  publishDate,
  postTitle,
  postContent,
  tags,
  postSlug
}: PostBodyProps) => {
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
        justifyContent="space-between"
      >
        <Flex
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          w="100%"
        >
          {/* Social Media */}
          <Flex
            marginX={{ base: '0', md: '2%' }}
            flexDirection={{ base: 'row', md: 'column' }}
            gap={{ base: '10px', lg: '0px' }}
          >
            <FacebookShareButton
              url={`https://www.berneck.com.br/canal-bnk/${category?.id}/${postSlug}`}
              quote={postTitle}
            >
              <SocialIcon
                media="facebook"
                marginY={{ base: '20%', md: '40%' }}
                color="brown.350"
                width={{ base: '45px', md: '40px' }}
                marginRight={{ base: '15%' }}
                hoverColor={category?.color}
              />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://www.berneck.com.br/canal-bnk/${category?.id}/${postSlug}`}
            >
              <SocialIcon
                media="twitter"
                marginY={{ base: '20%', md: '40%' }}
                color="brown.350"
                width={{ base: '45px', md: '40px' }}
                hoverColor={category?.color}
              />
            </TwitterShareButton>
          </Flex>
          {/* End Social media */}

          {/* Title and category */}
          <Flex
            maxWidth={{ base: '100%' }}
            width="70%"
            flexDirection="column"
            paddingLeft={{ base: '0', md: '3%' }}
          >
            <Flex marginBottom={{ base: '15px', md: '0' }} alignItems="center">
              <Arrow width="10px" color={category?.color} />
              <Text marginLeft={'2%'} variant="body">
                {category?.name}
              </Text>
            </Flex>
            <CompletedTitle
              titleString={postTitle}
              textAlign="left"
              alignSelf="left"
              boxColorBottom={category?.color}
              titleFontSize={{ base: '24px', md: '30px', lg: '37px' }}
              titleColor={colors.green[900]}
              titleLineHeight="1.3"
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
          <CalendarIcon
            width={'30px'}
            marginRight="15px"
            stroke1={category?.color}
          />
          <Text color="gray.350" variant="body">
            {smartDate(publishDate, 'PT-BR')}
          </Text>
        </Flex>
        {/* End of date publish */}
      </Flex>
      {/* End of post header */}

      {/* Post content */}
      <Box
        marginTop="3%"
        w={{ base: '100%', md: '80%', xl: '60%' }}
        marginLeft={{ base: '0', md: '12%', xl: '10%' }}
      >
        <Wrapper>{postContent && parser(postContent)}</Wrapper>
      </Box>
      {/* End of post content */}

      {/* Tags sections */}
      <Flex
        marginY="3%"
        w={{ base: '100%', md: '80%', xl: '50%' }}
        marginLeft={{ base: '0', md: '12%', xl: '10%' }}
        wrap="wrap"
      >
        {tags &&
          tags.map((item, i) => (
            <TagItem key={i} tag={item.name} hoverColor={category?.color} />
          ))}
      </Flex>

      {/* End of tags section */}
    </Flex>
  )
}

export const TagItem = ({
  tag = 'tag',
  hoverColor
}: {
  tag: string
  hoverColor?: string
}) => {
  const router = useRouter()
  return (
    <Box
      marginRight="2%"
      marginBottom="3%"
      padding="2%"
      bg="white.100"
      borderRadius="20px"
      cursor={'pointer'}
      onClick={() => router.push(`/canal-bnk/tags?_tag=${tag}`)}
    >
      <Text
        userSelect="none"
        variant={'body'}
        color={'brown.350'}
        _hover={{ color: hoverColor }}
      >
        {tag}
      </Text>
    </Box>
  )
}
