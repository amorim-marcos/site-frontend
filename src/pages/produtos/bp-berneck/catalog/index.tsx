import BPCatalog from "views/BPCatalog"

export default function BpBerneck() {
  return <BPCatalog bps={mockBPsList}/>
}


const mockBPsList = [
  {
    name: "Terraza",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/terraza.jpeg"
  },
  {
    name: "Volakas",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/terraza.jpeg"
  },
  {
    name: "Galiano",
    product_texture: "Grann",
    pattern_image: "/bps/patterns/terraza.jpeg"
  },
  {
    name: "Millenial",
    product_texture: "Matt",
    pattern_image: "/bps/patterns/terraza.jpeg"
  },
  {
    name: "Ceramik",
    product_texture: "Matt",
    pattern_image: "/bps/patterns/terraza.jpeg"
  },
  {
    name: "Cinamomo",
    product_texture: "Grann",
    pattern_image: "/bps/patterns/terraza.jpeg"
  },
  {
    name: "Mostrato",
    product_texture: "Micro",
    pattern_image: "/bps/patterns/terraza.jpeg"
  }
]