import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import BPCatalog from 'views/BPCatalog'

export interface BpBerneckProps {
  bps: {
    id: number
    name: string
    product_texture: string
    pattern_image: string
    url_code: string
  }[]
}

export default function BpBerneck(props: BpBerneckProps) {
  return <BPCatalog {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = process.env.NEXT_PUBLIC_API_URL

  const products = await strapiClient({
    defaultOnEmpty: true,
    locale: ctx.locale,
    resource: 'products'
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = products.map((product: any) => {
    return {
      id: product.id,
      name: product.name,
      url_code: product.url_code,
      product_texture: product.product_texture.name,
      pattern_image: `${url}${product.pattern_image.url}`
    }
  })

  return {
    props: { bps: data }
  }
}
