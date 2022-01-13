import BPCatalog from "views/BPCatalog"

export default function BpBerneck() {
  return <BPCatalog bps={mockBPsList}/>
}


const mockBPsList = [
  {
    name: "Amantea",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/amantea.jpg",
    launch: '2020-11-21'
  },
  {
    name: "Argento",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/argento.jpg",
    launch: '2020-11-01'
  },
  {
    name: "Azul vel",
    product_texture: "Grann",
    pattern_image: "/bps/patterns/azul_vel.jpg",
    launch: '2021-11-21'
  },
  {
    name: "Cacau",
    product_texture: "Matt",
    pattern_image: "/bps/patterns/cacau.jpg",
    launch: '2021-11-21'
  },
  {
    name: "Calcare",
    product_texture: "Matt",
    pattern_image: "/bps/patterns/calcare.jpg",
    launch: '2001-11-21'
  },
  {
    name: "Chumbo",
    product_texture: "Grann",
    pattern_image: "/bps/patterns/chumbo.jpg",
    launch: '2002-11-21'
  },
  {
    name: "Cinza Argila",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/cinza_argila.jpg",
    launch: '2003-11-21'
  },
  {
    name: "Gengibre",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/gengibre.jpg",
    launch: '2018-11-21'
  },
  {
    name: "Millennial",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/millennial.jpg",
    launch: '2018-12-21'
  },
  {
    name: "Panam",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/panam.jpg",
    launch: '2015-11-21'
  },
  {
    name: "Preto TX",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/preto_tx.jpg",
    launch: '2016-11-21'
  },
  {
    name: "Sky",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/sky.jpg",
    launch: '2013-11-21'
  },
  {
    name: "Volakas",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/volakas.jpg",
    launch: '2021-11-21'
  },
  {
    name: "Wengue Ravena",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/wengue_ravena.jpg",
    launch: '2021-12-31'
  }
]