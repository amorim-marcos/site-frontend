import { useContext } from 'react'

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
import { Category, CategoryContext } from '..'

import { Post as IPost } from 'types/data'
import { Section } from './Section'

export const PANEL_COLOR = {
  all: 'white',
  inspiration: '#F0E4D1',
  feedstock: '#D6DCD5',
  world: '#89BA81'
}

export const Intro = (props: { posts: IPost[] }) => {
  const { category, setCategory } = useContext(CategoryContext)

  return (
    <Box
      pos="relative"
      overflow="hidden"
      w="100%"
      bg={
        category === 'all'
          ? 'brown.100'
          : category === 'inspiration'
          ? 'brown.200'
          : category === 'feedstock'
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
          category === 'all' ? 0.6 : category === 'inspiration' ? 0.9 : 0.2
        }
        filter={
          category === 'all'
            ? 'brightness(1) contrast(0.5) sepia(1) grayscale(0.6) hue-rotate(350deg) saturate(1.4)'
            : category === 'feedstock'
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
          category === 'all' ? 0.6 : category === 'inspiration' ? 0.9 : 0.2
        }
        filter={
          category === 'all'
            ? 'brightness(1) contrast(0.5) sepia(1) grayscale(0.6) hue-rotate(350deg) saturate(1.4)'
            : category === 'feedstock'
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
          pt="67px"
          px={{ base: '10px', sm: '30px', lg: '0' }}
          pl={{ lg: '88px' }}
          pos="relative"
          align="center"
          justifyContent="space-between"
          zIndex={100}
          direction={{
            base: 'column',
            xl: 'row'
          }}
        >
          <Flex direction="column" alignSelf={{ base: 'flex-start' }}>
            <Image
              src={
                category === 'all'
                  ? '/assets/imgs/canal-bnk/Canal_Berneck.svg'
                  : category === 'inspiration'
                  ? '/assets/imgs/canal-bnk/canal_bnk_materia.svg'
                  : category === 'feedstock'
                  ? '/assets/imgs/canal-bnk/canal_bnk_materia.svg'
                  : '/assets/imgs/canal-bnk/canal_bnk_mundo.svg'
              }
              w={{ base: '206px', lg: '210px' }}
              pb="42px"
            />

            <Box
              w={{ base: '75%', lg: category === 'all' ? '256px' : '650px' }}
            >
              <Text
                as="h1"
                fontWeight={800}
                fontSize="21px"
                letterSpacing="2.1px"
                color={
                  category === 'all'
                    ? '#436D5D'
                    : category === 'inspiration'
                    ? 'green.900'
                    : category === 'feedstock'
                    ? 'green.900'
                    : 'white'
                }
              >
                {category === 'inspiration'
                  ? 'INSPIRAÇÃO SOB MEDIDA'
                  : category === 'feedstock'
                  ? 'MATÉRIA-PRIMA: CONHECIMENTO'
                  : category === 'world' && 'MUNDO BERNECK'}
              </Text>

              <Text
                as="h2"
                fontSize="20px"
                letterSpacing="-0.4px"
                color={
                  category === 'all'
                    ? '#436D5D'
                    : category === 'inspiration'
                    ? 'green.900'
                    : category === 'feedstock'
                    ? 'green.900'
                    : 'white'
                }
              >
                {category === 'all'
                  ? 'Nosso canal de conteúdos sobre madeira, inspiração e muito mais.'
                  : category === 'inspiration'
                  ? 'Sua fonte de inspiração com ambientes harmoniosos, combinações irresistíveis, nossas coleções e muito mais.'
                  : category === 'feedstock'
                  ? 'Conheça as diferenças e aplicações de nossos produtos e aprenda a utilizar o melhor de cada um em seus projetos.'
                  : 'Fique por dentro de nossas notícias corporativas e acompanhe as novidades da BERNECK® e da indústria'}
              </Text>
            </Box>
          </Flex>

          <Flex
            w={{ base: '100%', xl: '50%', '2xl': '80%' }}
            wrap="wrap"
            justify="end"
            pos={{ lg: 'absolute' }}
            top={{ lg: '30%' }}
            right={{ lg: '88px' }}
            gap="32px"
            pt={{ base: '27px', lg: '0' }}
            direction={{
              base: 'column',
              lg: 'row'
            }}
          >
            <Flex gap="32px" direction={{ base: 'column', lg: 'row' }}>
              <NavButton
                hideArrow
                justify="center"
                selected={category === 'all'}
                onClick={() => setCategory('all')}
                color={'green.900'}
                borderColor={category === 'all' ? 'brown.200' : 'white'}
              >
                VER TUDO
              </NavButton>

              <NavButton
                justify={{ base: 'space-between', lg: 'center' }}
                selected={category === 'inspiration'}
                onClick={() => setCategory('inspiration')}
                color={category === 'world' ? 'green.900' : 'gray.360'}
                borderColor={
                  category === 'all' || category === 'inspiration'
                    ? 'brown.200'
                    : 'white'
                }
              >
                INSPIRAÇÃO SOB MEDIDA
              </NavButton>
            </Flex>

            <Flex gap="32px" direction={{ base: 'column', lg: 'row' }}>
              <NavButton
                justify={{ base: 'space-between', lg: 'center' }}
                selected={category === 'feedstock'}
                onClick={() => setCategory('feedstock')}
                color={category === 'world' ? 'green.900' : 'gray.360'}
                borderColor={
                  category === 'all' || category === 'feedstock'
                    ? 'green.250'
                    : 'white'
                }
              >
                MATÉRIA-PRIMA: CONHECIMENTO
              </NavButton>

              <NavButton
                justify={{ base: 'space-between', lg: 'center' }}
                selected={category === 'world'}
                onClick={() => setCategory('world')}
                color={category === 'world' ? 'green.900' : 'gray.360'}
                borderColor={
                  category === 'all' || category === 'world'
                    ? 'green.600'
                    : 'white'
                }
              >
                MUNDO BERNECK
              </NavButton>
            </Flex>
          </Flex>
        </Flex>

        <Section
          w="100%"
          zIndex={100}
          seeMore={{
            text: 'Veja mais conteúdos',
            link: `/canal-bnk/${category}`
          }}
        >
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
            <HeroPost post={props.posts[0]} category={category} />

            <Flex
              data-testid="intro-content-more"
              direction={{ lg: 'column' }}
              gap="44px"
              whiteSpace="nowrap"
              w={{ base: '90%', lg: 'auto' }}
              overflowX={{ base: 'scroll', lg: 'hidden' }}
              overflowY="hidden"
              align="center"
            >
              <SmallPost post={props.posts[1]} category={category} />
              <SmallPost post={props.posts[2]} category={category} />
              <SmallPost post={props.posts[2]} category={category} />
            </Flex>
          </Flex>
        </Section>
      </Flex>
    </Box>
  )
}

const HeroPost = (props: { category: Category; post: IPost }) => (
  <Post
    categoryPage={props.category}
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

const SmallPost = (props: { category: Category; post: IPost }) => {
  const { isMobile } = useMobile(1024)

  return (
    <Post
      categoryPage={props.category}
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
      w="100%"
      h="62px"
      border="2px solid"
      borderRadius="17px"
      color={'gray.350'}
      {...rest}
      bg={selected ? 'white' : 'transparent'}
      borderColor={selected ? 'transparent' : borderColor}
      _visited={{ color: '#436D5D' }}
      _hover={{ filter: 'brightness(0.98)', bg: 'white' }}
      _focus={{ outline: '0' }}
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
          fontSize={{ base: '11px', sm: '14px', '2xl': '16px' }}
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
