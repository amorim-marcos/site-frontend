import ProductsView from 'views/products'

import { GetStaticProps } from 'next'
import { loadTranslations } from 'ni18n'
import { ni18nConfig } from '../../../ni18n.config'

export default function Products() {
  return <ProductsView />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale

  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, [
        'header',
        'footer',
        'products'
      ]))
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
