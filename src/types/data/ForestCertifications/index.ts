import { ImageProps, ResponseDefaultProperties } from 'types/utils'

export interface ForestCertificationsResponse
  extends ResponseDefaultProperties {
  id: number
  forest_certifications: ForestCertification[]
  // TODO
  // remover description do response
  description: string
  forest_img: ImageProps | null
}

export interface ForestCertification {
  id: number
  description: string
  certifier: string
  title: string
  certificates: ForestCertificationItem[]
  forest_img: ImageProps
}

interface ForestCertificationItem {
  id: number
  certificate_name: string
  certificate_file: ImageProps
}
