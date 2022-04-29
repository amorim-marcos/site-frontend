import { GetStaticProps } from 'next'
import { loadTranslations } from 'ni18n'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'
import PlusBerneckView from '../../views/products/plus-berneck'

export type PlusBerneckPageProps = {
  page_content: {
    header_subtitle: string
    header_text: string
    quality_norms_text: string
    section1_text: string
    section1_title: string
    section2_text: string
    section2_title: string
    body_proof: {
      absorbed_water: number
      absorption: number
      id: number
      item: string
      swelling: number
      thickness_increase: number
    }[]
    quality_norms: {
      id: number
      norm: string
    }[]
    test_points: {
      id: number
      point_text: string
    }[]
    important_points: {
      point_text: string
    }[]
    page_title: string
  }
}

export default function PlusBerneckPage(props: PlusBerneckPageProps) {
  return (
    <PlusBerneckView
      title={props.page_content.page_title}
      description={props.page_content.section1_text}
      subtitle={props.page_content.header_subtitle}
      subtitleDescription={props.page_content.header_text}
      qualityStandards={props.page_content.quality_norms_text}
      section2Text={props.page_content.section2_text}
      section2Title={props.page_content.section2_title}
      testPoints={props.page_content.test_points.map((i) => i.point_text)}
      importantPoints={props.page_content.important_points.map(
        (i) => i.point_text
      )}
      body_proof={props.page_content.body_proof}
      abnt={
        props.page_content.quality_norms.length > 1
          ? ` • ${props.page_content.quality_norms[0].norm} • ${props.page_content.quality_norms[1].norm}`
          : props.page_content.quality_norms.length > 0
          ? props.page_content.quality_norms[0].norm +
            `• ${props.page_content.quality_norms[0].norm}`
          : ''
      }
    />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let page_content

  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/plus-berneck?_locale=${locale}`
    )
    page_content = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/plus-berneck`)
    page_content = await res.json()
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
