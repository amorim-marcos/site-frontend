import { Flex, Box, Text, Link, FlexProps, TextProps, Image } from '@chakra-ui/react'
import { Arrow, CalendarIcon, SocialIcon } from '@components/Icons'
import { Post as IPost } from 'types/data'
import { Category } from 'types/data/Post'
import { useContext } from 'react'
import { CategoryContext } from 'views/Canal-BNK'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { smartDate } from 'utils/utils'


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
  const [mouseDown, setMouseDown] = useState(false)

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
    cursor="pointer"
    //bg="tomato"
    {...rest}
    margin={"5%"}
    w={"90%"}
    onMouseEnter={() => setMouseDown(true)}
    onMouseLeave={() => setMouseDown(false)}
  >

   {/* box imagem cover */}
    <Flex
      flex= "1"
      // bg="black"
    >
      <Image  
        src={post?.cover}
        w={"100%"}
      />
    </Flex>

    {/* box content */}
    <Flex
      // w={'60%'}
      direction="column"
      flex= "1"
      bg={getPanelColor(currentCategory)}
    >

        <Flex 
          // bg="yellow"
          flex="1"
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'start', md: 'end' }}
          alignContent={{ base: 'start', md: 'end' }}
        >
            <Flex 
              data-testid="post-category" 
              margin = {{ base: '5px 0px 5px 10px', lg: '10px 0px 7px 15px', xl: '10px 0px 10px 20px' }}
              align="start"
              flex="1"
              // bg="tomato"
            >
              <Arrow
                color={getHoverIndicatorColor()}
                width = {{
                  base: '8px',
                  md: '10px',
                  lg: '10px',
                  xl: '12px'
                }}
              />
              <Text as="h5" 
                variant={'h5' as any}
                textColor = {"black"}
                letterSpacing= {{
                  base: '2px',
                  xl: '3px'
                }}
                fontSize = {{ base: '11px', sm: '13px', lg: '14px', xl: '16px' }}
                marginLeft = {{ base: '5px', lg: '5px' }}
                marginTop = {{ base: '-2px', lg: '-3px' }}
              >{post?.category.name}</Text>
            </Flex>

          
            {/* showDate at list */}
            {showDate && (
            <Flex 
              gap="12px" 
              align="center"
              justifyContent={{ base: 'start', md: 'end' }}
              alignContent={{ base: 'start', md: 'end' }}
              flex="1"
              // bg="pink"
              margin = {{ base: '0px 0px 0px 10px', md: '0px 15px 0px 15px', xl: '0px 20px 0px 20px' }}
            >
              <Text as="h5" 
                variant={'h5' as any}
                // textColor = {"black"}
                fontSize = {{ base: '11px', sm: '13px', lg: '14px', xl: '16px' }}
                letterSpacing= {{
                  base: '2px',
                  xl: '3px'
                }}
                lineHeight ={{
                  base: '38px',
                  md: '33px',
                  lg: '45px',
                  xl: '55px'
                }}
                color={currentCategory === 2 ? 'white' : 'gray.350'}
              >
                {/* {post?.date && new Date(post?.date).toLocaleDateString()} */}
                {smartDate(post?.date, 'PT-BR')}
              </Text>

              <Box 
                // pb="3px"
              >
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

        {/* Title Post */}
        <Flex 
          pb={showShareOptions ? '18px' : '45px'}
          // bg= "blue"
          flex = "1"
          margin = {{ base: '10px', lg: '10px', xl: '20px' }}
         
        >
          <Text
            as="h3"
            variant={'h3' as any}
            color="green.900"
            fontWeight= 'bold'
            lineHeight ={{
              base: '22px',
              md: '33px',
              lg: '35px',
              xl: '38px'
            }}
          >
            {post?.title}
          </Text>
        </Flex>


        {/* {showPreview && (
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
          >
            {post?.content}
          </Text>
        )} */}


        {/* Share Buttons Icons */}
        {showShareOptions && (
          <Flex 
            gap={{ base: '10px', lg: '30px' }}
            margin = {{ base: '0px 0px 10px 10px', md: '10px', lg: '15px', xl: '20px' }}
          >
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

        <Flex
          // bg="gray.200"
          flex="1"
        >
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
            borderBottomColor={getCalendarColor()}
            marginLeft="10%"
          />
        </Flex>
    
    </Flex>
    
  </Flex>
  )
}
