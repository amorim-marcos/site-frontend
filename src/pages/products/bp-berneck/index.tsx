/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import BpBerneckView from 'views/products/bp-berneck'

import type { Gallery } from 'types/data'

export interface BpBerneckProps {
  galleries: Gallery[]
  carrouselImages: string[]
}

export default function BpBerneck(props: BpBerneckProps) {
  return <BpBerneckView {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url = process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL

  let banners = await strapiClient({
    resource: 'bp-page-banners'
  })
  
  let galleries: Gallery[] = await strapiClient({
    resource: 'highlighted-ambient-types'
  })

  galleries = galleries.map((gallery: any, i: number) => {
    return {
      id: i,
      title: gallery.ambient_type.type,
      bgColor: gallery.color,
      backgroundImage: `${url}${gallery.image.url}`,
      ambientType: {
        name: gallery.ambient_type.type,
        code: gallery.ambient_type.url_code
      }
    }
  })

  return {
    props: {
      galleries,
      carrouselImages: banners.map((banner:any) => `${url}${banner.banner_image.url}`)
    }
  }
}
