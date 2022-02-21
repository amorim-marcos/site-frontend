import { GetStaticProps } from 'next'
import Home from 'views/Home'
import { HomeProps } from '../views/Home/index'

export default function HomePage(props: HomeProps) {
  console.log(props.posts)
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let page_content

  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/posts?_locale=${locale}`
    )
    page_content = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts`)
    page_content = await res.json()
  }

  page_content = page_content.map((item: { cover: { url: string } }) => {
    return {
      ...item,
      cover: {
        url: process.env.NEXT_PUBLIC_API_URL + item.cover.url
      }
    }
  })

  return {
    props: {
      posts: page_content.reverse()
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
