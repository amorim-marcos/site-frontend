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
  const queryAmbients = ctx.query.ambients
  const url = process.env.NEXT_PUBLIC_API_URL

  let ambientTypes: GalleryProps['filtersContext']['ambients'] =
    await strapiClient({
      defaultOnEmpty: true,
      locale: ctx.locale,
      resource: 'ambient-types'
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

  envs = envs.map((gallery: any) => {
    return {
      id: gallery.id,
      name: gallery.place,
      bps: gallery.products.map((product: any) => product.name),
      type: gallery.ambient_type.url_code,
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
        styles: styles,
        ambients: ambientTypes
      },
      envs,
      availableBps,
      initialFilters
    }
  }
}

const styles = [
  {
    title: 'Aconchegante',
    code: 'Aconchegante'
  },
  {
    title: 'Clássico',
    code: 'classico'
  },
  {
    title: 'Contemporâneo',
    code: 'contemporaneo'
  },
  {
    title: 'Escandinavo',
    code: 'escandinavo'
  },
  {
    title: 'Industrial',
    code: 'industrial'
  },
  {
    title: 'Lúdico',
    code: 'lúdico'
  },
  {
    title: 'Moderno',
    code: 'moderno'
  },
  {
    title: 'Natural',
    code: 'natural'
  },
  {
    title: 'Sóbrio',
    code: 'sobrio'
  },
  {
    title: 'Sofisticado',
    code: 'sofisticado'
  },
  {
    title: 'Urbano',
    code: 'urbano'
  }
]
