import { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import { Flex, Box, Text, FlexProps, Image } from '@chakra-ui/react'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import parser from 'react-html-parser'

import { Arrow, CalendarIcon, SocialIcon } from '@components/Icons'
import { CategoryContext } from 'views/Canal-BNK'

import { Post as IPost } from 'types/data'
import { smartDate } from 'utils/utils'

function getPanelColor(i: number) {
  return i <= 2 && i >= 0 ? ['#F0E4D1', '#D6DCD5', '#89BA81'][i] : 'white'
}

function getAccentColor(i: number) {
  return i <= 3 && i >= 0
    ? ['#E0CBA5', '#B9C3B8', '#429C2E', '#59993F'][i]
    : 'white'
}

export interface PostProps extends FlexProps {
  post?: IPost
  showDate?: boolean
  showContent?: boolean
  showShareOptions?: boolean
  imgPos?: 'top' | 'left' | 'right' | 'bottom'
}

export const Post = (props: PostProps) => {
  const router = useRouter()
  const [mouseDown, setMouseDown] = useState(false)

  const { currentCategory, categories } = useContext(CategoryContext)

  const {
    post,
    imgPos = 'top',
    showDate,
    showShareOptions,
    showContent,
    ...rest
  } = props

  const getSocialIconHoverColor = () => {
    const index = categories.findIndex(
      (item) => item.name === post?.category.name
    )

    return getAccentColor(index)
  }

  const getHoverIndicatorColor = () => {
    const index = categories.findIndex(
      (item) => item.name === post?.category.name
    )

    return currentCategory === -1 ? getAccentColor(index) : 'white'
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
        router.push(`/bnk-channel/${post?.category.id}/${post?.url_code}`)
      }
      cursor="pointer"
      bg={getPanelColor(currentCategory)}
      margin={{
        base: '5%',
        md: '3%',
        lg: '3.5%',
        xl: '4.2%',
        '2xl': showDate ? '5% 2% 0% 0%' : '0% 2% 0% 0%'
      }}
      // w={{ base: '90%', '2xl': showDate ? '70%' : '85%' }}
      onMouseEnter={() => setMouseDown(true)}
      onMouseLeave={() => setMouseDown(false)}
      {...rest}
    >
      {/* box imagem cover */}
      <Flex
        flex="10"
        marginX="auto"
        position="relative"
        zIndex="base"
        align="flex-start"
        justify="center"
        overflow="hidden"
        bg={getPanelColor(currentCategory)}
      >
        <Image
          src={post?.cover}
          objectFit="cover"
          h="auto"
          w="100%"
          alt={post?.cover_img?.alternativeText}
        />
      </Flex>

      {/* box content */}
      <Flex direction="column" flex="1">
        <Flex
          flex="1"
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'start', md: 'end' }}
          alignContent={{ base: 'start', md: 'end' }}
          // bg="red"
        >
          <Flex
            data-testid="post-category"
            margin={{
              base: '8px 0px 5px 10px',
              lg: '16px 0px 7px 20px',
              xl: '20px 0px 10px 25px'
            }}
            align="start"
            flex="1"
            gap="14px"
            // bg="black"
          >
            <Arrow
              color={getHoverIndicatorColor()}
              width={{
                base: '8px',
                md: '9px',
                lg: '9px',
                xl: '10px'
              }}
            />

            <Text
              as="h5"
              variant="h5"
              textColor={'black'}
              letterSpacing={{
                base: '2px',
                xl: '3px'
              }}
              fontSize={{ base: '11px', sm: '12px', lg: '13px', xl: '13px' }}
              marginLeft={{ base: '5px', lg: '5px' }}
              marginTop={{ base: '-2px', lg: '-3px' }}
            >
              {post?.category.name}
            </Text>
          </Flex>

          {/* showDate at list */}
          {showDate && (
            <Flex
              gap="12px"
              align="center"
              justifyContent={{ base: 'center', md: 'end' }}
              flex="1"
              py={{ base: '5px', sm: '' }}
              margin={{
                base: '0px 0px 0px 10px',
                md: '4px 27px 0px 15px',
                xl: '4px 32px 0px 20px'
              }}
            >
              <Text
                as="h5"
                variant="h5"
                fontSize={{ base: '11px', sm: '13px', lg: '14px', xl: '16px' }}
                letterSpacing={{
                  base: '2px',
                  xl: '3px'
                }}
                lineHeight={{
                  base: '38px',
                  md: '33px',
                  lg: '45px',
                  xl: '55px'
                }}
                color={currentCategory === 2 ? 'white' : 'gray.350'}
              >
                {smartDate(post?.date, 'PT-BR')}
              </Text>

              <Box>
                <CalendarIcon
                  w="29px"
                  h="27px"
                  stroke1={getHoverIndicatorColor()}
                  stroke2={currentCategory === 2 ? 'white' : '#595959'}
                />
              </Box>
            </Flex>
          )}
        </Flex>

        {/* Title Post */}
        <Flex flex="1" mx="25px" pb={!showContent ? '45px' : '5px'}>
          <Text
            as="h3"
            variant="h3"
            color="green.900"
            fontWeight="bold"
            lineHeight={{
              base: '22px',
              md: '33px',
              lg: '35px',
              xl: '38px'
            }}
          >
            {post?.title}
          </Text>
        </Flex>

        {/* Post Content */}
        {showContent && (
          <Flex pb={showShareOptions ? '18px' : '45px'} mx="25px">
            <Text
              fontSize="17px"
              color="grey.350"
              lineHeight="35px"
              noOfLines={3}
            >
              {post?.content && parser(post?.content)}
            </Text>
          </Flex>
        )}

        {/* Share Buttons Icons */}
        {showShareOptions && (
          <Flex
            gap="22px"
            m={{
              base: '0 0 15px 0',
              sm: '0 0 30px 35px'
            }}
            justify={{ base: 'center', sm: 'initial' }}
          >
            <FacebookShareButton
              url={`https://www.berneck.com.br/bnk-channel/${post?.category.id}/${post?.url_code}`}
              quote={post?.title}
            >
              <SocialIcon
                media="facebook"
                width="38px"
                height="38px"
                color={currentCategory === 2 ? 'white' : 'gray.350'}
                hoverColor={getSocialIconHoverColor()}
              />
            </FacebookShareButton>

            <TwitterShareButton
              url={`https://www.berneck.com.br/bnk-channel/${post?.category.id}/${post?.url_code}`}
            >
              <SocialIcon
                media="twitter"
                width="38px"
                height="38px"
                color={currentCategory === 2 ? 'white' : 'gray.350'}
                hoverColor={getSocialIconHoverColor()}
              />
            </TwitterShareButton>
          </Flex>
        )}

        <Flex flex="1" justify={{ base: 'center', sm: 'initial' }}>
          {/* Box hover-indicator */}
          <Box
            transition={'0.5s'}
            width={mouseDown ? '80%' : '50%'}
            borderBottom="solid"
            borderBottomWidth={{
              base: '3px',
              sm: '4px',
              md: '3px',
              lg: '4px',
              xl: '5px',
              '2xl': '6px'
            }}
            borderBottomColor={getHoverIndicatorColor()}
            marginLeft={{
              sm: '35px'
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
