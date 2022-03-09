import AppError from '@components/AppError'

export default function Custom404() {
  return <AppError errorNumber="404" errorText="Página não encontrada." />
}
