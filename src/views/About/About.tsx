import GlobalContainer from '@components/GlobalContainer'
import Pagebar from '@components/Pagebar'
import PageSection from '@components/PageSection'

const data = {
  imageUrl: 'url(/assets/imgs/quem_somos_foto_capa.png)',
  title: 'Quem somos',
  subtitle: 'Somos a marca da madeira',
  text: 'Modern home in city center in the heart of historic Los Angeles',
}

export const About = () => {
  return (

      <GlobalContainer>
        <Pagebar title="Quem somos" />

        <PageSection 
          data={data}
          titleColor = 'red.100'
          titleLineColor = 'red.100'
          subTitleColor = 'green.200'
          
        />

      </GlobalContainer>
  )
}