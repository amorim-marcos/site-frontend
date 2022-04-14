import { GetStaticProps } from 'next'
import BerneckPinusView from 'views/products/berneck-pinus'

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
  }
}

export default function BerneckPinus(props: BerneckPinusPageProps) {
  return (
    <BerneckPinusView
      pinus={{
        title: props.page_content.page_title,
        subTitle: props.page_content.header_subtitle,
        description: props.page_content.header_subtitle_description,

        subTitleDescription: props.page_content.header_subtitle_description,
        usesAndApplications: props.page_content.uses_and_applications,
        technical_sheet: props.page_content.technical_sheet
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

  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/berneck-pinus?_locale=${locale}`
    )
    page_content = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/berneck-pinus`)
    page_content = await res.json()
  }

  page_content.technical_sheet =
    process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + page_content.technical_sheet.url

  page_content.sawns_qualities.forEach((item: SawnQuality) => {
    item.image.url = (item.image)?  process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + item.image.url : '/imgs/teste.jpg'
  })

  return {
    props: {
      page_content
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
