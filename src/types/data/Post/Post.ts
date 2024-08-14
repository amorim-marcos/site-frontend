import { ImageProps } from 'types/utils'
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
}
