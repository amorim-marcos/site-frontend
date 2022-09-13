/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import BpBerneckView from 'views/products/bp-berneck'

import type { Gallery } from 'types/data'
import { nameSpaces, ni18nConfig } from '../../../../ni18n.config'
import { loadTranslations } from 'ni18n'

export type BPPageBanner = {
  link: string
  banner_image: string
}

export interface BpBerneckProps {
  galleries: Gallery[]
  banners: BPPageBanner[]
}

export default function BpBerneck(props: BpBerneckProps) {
  return <BpBerneckView {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL

  const banners = await strapiClient({
    resource: 'bp-page-banners'
  })

  let galleries: Gallery[] = await strapiClient({
    resource: 'highlighted-ambient-types'
  })

  galleries =
    galleries && typeof galleries.map === 'function'
      ? galleries.map((gallery: any, i: number) => {
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
      : []

  return {
    props: {
      galleries,
      banners:
        banners && typeof banners.map === 'function'
          ? banners.map((banner: any) => {
              return {
                link: banner.link,
                banner_image: `${url}${banner.banner_image.url}`
              }
            })
          : [],
      ...(await loadTranslations(ni18nConfig, context.locale, nameSpaces))
    }
  }
}
