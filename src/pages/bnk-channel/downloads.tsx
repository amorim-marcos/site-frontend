import { GetStaticProps } from 'next'
import { loadTranslations } from 'ni18n'
import { DownloadsView } from 'views/Canal-BNK/Downloads/DownloadsView'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'
import { DownloadsPageResponse } from 'types/data/DownloadsPage'
import { FileProps } from 'types/utils'

type DownloadsItemProps = {
  download_type: { type: string }
  title: string
  id: number
  image: {
    url: string
  }
  file: {
    url: string
  }
}

export type DownloadItem = {
  id: number
  type: string
  description: string
  items: {
    description: string
    id: number
    title: string
    image: {
      url: string
    }
    file: {
      url: string
    }
    download_type: {
      description: string
      id: number
      type: string
    }
  }[]
}

type PageContent = {
  title: string
  header_text: string
  patterns_pack_title: string
  patterns_pack_text: string
  patterns_pack_download_url: string | null
  patterns_pack_download_jpgs_url: string | null
  patterns_pack_download_skps_url: string | null
  patterns_pack_download_jpgs: FileProps
  patterns_pack_download_skps: FileProps
  sections: DownloadItem[]
}

export type DonwloadsPageProps = {
  page_content: PageContent
}
export default function DownloadsPage(props: DonwloadsPageProps) {
  return <DownloadsView page_content={props.page_content} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let downloadTypes: { id: number; type: string }[]
  let downloadItems: DownloadsItemProps[]
  let downloadPageContent: DownloadsPageResponse
  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/downloads?_locale=${locale}`
    )
    downloadItems = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/download-types?_locale=${locale}`
    )
    downloadTypes = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/downloads-page?_locale=${locale}`
    )

    downloadPageContent = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/downloads`)
    downloadItems = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/download-types`)
    downloadTypes = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/downloads-page`)

    downloadPageContent = await res.json()
  }

  const uploadBaseUrl = process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL

  const page_content: PageContent = downloadPageContent.page_title
    ? {
        title: downloadPageContent.page_title,
        header_text: downloadPageContent.header_text,
        patterns_pack_title: downloadPageContent.patterns_pack_title,
        patterns_pack_text: downloadPageContent.pattern_pack_text,
        patterns_pack_download_url: downloadPageContent.patterns_pack_file
          ? `${uploadBaseUrl}${downloadPageContent.patterns_pack_file.url}`
          : '',
        patterns_pack_download_jpgs_url:
          `${uploadBaseUrl}${downloadPageContent?.patterns_pack_file_jpgs?.url}` ||
          '',
        patterns_pack_download_skps_url:
          `${uploadBaseUrl}${downloadPageContent?.patterns_pack_file_skps?.url}` ||
          '',
        sections: [],
        patterns_pack_download_jpgs:
          downloadPageContent.patterns_pack_file_jpgs,
        patterns_pack_download_skps: downloadPageContent.patterns_pack_file_skps
      }
    : {
        title: '',
        header_text: '',
        patterns_pack_title: '',
        patterns_pack_text: '',
        patterns_pack_download_url: downloadPageContent.patterns_pack_file
          ? `${uploadBaseUrl}${downloadPageContent.patterns_pack_file.url}`
          : null,
        patterns_pack_download_jpgs_url:
          `${uploadBaseUrl}${downloadPageContent?.patterns_pack_file_jpgs?.url}` ||
          '',
        patterns_pack_download_skps_url:
          `${uploadBaseUrl}${downloadPageContent?.patterns_pack_file_skps?.url}` ||
          '',
        sections: [],
        patterns_pack_download_jpgs:
          downloadPageContent.patterns_pack_file_jpgs,
        patterns_pack_download_skps: downloadPageContent.patterns_pack_file_skps
      }

  if (downloadTypes.length) {
    page_content.sections = downloadTypes.map((i) => {
      const list: DownloadsItemProps[] = []
      downloadItems.forEach((element: DownloadsItemProps) => {
        if (element.download_type) {
          if (element.download_type.type === i.type) {
            if (element.image && element.file)
              list.push({
                ...element,
                image: {
                  url:
                    process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + element.image.url
                },
                file: {
                  url:
                    process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + element.file.url
                }
              })
          }
        }
      })
      return {
        items: list.sort((a, b) => a.title.localeCompare(b.title) * -1),
        ...i
      } as DownloadItem
    })
  }

  return {
    props: {
      page_content,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
