import { EnvView } from 'views/EnvGallery/EnvView'

export default function GalleryItem() {
  return (
    <EnvView
      otherEnvs={[
        {
          id: 0,
          imgSrc: '/img/env-gallery.png',
          title: 'Cozinha',
          subTitle: 'Mostra Artefacto Curitiba'
        },
        {
          id: 1,
          imgSrc: '/img/env-gallery.png',
          title: 'Sala de estar',
          subTitle: 'Vitrine Artefacto Curitiba'
        },
        {
          id: 2,
          imgSrc: '/img/env-gallery.png',
          title: 'Toilette Eu, Tu, Eles',
          subTitle: 'Casa Cor PR'
        },
        {
          id: 3,
          imgSrc: '/img/env-gallery.png',
          title: 'Ócio criativo',
          subTitle: 'Mostra de Decoração: Morar Mais por Menos'
        }
      ]}
      imgs={[
        {
          imgSrc: '/img/bp-gallery/env2.png',
          id: 0
        },
        {
          imgSrc: '/img/bp-gallery/env1.png',
          id: 1
        }
      ]}
      tableContent={[
        {
          column1: 'Ano',
          column2: '2021'
        },
        {
          column1: 'Ambiente',
          column2: 'Cozinha'
        },
        {
          column1: 'Estilo',
          column2: 'Aconchegante, Clássico, Moderno, Sofisticado'
        },
        {
          column1: 'Arquiteto',
          column2: 'Fernanda Gonçalves'
        },
        {
          column1: 'Fotógrafo',
          column2: 'Fernanda Gonçalves'
        }
      ]}
    />
  )
}
