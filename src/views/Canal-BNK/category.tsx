import { Flex, Text, Image, Link, LinkProps } from '@chakra-ui/react'

import Post from '@components/Post'
import { NavButton } from './sections/Intro'
import { Post as IPost } from 'types/data'
import { Category as ICategory } from './'

// ZauJulio
// Ref: Lazy loading
// Ref: https://www.better.dev/lazy-loading-next-js

export interface CategoryProps {
  posts?: IPost[]
  category: ICategory
}

export default function Category(props: CategoryProps) {
  return (
    <Flex
      data-testid="intro-header"
      w="100%"
      pt="67px"
      px={{ base: '0px', sm: '30px', xl: '0' }}
      pos="relative"
      align="center"
      justifyContent="space-between"
      zIndex={100}
      direction="column"
      bg={
        props.category === 'all'
          ? '#F6EFE3'
          : props.category === 'inspiration'
          ? '#E0CBA5'
          : props.category === 'feedstock'
          ? '#BBC4B9'
          : '#59993F'
      }
    >
      <Flex
        pb={{ base: '50px', xl: '0' }}
        align="center"
        gap={{ base: '27px', xl: '0' }}
        direction={{ base: 'column', xl: 'row' }}
      >
        <Flex
          direction="column"
          alignSelf={{ base: 'flex-start' }}
          w={{ base: '100%', sm: 'auto' }}
          pl={{ lg: '25px', xl: '0' }}
          px="20px"
        >
          <Image
            src={
              props.category === 'all'
                ? '/assets/imgs/canal-bnk/Canal_Berneck.svg'
                : props.category === 'inspiration'
                ? '/assets/imgs/canal-bnk/canal_bnk_materia.svg'
                : props.category === 'feedstock'
                ? '/assets/imgs/canal-bnk/canal_bnk_materia.svg'
                : '/assets/imgs/canal-bnk/canal_bnk_mundo.svg'
            }
            w={{ base: '206px', xl: '210px' }}
            pb={{ base: '29px', xl: '42px' }}
          />

          <Text
            as="h1"
            w="75%"
            fontWeight={800}
            fontSize="21px"
            letterSpacing="2.1px"
            color={props.category === 'world' ? 'green.900' : '#436D5D'}
          >
            Todos os conteúdos
          </Text>
        </Flex>

        <Flex
          w={{ base: '100%', xl: 'fit-content' }}
          pb={{ xl: '90px' }}
          top={{ xl: '30%' }}
          right={{ md: '88px' }}
          gap="32px"
          wrap="wrap"
          align={{ base: 'center', sm: 'flex-start' }}
          direction={{
            base: 'column',
            lg: 'row'
          }}
        >
          <LinkNav href="/canal-bnk/all">
            <NavButton
              hideArrow
              justify="center"
              color={'green.900'}
              selected={props.category === 'all'}
              borderColor={props.category === 'all' ? 'brown.200' : 'white'}
            >
              VER TUDO
            </NavButton>
          </LinkNav>

          <LinkNav href="/canal-bnk/inspiration">
            <NavButton
              justify={{ base: 'space-between', xl: 'center' }}
              selected={props.category === 'inspiration'}
              color={props.category === 'world' ? 'green.900' : 'grey.350'}
              borderColor={
                props.category === 'all' || props.category === 'inspiration'
                  ? 'brown.200'
                  : 'white'
              }
            >
              INSPIRAÇÃO SOB MEDIDA
            </NavButton>
          </LinkNav>

          <LinkNav href="/canal-bnk/feedstock">
            <NavButton
              justify={{ base: 'space-between', xl: 'center' }}
              selected={props.category === 'feedstock'}
              color={props.category === 'world' ? 'green.900' : 'grey.350'}
              borderColor={
                props.category === 'all' || props.category === 'feedstock'
                  ? 'green.250'
                  : 'white'
              }
            >
              MATÉRIA-PRIMA: CONHECIMENTO
            </NavButton>
          </LinkNav>

          <LinkNav href="/canal-bnk/world">
            <NavButton
              justify={{ base: 'space-between', xl: 'center' }}
              selected={props.category === 'world'}
              color={props.category === 'world' ? 'green.900' : 'grey.350'}
              borderColor={
                props.category === 'all' || props.category === 'world'
                  ? 'green.600'
                  : 'white'
              }
            >
              MUNDO BERNECK
            </NavButton>
          </LinkNav>
        </Flex>
      </Flex>

      <Flex gap="58px" direction="column" align="center" w="100%">
        {props.posts?.map((post) => (
          <Post
            showDate
            showShareOptions
            showPreview
            key={post.Title}
            post={post}
            h="821px"
            w={{ base: '100%', xl: '1014px' }}
            categoryPage={props.category}
          />
        ))}
      </Flex>
    </Flex>
  )
}

const LinkNav = (props: LinkProps) => (
  <Link
    {...props}
    _hover={{ textDecoration: 'none' }}
    w={{ base: '90%', md: 'auto' }}
  >
    {props.children}
  </Link>
)
