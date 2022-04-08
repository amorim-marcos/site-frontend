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
import { useRouter } from 'next/router'
import Connect from '@components/Connect'

type PostProps = {
  id: number
  title: string
  content: string
  category: {
    id: number
    name: string
    color: string
  }
  cover: {
    name: string
    url: string
  }
  tags: {
    id: number
    tag: string
  }[]
  url_code: string
}

export type HomeProps = {
  highlights: PostProps[]
  latest: PostProps[]
}

export default function Home(props: HomeProps) {
  const router = useRouter()

  return (
    <Box bg="white.100">
      {/* INICIO BANNER CAROUSEL */}
      {props.highlights && props.highlights.length > 0 && (
        <HomeBanner
          items={props.highlights.map((item) => {
            return {
              imageUrl: item.cover.url,
              category: {
                id: item.category.id,
                name: item.category.name
              },
              title: item.title,
              url_code: item.url_code,
              color: item.category.color
            }
          })}
        />
      )}
      {/* FIM BANNER CAROUSEL */}

      {/* INICIO SECTION CANAL BNK */}
      {props.latest.length > 0 && (
        <SectionChannelBNK
          items={props.latest.map((item, i) => {
            return {
              category: {
                id: item.category.id,
                name: item.category.name,
                color: item.category.color
              },
              title: item.title,
              urlImage: item.cover.url,
              url_code: item.url_code
            }
          })}
        />
      )}
      {/* FIM SECTION CANAL BNK */}

      {/* INICIO Nossos Produtos */}
      {/* BP | MDP | MDF | HDF | PLUS | PNUS | TECA */}
      <SectionProducts
        products={[
          {
            title: 'BP BERNECK®',
            titleColor: 'white',
            subtitle: 'Laminado Melamínico Decorativo',
            subtitleColor: 'brown.200',
            bgColor: 'brown.300',
            srcImg: 'img/produto_bp_banner.png',
            onClick: () => alert('Ir para BP'),
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '350px'
            },
            urlLink: 'bp-berneck'
          },
          {
            title: 'MDP BERNECK®',
            titleColor: 'gray.400',
            subtitle: 'Painel de Partículas de Média Densidade',
            subtitleColor: 'gray.400',
            bgColor: 'brown.200',
            srcImg: '/img/mdp.png',
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'mdp-berneck'
          },
          {
            title: 'MDF BERNECK®',
            titleColor: 'gray.400',
            subtitle: 'Painel de Fibra de Média Densidade',
            subtitleColor: 'gray.400',
            bgColor: 'brown.200',
            srcImg: '/img/mdf.png',
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'mdf-berneck'
          },
          {
            title: 'HDF BERNECK®',
            titleColor: 'gray.400',
            subtitle: 'Painel de Fibra de Alta Densidade',
            subtitleColor: 'gray.400',
            bgColor: 'brown.200',
            srcImg: '/img/hdf.png',
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'hdf-berneck'
          },
          {
            title: 'PLUS BERNECK®',
            titleColor: 'white',
            subtitle: 'Linha de Painéis com Resistência Extra à Umidade',
            subtitleColor: 'brown.350',
            bgColor: 'green.400',
            srcImg: '/img/plus.png',
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'plus-berneck'
          },
          {
            title: 'BERNECK PINUS®',
            titleColor: 'green.900',
            subtitle: 'Madeira Serrada de Pinus',
            subtitleColor: 'gray.400',
            bgColor: 'green.300',
            srcImg: '/img/pinus.png',
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'berneck-pinus'
          },
          {
            title: 'BERNECK TECA®',
            titleColor: 'gray.400',
            subtitle: 'Madeira Serrada de Teca',
            subtitleColor: 'gray.400',
            bgColor: 'brown.250',
            srcImg: '/img/teca.png',
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '300px'
            },
            urlLink: 'berneck-teca'
          },
        ]}
        numberEvidence={3}
      />
      {/* FIM Nossos Produtos */}

      {/* INICIO dos banners */}
      <SectionBanners
        banner1={{
          onClick: () => router.push('/nosso-compromisso'),
          imgSrc: '/assets/imgs/banner_compromisso.jpg',
          title: 'CONHEÇA',
          description: 'Nosso compromisso',
          titleColor: 'green.600',
          descriptionColor: 'white'
        }}
        banner2={{
          onClick: () => router.push('/divisao-florestal'),
          imgSrc: '/img/conheca_divisao_florestal.png',
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
