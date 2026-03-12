/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import BpBerneckView from 'views/products/bp-berneck'

import type { Gallery } from 'types/data'
import { nameSpaces, ni18nConfig } from '../../../../ni18n.config'
import { loadTranslations } from 'ni18n'
import { BPsPageResponse, BPPageBannerResponse } from 'types/data/BPsPage'

export type BPPageBanner = {
  link: string
  banner_image: string
}

export interface BpBerneckProps {
  galleries: Gallery[]
  banners: BPPageBanner[]
  bpsPageData: BPsPageResponse | undefined
}

export default function BpBerneck(props: BpBerneckProps) {
  return <BpBerneckView {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL

  let bpsPageResponse: BPsPageResponse | null = null

  try {
    bpsPageResponse = await strapiClient({
      resource: 'bps-page',
      locale: context.locale
    })
  } catch (error) {
    console.log('error when trying to get bps page data', error)
  }

  const rawBanners: BPPageBannerResponse[] = await strapiClient({
    resource: 'bp-page-banners',
    locale: context.locale,
    query: [{ _sort: 'custom_order:ASC' }]
  })

  const banners =
    rawBanners && typeof rawBanners.sort === 'function'
      ? [...rawBanners].sort((a, b) => {
          if (a.custom_order == null) return 1
          if (b.custom_order == null) return -1
          return a.custom_order - b.custom_order
        })
      : rawBanners

  let galleries: Gallery[] = await strapiClient({
    resource: 'highlighted-ambient-types',
    locale: context.locale
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
          ? banners.map((banner: BPPageBannerResponse) => ({
              link: banner.link,
              banner_image: `${url}${banner.banner_image.url}`
            }))
          : [],
      bpsPageData: bpsPageResponse,
      ...(await loadTranslations(ni18nConfig, context.locale, nameSpaces))
    }
  }
}
