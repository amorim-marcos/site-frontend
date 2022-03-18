import { Flex, Box, Text, Image } from '@chakra-ui/react'
import CompletedTitle from '@components/CompletedTitle'
import { CalendarIcon, SocialIcon } from '@components/Icons'
import ArrowIcon from '@components/Icons/ArrowIcon'
import { useState } from 'react'
import parser from 'react-html-parser'
import { Wrapper } from './styles'
import { colors } from '../../theme/colors'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import { Category } from 'types/data/Post'
import { smartDate } from 'utils/utils'

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
          >
            <FacebookShareButton
              url={
                process.env.NEXT_PUBLIC_APP_URL +
                `/canal-bnk/${category?.id}/${postSlug}`
              }
              quote={postTitle}
            >
              <SocialIcon
                media="facebook"
                marginY={{ base: '20%', md: '40%' }}
                color="brown.350"
                width={{ base: '70px', md: '40px' }}
                marginRight={{ base: '15%' }}
                hoverColor={category?.color}
              />
            </FacebookShareButton>
            <TwitterShareButton
              url={
                process.env.NEXT_PUBLIC_APP_URL +
                `/canal-bnk/${category?.id}/${postSlug}`
              }
            >
              <SocialIcon
                media="twitter"
                marginY={{ base: '20%', md: '40%' }}
                color="brown.350"
                width={{ base: '70px', md: '40px' }}
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
              <ArrowIcon width="10px" stroke={category?.color} />
              <Text marginLeft={'2%'} variant={'body' as any}>
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
          {/* <Image
            marginRight="15px"
            src="/img/calendario.png"
            w="30px"
            height="30px"
          /> */}
          <CalendarIcon
            width={'30px'}
            marginRight="15px"
            stroke1={category?.color}
          />
          <Text color="gray.350" variant={'body' as any}>
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
          tags.map((item, i) => {
            return <TagItem key={i} tag={item.name} />
          })}
      </Flex>

      {/* End of tags section */}
    </Flex>
  )
}

export const TagItem = ({ tag = 'tag' }) => {
  const [hover, setHover] = useState(false)
  return (
    <Box
      marginRight="2%"
      marginBottom="3%"
      padding="2%"
      bg="white.100"
      borderRadius="20px"
      cursor="pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Text variant={'body' as any} color={hover ? 'green.600' : 'green.900'}>
        {tag}
      </Text>
    </Box>
  )
}
