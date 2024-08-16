/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'
import { loadTranslations } from 'ni18n'

import { strapiClient } from 'services'
import BPCatalog from 'views/BPCatalog'
import { nameSpaces, ni18nConfig } from '../../../../../ni18n.config'

export interface BpBerneckProps {
  bps: {
    id: any
    scale: number
    launch: string
    name: string
    complete_name: string
    product_texture: string
    pattern_image: string
    url_code: string
    coloration: number
    collections: number[]
    panelTypes: number[]
    available_at?: AvailableAt[]
  }[]
  filtersContext: {
    panels: {
      code: number
      title: string
      background_image: string
    }[]
    collections: {
      code: number
      title: string
      background_image: string
    }[]
    colorations: {
      code: number
      title: string
      background_image: string
    }[]
    nameSearched: string
  }
}

export interface AvailableAt {
  id: number
  panel_type: PanelType
}

export interface PanelType {
  id: number
  name: string
  created_at: string | Date
  update_at: string | Date
  background_image_small: ImageProps
}

export interface ImageProps {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  created_at: string | Date
  updated_at: string | Date
}

export default function BpBerneck(props: BpBerneckProps) {
  return <BPCatalog {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL

  let bps: BpBerneckProps['bps'] = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: 'products'
  })

  // todo
  // check the functional requirements for panel type
  const filteredProducts = bps.filter((product) =>
    product.available_at?.some(
      (available_at_item) => available_at_item.panel_type
    )
  )

  const allProductsPanelTypes = filteredProducts.map(
    (product) => product.available_at
  )

  let collections = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: 'product-collections'
  })

  let colorations = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: 'product-Colorations'
  })

  let panels = await strapiClient({
    defaultOnEmpty: true,
    resource: 'panel-types'
  })

  bps = filteredProducts

  bps =
    bps && typeof bps.map === 'function'
      ? bps.map((product: any) => {
          return {
            id: product.id,
            scale: product.scale,
            launch: product.launch,
            name: product.name,
            complete_name: product.complete_name,
            url_code: product.url_code,
            // todo
            // to check textures
            product_texture: product?.product_texture?.name || '',
            pattern_image: `${url}${product.pattern_image.url}`,
            collections:
              typeof product.product_collections.map === 'function'
                ? product.product_collections.map((i: any) => i.id)
                : [],
            coloration: product.product_coloration?.id ?? null,
            panelTypes:
              typeof product.available_at.map === 'function'
                ? product.available_at.map(
                    (i: any) => i.panel_type && i.panel_type.id
                  )
                : []
          }
        })
      : []

  collections =
    collections && typeof collections.map === 'function'
      ? collections.map((collection: any) => {
          return {
            title: collection.name,
            code: collection.id,
            release_date: collection.release_date || '',
            background_image:
              collection.background_image_small === null
                ? null
                : `${url}${collection.background_image_small.url}`
          }
        })
      : []

  colorations =
    colorations && typeof colorations.map === 'function'
      ? colorations.map((coloration: any) => {
          return {
            title: coloration.name,
            code: coloration.id,
            background_image:
              coloration.background_image_small === null
                ? null
                : `${url}${coloration.background_image_small.url}`
          }
        })
      : []

  panels =
    panels && typeof panels.map === 'function'
      ? panels.map((panel: any) => {
          return {
            title: panel.name,
            code: panel.id,
            background_image:
              panel.background_image_small === null
                ? null
                : `${url}${panel.background_image_small.url}`
          }
        })
      : []

  return {
    props: {
      bps,
      filtersContext: {
        panels,
        collections,
        colorations
      },
      ...(await loadTranslations(ni18nConfig, ctx.locale, nameSpaces))
    }
  }
}
