import { useRouter } from 'next/router'

import { Flex, Box, Text, Link, FlexProps, TextProps } from '@chakra-ui/react'

import { Arrow, CalendarIcon, SocialIcon } from '@components/Icons'

import { Post as IPost } from '../../types/data'

export interface PostProps extends FlexProps {
  post: IPost
  imgPos?: 'top' | 'left' | 'right' | 'bottom'
  accentColor: string
  titleFontSize?: TextProps['fontSize']
  showDate?: boolean
  showPreview?: boolean
  showShareOptions?: boolean
}

export const Post = (props: PostProps) => {
  const router = useRouter()

  const {
    post,
    imgPos = 'top',
    accentColor,
    showDate,
    showPreview,
    showShareOptions,
    titleFontSize,
    ...rest
  } = props

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
      onClick={() => router.push(`/${post.Category.Name}/${post.Title}`)}
      {...rest}
    >
      <Cover imgPos={imgPos} cover={post.Cover} />

      <Flex
        direction="column"
        w={imgPos === 'top' || imgPos === 'bottom' ? '100%' : '54%'}
        pt="21px"
        pl="38px"
        pr="29px"
        gap="18px"
        bg="white"
        pos="relative"
      >
        <Flex justify="space-between">
          <Box w="100%">
            <Category
              accentColor={accentColor}
              imgPos={imgPos}
              categoryName={post.Category.Name}
            />
          </Box>

          {showDate && <DatePost date={post.date} accentColor={accentColor} />}
        </Flex>

        <Box pb={showShareOptions ? '18px' : '45px'}>
          <Title
            title={post.Title}
            titleFontSize={titleFontSize}
            imgPos={imgPos}
          />
        </Box>

        {showPreview && <Preview content={post.Content} />}
        {showShareOptions && (
          <ShareOptions link={'/'} accentColor={accentColor} />
        )}
        <HoverIndicator accentColor={accentColor} imgPos={imgPos} />
      </Flex>
    </Flex>
  )
}

const Cover = (props: {
  imgPos?: 'top' | 'left' | 'right' | 'bottom'
  cover: string
}) => (
  <Box
    w={props.imgPos === 'top' || props.imgPos === 'bottom' ? '100%' : '40%'}
    h="100%"
    bgRepeat="no-repeat"
    bgSize="cover"
    bgImage={`url(${props.cover})}`}
  />
)

const DatePost = (props: { date: Date; accentColor: string }) => (
  <Flex gap="12px" pr="3px" w="fit-content">
    <Text
      fontSize="17px"
      fontWeight={600}
      letterSpacing="2.55px"
      color="grey.350"
    >
      {props.date.toLocaleDateString()}
    </Text>
    <CalendarIcon width="28px" height="24px" color={props.accentColor} />
  </Flex>
)

const Category = (props: {
  categoryName: string
  accentColor: string
  imgPos?: 'top' | 'left' | 'right' | 'bottom'
}) => (
  <Flex direction="row" gap="14px" align="center">
    <Arrow width="9px" height="13px" color={props.accentColor} />

    <Text
      as="h2"
      w="75%"
      fontSize={
        props.imgPos === 'top' || props.imgPos === 'bottom' ? '16px' : '14px'
      }
      letterSpacing={
        props.imgPos === 'top' || props.imgPos === 'bottom' ? '2.4px' : '2.1px'
      }
      fontWeight="600"
      color="grey.350"
    >
      {props.categoryName}
    </Text>
  </Flex>
)

const Title = (props: {
  title: string
  titleFontSize?: TextProps['fontSize']
  imgPos?: 'top' | 'left' | 'right' | 'bottom'
}) => (
  <Text
    as="h1"
    fontSize={
      props.titleFontSize
        ? props.titleFontSize
        : props.imgPos === 'top' || props.imgPos === 'bottom'
        ? '29px'
        : '23px'
    }
    fontWeight="bold"
    letterSpacing={
      props.imgPos === 'top' || props.imgPos === 'bottom'
        ? '-0.58px'
        : '-0.46px'
    }
    color="green.900"
  >
    {props.title}
  </Text>
)

const HoverIndicator = (props: {
  accentColor: string
  imgPos?: 'top' | 'left' | 'right' | 'bottom'
}) => (
  <Box
    h="6px"
    w={props.imgPos === 'left' || props.imgPos === 'right' ? '50%' : '20%'}
    bg={props.accentColor}
    bottom={props.imgPos !== 'bottom' ? '-3px' : 'calc(100% - 3px)'}
    left="38px"
    pos="absolute"
    transition={`all 0.3s ease-in-out`}
    _groupHover={{
      w: props.imgPos === 'left' || props.imgPos === 'right' ? '82%' : '46%'
    }}
  />
)

const Preview = (props: { content: string }) => (
  <Text
    h="107px"
    mt="-33px"
    lineHeight="35px"
    textOverflow="ellipsis"
    overflow="hidden"
    noOfLines={3}
    fontSize="17px"
    letterSpacing="-0.34px"
    color="grey.350"
  >
    {props.content}
  </Text>
)

const ShareOptions = (props: { link: string; accentColor: string }) => (
  <Flex gap="30px" pb="38px">
    <Link onClick={() => alert(props.link)}>
      <SocialIcon
        media="facebook"
        width="38px"
        height="38px"
        color="#595959"
        hoverColor={props.accentColor}
      />
    </Link>

    <Link onClick={() => alert(props.link)}>
      <SocialIcon
        media="twitter"
        width="38px"
        height="38px"
        color="#595959"
        hoverColor={props.accentColor}
      />
    </Link>

    <Link onClick={() => alert(props.link)}>
      <SocialIcon
        media="whatsapp"
        width="38px"
        height="38px"
        color="#595959"
        hoverColor={props.accentColor}
      />
    </Link>
  </Flex>
)
