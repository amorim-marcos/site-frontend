import EnvGallery from "views/EnvGallery"

export default function Gallery() {
  return <EnvGallery envs={mockGalleryList} />
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