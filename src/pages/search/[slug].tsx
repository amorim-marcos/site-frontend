import { GetServerSideProps } from 'next'
import { meiliSearch } from 'services'

export interface SearchProps {
  query: string
  results: {
    pages: unknown[]
    products: unknown[]
    posts: unknown[]
  }
}

export default function Search(props: SearchProps) {
  return <div>{JSON.stringify(props)}</div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug = '*' } = ctx.query

  const pages = await meiliSearch({ index: 'pages', query: slug as string })
  const products = await meiliSearch({ index: 'pages', query: slug as string })
  const posts = await meiliSearch({ index: 'pages', query: slug as string })

  const results = {
    pages: pages.hits,
    products: products.hits,
    posts: posts.hits
  }

  return {
    props: {
      query: slug,
      results
    }
  }
}
