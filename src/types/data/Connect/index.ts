import { ResponseDefaultProperties } from 'types/utils'

export interface ConnectPageResponse extends ResponseDefaultProperties {
  id: number
  youtube_video_link: string
  linkedin_link: string
  instagram_posts: InstaPostItem[]
}

export interface InstaPostItem {
  id: number
  post_title: string
  post_url: string
}
