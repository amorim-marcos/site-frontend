import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import { EnvView } from 'views/Gallery/EnvView'

export interface GalleryItemProps {
  env: {
    id: number
    imgSrc: string
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
  const url = process.env.NEXT_PUBLIC_API_URL

  let envFetch = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: `ambients?url_code=${item}`
  })

  const otherEnvsFetch = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: 'ambients'
  })

  envFetch = envFetch[0]

  const env: GalleryItemProps['env'] = {
    id: envFetch.id,
    imgSrc: envFetch.gallery_of_images.map((img: any) => `${url}${img.url}`),
    title: envFetch.ambient_type.type,
    subTitle: envFetch.place,
    panels: envFetch.products.map((product: any) => {
      return {
        id: product.id,
        name: product.name,
        imgSrc: `${url}${product.pattern_image.url}`,
        product_texture: product.product_texture
      }
    })
  }

  const otherEnvs: GalleryItemProps['otherEnvs'] = otherEnvsFetch
    .filter((env: any) => env.id !== envFetch.id)
    .slice(0, 4)
    .map((env: any) => {
      return {
        id: env.id,
        url_code: env.url_code,
        imgSrc: `${url}${env.gallery_of_images[0].url}`,
        title: env.ambient_type.type,
        subTitle: env.place
      }
    })

  const imgs = envFetch.gallery_of_images.map((img: any) => {
    return {
      id: img.id,
      imgSrc: `${url}${img.url}`
    }
  })

  const tableContent = [
    {
      column1: 'Ano',
      column2: envFetch.informations.year
    },
    {
      column1: 'Ambiente',
      column2: envFetch.ambient_type.type
    },
    {
      column1: 'Estilo',
      column2: envFetch.ambient_styles.map((i: any) => i.style).join(', ')
    },
    {
      column1: 'Arquiteto',
      column2: envFetch.informations.architect
    },
    {
      column1: 'Fotógrafo',
      column2: envFetch.informations.photographer
    }
  ]

  return {
    props: {
      env,
      otherEnvs,
      imgs,
      tableContent
    }
  }
}
