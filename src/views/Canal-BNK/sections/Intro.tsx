import { useContext } from 'react'
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  ButtonProps,
  FlexProps
} from '@chakra-ui/react'

import { Arrow } from '@components/Icons'
import Post from '@components/Post'
import ChannelBnkRelationalItem from '@components/ChannelBnkRelationalItem'
import { CategoryContext } from '..'
import { Post as IPost } from 'types/data'
import { Section } from './Section'

export const PANEL_COLOR = {
  all: 'white',
  inspiration: '#F0E4D1',
  feedstock: '#D6DCD5',
  world: '#89BA81'
}

export const Intro = (props: { posts: IPost[] }) => {
  const {
    currentCategory,
    changeCurrentCategory,
    categories,
    seeOnlyPosts,
    setSeeOnlyPosts
  } = useContext(CategoryContext)

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
        bg={
          currentCategory === -1
            ? 'brown.100'
            : currentCategory === 0
            ? 'brown.200'
            : currentCategory === 1
            ? 'green.200'
            : 'green.600'
        }
        maxWidth="1536px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY={{ base: 'hidden', '2xl': 'visible' }}
        overflowX={{ base: 'hidden', '2xl': 'visible' }}
        paddingBottom={{ base: '2%', '2xl': '5%' }}
      >
        <Flex
          data-testid="intro-header"
          w="100%"
          justifyContent="space-between"
          zIndex={100}
          direction={{ base: 'column', lg: 'row' }}
          padding={{ base: '5% 5% 0 5%', md: '5% 3% 0 3%', xl: '5% 5% 0 3%' , '2xl': '5% 0% 0 3%'}}
          // bg="yellow"
        >
          <Flex
            data-testid="intro-header"
            w="100%"
            justifyContent="space-between"
            zIndex={100}
            direction={{ base: 'column', lg: 'row' }}
            padding={{
              base: '5% 5% 0 5%',
              md: '5% 3% 0 3%',
              xl: '5% 5% 0 3%',
              '2xl': '5% 0% 0 0%'
            }}
          >
            <Flex
              direction="column"
              alignSelf={{ base: 'flex-start' }}
              w={{ lg: '30%', '2xl': '23%' }}
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
                w={{ base: '150px', lg: '210px' }}
              />

              <Box
                w={'100%'}
                marginTop={{ base: '20px', lg: '30px', xl: '40px' }}
              >
                {!seeOnlyPosts && (
                  <Text
                    as="h1"
                    fontWeight={800}
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
                    as="h2"
                    fontSize={{ base: '16px', lg: '20px' }}
                    letterSpacing="-0.4px"
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
                    {(currentCategory !== -1 &&
                      categories[currentCategory].description) ||
                      'Nosso canal de conteúdos sobre madeira, inspiração e muito mais.'}
                  </Text>
                )}

                {seeOnlyPosts && (
                  <Text
                    as="h1"
                    w="75%"
                    fontWeight={800}
                    fontSize="21px"
                    letterSpacing="2.1px"
                    color={currentCategory === -1 ? 'green.900' : '#436D5D'}
                  >
                    Todos os conteúdos
                  </Text>
                )}
              </Box>
            </Flex>

            <Flex
              width={{ base: '100%', lg: '70%', '2xl': '80%' }}
              wrap={{ base: 'nowrap', lg: 'wrap' }}
              justify="end"
              gap={{ base: '8px', lg: '16px', xl: '22px' }}
              direction={{
                base: 'column',
                lg: 'row'
              }}
              marginTop={{ base: '30px', lg: '0' }}
              alignItems={{ base: 'center', lg: 'flex-start' }}
              height={{ base: 'auto', lg: '150px' }}
            >
              <NavButton
                hideArrow
                justify="center"
                selected={currentCategory === -1}
                onClick={() => changeCurrentCategory(-1)}
                color={'green.900'}
                borderColor={currentCategory === -1 ? 'brown.200' : 'white'}
              >
                VER TUDO
              </NavButton>

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

          <Section
            w="100%"
            zIndex={100}
            {...(!seeOnlyPosts && {
              seeMore: {
                text: 'Veja mais conteúdos',
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
          >
            <NavButton
              hideArrow
              justify="center"
              selected={currentCategory === -1}
              onClick={() => changeCurrentCategory(-1)}
              color={'green.900'}
              borderColor={currentCategory === -1 ? 'brown.200' : 'white'}
            >
              VER TUDO
            </NavButton>

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
          </Section>
        
      {/* </Flex> */}

        <Section
          w="100%"
          zIndex={100}
          {...(!seeOnlyPosts && {
            seeMore: {
              text: 'Veja mais conteúdos',
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
        >



          {/* INICIO SECTION CANAL BNK */}
          {!seeOnlyPosts && (
            <Flex
              direction={{ base: 'column', xl: 'row' }}
              // bg = "blue"
              margin={{'2xl': '0 0 0 3%' }}
            >
              <Flex
                // bg="purple"
                flex={{ base: '1', xl: '2' }}
                // w={{ base: '100vw', xl: '100%' }}
                maxH={{ xl: '700', '2xl': '650' }}
              >
                {props.posts.length > 0 && <HeroPost post={props.posts[0]} />}
              </Flex>
              
              <Flex
                // bg = "blueviolet"
                flex={{ base: '1' }}
                flexDirection={{ base: 'row', xl: 'column' }}
                justifyContent={{ xl: 'space-evenly' }}
                overflowX={{ base: 'scroll', xl: 'hidden' }}
                overflowY={{ base: 'hidden', xl: 'scroll' }}
                w={{ base: '100vw', xl: '100%' }}
                maxH={"650px"}
                gap={{ base: '5%', xl: '2%' }}
                // paddingBottom={{ base: '2%', xl: '2%' , lg: '3%'}}
                margin={{ base: '5% 10% 5% 5%', md: '3% 0% 3% 3%', xl: '3% 3% 3% 0', '2xl': '0% 0% 0% 0' }}
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
            )}

            {seeOnlyPosts && (
              <Flex direction="column" align="center">
                {props.posts?.map((post, j) => (
                  <Post
                    showDate
                    showShareOptions
                    showPreview
                    key={j}
                    post={post}
                    w={{ base: '100%', xl: '100%' }}
                  />
                ))}
              </Flex>
            )}
        </Section>
      
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
      h="62px"
      w={{ base: '100%', lg: 'auto' }}
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
        gap="20px"
        w="100%"
        px={{ base: '21px', lg: '37px' }}
        py={{ base: '17px', lg: '21px' }}
      >
        <Text
          as="h5"
          variant={'h5' as any}
          textColor={'black'}
          letterSpacing={{
            base: '2px',
            xl: '3px'
          }}
          fontSize={{ base: '9px', sm: '13px', lg: '14px', xl: '16px' }}
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
