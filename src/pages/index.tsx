import { GetStaticProps } from 'next'
import Home from 'views/Home'
import { HomeProps } from '../views/Home/index'
import { ni18nConfig, nameSpaces } from '../../ni18n.config'
import { loadTranslations } from 'ni18n'
import { HomeBannerResponse, PostCategory } from 'types/data/HomeBanner'

export type TreatedHighlight = {
  title: string
  content?: string
  category?: PostCategory
  locale?: string
  created_at?: string | Date
  updated_at?: string | Date
  url_code?: string
  is_highlighted?: boolean
  cover: {
    url: string
  }
  tags?: []
  isPost: boolean
  custom_order?: number
  link?: string
  subTitle?: string
}

type PostProps = {
  id: number
  title: string
  content: string
  category: PostCategory
  locale: string
  created_at: string | Date
  updated_at: string | Date
  published_at: string | Date
  url_code: string
  is_highlighted: boolean
  cover: {
    id: number
    name: string
    url: string
  }
  tags: []
  localizations: []
}

export default function HomePage(props: HomeProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale

  let postHighlights: PostProps[]
  let homeBanners: HomeBannerResponse[]

  let latestPosts

  let res
  let postHighlightsResponse
  let homeBannersResponse

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL

    res = await fetch(baseUrl + `/posts/latest`)
    latestPosts = await res.json()

    const sortByCustomOrderQuery = `_sort=custom_order:asc`
    const sortByCreatedAtQuery = `_sort=created_at:desc`
    postHighlightsResponse = await fetch(
      baseUrl + `/posts/highlights?${sortByCreatedAtQuery}`
    )
    postHighlights = await postHighlightsResponse.json()

    homeBannersResponse = await fetch(
      baseUrl + `/home-banners?${sortByCustomOrderQuery}`
    )
    homeBanners = await homeBannersResponse?.json()

    // todo
    // remove logs
    console.log('postHighlights: ', postHighlights)
    console.log('home banners: ', homeBanners)
  } catch (e) {
    console.log('error when trying to get post highlights: ', e)

    // res = await fetch(baseUrl + `/posts/latest`)
    latestPosts = []

    homeBanners = []

    // res = await fetch(baseUrl + `/posts/highlights`)
    postHighlights = []
  }

  const uploadBaseUrl = process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL

  const homeBannersTreated: TreatedHighlight[] = []

  homeBanners?.forEach((banner) => {
    homeBannersTreated.push({
      ...banner,
      isPost: false,
      cover: {
        url: banner?.banner_image
          ? uploadBaseUrl + banner?.banner_image?.url
          : ''
      }
    })
  })

  const postHighlightsTreated: TreatedHighlight[] = []

  if (typeof postHighlights.forEach !== 'function') {
    postHighlights = []
  }

  postHighlights.forEach((item) => {
    if (item !== null && item.category !== null && item.cover !== null) {
      postHighlightsTreated.push({
        ...item,
        isPost: true,
        cover: {
          url: item.cover === null ? '' : uploadBaseUrl + item.cover.url
        }
      })
    }
  })

  const formattedBannerItems: TreatedHighlight[] = [
    ...homeBannersTreated,
    ...postHighlightsTreated
  ]

  console.log('formatted banner items: ', formattedBannerItems)

  const latestTreated: object[] = []

  if (latestPosts.length > 0) {
    latestPosts.forEach((item: { cover: { url: string } }) => {
      if (item !== null) {
        latestTreated.push({
          ...item,
          cover: {
            url:
              item.cover === null
                ? null
                : process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + item.cover.url
          }
        })
      }
    })
  }

  return {
    props: {
      highlights: formattedBannerItems,
      latest: latestTreated,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
      // ...clientNamespaces(ni18nConfig, ['components/header'])
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
