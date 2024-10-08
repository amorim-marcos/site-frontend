import { ImageProps, ResponseDefaultProperties } from 'types/utils'

export interface CountryRepresentative extends ResponseDefaultProperties {
  country_name: string
  representatives: Representative[]
  country_svg_img: ImageProps
}

export interface Representative {
  id: number
  city: string
  client: string
  name_fantasy: string
  address: string
  contact: Contact[]
}

interface Contact {
  id: number
  contact_type: 'phone' | 'email' | 'WeChat' | 'WhatsApp'
  contact_text: string
}
