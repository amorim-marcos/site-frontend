import { Category } from './Category'
import { Tag } from './Tag'

export type Post = {
  Title: string
  Content: string
  Category: Category
  Tags: Tag[]
  Cover: string
  date: Date
}
