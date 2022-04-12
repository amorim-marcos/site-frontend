import { GetStaticProps } from 'next'
import {
  DownlodasView,
  DownloadItem
} from 'views/Canal-BNK/Downloads/DownloadsView'

export type DonwloadsPageProps = {
  page_content: DownloadItem[]
}
export default function DownloadsPage(props: DonwloadsPageProps) {
  return <DownlodasView items={props.page_content} />
}

export const getStaticProps: GetStaticProps = async (context) => {
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

  type PageContentProps = {
    id: number
    type: string
    items: DownloadsItemProps[]
  }

  const locale = context.locale
  let downloadTypes: { id: number; type: string }[]
  let downloadItems: DownloadsItemProps[]

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
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/downloads`)
    downloadItems = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/download-types`)
    downloadTypes = await res.json()
  }

  let page_content: PageContentProps[]

  if (downloadTypes.length) {
    page_content = downloadTypes.map((i) => {
      const list: DownloadsItemProps[] = []
      downloadItems.forEach((element: DownloadsItemProps) => {
        if (element.download_type) {
          if (element.download_type.type === i.type) {
            if (element.image && element.file)
              list.push({
                ...element,
                image: {
                  url: process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + element.image.url
                },
                file: {
                  url: process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + element.file.url
                }
              })
          }
        }
      })
      return { items: list.sort((a,b) => a.title.localeCompare(b.title) * -1), ...i }
    })
  } else {
    page_content = []
  }

  return {
    props: {
      page_content
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
