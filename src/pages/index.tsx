import { GetStaticProps } from 'next'
import Home from 'views/Home'
import { HomeProps } from '../views/Home/index'

export default function HomePage(props: HomeProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let highlights
  let latestPosts

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
  } catch (e) {
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/latest`)
    latestPosts = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/highlights`)
    highlights = await res.json()
  }

  highlights = highlights.map((item: { cover: { url: string } }) => {
    return {
      ...item,
      cover: {
        url: process.env.NEXT_PUBLIC_API_URL + item.cover.url
      }
    }
  })

  if (latestPosts.length > 0 && latestPosts[0] !== null) {
    latestPosts = latestPosts.map((item: { cover: { url: string } }) => {
      return {
        ...item,
        cover: {
          url: process.env.NEXT_PUBLIC_API_URL + item.cover.url
        }
      }
    })
  } else {
    latestPosts = []
  }

  return {
    props: {
      highlights,
      latest: latestPosts
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
