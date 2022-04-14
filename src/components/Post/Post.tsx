import { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import { Flex, Box, Text, FlexProps, Image } from '@chakra-ui/react'
import { FacebookShareButton, TwitterShareButton } from 'react-share'

import { Arrow, CalendarIcon, SocialIcon } from '@components/Icons'
import { CategoryContext } from 'views/Canal-BNK'

import { Post as IPost } from 'types/data'
import { Category } from 'types/data/Post'
import { smartDate } from 'utils/utils'

function getPanelColor(i: number) {
  return i <= 2 && i >= 0 ? ['#F0E4D1', '#D6DCD5', '#89BA81'][i] : 'white'
}

function getAccentColor(i: number) {
  return i <= 2 && i >= 0 ? ['#E0CBA5', '#B9C3B8', '#429C2E'][i] : 'white'
}

export interface PostProps extends FlexProps {
  post?: IPost
  categoryPage?: Category
  showDate?: boolean
  showShareOptions?: boolean
  imgPos?: 'top' | 'left' | 'right' | 'bottom'
}

export const Post = (props: PostProps) => {
  const router = useRouter()
  const [mouseDown, setMouseDown] = useState(false)

  const { currentCategory, categories } = useContext(CategoryContext)

  const {
    post,
    categoryPage = 'all',
    imgPos = 'top',
    showDate,
    showShareOptions,
    ...rest
  } = props

  const getSocialIconHoverColor = () => {
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
      cursor="pointer"
      bg={getPanelColor(currentCategory)}
      margin={{
        base: '5%',
        md: '3%',
        lg: '3.5%',
        xl: '4.2%',
        '2xl': showDate ? '5% 2% 0% 0%' : '0% 2% 0% 0%'
      }}
      w={{ base: '90%', '2xl': showDate ? '70%' : '90%' }}
      onMouseEnter={() => setMouseDown(true)}
      onMouseLeave={() => setMouseDown(false)}
      {...rest}
    >
      {/* box imagem cover */}
      <Flex
        flex="10"
        bg="black"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
      >
        <Image src={post?.cover} />
      </Flex>

      {/* box content */}
      <Flex direction="column" flex="1">
        <Flex
          flex="1"
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'start', md: 'end' }}
          alignContent={{ base: 'start', md: 'end' }}
        >
          <Flex
            data-testid="post-category"
            margin={{
              base: '8px 0px 5px 10px',
              lg: '10px 0px 7px 15px',
              xl: '20px 0px 10px 20px'
            }}
            align="start"
            flex="1"
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
              justifyContent={{ base: 'start', md: 'end' }}
              alignContent={{ base: 'start', md: 'end' }}
              flex="1"
              margin={{
                base: '0px 0px 0px 10px',
                md: '0px 15px 0px 15px',
                xl: '0px 20px 0px 20px'
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
        <Flex
          pb={showShareOptions ? '18px' : '45px'}
          flex="1"
          margin={{ base: '10px', lg: '10px', xl: '20px' }}
        >
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

        {/* Share Buttons Icons */}
        {showShareOptions && (
          <Flex
            gap={{ base: '20px', lg: '30px' }}
            margin={{
              base: '0px 0px 10px 10px',
              md: '10px',
              lg: '15px',
              xl: '20px'
            }}
          >
            <FacebookShareButton
              url={`https://www.berneck.com.br/canal-bnk/${post?.category.id}/${post?.url_code}`}
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
              url={`https://www.berneck.com.br/canal-bnk/${post?.category.id}/${post?.url_code}`}
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

        <Flex flex="1">
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
            marginLeft="10%"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
