import { GetStaticProps } from 'next'
import { loadTranslations } from 'ni18n'
import { ForestsView, ForestsViewProps } from 'views/Forests/Forests'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'

export type FlorestalDivisionPageProps = ForestsViewProps

export default function FlorestalDivisionPage(
  props: FlorestalDivisionPageProps
) {
  return (
    <ForestsView
      page_content={props.page_content}
      fireWarningText={props.fireWarningText}
    />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let page_content
  let fireWarning
  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/forest-division?_locale=${locale}`
    )
    page_content = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/fire-warning?_locale=${locale}`
    )
    fireWarning = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/forest-division`)
    page_content = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/fire-warning`)
    fireWarning = await res.json()
  }

  page_content.public_resume = page_content.public_resume.map(
    (item: { public_resume_file: { url: string } }) => {
      return {
        ...item,
        public_resume_file: {
          ...item.public_resume_file,
          url: process.env.NEXT_PUBLIC_API_URL + item.public_resume_file.url
        }
      }
    }
  )

  page_content.forest_production_highlights =
    page_content.forest_production_highlights.map(
      (item: { image: { url: string } }) => {
        return {
          ...item,
          image: {
            ...item.image,
            url:
              item.image === null
                ? null
                : process.env.NEXT_PUBLIC_API_URL + item.image.url
          }
        }
      }
    )

  return {
    props: {
      page_content,
      fireWarningText: fireWarning.warning_text,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
