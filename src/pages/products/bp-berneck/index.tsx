import { GetServerSideProps } from 'next'

import { strapiClient } from 'services'
import BpBerneckView from 'views/products/bp-berneck'

import type { Gallery } from 'types/data'

export interface BpBerneckProps {
  galleries: Gallery[]
}

export default function BpBerneck(props: BpBerneckProps) {
  return <BpBerneckView {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL

  const galleries = await strapiClient({
    resource: 'highlighted-ambient-types'
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = galleries.map((gallery: any, i: number) => {
    return {
      id: i,
      title: gallery.ambient_type.type,
      bgColor: gallery.color,
      backgroundImage: `${url}${gallery.image.url}`
    }
  })

  return {
    props: { galleries: data }
  }
}
