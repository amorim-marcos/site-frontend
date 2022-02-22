import { GetServerSideProps } from 'next'

import { meiliSearch } from 'services'
import Search from 'views/Search'

export interface SearchProps {
  query: string
  results: {
    pages: unknown[]
    products: unknown[]
    posts: unknown[]
  }
}

export default function SearchPage(props: SearchProps) {
  return <Search {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug = '*' } = ctx.query

  const pages = await meiliSearch({ index: 'pages', query: slug as string })
  const products = await meiliSearch({
    index: 'products',
    query: slug as string
  })
  const posts = await meiliSearch({ index: 'posts', query: slug as string })

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
