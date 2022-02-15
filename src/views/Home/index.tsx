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

export type HomeProps = {
  name: string
  imageSrc: string
}

export default function Home(props: HomeProps) {
  return (
    <Box maxWidth="1920px" marginX="auto" bg="white.100">
      {/* INICIO BANNER CAROUSEL */}
      <HomeBanner
        items={[
          {
            imageUrl: '/img/6-3_AEREA FABRICA_menor.png',
            category: 'INSPIRAÇÃO SOB MEDIDA',
            title: 'Como usar o círculo cromático para combinar padrões BP'
          },
          {
            imageUrl: '/img/6-3_AEREA FABRICA_menor.png',
            category: 'MUNDO BERNECK',
            title: 'BERNECK é destaque no Prêmio Valor 1000'
          },
          {
            imageUrl: '/img/6-3_AEREA FABRICA_menor.png',
            category: 'INSPIRAÇÃO SOB MEDIDA',
            title: '6 macrotendências que estão moldando nossas casas'
          }
        ]}
      />
      {/* FIM BANNER CAROUSEL */}

      {/* INICIO SECTION CANAL BNK */}
      <SectionChannelBNK />
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
            bannerSize: { base: '100px', sm: '150px', lg: '200px', xl: '300px' }
          },
          {
            title: 'PLUS BERNECK®',
            titleColor: 'white',
            subtitle: 'Linha de Painéis com Resistência Extra à Umidade',
            subtitleColor: 'brown.350',
            bgColor: 'green.400',
            srcImg: 'img/plus.png',
            onClick: () => alert('Ir para Produto'),
            bannerSize: { base: '100px', sm: '150px', lg: '200px', xl: '300px' }
          },
          {
            title: 'HDF BERNECK®',
            titleColor: 'gray.400',
            subtitle: 'Painel de Fibra de Alta Densidade',
            subtitleColor: 'gray.400',
            bgColor: 'brown.200',
            srcImg: 'img/hdf.png',
            onClick: () => alert('Ir para Produto'),
            bannerSize: { base: '100px', sm: '150px', lg: '200px', xl: '300px' }
          },
          {
            title: 'BP BERNECK®2',
            titleColor: 'white',
            subtitle: 'Laminado Melamínico Decorativo',
            subtitleColor: 'brown.200',
            bgColor: 'brown.300',
            srcImg: 'img/mdf.png',
            onClick: () => alert('Ir para BP'),
            bannerSize: { base: '100px', sm: '150px', lg: '200px', xl: '300px' }
          },
          {
            title: 'PLUS BERNECK®2',
            titleColor: 'white',
            subtitle: 'Linha de Painéis com Resistência Extra à Umidade',
            subtitleColor: 'brown.350',
            bgColor: 'green.400',
            srcImg: 'img/plus.png',
            onClick: () => alert('Ir para Produto'),
            bannerSize: { base: '100px', sm: '150px', lg: '200px', xl: '300px' }
          },
          {
            title: 'HDF BERNECK®2',
            titleColor: 'gray.400',
            subtitle: 'Painel de Fibra de Alta Densidade',
            subtitleColor: 'gray.400',
            bgColor: 'brown.200',
            srcImg: 'img/hdf.png',
            onClick: () => alert('Ir para Produto'),
            bannerSize: { base: '100px', sm: '150px', lg: '200px', xl: '300px' }
          }
        ]}
        numberEvidence={3}
      />
      {/* FIM Nossos Produtos */}

      {/* INICIO dos banners */}
      <SectionBanners
        banner1={{
          onClick: () => alert('Vai para Nossas Certificações'),
          imgSrc: '/assets/imgs/cultivamos_nossos_valores.png',
          title: 'CONHEÇA',
          description: 'Nossas certificações',
          titleColor: 'green.600',
          descriptionColor: 'white'
        }}
        banner2={{
          onClick: () => alert('Vai para Nossas Certificações'),
          imgSrc: '/img/reflorestamento.jpeg',
          title: 'CONHEÇA',
          description: 'Nossas certificações',
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

const PanelImage = (props: { imageSrc: string }) => (
  <Flex h="100%" justifyContent="center" alignItems="center" pos="relative">
    <Image
      h="100%"
      src={props.imageSrc}
      cursor={{ md: 'pointer' }}
      objectFit="cover"
      userSelect="none"
      draggable="false"
    />
  </Flex>
)
