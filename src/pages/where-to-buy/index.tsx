import WhereBuyView from 'views/Buy'
import { loadTranslations } from 'ni18n'
import { GetStaticProps } from 'next'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'
import { CountryRepresentative } from 'types/data/WhereBuy'
import { strapiClient } from 'services'

interface WhereBuyProps {
  representatives_list: string
  country_representatives: CountryRepresentative[]
}

export default function WhereBuyPage({
  representatives_list,
  country_representatives
}: WhereBuyProps) {
  return (
    <WhereBuyView
      representatives_list={representatives_list}
      country_representatives={country_representatives}
    />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let representatives_list
  let res

  let country_representatives: CountryRepresentative[] = []

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/representatives-list?_locale=${locale}`
    )
    representatives_list = await res.json()
  } catch (error) {
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/representatives-list`)
    representatives_list = await res.json()
  }

  try {
    country_representatives = await strapiClient({
      resource: 'country-representatives',
      locale: context.locale
    })
  } catch (error) {
    country_representatives = await strapiClient({
      resource: 'country-representatives'
    })
    console.log('error when trying to get representatives list data', error)
  }

  representatives_list = representatives_list.pdf_list
    ? process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
      representatives_list.pdf_list.url
    : ''

  return {
    props: {
      representatives_list,
      country_representatives,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
      // ...clientNamespaces(ni18nConfig, ['components/header'])
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
