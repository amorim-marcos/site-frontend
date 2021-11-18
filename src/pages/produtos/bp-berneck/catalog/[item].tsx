import { useRouter } from 'next/dist/client/router'

export default function CatalogItem() {
  const { query } = useRouter()
  return (
    <div>
      <h1>Catalog Item: {query.item}</h1>
    </div>
  )
}
