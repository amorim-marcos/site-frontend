import { GetStaticProps } from 'next'
import { loadTranslations } from 'ni18n'
import BerneckPinusView from 'views/products/berneck-pinus'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'

export type SawnQuality = {
  col: string
  description: string
  id: number
  name: string
  number: number
  thickness: string
  uses_and_applications: string
  _length: string
  _width: string
  image: {
    url: string
  }
}

export type BerneckPinusPageProps = {
  page_content: {
    average_density: string
    average_measure: string
    created_at: string
    description: string
    header_subtitle: string
    header_subtitle_description: string
    id: number
    sawns_qualities: SawnQuality[]
    species: string
    standard_humity: string
    technical_sheet: string
    uses_and_applications: string
    page_title: string
    representatives_list: string
  }
}

export default function BerneckPinus(props: BerneckPinusPageProps) {
  return (
    <BerneckPinusView
      pinus={{
        title: props.page_content.page_title,
        subTitle: props.page_content.header_subtitle,
        description: props.page_content.description,

        subTitleDescription: props.page_content.header_subtitle_description,
        usesAndApplications: props.page_content.uses_and_applications,
        technical_sheet: props.page_content.technical_sheet,
        where_buy: props.page_content.representatives_list
      }}
      specifications={[
        {
          description: props.page_content.species,
          title: 'Espécie'
        },
        {
          description: props.page_content.standard_humity,
          title: 'Teor de Umidade padrão'
        },
        {
          description: props.page_content.average_density,
          title: 'Densidade Média 12% de umidade'
        },
        {
          description: props.page_content.average_measure,
          title: 'Variação de medida'
        }
      ]}
      qualityPinus={{ items: props.page_content.sawns_qualities }}
    />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let page_content
  let representatives_list

  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/berneck-pinus?_locale=${locale}`
    )
    page_content = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/representatives-list?_locale=${locale}`
    )
    representatives_list = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/berneck-pinus`)
    page_content = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/representatives-list`)
    representatives_list = await res.json()
  }

  page_content.technical_sheet = page_content.technical_sheet
    ? process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
      page_content.technical_sheet.url
    : ''

  page_content.representatives_list = representatives_list.pdf_list
    ? process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
      representatives_list.pdf_list.url
    : ''
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
