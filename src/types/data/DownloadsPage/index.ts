import { FileProps, ResponseDefaultProperties } from 'types/utils'

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
