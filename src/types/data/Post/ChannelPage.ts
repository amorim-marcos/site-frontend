import { ResponseDefaultProperties } from 'types/utils'

export interface ChannelVideos extends ResponseDefaultProperties {
  id: number
  title: string
  description: string
  yt_video_url: string
}
