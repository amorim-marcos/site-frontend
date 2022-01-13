import BPCatalog from "views/BPCatalog"

export default function BpBerneck() {
  return <BPCatalog bps={mockBPsList}/>
}


const mockBPsList = [
  {
    name: "Amantea",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/amantea.jpg"
  },
  {
    name: "Argento",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/argento.jpg"
  },
  {
    name: "Azul vel",
    product_texture: "Grann",
    pattern_image: "/bps/patterns/azul_vel.jpg"
  },
  {
    name: "Cacau",
    product_texture: "Matt",
    pattern_image: "/bps/patterns/cacau.jpg"
  },
  {
    name: "Calcare",
    product_texture: "Matt",
    pattern_image: "/bps/patterns/calcare.jpg"
  },
  {
    name: "Chumbo",
    product_texture: "Grann",
    pattern_image: "/bps/patterns/chumbo.jpg"
  },
  {
    name: "Cinza Argila",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/cinza_argila.jpg"
  },
  {
    name: "Gengibre",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/gengibre.jpg"
  },
  {
    name: "Millennial",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/millennial.jpg"
  },
  {
    name: "Panam",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/panam.jpg"
  },
  {
    name: "Preto TX",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/preto_tx.jpg"
  },
  {
    name: "Sky",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/sky.jpg"
  },
  {
    name: "Volakas",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/volakas.jpg"
  },
  {
    name: "Wengue Ravena",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/wengue_ravena.jpg"
  }
]