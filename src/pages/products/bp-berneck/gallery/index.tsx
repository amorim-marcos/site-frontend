/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import EnvGallery from 'views/Gallery'

export interface GalleryProps {
  filtersContext: {
    ambients: {
      title: string
      code: string
    }[]
    styles: {
      title: string
      code: string
    }[]
  }
  envs: {
    id: number
    name: string
    title: string
    style: string
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
  const queryAmbients = ctx.query.ambients
  const url = process.env.NEXT_PUBLIC_API_URL

  let ambientTypes: GalleryProps['filtersContext']['styles'] =
    await strapiClient({
      defaultOnEmpty: true,
      locale: ctx.locale,
      resource: 'ambient-types'
    })

  let ambientStyles: GalleryProps['filtersContext']['ambients'] =
    await strapiClient({
      defaultOnEmpty: true,
      locale: ctx.locale,
      resource: 'ambient-styles'
    })

  let envs: GalleryProps['envs'] = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: 'ambients'
  })

  let availableBps: GalleryProps['availableBps'] = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: 'products'
  })

  ambientTypes = ambientTypes.map((a: any) => {
    return {
      title: a.type,
      code: a.url_code
    }
  })

  ambientStyles = ambientStyles.map((a: any) => {
    return {
      title: a.style,
      code: String(a.id)
    }
  })

  envs = envs.map((gallery: any) => {
    return {
      id: gallery.id,
      title: gallery.title,
      name: gallery.place,
      bps: gallery.products.map((product: any) => product.name),
      type: gallery.ambient_type.url_code,
      style: String(gallery.ambient_styles[0].id),
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
      coloration: bp.product_coloration ?? '',
      collections: bp.product_collections
    }
  })

  const initialFilters = {
    nameSearched: '',
    bps: [],
    ambients: queryAmbients ? String(queryAmbients).split(',') : [],
    styles: []
  }

  return {
    props: {
      filtersContext: {
        styles: ambientStyles,
        ambients: ambientTypes
      },
      envs,
      availableBps,
      initialFilters
    }
  }
}
