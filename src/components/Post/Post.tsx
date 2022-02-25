import { useRouter } from 'next/router'

import { Flex, Box, Text, Link, FlexProps, TextProps } from '@chakra-ui/react'

import { Arrow, CalendarIcon, SocialIcon } from '@components/Icons'

import { Post as IPost } from 'types/data'
import { Category } from 'types/data/Post'
import { useContext } from 'react'
import { CategoryContext } from 'views/Canal-BNK'

function getPanelColor(i: number) {
  if (i === 2) {
    return '#89BA81'
  }

  if (i === 0) {
    return '#F0E4D1'
  }

  if (i === 1) {
    return '#D6DCD5'
  }

  return 'white'
}

function getAccentColor(i: number) {
  if (i === 2) {
    return '#429C2E'
  }

  if (i === 0) {
    return '#E0CBA5'
  }

  if (i === 1) {
    return '#B9C3B8'
  }

  return 'white'
}

export interface PostProps extends FlexProps {
  post?: IPost
  categoryPage?: Category
  showDate?: boolean
  showPreview?: boolean
  showShareOptions?: boolean
  imgPos?: 'top' | 'left' | 'right' | 'bottom'
  titleTextProps?: TextProps
  previewTextProps?: TextProps
  categoryTextProps?: TextProps
}

export const Post = (props: PostProps) => {
  const router = useRouter()

  const { currentCategory, categories } = useContext(CategoryContext)

  const {
    post,
    categoryPage = 'all',
    imgPos = 'top',
    showDate,
    showPreview,
    showShareOptions,
    titleTextProps,
    previewTextProps,
    categoryTextProps,
    ...rest
  } = props

  const getSocialIconHoverColor = () => {
    const index = categories.findIndex(
      (item) => item.name === post?.category.name
    )
    if (categoryPage === 'all') return getAccentColor(index)
    else
      return currentCategory === 0
        ? 'brown.200'
        : currentCategory === 1
        ? 'white'
        : 'green.900'
  }

  const getCalendarColor = () => {
    const index = categories.findIndex(
      (item) => item.name === post?.category.name
    )
    if (categoryPage === 'all') return getAccentColor(index)
    else return currentCategory === 2 ? 'white' : '#595959'
  }

  const getHoverIndicatorColor = () => {
    const index = categories.findIndex(
      (item) => item.name === post?.category.name
    )
    if (currentCategory === -1) return getAccentColor(index)
    else return 'white'
  }

  return (
    <Flex
      direction={
        imgPos === 'top'
          ? 'column'
          : imgPos === 'left'
          ? 'row'
          : imgPos === 'right'
          ? 'row-reverse'
          : 'column-reverse'
      }
      role="group"
      onClick={() =>
        router.push(`/canal-bnk/${post?.category.id}/${post?.url_code}`)
      }
      {...rest}
      cursor="pointer"
    >
      <Box
        w={imgPos === 'top' || imgPos === 'bottom' ? '100%' : '40%'}
        h="100%"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage={`url(${post?.cover})}`}
      />

      <Flex
        w={imgPos === 'top' || imgPos === 'bottom' ? rest.w : '54%'}
        direction="column"
        pos="relative"
        gap="18px"
        pt="21px"
        pl={{ base: '24px', lg: '38px' }}
        pr={{ base: '33px', lg: '29px' }}
        bg={getPanelColor(currentCategory)}
      >
        <Flex align="center" justify="space-between">
          <Flex data-testid="post-category" gap="14px" align="center">
            <Box>
              <Arrow
                color={getPanelColor(currentCategory)}
                width={{ base: '7px', lg: '9px' }}
                height={{ base: '10px', lg: '13px' }}
              />
            </Box>

            <Text
              as="h2"
              w="100%"
              whiteSpace="normal"
              color={currentCategory === 2 ? 'white' : 'gray.350'}
              fontSize={{ base: '10px', lg: '14px', xl: '10px', '2xl': '14px' }}
              letterSpacing={
                imgPos === 'top' || imgPos === 'bottom' ? '2.4px' : '2.1px'
              }
              fontWeight="600"
              {...categoryTextProps}
            >
              {post?.category.name}
            </Text>
          </Flex>

          {showDate && (
            <Flex gap="12px" align="center" pr="3px" w="fit-content">
              <Text
                fontSize={{
                  base: '12px',
                  lg: imgPos === 'top' || imgPos === 'bottom' ? '16px' : '14px'
                }}
                letterSpacing={
                  imgPos === 'top' || imgPos === 'bottom' ? '2.4px' : '2.1px'
                }
                fontWeight="mediuem"
                color={currentCategory === 2 ? 'white' : 'gray.350'}
              >
                {post?.date && new Date(post?.date).toLocaleDateString()}
              </Text>

              <Box pb="3px">
                <CalendarIcon
                  w="29px"
                  h="27px"
                  stroke1={getCalendarColor()}
                  stroke2={currentCategory === 2 ? 'white' : '#595959'}
                />
              </Box>
            </Flex>
          )}
        </Flex>

        <Box pb={showShareOptions ? '18px' : '45px'}>
          <Text
            as="h1"
            whiteSpace="normal"
            fontSize={{ base: '17px', lg: '23px', xl: '20px', '2xl': '23px' }}
            fontWeight="bold"
            letterSpacing={
              imgPos === 'top' || imgPos === 'bottom' ? '-0.58px' : '-0.46px'
            }
            color="green.900"
            {...titleTextProps}
          >
            {post?.title}
          </Text>
        </Box>

        {showPreview && (
          <Text
            h="107px"
            mt="-33px"
            lineHeight="35px"
            textOverflow="ellipsis"
            overflow="hidden"
            noOfLines={3}
            fontSize="17px"
            letterSpacing="-0.34px"
            color={'gray.350'}
            {...previewTextProps}
          >
            {post?.content}
          </Text>
        )}

        {showShareOptions && (
          <Flex gap="30px" pb="38px">
            <Link onClick={() => alert('/')}>
              <SocialIcon
                media="facebook"
                width="38px"
                height="38px"
                color={currentCategory === 2 ? 'white' : 'gray.350'}
                hoverColor={getSocialIconHoverColor()}
              />
            </Link>

            <Link onClick={() => alert('/')}>
              <SocialIcon
                media="twitter"
                width="38px"
                height="38px"
                color={currentCategory === 2 ? 'white' : 'gray.350'}
                hoverColor={getSocialIconHoverColor()}
              />
            </Link>

            <Link onClick={() => alert('/')}>
              <SocialIcon
                media="whatsapp"
                width="38px"
                height="38px"
                color={currentCategory === 2 ? 'white' : 'gray.350'}
                hoverColor={getSocialIconHoverColor()}
              />
            </Link>
          </Flex>
        )}

        <Box
          data-testid="post-hover-indicator"
          h="6px"
          left="38px"
          pos="absolute"
          bg={getHoverIndicatorColor()}
          w={imgPos === 'left' || imgPos === 'right' ? '50%' : '20%'}
          bottom={imgPos !== 'bottom' ? '-3px' : 'calc(100% - 3px)'}
          transition={`all 0.3s ease-in-out`}
          _groupHover={{
            w: imgPos === 'left' || imgPos === 'right' ? '82%' : '46%'
          }}
        />
      </Flex>
    </Flex>
  )
}
