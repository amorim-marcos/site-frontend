import Head from 'next/head'
import { smartString } from 'utils/utils'

export type PageHeadProps = {
  page_title: string
  page_description?: string
  page_keywords?: string
  page_metatags?: Metatag[]
}

export type Metatag = {
  name: 'description' | 'keywords' | 'author' | 'copyright' | string
  content: string
}
export const PageHead = ({
  page_title,
  page_keywords,
  page_description,
  page_metatags
}: PageHeadProps) => {
  const getValidMetaValue = (
    metaValue?: string,
    defaultValue?: string,
    maxLength = 60
  ) => {
    const formattedTitle = smartString(metaValue, maxLength)

    // checks if translation is failed
    if (formattedTitle.startsWith('pageMetadata')) {
      return defaultValue || 'Berneck'
    }

    return formattedTitle
  }

  return (
    <Head>
      <title>{getValidMetaValue(page_title)}</title>
      {page_description && (
        <meta
          name="description"
          content={getValidMetaValue(page_description, 'Berneck Site', 350)}
        />
      )}

      {page_keywords && <meta name="keywords" content={page_keywords} />}

      {page_metatags?.map((tag) => (
        <meta key={tag.name} name={tag.name} content={tag.content} />
      ))}
    </Head>
  )
}
