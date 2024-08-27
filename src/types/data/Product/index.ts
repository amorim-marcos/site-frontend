import { ImageProps, ResponseDefaultProperties } from 'types/utils'

export interface ProductResponse extends ResponseDefaultProperties {
  id: number
  name: string
  description: string
  presentation: string
  video_url: string
  product_texture: string
  product_coloration: string
  url_code: string
  scale: number
  uses_and_applications: string
  complete_name: string
  available_at: AvailableAt[]
  background_image: ImageProps
  pattern_image: ImageProps
}

export interface AvailableAt {
  id: number
  panel_type: PanelType
}

export interface PanelType {
  id: number
  name: string
  created_at: string | Date
  update_at: string | Date
  background_image_small: ImageProps
}
