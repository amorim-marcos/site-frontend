import { GetStaticProps } from 'next'
import Home from 'views/Home'
import { HomeProps } from '../views/Home/index'
import { ni18nConfig, nameSpaces } from '../../ni18n.config'
import { loadTranslations } from 'ni18n'

export default function HomePage(props: HomeProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let highlights
  let latestPosts
  let youtubeLink
  let lastYoutubeVideo

  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/posts/latest?_locale=${locale}`
    )
    latestPosts = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/posts/highlights?_locale=${locale}`
    )
    highlights = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/connect`)
    youtubeLink = await res.json()
    youtubeLink = youtubeLink.youtube_video_link

    res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&maxResults=1&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}`
    )
    res = await res.json()

    if (res.items?.length > 0) {
      lastYoutubeVideo = res.items[0].id.videoId
    }
  } catch (e) {
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/latest`)
    latestPosts = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/highlights`)
    highlights = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/connect`)
    youtubeLink = await res.json()
    youtubeLink = youtubeLink.youtube_video_link
  }

  const highlightsTreated: object[] = []

  if (typeof highlights.forEach !== 'function') {
    highlights = []
  }

  highlights.forEach(
    (item: { cover: { url: string }; category: { name: string } }) => {
      if (item !== null && item.category !== null && item.cover !== null) {
        highlightsTreated.push({
          ...item,
          cover: {
            url:
              item.cover === null
                ? null
                : process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + item.cover.url
          }
        })
      }
    }
  )

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
      highlights: highlightsTreated,
      youtubeLink,
      lastYoutubeVideo,
      latest: latestTreated,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
      // ...clientNamespaces(ni18nConfig, ['components/header'])
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
