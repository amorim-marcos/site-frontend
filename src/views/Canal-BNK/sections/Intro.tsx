import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Link,
  ButtonProps
} from '@chakra-ui/react'

import { Arrow } from '@components/Icons'
import Post from '@components/Post'
import { useState } from 'react'

type Page = 'all' | 'inspiration' | 'feedstock' | 'world'

const COLORS = {
  all: 'brown.100',
  inspiration: 'brown.200',
  feedstock: 'green.200',
  world: 'green.600'
}

const BACKGROUND_IMAGES = {
  all: '/assets/imgs/canal-bnk/Canal_Berneck.svg',
  inspiration: '/assets/imgs/canal-bnk/canal_bnk_materia.svg',
  feedstock: '/assets/imgs/canal-bnk/canal_bnk_materia.svg',
  world: '/assets/imgs/canal-bnk/canal_bnk_mundo.svg'
}

const PAGE_INFO_COLOR = {
  all: '#436D5D',
  inspiration: 'green.900',
  feedstock: 'green.900',
  world: 'white'
}

const PAGE_INFO_TITLE = {
  all: '',
  inspiration: 'INSPIRAÇÃO SOB MEDIDA',
  feedstock: 'MATÉRIA-PRIMA: CONHECIMENTO',
  world: 'MUNDO BERNECK'
}

const PAGE_INFO_DESCRIPTION = {
  all: 'Nosso canal de conteúdos sobre madeira, inspiração e muito mais.',
  inspiration:
    'Sua fonte de inspiração com ambientes harmoniosos, combinações irresistíveis, nossas coleções e muito mais.',
  feedstock:
    'Conheça as diferenças e aplicações de nossos produtos e aprenda a utilizar o melhor de cada um em seus projetos.',
  world:
    'Fique por dentro de nossas notícias corporativas e acompanhe as novidades da BERNECK® e da indústria.'
}

const SEE_MORE_CONTENT_COLOR = {
  all: 'green.600',
  inspiration: 'grey.350',
  feedstock: 'green.100',
  world: 'green.100'
}

const POSTS = [
  {
    Title: 'BERNECK® é destaque no prêmio Valor 1000',
    Content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum iaculis nulla at pretium. Nulla id eleifend metus, in tristique enim. Nunc aliquet semper lacinia. Vestibulum eget arcu at odio accumsan faucibus. Integer blandit felis suscipit, feugiat dolor quis, pretium nulla. Vivamus vitae auctor augue. Duis et velit a purus condimentum tempor at sit amet quam. Quisque pulvinar varius arcu, ac egestas tortor pellentesque quis. Nunc eget velit sodales, tincidunt dolor vel, aliquet sem. Nulla facilisi.',
    Category: { Name: 'MUNDO BERNECK' },
    Tags: [
      {
        Tag: 'MUNDO BERNECK'
      }
    ],
    Cover: '/img/foto_matriz.png',
    date: new Date('2020-10-30')
  },
  {
    Title: 'Aposte na biofilia e potencialize o bem-estar',
    Content: '',
    Category: { Name: 'INSPIRAÇÃO SOB MEDIDA' },
    Tags: [
      {
        Tag: 'INSPIRAÇÃO SOB MEDIDA'
      }
    ],
    Cover: '/img/foto_matriz.png',
    date: new Date('2020-10-30')
  },
  {
    Title: 'MDP, MDF ou HDF: qual a melhor escolha?',
    Content: '',
    Category: { Name: 'MATÉRIA-PRIMA: CONHECIMENTO' },
    Tags: [
      {
        Tag: 'MATÉRIA-PRIMA: CONHECIMENTO'
      }
    ],
    Cover: '/img/foto_matriz.png',
    date: new Date('2020-10-30')
  },
  {
    Title: 'BERNECK® Talks traz novo ciclo de conversas no instagram0',
    Content: '',
    Category: { Name: 'MUNDO BERNECK' },
    Tags: [
      {
        Tag: 'MUNDO BERNECK'
      }
    ],
    Cover: '/img/foto_matriz.png',
    date: new Date('2020-10-30')
  }
]

export const Intro = () => {
  const [selected, setSelected] = useState<Page>('all')

  const handleOnClick = (n: Page) => setSelected(n)

  return (
    <Box pos="relative" overflow="hidden" bg={COLORS[selected]}>
      <Image
        src="/assets/imgs/canal-bnk/grafismo_esquerda.svg"
        w="232px"
        h="618px"
        pos="absolute"
        left="-80px"
        top="300px"
        opacity={
          selected === 'all' ? 0.6 : selected === 'inspiration' ? 0.9 : 0.2
        }
        filter={
          selected === 'all'
            ? 'brightness(1) contrast(0.5) sepia(1) grayscale(0.6) hue-rotate(350deg) saturate(1.4)'
            : selected === 'feedstock'
            ? 'brightness(0.5) contrast(0.2) sepia(1) grayscale(0.6) hue-rotate(110deg) saturate(1)'
            : ''
        }
      />

      <Image
        src="/assets/imgs/canal-bnk/grafismo_direita.svg"
        w="811px"
        h="929px"
        overflow="hidden"
        pos="absolute"
        right="-150px"
        top="0"
        opacity={
          selected === 'all' ? 0.6 : selected === 'inspiration' ? 0.9 : 0.2
        }
        filter={
          selected === 'all'
            ? 'brightness(1) contrast(0.5) sepia(1) grayscale(0.6) hue-rotate(350deg) saturate(1.4)'
            : selected === 'feedstock'
            ? 'brightness(0.5) contrast(0.2) sepia(1) grayscale(0.6) hue-rotate(110deg) saturate(1)'
            : ''
        }
      />

      <Flex w="100%" direction="column" pl="88px">
        <Flex
          data-testid="intro-header"
          pt="67px"
          w="100%"
          justifyContent="space-between"
        >
          <Image src={BACKGROUND_IMAGES[selected]} pb="42px" />

          <Flex gap="32px" pt="30px" pr="88px">
            <NavButton
              hideArrow
              selected={selected === 'all'}
              onClick={() => handleOnClick('all')}
              color={'green.900'}
              borderColor={selected === 'all' ? 'brown.200' : 'white'}
            >
              VER TUDO
            </NavButton>

            <NavButton
              selected={selected === 'inspiration'}
              onClick={() => handleOnClick('inspiration')}
              color={'grey.350'}
              borderColor={
                selected === 'all' || selected === 'inspiration'
                  ? 'brown.200'
                  : 'white'
              }
            >
              INSPIRAÇÃO SOB MEDIDA
            </NavButton>

            <NavButton
              selected={selected === 'feedstock'}
              onClick={() => handleOnClick('feedstock')}
              color={'grey.350'}
              borderColor={
                selected === 'all' || selected === 'feedstock'
                  ? 'green.250'
                  : 'white'
              }
            >
              MATÉRIA-PRIMA: CONHECIMENTO
            </NavButton>

            <NavButton
              selected={selected === 'world'}
              onClick={() => handleOnClick('world')}
              color={'grey.350'}
              borderColor={
                selected === 'all' || selected === 'world'
                  ? 'green.600'
                  : 'white'
              }
            >
              MUNDO BERNECK
            </NavButton>
          </Flex>
        </Flex>

        <Box>
          <Text
            as="h1"
            fontWeight={800}
            fontSize="21px"
            letterSpacing="2.1px"
            color={PAGE_INFO_COLOR[selected]}
          >
            {PAGE_INFO_TITLE[selected]}
          </Text>

          <Text
            as="h2"
            fontSize="20px"
            letterSpacing="-0.4px"
            color={PAGE_INFO_COLOR[selected]}
            w={selected === 'all' ? '256px' : '650px'}
          >
            {PAGE_INFO_DESCRIPTION[selected]}
          </Text>
        </Box>

        <Link
          alignSelf="flex-end"
          href={`/canal-bnk/${selected}`}
          pb="58px"
          pr="88px"
          color={SEE_MORE_CONTENT_COLOR[selected]}
          letterSpacing="-0.4px"
          fontSize="20x"
          cursor="pointer"
          _hover={{ filter: 'brightness(1.2)' }}
          zIndex={10}
        >
          <Flex align="center" gap="14px">
            Veja mais conteúdos
            <Arrow
              color={SEE_MORE_CONTENT_COLOR[selected]}
              width="11px"
              height="16px"
            />
          </Flex>
        </Link>

        {/* <Demo accentColor={'green'} /> */}

        <Flex data-testid="intro-content" pb="120px" gap="44px" zIndex={10}>
          <Post w={'1014px'} accentColor={'green.600'} post={POSTS[0]} />

          <Flex data-testid="intro-content-more" gap="44px" direction="column">
            <Post
              w={'684px'}
              imgPos="left"
              accentColor={'brown.200'}
              post={POSTS[1]}
            />
            <Post
              w={'684px'}
              imgPos="left"
              accentColor={'green.200'}
              post={POSTS[2]}
            />
            <Post
              w={'684px'}
              imgPos="left"
              accentColor={'green.600'}
              post={POSTS[3]}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

interface NavButtonProps extends ButtonProps {
  selected?: boolean
  hideArrow?: boolean
}

const NavButton = (props: NavButtonProps) => {
  const { children, borderColor, selected, hideArrow, ...rest } = props

  return (
    <Button
      as="button"
      w="100%"
      h="62px"
      pl="38px"
      pr="36px"
      py="21px"
      border="2px solid"
      borderRadius="17px"
      {...rest}
      bg={selected ? 'white' : 'transparent'}
      borderColor={selected ? 'transparent' : borderColor}
      _visited={{ color: '#436D5D' }}
      _hover={{ filter: 'brightness(0.98)', bg: 'white' }}
      _focus={{ outline: 'none' }}
    >
      <Flex align="center" justify="center" gap="20px">
        <Text fontSize="16px" letterSpacing="2.4px" fontWeight={600} pt="2px">
          {children}
        </Text>

        {!hideArrow && (
          <Arrow color={borderColor as any} width="15px" height="21px" />
        )}
      </Flex>
    </Button>
  )
}

const Demo = (props: { accentColor: string }) => (
  <>
    <Flex gap="25px">
      <Post
        h="520px"
        w="398px"
        titleFontSize="25px"
        imgPos="top"
        accentColor={props.accentColor}
        post={POSTS[2]}
      />

      <Post
        h="520px"
        w="398px"
        titleFontSize="25px"
        imgPos="bottom"
        accentColor={props.accentColor}
        post={POSTS[2]}
      />
      <Flex direction="column" gap="25px">
        <Post
          h="193px"
          w="684px"
          titleFontSize="25px"
          imgPos="left"
          accentColor={props.accentColor}
          post={POSTS[2]}
        />

        <Post
          h="193px"
          w="684px"
          titleFontSize="25px"
          imgPos="right"
          accentColor={props.accentColor}
          post={POSTS[2]}
        />
      </Flex>
    </Flex>

    <Box py="25px" />

    <Post
      showDate
      showPreview
      showShareOptions
      h="821px"
      w="1014px"
      accentColor={props.accentColor}
      post={POSTS[0]}
    />

    <Box py="25px" />
  </>
)
