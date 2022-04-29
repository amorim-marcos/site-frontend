import WhereBuyView from 'views/Buy'
import { loadTranslations } from 'ni18n'
import { GetStaticProps } from 'next'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'

export default function WhereBuyPage() {
  return <WhereBuyView />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
      // ...clientNamespaces(ni18nConfig, ['components/header'])
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
