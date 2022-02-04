import EnvGallery from "views/EnvGallery"

export default function Gallery() {
  return <EnvGallery envs={mockGalleryList} availableBps={mockBPsList} />
}

const mockGalleryList = [
  {
    type: "Sala de Estar",
    name: "Mostra Artefacto Curitiba",
    image_url: "/gallery/env.jpeg"
  },
  {
    type: "Quarto",
    name: "Mostra Artefacto Curitiba",
    image_url: "/gallery/env.jpeg"
  },
  {
    type: "Toilette Eu, Tu, Eles",
    name: "",
    image_url: "/gallery/env.jpeg"
  },
  {
    type: "Ócio Criativo",
    name: "Mostra de Decoração: Morar Mais por Menos",
    image_url: "/gallery/env.jpeg"
  },
  {
    type: "Cozinha da Família",
    name: "Mostra Elite Design",
    image_url: "/gallery/env.jpeg"
  },
  {
    type: "Studio Bossa Nova",
    name: "",
    image_url: "/gallery/env.jpeg"
  },
  {
    type: "Suíte dos Hóspedes",
    name: "Casa Cor PR",
    image_url: "/gallery/env.jpeg"
  }
]

const mockBPsList = [
  {
    name: "Amantea",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/amantea.jpg",
    launch: '2020-11-21',
    scale: 14,
    panels: ["mdf"],
    collections: [],
    coloration: "madeiras_claras"
  },
  {
    name: "Argento",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/argento.jpg",
    launch: '2020-11-01',
    scale: 13,
    panels: ["mdf", "mdp"],
    collections: [],
    coloration: "madeiras_claras"
  },
  {
    name: "Azul vel",
    product_texture: "Grann",
    pattern_image: "/bps/patterns/azul_vel.jpg",
    launch: '2021-11-21',
    scale: 12,
    panels: ["mdf", "mdf_plus"],
    collections: [],
    coloration: "madeiras_claras"
  },
  {
    name: "Cacau",
    product_texture: "Matt",
    pattern_image: "/bps/patterns/cacau.jpg",
    launch: '2021-11-21',
    scale: 11,
    panels: ["mdp"],
    collections: ["origens"],
    coloration: "madeiras_medias"
  },
  {
    name: "Calcare",
    product_texture: "Matt",
    pattern_image: "/bps/patterns/calcare.jpg",
    launch: '2001-11-21',
    scale: 10,
    panels: ["mdf", "mdp", "mdf_plus", "mdp_plus"],
    collections: ["origens"],
    coloration: "madeiras_medias"
  },
  {
    name: "Chumbo",
    product_texture: "Grann",
    pattern_image: "/bps/patterns/chumbo.jpg",
    launch: '2002-11-21',
    scale: 9,
    panels: ["hdf_plus"],
    collections: ["origens"],
    coloration: "madeiras_escuras"
  },
  {
    name: "Cinza Argila",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/cinza_argila.jpg",
    launch: '2003-11-21',
    scale: 8,
    panels: ["hdf_plus"],
    collections: ["origens"],
    coloration: "outros"
  },
  {
    name: "Gengibre",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/gengibre.jpg",
    launch: '2018-11-21',
    scale: 7,
    panels: ["mdf", "mdf_plus", "mdp", "mdp_plus", "hdf_plus"],
    collections: [],
    coloration: "outros"
  },
  {
    name: "Millennial",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/millennial.jpg",
    launch: '2018-12-21',
    scale: 6,
    panels: ["mdp"],
    collections: [],
    coloration: "outros"
  },
  {
    name: "Panam",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/panam.jpg",
    launch: '2015-11-21',
    scale: 5,
    panels: ["mdf"],
    collections: [],
    coloration: "outros"
  },
  {
    name: "Preto TX",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/preto_tx.jpg",
    launch: '2016-11-21',
    scale: 4,
    panels: ["hdf_plus"],
    collections: [],
    coloration: "combine_facil"
  },
  {
    name: "Sky",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/sky.jpg",
    launch: '2013-11-21',
    scale: 3,
    panels: ["mdf_plus", "mdp_plus"],
    collections: ["nomade"],
    coloration: "combine_facil"
  },
  {
    name: "Volakas",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/volakas.jpg",
    launch: '2021-11-21',
    scale: 2,
    panels: ["mdf"],
    collections: ["nomade"],
    coloration: "combine_facil"
  },
  {
    name: "Wengue Ravena",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/wengue_ravena.jpg",
    launch: '2021-12-31',
    scale: 1,
    panels: ["mdf"],
    collections: ["nomade"],
    coloration: "combine_facil"
  }
]