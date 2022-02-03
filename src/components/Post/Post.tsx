import { useRouter } from 'next/router'

import { Flex, Box, Text, Link, FlexProps, TextProps } from '@chakra-ui/react'

import { Arrow, CalendarIcon, SocialIcon } from '@components/Icons'

import { Post as IPost } from 'types/data'
import { CategoryLabel } from 'types/data/Post'

export const PANEL_COLOR = {
  all: 'white',
  inspiration: '#F0E4D1',
  feedstock: '#D6DCD5',
  world: '#89BA81'
}

export const ACCENT_COLOR = {
  inspiration: '#E0CBA5',
  feedstock: '#B9C3B8',
  world: '#429C2E'
}

export interface PostProps extends FlexProps {
  post?: IPost
  categoryPage?: CategoryLabel
  showDate?: boolean
  showPreview?: boolean
  showShareOptions?: boolean
  imgPos?: 'top' | 'left' | 'right' | 'bottom'
  titleTextProps?: TextProps
  previewTextProps?: TextProps
  categoryTextProps?: TextProps
}

const getAccentColor = (categoryName?: string) => {
  return categoryName === 'INSPIRAÇÃO SOB MEDIDA'
    ? ACCENT_COLOR['inspiration']
    : categoryName === 'MATÉRIA-PRIMA: CONHECIMENTO'
    ? ACCENT_COLOR['feedstock']
    : ACCENT_COLOR['world']
}

export const Post = (props: PostProps) => {
  const router = useRouter()

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
    if (categoryPage === 'all') return getAccentColor(post?.Category.Name)
    else
      return categoryPage === 'inspiration'
        ? 'brown.200'
        : categoryPage === 'feedstock'
        ? 'white'
        : 'green.900'
  }

  const getCalendarColor = () => {
    if (categoryPage === 'all') return getAccentColor(post?.Category.Name)
    else return categoryPage === 'world' ? 'white' : '#595959'
  }

  const getHoverIndicatorColor = () => {
    if (categoryPage === 'all') return getAccentColor(post?.Category.Name)
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
      onClick={() => router.push(`/${post?.Category.Name}/${post?.Title}`)}
      {...rest}
    >
      <Box
        w={imgPos === 'top' || imgPos === 'bottom' ? '100%' : '40%'}
        h="100%"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage={`url(${post?.Cover})}`}
      />

      <Flex
        w={imgPos === 'top' || imgPos === 'bottom' ? rest.w : '54%'}
        direction="column"
        pos="relative"
        gap="18px"
        pt="21px"
        pl={{ base: '24px', lg: '38px' }}
        pr={{ base: '33px', lg: '29px' }}
        bg={PANEL_COLOR[categoryPage]}
      >
        <Flex align="center" justify="space-between">
          <Flex data-testid="post-category" gap="14px" align="center">
            <Box>
              <Arrow
                color={
                  categoryPage !== 'all'
                    ? 'white'
                    : post?.Category.Name === 'INSPIRAÇÃO SOB MEDIDA'
                    ? PANEL_COLOR['inspiration']
                    : post?.Category.Name === 'MATÉRIA-PRIMA: CONHECIMENTO'
                    ? PANEL_COLOR['feedstock']
                    : PANEL_COLOR['world']
                }
                width={{ base: '7px', lg: '9px' }}
                height={{ base: '10px', lg: '13px' }}
              />
            </Box>

            <Text
              as="h2"
              w="100%"
              whiteSpace="normal"
              color={categoryPage === 'world' ? 'white' : 'grey.350'}
              fontSize={{ base: '10px', lg: '14px', xl: '10px', '2xl': '14px' }}
              letterSpacing={
                imgPos === 'top' || imgPos === 'bottom' ? '2.4px' : '2.1px'
              }
              fontWeight="600"
              {...categoryTextProps}
            >
              {post?.Category.Name}
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
                color={categoryPage === 'world' ? 'white' : 'grey.350'}
              >
                {post?.date && new Date(post?.date).toLocaleDateString()}
              </Text>

              <Box pb="3px">
                <CalendarIcon
                  w="29px"
                  h="27px"
                  stroke1={getCalendarColor()}
                  stroke2={categoryPage === 'world' ? 'white' : '#595959'}
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
            {post?.Title}
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
            color={'grey.350'}
            {...previewTextProps}
          >
            {post?.Content}
          </Text>
        )}

        {showShareOptions && (
          <Flex gap="30px" pb="38px">
            <Link onClick={() => alert('/')}>
              <SocialIcon
                media="facebook"
                width="38px"
                height="38px"
                color={categoryPage === 'world' ? 'white' : 'grey.350'}
                hoverColor={getSocialIconHoverColor()}
              />
            </Link>

            <Link onClick={() => alert('/')}>
              <SocialIcon
                media="twitter"
                width="38px"
                height="38px"
                color={categoryPage === 'world' ? 'white' : 'grey.350'}
                hoverColor={getSocialIconHoverColor()}
              />
            </Link>

            <Link onClick={() => alert('/')}>
              <SocialIcon
                media="whatsapp"
                width="38px"
                height="38px"
                color={categoryPage === 'world' ? 'white' : 'grey.350'}
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
