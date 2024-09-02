import {
  ImageProps,
  LocaleOptions,
  ResponseDefaultProperties
} from 'types/utils'
import { Category } from './Category'
import { Tag } from './Tag'

export type Post = {
  title: string
  content: string
  category: Category
  tags: Tag[]
  cover: string
  date: Date | string
  url_code: string
  cover_img: ImageProps
  meta_description: string
}

export interface PostResponse extends ResponseDefaultProperties {
  id: number
  title: string
  content: string
  category: Category
  url_code: string
  published_at: string | Date
  publication_date: string | Date
  is_highlighted: boolean
  meta_description: string
  cover: ImageProps
  tags: Tag[]
  localizations: string[]
}
