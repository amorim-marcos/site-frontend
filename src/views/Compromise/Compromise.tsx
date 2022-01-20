import PageBar from '../../components/Pagebar'

export const Compromise = () => {
  return (
    <div>
      <PageBar
        paths={[
          {
            title: 'Path1',
            url: '/nosso-compromisso'
          },
          {
            url: '/nosso-compromisso',
            title: 'Path2'
          }
        ]}
      />
      <h1>Nosso Compromisso</h1>
    </div>
  )
}
