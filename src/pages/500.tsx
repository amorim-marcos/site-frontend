import AppError from '@components/AppError'

export default function Custom404() {
  return <AppError errorNumber="500" errorText="Erro desconhecido" />
}
