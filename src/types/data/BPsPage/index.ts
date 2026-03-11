import { ImageProps, ResponseDefaultProperties } from 'types/utils'

export interface BPsPageResponse extends ResponseDefaultProperties {
  id: number
  title: string
  metatag_title: string
  meta_description: string
  // todo
  // fix collection banners field name
  colection_banners: CollectionBanner[]
  catalog_bp_banner: CatalogBPBanner
}

export interface CollectionBanner {
  id: number
  title: string
  link: string
  banner_image: ImageProps
}

export interface CatalogBPBanner {
  id: number
  title: string
  subTitle: string
  link: string
  banner_image: ImageProps
}

export interface BPPageBannerResponse {
  id: number
  link: string
  custom_order: number | null
  banner_image: ImageProps
}
