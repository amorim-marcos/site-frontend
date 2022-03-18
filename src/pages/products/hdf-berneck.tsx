import { GetStaticProps } from 'next'
import HdfBerneckView from 'views/products/hdf-berneck'

export type ProductProps = {
  description: string
  finishes: {
    finish: string
    id: number
  }[]
  subtitle: string
  subtitle_description: string
  technical_sheet: {
    url: string
    id: number
  }
  thickness: string
  _length: string
  _width: string
  uses_and_applications: string
}

export type HdfBerneckPageProps = {
  page_content: {
    hdf_berneck: ProductProps
    hdf_berneck_plus: ProductProps
  }
}

export default function HdfBerneckPage(props: HdfBerneckPageProps) {
  return (
    <HdfBerneckView
      hdf={{
        title: 'HDF Berneck',
        subTitle: props.page_content.hdf_berneck.subtitle,
        description: props.page_content.hdf_berneck.description,
        finishes: props.page_content.hdf_berneck.finishes.map((f) => {
          return f.finish
        }),
        subTitleDescription:
          props.page_content.hdf_berneck.subtitle_description,
        usesAndApplications:
          props.page_content.hdf_berneck.uses_and_applications,
        dimensions: {
          length: props.page_content.hdf_berneck._length,
          width: props.page_content.hdf_berneck._width,
          thickness: props.page_content.hdf_berneck.thickness
        },
        technical_sheet:
          process.env.NEXT_PUBLIC_API_URL +
          props.page_content.hdf_berneck.technical_sheet.url
      }}
      hdf_plus={{
        title: 'HDF PLUS BERNECK®',
        description: props.page_content.hdf_berneck_plus.description,
        subTitle: props.page_content.hdf_berneck_plus.subtitle,
        finishes: props.page_content.hdf_berneck_plus.finishes.map((f) => {
          return f.finish
        }),
        subTitleDescription:
          props.page_content.hdf_berneck_plus.subtitle_description,
        usesAndApplications:
          props.page_content.hdf_berneck_plus.uses_and_applications,
        dimensions: {
          length: props.page_content.hdf_berneck_plus._length,
          width: props.page_content.hdf_berneck_plus._width,
          thickness: props.page_content.hdf_berneck_plus.thickness
        },
        technical_sheet:
          process.env.NEXT_PUBLIC_API_URL +
          props.page_content.hdf_berneck_plus.technical_sheet.url
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
      process.env.NEXT_PUBLIC_API_URL + `/hdf-berneck?_locale=${locale}`
    )
    page_content = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/hdf-berneck`)
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
