/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import { BPCatalogItem } from 'views/BPCatalog'

export interface CatalogItemProps {
  url_code: string
  complete_name: string
  name: string
  description: string
  img: string
  bg_img: string
  assets: string
  presentation: string
  uses_and_applications: string
  video_url: string
  ebook_url: string
  texture: {
    name: string
    icon: string
    description: string
    top_menu_image: string
  }
  combine_with: {
    name: string
    href: string
    img: string
  }[]
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

  return {
    props: {
      complete_name: productFetch.complete_name,
      url_code: productFetch.url_code,
      name: productFetch.name,
      description: productFetch.description,
      img: `${url}${productFetch.pattern_image.url}`,
      bg_img: `${url}${productFetch.background_image.url}`,
      assets: `${url}${productFetch.assets?.url}`,
      presentation: productFetch.presentation,
      uses_and_applications: productFetch.uses_and_applications,
      video_url: productFetch.video_url,
      ebook_url: `${url}${productFetch.ebook?.url}`,
      texture: {
        name: productFetch.product_texture.name,
        description: productFetch.product_texture.description,
        icon: `${url}${productFetch.product_texture.small_icon_image.url}`,
        top_menu_image: `${url}${productFetch.product_texture.top_menu_image.url}`
      },
      combine_with: productFetch.combine_with.map((item: any) => ({
        name: item.complete_name,
        href: `/products/bp-berneck/catalog/${item.url_code}`,
        img: `${url}${item.pattern_image.url}`
      })),
      available_at: productFetch.available_at.map((item: any) => ({
        ...item,
        panel_type: item.panel_type.name
      })),
      in_ambients: productFetch.in_ambients
        .filter((item: any) => item.gallery_of_images.length > 0)
        .map((item: any) => ({
          id: item.id,
          image_url: `${url}${item.gallery_of_images[0].url}`
        })),
      prev: {
        name: productFetch.prev.complete_name,
        url_code: productFetch.prev.url_code
      },
      next: {
        name: productFetch.next.complete_name,
        url_code: productFetch.next.url_code
      }
    } as CatalogItemProps
  }
}
