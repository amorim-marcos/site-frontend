import { GetStaticProps } from 'next'
import MdpBerneckView from 'views/products/mdp-berneck'
import { ProductProps } from './hdf-berneck'

export type MdpBerneckPageProps = {
  page_content: {
    mdp_berneck: ProductProps
    mdp_berneck_plus: ProductProps
  }
}

export default function MdpBerneckPage(props: MdpBerneckPageProps) {
  return (
    <MdpBerneckView
      mdp={{
        title: props.page_content.mdp_berneck.page_title,
        subTitle: props.page_content.mdp_berneck.subtitle,
        description: props.page_content.mdp_berneck.description,
        finishes: props.page_content.mdp_berneck.finishes.map((f) => {
          return f.finish
        }),
        subTitleDescription:
          props.page_content.mdp_berneck.subtitle_description,
        usesAndApplications:
          props.page_content.mdp_berneck.uses_and_applications,
        dimensions: {
          length: props.page_content.mdp_berneck._length,
          width: props.page_content.mdp_berneck._width,
          thickness: props.page_content.mdp_berneck.thickness
        },
        technical_sheet:
          process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
          props.page_content.mdp_berneck.technical_sheet.url
      }}
      mdp_plus={{
        title: props.page_content.mdp_berneck_plus.page_title,
        description: props.page_content.mdp_berneck_plus.description,
        subTitle: props.page_content.mdp_berneck_plus.subtitle,
        finishes: props.page_content.mdp_berneck_plus.finishes.map((f) => {
          return f.finish
        }),
        subTitleDescription:
          props.page_content.mdp_berneck_plus.subtitle_description,
        usesAndApplications:
          props.page_content.mdp_berneck_plus.uses_and_applications,
        dimensions: {
          length: props.page_content.mdp_berneck_plus._length,
          width: props.page_content.mdp_berneck_plus._width,
          thickness: props.page_content.mdp_berneck_plus.thickness
        },
        technical_sheet:
          process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
          props.page_content.mdp_berneck_plus.technical_sheet.url
      }}
    />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let page_content

  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/mdp-berneck?_locale=${locale}`
    )
    page_content = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/mdp-berneck`)
    page_content = await res.json()
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
