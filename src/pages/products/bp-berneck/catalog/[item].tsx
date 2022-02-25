import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import { BPCatalogItem } from 'views/BPCatalog'
import { Wood } from 'views/BPCatalog/BPCatalogItem'

export interface CatalogItemProps {
  texture: {
    img: string
    icon: string
    name: string
    description: string
  }
  pattern: {
    name: string
    description: string
    about: string
    urlVideo: string
    urlEbook: string
    anothers: {
      name: string
      img: string
    }[]
  }
  mdp: Wood
  mdf: Wood
  next: string
  prev: string
}

export default function CatalogItem(props: CatalogItemProps) {
  return <BPCatalogItem {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { item } = ctx.query
  const url = process.env.NEXT_PUBLIC_API_URL

  let productFetch = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: `products?url_code=${item}`
  })

  productFetch = productFetch[0]

  return {
    props: {
      texture: {
        name: productFetch.name,
        description: productFetch.description,
        img: `${url}${productFetch.background_image.url}`,
        icon: `${url}${productFetch.product_texture.small_icon_image.url}`
      },
      pattern: {
        name: productFetch.product_texture.name,
        description: productFetch.product_texture.description,
        urlVideo: productFetch.video_url,
        urlEbook: `${url}${productFetch.ebook.url}`,
        about: productFetch.presentation,
        anothers: productFetch.combine_with.map((item: any) => {
          return {
            name: item.name,
            img: `${url}${item.pattern_image.url}`
          }
        })
      },
      mdp: { thickness: '12 / 15 / 18 / 25', size: '2,75 x 1,85' },
      mdf: { thickness: '6 / 9 / 15 / 18 / 25', size: '2,75 x 1,85' },
      next: 'SOLANUM',
      prev: 'VERTI'
    }
  }
}
