import {
  Box,
  GridItem,
  Grid,
  Flex,
  Text,
  Image,
  Button
} from '@chakra-ui/react'
import PatternInfoPhoto from '@components/PatternInfoPhoto'
import Carousel from '@components/Carousel'
import CompletedTitle from '@components/CompletedTitle'
import BannerProducts from '@components/BannerProducts'
import ArrowIcon from '@components/Icons/ArrowIcon'
import PatternInfo from '@components/PatternInfo'
import { EarthIcon } from '@components/Icons'
import Contactusicon from '@components/Icons/Contactusicon'
import { SectionChannelBNK } from './sections/SectionChannelBNK'
import HomeBanner from '@components/HomeBanner'
import { useState } from 'react'
import { SectionProducts } from './sections/SectionProducts'
import { SectionBanners } from './sections/SectionBanners'
import { Connect } from 'views/Canal-BNK/sections'
import { useRouter } from 'next/router'

export type HomeProps = {
  posts: {
    id: number
    title: string
    content: string
    category: {
      id: number
      name: string
    }
    cover: {
      name: string
      url: string
    }
    tags: {
      id: number
      tag: string
    }[]
  }[]
}

export default function Home(props: HomeProps) {
  const router = useRouter()
  return (
    <Box maxWidth="1920px" marginX="auto" bg="white.100">
      {/* INICIO BANNER CAROUSEL */}
      {props.posts && props.posts.length >= 3 && (
        <HomeBanner
          items={[
            {
              imageUrl: props.posts[0].cover.url,
              category: props.posts[0].category.name,
              title: props.posts[0].title
            },
            {
              imageUrl: props.posts[1].cover.url,
              category: props.posts[1].category.name,
              title: props.posts[1].title
            },
            {
              imageUrl: props.posts[2].cover.url,
              category: props.posts[2].category.name,
              title: props.posts[2].title
            }
          ]}
        />
      )}
      {/* FIM BANNER CAROUSEL */}

      {/* INICIO SECTION CANAL BNK */}
      {props.posts.length >= 6 && (
        <SectionChannelBNK
          items={[
            {
              category: props.posts[3].category.name,
              title: props.posts[3].title,
              urlImage: props.posts[3].cover.url,
              color: 'brown.150'
            },
            {
              category: props.posts[4].category.name,
              title: props.posts[4].title,
              urlImage: props.posts[4].cover.url,
              color: 'brown.150'
            },
            {
              category: props.posts[5].category.name,
              title: props.posts[5].title,
              urlImage: props.posts[5].cover.url,
              color: 'brown.150'
            }
          ]}
        />
      )}
      {/* FIM SECTION CANAL BNK */}

      {/* INICIO Nossos Produtos */}
      <SectionProducts
        products={[
          {
            title: 'BP BERNECK®',
            titleColor: 'white',
            subtitle: 'Laminado Melamínico Decorativo',
            subtitleColor: 'brown.200',
            bgColor: 'brown.300',
            srcImg: 'img/mdf.png',
            onClick: () => alert('Ir para BP'),
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'bp-berneck'
          },
          {
            title: 'PLUS BERNECK®',
            titleColor: 'white',
            subtitle: 'Linha de Painéis com Resistência Extra à Umidade',
            subtitleColor: 'brown.350',
            bgColor: '#ACCC9F',
            srcImg: '/img/plus.png',
            onClick: () => alert('Ir para Produto'),
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'plus-berneck'
          },
          {
            title: 'HDF BERNECK®',
            titleColor: 'gray.400',
            subtitle: 'Painel de Fibra de Alta Densidade',
            subtitleColor: 'gray.400',
            bgColor: 'brown.200',
            srcImg: '/img/hdf.png',
            onClick: () => alert('Ir para Produto'),
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'hdf-berneck'
          },
          {
            title: 'MDF BERNECK®',
            titleColor: 'white',
            subtitle: 'Laminado Melamínico Decorativo',
            subtitleColor: 'brown.200',
            bgColor: 'brown.300',
            srcImg: '/img/mdf.png',
            onClick: () => alert('Ir para BP'),
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'mdf-berneck'
          },
          {
            title: 'MDP BERNECK®',
            titleColor: 'white',
            subtitle: 'Linha de Painéis com Resistência Extra à Umidade',
            subtitleColor: 'brown.350',
            bgColor: '#E0CBA5',
            srcImg: '/img/mdp.png',
            onClick: () => alert('Ir para Produto'),
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'mdp-berneck'
          },
          {
            title: 'BERNECK TECA®',
            titleColor: 'gray.400',
            subtitle: 'Painel de Fibra de Alta Densidade',
            subtitleColor: 'gray.400',
            bgColor: '#CFB8A7',
            srcImg: '/img/teca.png',
            onClick: () => alert('Ir para Produto'),
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'berneck-teca'
          },
          {
            title: 'BERNECK PINUS®',
            titleColor: 'gray.400',
            subtitle: 'Painel de Fibra de Alta Densidade',
            subtitleColor: 'gray.400',
            bgColor: '#A1B5A8',
            srcImg: '/img/pinus.png',
            onClick: () => alert('Ir para Produto'),
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'berneck-pinus'
          }
        ]}
        numberEvidence={3}
      />
      {/* FIM Nossos Produtos */}

      {/* INICIO dos banners */}
      <SectionBanners
        banner1={{
          onClick: () => router.push('/somos-berneck'),
          imgSrc: '/assets/imgs/cultivamos_nossos_valores.png',
          title: 'CONHEÇA',
          description: 'Nosso compromisso',
          titleColor: 'green.600',
          descriptionColor: 'white'
        }}
        banner2={{
          onClick: () => router.push('/somos-berneck'),
          imgSrc: '/img/reflorestamento.jpeg',
          title: 'CONHEÇA',
          description: 'Divisão Florestal',
          titleColor: 'green.600',
          descriptionColor: 'white'
        }}
      />

      {/* FIM Banners */}

      {/* INICIO Redes Sociais */}
      <Connect />
    </Box>
  )
}

// const PanelImage = (props: { imageSrc: string }) => (
//   <Flex h="100%" justifyContent="center" alignItems="center" pos="relative">
//     <Image
//       h="100%"
//       src={props.imageSrc}
//       cursor={{ md: 'pointer' }}
//       objectFit="cover"
//       userSelect="none"
//       draggable="false"
//     />
//   </Flex>
// )
