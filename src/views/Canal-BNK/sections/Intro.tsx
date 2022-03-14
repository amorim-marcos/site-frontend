import { useContext, useState } from 'react'

import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  ButtonProps,
  FlexProps,
  Link
} from '@chakra-ui/react'

import { Arrow } from '@components/Icons'
import Post from '@components/Post'

import useMobile from 'hooks/useMobile'
import { CategoryContext } from '..'

import { Post as IPost } from 'types/data'
import { Section } from './Section'
import { Category } from 'types/data/Post/Category'

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
      pos="relative"
      overflow="hidden"
      w="100%"
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
        w="100%"
        direction="column"
        align={{ base: 'center', lg: 'inherit' }}
      >
        <Flex
          data-testid="intro-header"
          w="100%"
          // pt="67px"
          // px={{ base: '10px', sm: '30px', lg: '0' }}
          // pl={{ lg: '88px' }}
          // pos="relative"
          justifyContent="space-between"
          zIndex={100}
          direction={{ base: 'column', lg: 'row' }}
          padding={'5% 5% 0 5%'}
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
              w={{ base: '206px', lg: '210px' }}
              // pb="42px"
            />

            <Box 
              w={'100%'} 
              marginTop="50px"
              // bg = "red"
            >
              {!seeOnlyPosts && (
                <Text
                  as="h1"
                  w="100%"
                  fontWeight={800}
                  fontSize="21px"
                  letterSpacing="2.1px"
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
                  width={{ base: '100%', lg: '130%' }}
                  fontSize="20px"
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
            // pos={{ lg: 'absolute' }}
            // top={{ lg: '30%' }}
            // right={{ lg: '88px' }}
            gap="32px"
            // pt={{ base: '27px', lg: '0' }}
            direction={{
              base: 'column',
              lg: 'row'
            }}
            marginTop={{ base: '40px', lg: '0' }}
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
                  ? 'green.600'
                  : currentCategory === 0
                  ? 'brown.300'
                  : 'white.100'
            }
          })}
        >
          {!seeOnlyPosts && (
            <Flex
              data-testid="intro-content"
              align="center"
              justify="center"
              direction={{ base: 'column', xl: 'row' }}
              zIndex={10}
              w="100%"
              pt="58px"
              pb={{ lg: '120px' }}
              gap={{ base: '47px', lg: '44px' }}
            >
              {props.posts.length > 0 && <HeroPost post={props.posts[0]} />}

              <Flex
                data-testid="intro-content-more"
                direction={{ lg: 'column' }}
                gap="40px"
                whiteSpace="nowrap"
                w={{ base: '90%', lg: 'auto' }}
                overflowX={{ base: 'scroll', lg: 'hidden' }}
                // overflowY="hidden"
                align="center"
                // bg = "red"
              >
                {props.posts.length > 1 && <SmallPost post={props.posts[1]} />}
                {props.posts.length > 2 && <SmallPost post={props.posts[2]} />}
                {props.posts.length > 3 && <SmallPost post={props.posts[3]} />}
              </Flex>
            </Flex>
          )}

          {seeOnlyPosts && (
            <Flex
              gap="58px"
              paddingBottom="200px"
              direction="column"
              align="center"
              w="100%"
            >
              {props.posts?.map((post, j) => (
                <Post
                  showDate
                  showShareOptions
                  showPreview
                  key={j}
                  post={post}
                  h="821px"
                  w={{ base: '100%', xl: '1014px' }}
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
  return (
    <Post
      h={{ base: '376px', md: '661px' }}
      w={{
        base: '90%',
        lg: '980px',
        xl: '550px',
        '2xl': '1013px'
      }}
      post={props.post}
    />
  )
}

const SmallPost = (props: { post: IPost }) => {
  const { isMobile } = useMobile(1024)

  return (
    <Post
      h={{ base: '376px', lg: '190px' }}
      w={{
        base: '250px',
        md: '400px',
        lg: '980px',
        xl: '500px',
        '2xl': '684px'
      }}
      imgPos={isMobile ? 'top' : 'left'}
      post={props.post}
    />
  )
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
          fontSize={{ base: '11px', sm: '14px', '2xl': '14px' }}
          letterSpacing="2.4px"
          fontWeight={600}
          pt="2px"
        >
          {children}
        </Text>

        {!hideArrow && (
          <Arrow color={borderColor as string} width="15px" height="21px" />
        )}
      </Flex>
    </Button>
  )
}
