import WhereBuyView from 'views/Buy'
import { loadTranslations } from 'ni18n'
import { GetStaticProps } from 'next'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'

export default function WhereBuyPage({
  representatives_list
}: {
  representatives_list: string
}) {
  return <WhereBuyView representatives_list={representatives_list} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let representatives_list
  let res
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

  representatives_list =
    process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + representatives_list.pdf_list.url

  return {
    props: {
      representatives_list,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
      // ...clientNamespaces(ni18nConfig, ['components/header'])
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
