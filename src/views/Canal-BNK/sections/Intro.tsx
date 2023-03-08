import { useContext } from 'react'
import { useRouter } from 'next/router'

import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  ButtonProps,
  FlexProps
} from '@chakra-ui/react'

import Post from '@components/Post'
import { Arrow } from '@components/Icons'
import ChannelBnkRelationalItem from '@components/ChannelBnkRelationalItem'

import { Section } from './Section'

import { CategoryContext } from '..'
import { Post as IPost } from 'types/data'
import { useTranslation } from 'react-i18next'
import HtmlTextParser from '@components/HtmlTextParser'
import SeeMore from '@components/SeeMore'

export const PANEL_COLOR = {
  all: 'white',
  inspiration: '#F0E4D1',
  feedstock: '#D6DCD5',
  world: '#89BA81'
}

export const Intro = (props: {
  posts: IPost[]
  tagsSearch?: boolean
  tagName?: string
}) => {
  const {
    currentCategory,
    changeCurrentCategory,
    categories,
    seeOnlyPosts,
    setSeeOnlyPosts
  } = useContext(CategoryContext)

  const router = useRouter()
  const channelBnkLabels = useTranslation('channelBnkView')

  return (
    <Box
      bg={
        currentCategory === -1
          ? 'brown.100'
          : currentCategory === 0
          ? 'brown.200'
          : currentCategory === 1
          ? 'green.200'
          : 'green.600'
      }
    >
      <Flex
        maxWidth="1536px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflow="hidden"
        paddingBottom={{ base: '2%', '2xl': '5%' }}
      >
        <Image
          src="/assets/imgs/canal-bnk/grafismo_esquerda.svg"
          w="232px"
          h="618px"
          pos="absolute"
          left="-80px"
          top="300px"
          opacity={
            currentCategory === -1 ? 0.6 : currentCategory === 0 ? 0.9 : 0.2
          }
          filter={
            currentCategory === -1
              ? 'brightness(1) contrast(0.5) sepia(1) grayscale(0.6) hue-rotate(350deg) saturate(1.4)'
              : currentCategory === 1
              ? 'brightness(0.5) contrast(0.2) sepia(1) grayscale(0.6) hue-rotate(110deg) saturate(1)'
              : ''
          }
        />

        <Image
          src="/assets/imgs/canal-bnk/grafismo_direita.svg"
          w="810px"
          h="980px"
          objectFit="cover"
          overflow="hidden"
          pos="absolute"
          right="-150px"
          top="0"
          opacity={
            currentCategory === -1 ? 0.6 : currentCategory === 0 ? 0.9 : 0.2
          }
          filter={
            currentCategory === -1
              ? 'brightness(1) contrast(0.5) sepia(1) grayscale(0.6) hue-rotate(350deg) saturate(1.4)'
              : currentCategory === 1
              ? 'brightness(0.5) contrast(0.2) sepia(1) grayscale(0.6) hue-rotate(110deg) saturate(1)'
              : ''
          }
        />

        <Flex
          direction="column"
          align={{ base: 'center', lg: 'inherit' }}
          // bg = "red"
        >
          <Flex
            data-testid="intro-header"
            w="100%"
            justifyContent="space-between"
            zIndex={100}
            direction={{ base: 'column', lg: 'row' }}
            padding={{
              base: '5% 5% 0 5%',
              md: '5% 3% 0 5%',
              xl: '5% 5% 0 3%',
              '2xl': '2% 0% 0 4%'
            }}
            // bg = "yellow"
          >
            <Flex
              direction="row"
              alignSelf={{ base: 'flex-start' }}
              w={{ lg: '100%', xl: '100%' }}
              // bg="blue"
            >
              <Image
                src={
                  currentCategory === -1
                    ? '/assets/imgs/canal-bnk/Canal_Berneck.svg'
                    : currentCategory === 0
                    ? '/assets/imgs/canal-bnk/canal_bnk_materia.svg'
                    : currentCategory === 1
                    ? '/assets/imgs/canal-bnk/canal_bnk_materia.svg'
                    : '/assets/imgs/canal-bnk/canal_bnk_mundo.svg'
                }
                w={{ base: '150px', lg: '160px' }}
              />

              <Box
                w={{ base: '100%', xl: '60%' }}
                // flex="1"
                // marginTop={{ base: '20px', lg: '30px', xl: '40px' }}
                // bg="green"
                padding={'5%'}
              >
                {!seeOnlyPosts && (
                  <Text
                    as="h5"
                    variant={'h5'}
                    fontWeight="bold"
                    color={
                      currentCategory === -1
                        ? '#436D5D'
                        : currentCategory === 0
                        ? 'green.900'
                        : currentCategory === 1
                        ? 'green.900'
                        : 'white'
                    }
                  >
                    {currentCategory !== -1 && categories[currentCategory].name}
                  </Text>
                )}

                {!seeOnlyPosts && (
                  <Text
                    as="h5"
                    variant={'h5'}
                    fontWeight="normal"
                    color={
                      currentCategory === -1
                        ? '#436D5D'
                        : currentCategory === 0
                        ? 'green.900'
                        : currentCategory === 1
                        ? 'green.900'
                        : 'white'
                    }
                  >
                    {(currentCategory !== -1 && (
                      <HtmlTextParser>
                        {categories[currentCategory].description}
                      </HtmlTextParser>
                    )) ||
                      channelBnkLabels.t('introSection.channelDescription')}
                  </Text>
                )}

                {seeOnlyPosts && (
                  <Text
                    as="h5"
                    variant={'h5'}
                    fontWeight="bold"
                    color={
                      currentCategory === -1 || currentCategory == 2
                        ? 'green.900'
                        : '#436D5D'
                    }
                  >
                    {props.tagsSearch && props.tagName
                      ? `${channelBnkLabels.t('introSection.searchResult')} ${
                          props.tagName
                        }`
                      : channelBnkLabels.t('introSection.allContents')}
                  </Text>
                )}
              </Box>
            </Flex>

            <Flex
              // width={{ base: '100%', lg: '70%', '2xl': '60%' }}
              wrap={{ base: 'nowrap', lg: 'wrap', '2xl': 'nowrap' }}
              justify="end"
              gap={{ base: '8px', lg: '8px', xl: '14px' }}
              direction={{
                base: 'column',
                lg: 'row'
              }}
              marginTop={{ base: '30px', lg: '0' }}
              alignItems={{ base: 'center', lg: 'center' }}
              // height={{ base: 'auto', lg: '150px' }}
              // bg = "pink"
            >
              {/* <NavButton
                hideArrow
                justify="center"
                selected={currentCategory === -1}
                onClick={() => {
                  if (props.tagsSearch) {
                    router.push('/canal-bnk')
                  } else {
                    changeCurrentCategory(-1)
                  }
                }}
                color={'green.900'}
                borderColor={currentCategory === -1 ? 'brown.200' : 'white'}
              >
                {channelBnkLabels.t('introSection.seeAll')}
              </NavButton> */}

              {categories.length > 0 && (
                <NavButton
                  justify={{ base: 'space-between', lg: 'center' }}
                  selected={currentCategory === 0}
                  onClick={() => changeCurrentCategory(0)}
                  color={currentCategory === 0 ? 'green.900' : 'gray.360'}
                  borderColor={
                    currentCategory === -1 || currentCategory === 0
                      ? 'brown.200'
                      : 'white'
                  }
                >
                  {categories[0].name}
                </NavButton>
              )}

              {categories.length > 1 && (
                <NavButton
                  justify={{ base: 'space-between', lg: 'center' }}
                  selected={currentCategory === 1}
                  onClick={() => changeCurrentCategory(1)}
                  color={currentCategory === 1 ? 'green.900' : 'gray.360'}
                  borderColor={
                    currentCategory === -1 || currentCategory === 1
                      ? 'green.250'
                      : 'white'
                  }
                >
                  {categories[1].name}
                </NavButton>
              )}

              {categories.length > 2 && (
                <NavButton
                  justify={{ base: 'space-between', lg: 'center' }}
                  selected={currentCategory === 2}
                  onClick={() => changeCurrentCategory(2)}
                  color={currentCategory === 2 ? 'green.900' : 'gray.360'}
                  borderColor={
                    currentCategory === -1 || currentCategory === 2
                      ? 'green.600'
                      : 'white'
                  }
                >
                  {categories[2].name}
                </NavButton>
              )}
            </Flex>
          </Flex>

          <Flex
            w="100%"
            zIndex={100}
            // bg="black"
          >
            {/* <Section
            w="100%"
            zIndex={100}
            {...(!seeOnlyPosts && {
              seeMore: {
                text: channelBnkLabels.t('introSection.seeMore'),
                link: `/canal-bnk/${currentCategory}`,
                onClick: () => setSeeOnlyPosts(true),
                textColor:
                  currentCategory === -1
                    ? 'green.550'
                    : currentCategory === 0
                    ? 'brown.300'
                    : 'white.100'
              }
            })}
          > */}
            {/* INICIO SECTION CANAL BNK */}
            {!seeOnlyPosts && (
              <Flex
                direction={{ base: 'column', xl: 'row' }}
                margin={{ base: '0', '2xl': '1% 0 0 3.5%' }}
              >
                <Flex
                  flex={{ base: '1', xl: '1.5' }}
                  maxH={{ xl: '700', '2xl': '540' }}
                  // bg="blue"
                >
                  {props.posts.length > 0 && <HeroPost post={props.posts[0]} />}
                </Flex>

                <Flex
                  flex={{ base: '1' }}
                  flexDirection={{ base: 'row', xl: 'column' }}
                  // justifyContent={{ xl: 'space-evenly' }}
                  overflowX={{ base: 'scroll', xl: 'hidden' }}
                  overflowY={{ base: 'hidden', xl: 'scroll', '2xl': 'hidden' }}
                  w={{ base: '100vw', xl: '100%' }}
                  maxH={'650px'}
                  gap={{ base: '5%', xl: '5%' }}
                  margin={{
                    base: '5% 10% 5% 5%',
                    md: '0% 0% 3% 5%',
                    xl: '3% 3% 3% 0',
                    '2xl': '0% 0% 0% 0'
                  }}
                  css={{
                    '-webkit-scrollbar': {
                      display: 'none'
                    },
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none'
                  }}
                >
                  {/* INICIO SECTION CANAL BNK */}
                  {props.posts.length > 1 && (
                    <ChannelBnkRelationalItem
                      categoryTitle={props.posts[1].category.name}
                      categoryId={props.posts[1].category.id}
                      url_code={props.posts[1].url_code}
                      urlImage={props.posts[1].cover}
                      title={props.posts[1].title}
                      color={props.posts[1].category.color}
                      showInvert
                      currentCategory={currentCategory}
                    />
                  )}
                  {props.posts.length > 2 && (
                    <ChannelBnkRelationalItem
                      categoryTitle={props.posts[2].category.name}
                      categoryId={props.posts[2].category.id}
                      url_code={props.posts[2].url_code}
                      urlImage={props.posts[2].cover}
                      title={props.posts[2].title}
                      color={props.posts[2].category.color}
                      showInvert
                      currentCategory={currentCategory}
                    />
                  )}
                  {props.posts.length > 3 && (
                    <ChannelBnkRelationalItem
                      categoryTitle={props.posts[3].category.name}
                      categoryId={props.posts[3].category.id}
                      url_code={props.posts[3].url_code}
                      urlImage={props.posts[3].cover}
                      title={props.posts[3].title}
                      color={props.posts[3].category.color}
                      showInvert
                    />
                  )}
                  {/* FIM SECTION CANAL BNK */}
                </Flex>
              </Flex>
            )}

            {seeOnlyPosts && (
              <Flex direction="column" align="center">
                {props.posts?.map((post, j) => (
                  <Post
                    showDate
                    showContent
                    showShareOptions
                    key={j}
                    post={post}
                    h={{ xl: '821px' }}
                    w={{ base: '90%', lg: '60%', xl: '55%' }}
                  />
                ))}
              </Flex>
            )}
          </Flex>

          <Flex
            // bg="red"
            zIndex={100}
            direction="column"
            alignSelf={{ base: 'flex-end' }}
            justify={{ base: 'center' }}
            w={{ lg: '100%', xl: '100%' }}
            h={{ lg: '20px', xl: '50px' }}
          >
            <Section
              w="100%"
              zIndex={100}
              {...(!seeOnlyPosts && {
                seeMore: {
                  text: channelBnkLabels.t('introSection.seeMore'),
                  link: `/bnk-channel/${currentCategory}`,
                  onClick: () => setSeeOnlyPosts(true),
                  textColor:
                    currentCategory === -1
                      ? 'green.550'
                      : currentCategory === 0
                      ? 'brown.300'
                      : 'white.100'
                }
              })}
              py={{ base: '54px', lg: '100px' }}
              px={{ base: '20px', lg: '5%', '2xl': '1%' }}
              maxWidth={'1536px'}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

const HeroPost = (props: { post: IPost }) => {
  return <Post post={props.post} />
}

export interface NavButtonProps extends ButtonProps {
  justify?: FlexProps['justify']
  selected?: boolean
  hideArrow?: boolean
}

export const NavButton = (props: NavButtonProps) => {
  const { children, borderColor, selected, hideArrow, justify, ...rest } = props

  return (
    <Button
      as="button"
      h={{ base: '50px', xl: '50px' }}
      w={{ base: '100%', xl: '80%' }}
      border="2px solid"
      borderRadius="17px"
      color={'gray.350'}
      bg={selected ? 'white' : 'transparent'}
      borderColor={selected ? 'transparent' : borderColor}
      _visited={{ color: '#436D5D' }}
      _hover={{ filter: 'brightness(0.98)', bg: 'white' }}
      _focus={{ outline: '0' }}
      {...rest}
    >
      <Flex
        align="center"
        justify={justify ?? 'center'}
        gap="10px"
        w="100%"
        px={{ base: '21px', lg: '30px' }}
        py={{ base: '17px', lg: '21px' }}
      >
        <Text
          as="h5"
          variant="h5"
          textColor={'black'}
          letterSpacing={{
            base: '1.4px',
            xl: '2px'
          }}
          fontSize={{ base: '10px', sm: '10px', lg: '10px', xl: '10px' }}
        >
          {children}
        </Text>

        {!hideArrow && (
          <Arrow
            color={borderColor as string}
            width={{
              base: '8px',
              md: '10px',
              lg: '10px',
              xl: '12px'
            }}
            height="21px"
          />
        )}
      </Flex>
    </Button>
  )
}
