import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import { BPCatalogItem } from 'views/BPCatalog'

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
  assets: string
  uses_and_applications: string
  in_ambients: {
    id: number
    image_url: string
  }[]
  available_at: {
    id: number
    panel_type: string
    thickness: string
    dimensions: string
  }[]
  next: {
    name: string
    url_code: string
  }
  prev: {
    name: string
    url_code: string
  }
}

export default function CatalogItem(props: CatalogItemProps) {
  return <BPCatalogItem {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { item } = ctx.query
  const url = process.env.NEXT_PUBLIC_API_URL

  const productFetch = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: `products/${item}`
  })

  console.log(productFetch)

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
      available_at: productFetch.available_at.map((item: any) => {
        return {
          ...item,
          panel_type: item.panel_type.name
        }
      }),
      in_ambients: productFetch.in_ambients
        .filter((item: any) => item.gallery_of_images.length > 0)
        .map((item: any) => {
          return {
            id: item.id,
            image_url: `${url}${item.gallery_of_images[0].url}`
          }
        }),
      assets: `${url}${productFetch.assets.url}`,
      uses_and_applications: productFetch.uses_and_applications,
      prev: {
        name: productFetch.prev.name,
        url_code: productFetch.prev.url_code
      },
      next: {
        name: productFetch.next.name,
        url_code: productFetch.next.url_code
      }
    } as CatalogItemProps
  }
}
