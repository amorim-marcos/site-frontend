import { GetStaticProps } from 'next'
import BerneckTecaView from '../../views/products/berneck-teca'
import DOMPurify from 'isomorphic-dompurify'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'
import { loadTranslations } from 'ni18n'

export type BerneckTecaPageProps = {
  page_content: {
    header_subtitle: string
    header_subtitle_description: string
    description: string
    technical_sheet: string
    machinability: string
    uses_and_applications: string
    _length: string
    _width: string
    thickness: string
    page_title: string
  }
}

export default function BerneckTecaPage({
  page_content
}: BerneckTecaPageProps) {
  return <BerneckTecaView title={page_content.page_title} {...page_content} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let page_content

  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/berneck-teca?_locale=${locale}`
    )
    page_content = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/berneck-teca`)
    page_content = await res.json()
  }

  page_content.technical_sheet = page_content.technical_sheet[0]
    ? process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
      page_content.technical_sheet[0].url
    : null

  page_content.machinability = DOMPurify.sanitize(page_content.machinability)
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
