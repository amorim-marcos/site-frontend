import BPCatalog from "views/BPCatalog"

export default function BpBerneck() {
  return <BPCatalog bps={mockBPsList}/>
}


const mockBPsList = [
  {
    name: "Terraza",
    product_texture: "Micro",
    pattern_image: "/img/pattern.png"
  },
  {
    name: "Volakas",
    product_texture: "Micro",
    pattern_image: "/img/pattern.png"
  },
  {
    name: "Galiano",
    product_texture: "Grann",
    pattern_image: "/img/pattern.png"
  },
  {
    name: "Millenial",
    product_texture: "Matt",
    pattern_image: "/img/pattern.png"
  },
  {
    name: "Ceramik",
    product_texture: "Matt",
    pattern_image: "/img/pattern.png"
  },
  {
    name: "Cinamomo",
    product_texture: "Grann",
    pattern_image: "/img/pattern.png"
  },
  {
    name: "Mostrato",
    product_texture: "Micro",
    pattern_image: "/img/pattern.png"
  }
]