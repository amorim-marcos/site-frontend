import Main from '@components/Main'
import { useRouter } from 'next/dist/client/router'

export default function CatalogItem() {
  const { query } = useRouter()
  return (
    <div>
      <Main title={`Catalog Item: ${query.item}`} />
    </div>
  )
}
