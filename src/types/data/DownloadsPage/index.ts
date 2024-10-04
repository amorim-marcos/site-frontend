import { FileProps, ImageProps, ResponseDefaultProperties } from 'types/utils'

export interface DownloadsPageResponse extends ResponseDefaultProperties {
  id: number
  page_title: string
  header_text: string
  patterns_pack_title: string
  pattern_pack_text: string
  patterns_pack_file?: FileProps
  patterns_pack_file_jpgs: FileProps
  patterns_pack_file_skps: FileProps
}

export interface DownloadItemResponse extends ResponseDefaultProperties {
  id: number
  title: string
  description: string
  file: FileProps
  image: ImageProps
  download_type: {
    id: number
    type: string
    description: string
  }
  issuu_embed_code?: string
}
