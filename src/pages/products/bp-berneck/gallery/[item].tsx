/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'
import { loadTranslations } from 'ni18n'

import { strapiClient } from 'services'
import { EnvView } from 'views/Gallery/EnvView'
import { nameSpaces, ni18nConfig } from '../../../../../ni18n.config'
import { GalleryResponse } from 'types/data/Gallery'

export interface GalleryItemProps {
  env: {
    id: number
    imgSrcs: string[]
    title: string
    subTitle: string
    panels: {
      id: string
      name: string
      imgSrc: string
      product_texture: string
    }[]
  }
  otherEnvs: {
    id: number
    url_code: string
    imgSrc: string
    title: string
    subTitle: string
  }[]
  imgs: {
    imgSrc: string
    id: number
  }[]
  tableContent: {
    column1: string
    column2: string
  }[]
}

export default function GalleryItem(props: GalleryItemProps) {
  return <EnvView {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { item } = ctx.query
  const uploadBaseUrl = process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL
  const translations = await loadTranslations(
    ni18nConfig,
    ctx.locale,
    nameSpaces
  )

  const t = translations.__ni18n_server__.resources[ctx.locale ?? 'pt-BR']
    .envView as any

  const envFetch: GalleryResponse[] = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    query: [{ url_code: item }],
    resource: 'ambients'
  })

  const otherEnvsFetch: GalleryResponse[] = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: 'ambients'
  })

  const formattedEnvFetch = envFetch[0]

  const env: GalleryItemProps['env'] = {
    id: formattedEnvFetch.id,
    imgSrcs: formattedEnvFetch.gallery_imgs.map(
      (img) => `${uploadBaseUrl}${img.img.url}`
    ),
    title: formattedEnvFetch.ambient_type.type,
    subTitle: formattedEnvFetch.title,
    panels: formattedEnvFetch.products.map((product: any) => {
      return {
        id: product.id,
        name: product.name,
        href: `/products/bp-berneck/catalog/${product.url_code}`,
        imgSrc: `${uploadBaseUrl}${product.pattern_image.url}`,
        product_texture: product.product_texture
      }
    })
  }

  const otherEnvs: GalleryItemProps['otherEnvs'] = otherEnvsFetch
    .filter((env) => env.id !== formattedEnvFetch.id)
    .slice(0, 4)
    .map((env) => {
      return {
        id: env.id,
        url_code: env.url_code,
        imgSrc: env.gallery_imgs[0]
          ? `${uploadBaseUrl}${env.gallery_imgs[0].img?.url}`
          : `${uploadBaseUrl}${env.gallery_of_images[0]?.url}`,
        title: env.ambient_type.type,
        subTitle: env.title
      }
    })

  let imgs = formattedEnvFetch.gallery_imgs.map((img) => {
    return {
      id: img.id,
      imgSrc: `${uploadBaseUrl}${img.img.url}`
    }
  })

  // todo
  // remove retro compatibility
  if (imgs.length === 0) {
    imgs = formattedEnvFetch.gallery_of_images.map((img) => {
      return {
        id: img.id,
        imgSrc: `${uploadBaseUrl}${img.url}`
      }
    })
  }

  const tableContent = [
    {
      column1: t['year'] ?? '',
      column2: formattedEnvFetch.informations?.year ?? null
    },
    {
      column1: t['environment'] ?? '',
      column2: formattedEnvFetch.ambient_type.type
    },
    {
      column1: t['style'] ?? '',
      column2: formattedEnvFetch.ambient_styles
        .map((i: any) => i.style)
        .join(', ')
    },
    {
      column1: t['architect'] ?? '',
      column2: formattedEnvFetch.informations?.architect ?? null
    },
    {
      column1: t['photographer'] ?? '',
      column2: formattedEnvFetch.informations?.photographer ?? null
    }
  ]

  return {
    props: {
      env,
      otherEnvs,
      imgs,
      tableContent,
      ...translations
    }
  }
}
