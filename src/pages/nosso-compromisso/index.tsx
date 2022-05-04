import { GetStaticProps } from 'next'
import { loadTranslations } from 'ni18n'
import { Compromise, CompromiseViewProps } from 'views/Compromise/Compromise'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'

export type OurCommitmentPageProps = CompromiseViewProps

export default function OurCommitmentPage(props: OurCommitmentPageProps) {
  return <Compromise page_content={props.page_content} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let page_content
  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/our-commitment?_locale=${locale}`
    )
    page_content = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/our-commitment`)
    page_content = await res.json()
  }

  if (page_content.sustainability_report) {
    page_content.sustainability_report.url =
      process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
      page_content.sustainability_report.url
  }

  if (page_content.ethical_code) {
    page_content.ethical_code.url =
      process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + page_content.ethical_code.url
  }

  if (page_content.esg_report_file) {
    page_content.esg_report_file.url =
      process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
      page_content.esg_report_file.url
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
