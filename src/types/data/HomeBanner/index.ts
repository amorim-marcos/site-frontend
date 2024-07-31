export type HomeBannerItem = {
  // id?: number
  title: string
  subTitle?: string
  linkTo?: string
  custom_order?: number
  // published_at: string | Date
  created_at?: string | Date
  updated_at?: string | Date
  imageUrl: string
  isPost: boolean
  category: PostCategory
  color?: string
  url_code?: string
}

export type ImageProps = {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  created_at: string | Date
  url: string
}

export type HomeBannerResponse = {
  id: number
  title: string
  subTitle: string
  link: string
  custom_order: number
  published_at: string | Date
  created_at: string | Date
  updated_at: string | Date
  banner_image: ImageProps
}

export type PostCategory = {
  name?: string
  id?: number
  color?: string
}
