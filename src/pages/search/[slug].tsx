import { GetServerSideProps } from 'next'
import { loadTranslations } from 'ni18n'

import { meiliSearch } from 'services'
import Search from 'views/Search'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'

export interface SearchProps {
  query: string
  results: {
    pages: {
      id: string
      header_text?: string
      header_subtitle?: string
      description?: string
      hdf_berneck?: string
      mdf_berneck?: string
      mdp_berneck?: string
      year_description?: string
    }[]
    products: {
      id: number
      name: string
      url_code: string
      pattern_image_url: string
      product_collections_name: string
    }[]
    posts: {
      id: number
      title: string
      content: string
      category: string
      url_code: string
      cover_url: string
    }[]
  }
}

export default function SearchPage(props: SearchProps) {
  return <Search {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug = '*' } = ctx.query
  const locale = ctx.locale
  const url = process.env.NEXT_PUBLIC_API_URL
  let res

  res = await meiliSearch({
    index: 'pages',
    query: slug as string,
    options: { filter: `locale = ${locale}` }
  })

  console.log(res)

  const pages: SearchProps['results']['pages'] = res.hits.map((item) => ({
    id: item.id,
    header_text: item.header_text ?? null,
    header_subtitle: item.header_subtitle ?? null,
    description: item.description ?? null,
    hdf_berneck: item.hdf_berneck?.description ?? null,
    mdf_berneck: item.mdf_berneck?.description ?? null,
    mdp_berneck: item.mdp_berneck?.description ?? null,
    year_description: item.year?.slice(-1)[0].description ?? null
  }))

  res = await meiliSearch({
    index: 'products',
    query: slug as string,
    options: { filter: `locale = ${locale}` }
  })

  const products: SearchProps['results']['products'] = res.hits.map((item) => ({
    id: item.id,
    name: item.name,
    url_code: item.url_code,
    pattern_image_url: `${url}${item.pattern_image.url}`,
    product_collections_name: item.product_collections[0]
      ? item.product_collections[0].name
      : null
  }))

  res = await meiliSearch({
    index: 'posts',
    query: slug as string,
    options: { filter: `locale = ${locale}` }
  })

  const posts: SearchProps['results']['posts'] = res.hits.map((item) => ({
    id: item.id,
    title: item.title,
    content: item.content,
    category: item.category.name,
    url_code: item.url_code,
    cover_url: item.cover ? `${url}${item.cover.url}` : ''
  }))

  return {
    props: {
      query: slug,
      results: { pages, products, posts },
      ...(await loadTranslations(ni18nConfig, ctx.locale, nameSpaces))
    }
  }
}
