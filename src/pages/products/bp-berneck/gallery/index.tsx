/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'
import { loadTranslations } from 'ni18n'

import { strapiClient } from 'services'
import EnvGallery from 'views/Gallery'
import { nameSpaces, ni18nConfig } from '../../../../../ni18n.config'

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
    bps: {
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
    bps: number[]
    created_at: string
  }[]
  availableBps: {
    // check this
    id?: string
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
  const url = process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL

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

  ambientTypes =
    ambientTypes && typeof ambientTypes.map === 'function'
      ? ambientTypes.map((a: any) => {
          return {
            title: a.type,
            code: a.url_code
          }
        })
      : []

  ambientStyles =
    ambientStyles && typeof ambientStyles.map === 'function'
      ? ambientStyles.map((a: any) => {
          return {
            title: a.style,
            code: String(a.id)
          }
        })
      : []

  const ambientBps: GalleryProps['filtersContext']['bps'] = availableBps?.map(
    (bp) => {
      return {
        title: bp.name,
        code: bp.id!
      }
    }
  )

  envs =
    envs && typeof envs.map === 'function'
      ? envs
          .map((gallery: any) => {
            return {
              id: gallery.id,
              title: gallery.title,
              name: gallery.place,
              bps: gallery.products.map((product: any) => product.id),
              type: gallery.ambient_type.url_code,
              style: gallery.ambient_styles.map((gallery: any) =>
                gallery.id.toString()
              ),
              url_code: gallery.url_code,
              image_url: `${url}${
                gallery.gallery_of_images[gallery.gallery_of_images.length - 1]
                  .url
              }`,
              created_at: gallery.created_at
            }
          })
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
      : []

  availableBps =
    availableBps && typeof availableBps.map === 'function'
      ? availableBps.map((bp: any) => {
          return {
            id: bp.id,
            name: bp.name,
            pattern_image: `${url}${bp.pattern_image.url}`,
            product_texture: bp?.product_texture?.name || '',
            launch: bp.launch
              ? new Date(bp.launch).toISOString().split('T')[0]
              : new Date().toISOString().split('T')[0],
            scale: bp.scale ?? 0,
            coloration: bp.product_coloration ?? '',
            collections: bp.product_collections
          }
        })
      : []

  availableBps = availableBps.sort((a, b) => {
    return a['scale'] > b['scale'] ? 1 : a['scale'] < b['scale'] ? -1 : 0
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
        ambients: ambientTypes,
        bps: ambientBps
      },
      envs,
      availableBps,
      initialFilters,
      ...(await loadTranslations(ni18nConfig, ctx.locale, nameSpaces))
    }
  }
}
