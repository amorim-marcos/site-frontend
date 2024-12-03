import {
  ImageProps,
  Localization,
  ResponseDefaultProperties
} from 'types/utils'
import { ProductResponse } from '../Product'

export interface Gallery {
  id: number
  title: string
  bgColor: string
  backgroundImage: string
  ambientType: {
    name: string
    code: string
  }
}

export interface GalleryResponse extends ResponseDefaultProperties {
  id: number
  place: string
  ambient_type: AmbientType
  url_code: string
  title: string
  informations: AmbientInformations
  // todo
  // remove retro compatibility
  gallery_imgs: AmbientGalleryImg[]
  gallery_of_images: ImageProps[]
  products: ProductResponse[]
  ambient_styles: AmbientStyle[]
  localizations: Localization[]
  custom_order: number
}

export interface AmbientType {
  id: number
  type: string
  url_code: string
  locale: string
  created_at: string | Date
}

export interface AmbientInformations {
  id: number
  year: number
  style: string
  architect: string
  photographer: string
}

export interface AmbientGalleryImg {
  id: number
  custom_order: number
  img: ImageProps
}

export interface AmbientStyle extends ResponseDefaultProperties {
  id: number
  style: string
  created_at: string | Date
  updated_at: string
}
