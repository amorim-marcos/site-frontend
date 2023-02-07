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

  let res

  try {
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/latest`)
    latestPosts = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/highlights`)
    highlights = await res.json()
  } catch (e) {
    // res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/latest`)
    latestPosts = []

    // res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/highlights`)
    highlights = []
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
      latest: latestTreated,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
      // ...clientNamespaces(ni18nConfig, ['components/header'])
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
