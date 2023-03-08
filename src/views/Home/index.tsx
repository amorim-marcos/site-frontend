import { useRouter } from 'next/router'

import { Box } from '@chakra-ui/react'

import HomeBanner from '@components/HomeBanner'
import Connect from '@components/Connect'

import { SectionChannelBNK } from './sections/SectionChannelBNK'
import { SectionProducts } from './sections/SectionProducts'
import { SectionBanners } from './sections/SectionBanners'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import ConditionalLanguageRender from '@components/ConditionalLanguageRender/ConditionalLanguageRender'

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
  youtubeLink?: string
  lastYoutubeVideo?: string
}

export default function Home(props: HomeProps) {
  const router = useRouter()

  const productsView = useTranslation('productsView')
  const homeView = useTranslation('homeView')
  const [lastYoutubeVideo, setLastYoutubeVideo] = useState<string>()
  const [youtubeLink, setYoutubeLink] = useState<string>()

  useEffect(() => {
    const fetchYoutubeData = async () => {
      let res

      try {
        res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/connect`)
        setYoutubeLink((await res.json()).youtube_video_link)

        res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&maxResults=1&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}`
        )
        res = await res.json()

        if (res.items?.length > 0) {
          setLastYoutubeVideo(res.items[0].id.videoId)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchYoutubeData()
  })

  return (
    <Box bg="white.100">
      {/* INICIO BANNER CAROUSEL */}
      <ConditionalLanguageRender>
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
      </ConditionalLanguageRender>
      {/* FIM BANNER CAROUSEL */}

      {/* INICIO SECTION CANAL BNK */}
      <ConditionalLanguageRender>
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
      </ConditionalLanguageRender>
      {/* FIM SECTION CANAL BNK */}

      {/* INICIO Nossos Produtos */}
      {/* BP | MDP | MDF | HDF | PLUS | PNUS | TECA */}
      <SectionProducts
        products={[
          {
            title: productsView.t('bpBerneck.title'),
            titleColor: 'white',
            subtitle: productsView.t('bpBerneck.description'),
            subtitleColor: 'brown.200',
            bgColor: 'brown.300',
            srcImg: '/img/produto_bp_banner.png',
            bannerSize: {
              base: '100px',
              sm: '150px',
              lg: '200px',
              xl: '350px'
            },
            urlLink: 'bp-berneck'
          },
          {
            title: productsView.t('mdpBerneck.title'),
            titleColor: 'gray.400',
            subtitle: productsView.t('mdpBerneck.description'),
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
            title: productsView.t('mdfBerneck.title'),
            titleColor: 'gray.400',
            subtitle: productsView.t('mdfBerneck.description'),
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
            title: productsView.t('hdfBerneck.title'),
            titleColor: 'gray.400',
            subtitle: productsView.t('hdfBerneck.description'),
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
            title: productsView.t('plusBerneck.title'),
            titleColor: 'white',
            subtitle: productsView.t('plusBerneck.description'),
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
            title: productsView.t('berneckPinus.title'),
            titleColor: 'green.900',
            subtitle: productsView.t('berneckPinus.description'),
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
            title: productsView.t('berneckTeca.title'),
            titleColor: 'gray.400',
            subtitle: productsView.t('berneckTeca.description'),
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
          }
        ]}
        numberEvidence={3}
      />
      {/* FIM Nossos Produtos */}

      {/* INICIO dos banners */}
      <SectionBanners
        banner1={{
          onClick: () => router.push('/our-commitment'),
          imgSrc: '/assets/imgs/banner_compromisso.jpg',
          title: homeView.t('knowOurCommitment.title'),
          description: homeView.t('knowOurCommitment.description'),
          titleColor: 'green.600',
          descriptionColor: 'white'
        }}
        banner2={{
          onClick: () => router.push('/forest-division'),
          imgSrc: '/img/conheca_divisao_florestal.png',
          title: homeView.t('knowOurFlorestalDivision.title'),
          description: homeView.t('knowOurFlorestalDivision.description'),
          titleColor: 'green.600',
          descriptionColor: 'white'
        }}
      />

      {/* FIM Banners */}

      {/* INICIO Redes Sociais */}

      <ConditionalLanguageRender>
        <Connect
          youtubeLink={youtubeLink}
          lastYoutubeVideo={lastYoutubeVideo}
        />
      </ConditionalLanguageRender>
    </Box>
  )
}
