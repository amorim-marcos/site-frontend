import AppError from '@components/AppError'
import { useTranslation } from 'react-i18next'
import { loadTranslations } from 'ni18n'
import { nameSpaces, ni18nConfig } from '../../ni18n.config'
import { GetStaticProps } from 'next'

export default function Custom404() {
  const errorPagesLabels = useTranslation('errorPages')
  return (
    <AppError
      errorNumber="500"
      errorText={errorPagesLabels.t('serverError.title')}
    />
  )
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
