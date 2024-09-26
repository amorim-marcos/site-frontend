export interface ResponseDefaultProperties {
  created_at: string | Date
  updated_at: string | Date
  locale?: keyof typeof LocaleOptions
}

export enum LocaleOptions {
  'pt-BR' = 'pt-BR',
  en = 'en',
  'es' = 'es',
  'zh-CN' = 'zh-CN'
}

export interface FileProps {
  id: number
  name: string
  alternativeText: string
  hash: string
  ext: string
  mime: string
  // formats: any
  url: string
  size: number
  provider: 'local' | string
  created_at: string | Date
  updated_at: string | Date
}

// describes the Image common props
export interface ImageProps extends FileProps {
  caption: string
  width: number
  height: number
  formats: {
    thumbnail: ImageFormat
    large: ImageFormat
    medium: ImageFormat
    small: ImageFormat
  }
}

// describes a image format props
export interface ImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  url: string
}

export interface NameValueProps {
  name: string
  value?: string
}

export interface PathnamesTranslations {
  [locale: 'pt-BR' | 'en' | 'es' | 'zh-CN' | string]: {
    [path: string]: string
  }
}

export interface Localization {
  id: number
  // locale: keyof typeof LocateOptions
  locale: 'en' | 'pt-BR' | 'es' | 'zh-CN'
}
