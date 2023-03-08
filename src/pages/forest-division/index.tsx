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
      fireWarningText={props.fireWarningText ? props.fireWarningText : ''}
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

  if (
    page_content.public_resume &&
    typeof page_content.public_resume.map === 'function'
  ) {
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
  } else {
    page_content.public_resume = []
  }

  if (
    page_content.forest_production_highlights &&
    typeof page_content.forest_production_highlights.map === 'function'
  ) {
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
  } else {
    page_content.forest_production_highlights = []
  }
  if (page_content.section2_img) {
    page_content.section2_img =
      process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + page_content.section2_img.url
  }
  if (page_content.section3_img) {
    page_content.section3_img =
      process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + page_content.section3_img.url
  }
  if (page_content.section4_img) {
    page_content.section4_img =
      process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + page_content.section4_img.url
  }
  if (page_content.section5_img) {
    page_content.section5_img =
      process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + page_content.section5_img.url
  }
  if (page_content.section6_img) {
    page_content.section6_img =
      process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + page_content.section6_img.url
  }

  return {
    props: {
      page_content,
      fireWarningText: fireWarning.warning_text ? fireWarning.warning_text : '',
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
