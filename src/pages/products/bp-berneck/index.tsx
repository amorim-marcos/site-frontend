import { GetServerSideProps } from 'next'

import BpBerneckView from 'views/products/bp-berneck'

import type { Gallery } from 'types/data'
import { strapiClient } from 'services'

export interface BpBerneckProps {
  galleries: Gallery[]
}

export default function BpBerneck(props: BpBerneckProps) {
  return <BpBerneckView {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const galleries = await strapiClient({
    locale: ctx.locale,
    resource: '/ambients'
  })

  console.log('galleries >>', galleries)

  return {
    props: { galleries: galleries }
  }
}

const items: Gallery[] = [
  {
    title: 'Cozinhas',
    bgColor: 'green.250',
    backgroundImage: '../img/Imagem70.png',
    id: 0
  },
  {
    title: 'Quartos',
    bgColor: 'brown.200',
    backgroundImage: '../img/Imagem70.png',
    id: 1
  },

  {
    title: 'Quartos2',
    bgColor: 'brown.200',
    backgroundImage: '../img/Imagem70.png',
    id: 2
  },

  {
    title: 'Quartos3',
    bgColor: 'brown.200',
    backgroundImage: '../img/Imagem70.png',
    id: 3
  },

  {
    title: 'Quartos4',
    bgColor: 'brown.200',
    backgroundImage: '../img/Imagem70.png',
    id: 4
  },

  {
    title: 'Quartos5',
    bgColor: 'brown.200',
    backgroundImage: '../img/Imagem70.png',
    id: 5
  }
]
