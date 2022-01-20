import { useRouter } from 'next/dist/client/router'
import { BPCatalogItem } from 'views/BPCatalog'

export default function CatalogItem() {
  const { query } = useRouter()
  return <BPCatalogItem {...data} />
}

const data = {
  texture: {
    img: '/bps/patterns/cacau.jpg',
    name: 'Terrazza',
    description:
      'Com a proposta do granilite e um mix de tonalidades de cimento branco, areia e diferentes minerais, este BP BERNECK® é um ícone da arquitetura em seus projetos.'
  },
  pattern: {
    name: 'MICRO',
    description: 'Textura contemporânea com agradável sensação ao toque.',
    about:
      'O padrão Solanum traz personalidade e um apelo estético único aos projetos de móveis e interiores. O novo padrão é inspirado no Cumaru, madeira proveniente da Amazônia, e valoriza a cultura brasileira. Lançamento da Coleção Nômade, ele chama a atenção pela tonalidade castanho-mel e pela facilidade de combinar com tudo, trazendo calor e beleza aos móveis e interiores.',
    anothers: [
      { name: 'Louro Preto', img: '/bps/patterns/amantea.jpg' },
      { name: 'Ceramik', img: '/bps/patterns/calcare.jpg' },
      { name: 'Millennial', img: '/bps/patterns/gengibre.jpg' },
      { name: 'Denim', img: '/bps/patterns/wengue_ravena.jpg' }
    ]
  },
  mdp: { thickness: '12 / 15 / 18 / 25', size: '2,75 x 1,85' },
  mdf: { thickness: '6 / 9 / 15 / 18 / 25', size: '2,75 x 1,85' },
  next: 'SOLANUM',
  prev: 'VERTI'
}
