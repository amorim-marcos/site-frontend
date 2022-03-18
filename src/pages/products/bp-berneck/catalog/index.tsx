/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import BPCatalog from 'views/BPCatalog'

export interface BpBerneckProps {
  bps: {
    id: any
    scale: number
    name: string
    complete_name: string
    product_texture: string
    pattern_image: string
    url_code: string
    coloration: number
    collections: number[]
    panelTypes: number[]
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
  }
}

export default function BpBerneck(props: BpBerneckProps) {
  return <BPCatalog {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = process.env.NEXT_PUBLIC_API_URL

  let bps: BpBerneckProps['bps'] = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: 'products'
  })

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
    locale: ctx.locale,
    resource: 'panel-types'
  })

  bps = bps.map((product: any) => {
    return {
      id: product.id,
      scale: product.scale,
      name: product.name,
      complete_name: product.complete_name,
      url_code: product.url_code,
      product_texture: product.product_texture.name,
      pattern_image: `${url}${product.background_image.url}`,
      collections: product.product_collections.map((i: any) => i.id),
      coloration: product.product_coloration?.id ?? null,
      panelTypes: product.available_at.map((i: any) => i.panel_type.id)
    }
  })

  collections = collections.map((collection: any) => {
    return {
      title: collection.name,
      code: collection.id,
      background_image: `${url}${collection.background_image_small.url}`
    }
  })

  colorations = colorations.map((coloration: any) => {
    return {
      title: coloration.name,
      code: coloration.id,
      background_image: `${url}${coloration.background_image_small.url}`
    }
  })

  panels = panels.map((panel: any) => {
    return {
      title: panel.name,
      code: panel.id,
      background_image: `${url}${panel.background_image_small.url}`
    }
  })

  return {
    props: {
      bps,
      filtersContext: {
        panels,
        collections,
        colorations
      }
    }
  }
}
