/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import EnvGallery from 'views/EnvGallery'

export interface GalleryProps {
  envs: {
    id: number
    type: string
    name: string
    image_url: string
    bps: string[]
  }[]
  availableBps: {
    name: string
    product_texture: string
    pattern_image: string
    launch: string
    scale: number
    collections: any[]
    coloration: string
  }[]
}

export default function Gallery(props: GalleryProps) {
  return <EnvGallery {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = process.env.NEXT_PUBLIC_API_URL

  let galleries: GalleryProps['envs'] = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: 'ambients'
  })

  let availableBps: GalleryProps['availableBps'] = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: 'products'
  })

  galleries = galleries.map((gallery: any) => {
    return {
      id: gallery.id,
      name: gallery.place,
      bps: gallery.products.map((product: any) => product.name),
      type: gallery.ambient_type.type,
      url_code: gallery.url_code,
      image_url: `${url}${gallery.gallery_of_images[0].url}`
    }
  })

  availableBps = availableBps.map((bp: any) => {
    return {
      id: bp.id,
      name: bp.name,
      pattern_image: `${url}${bp.pattern_image.url}`,
      product_texture: bp.product_texture.name,
      launch: bp.launch
        ? new Date(bp.launch).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0],
      scale: bp.scale ?? 0,
      coloration: bp.product_coloration,
      collections: bp.product_collections
    }
  })

  return {
    props: {
      envs: galleries,
      availableBps: availableBps
    }
  }
}
