import { useRouter } from 'next/dist/client/router'
import { BPCatalogItem } from 'views/BPCatalog'

export default function CatalogItem() {
  const { query } = useRouter()
  return <BPCatalogItem />
}
