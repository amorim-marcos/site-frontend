import { SearchParams } from 'meilisearch/dist/types/types/types'
import client from './client'

interface ISearchProps {
  index: string
  query?: string | null
  options?: SearchParams
  config?: Partial<Request>
}

export async function meiliSearch(searchProps: ISearchProps) {
  const index = client.index(searchProps.index)
  const { query, options, config } = searchProps

  return await index.search(query, options, config)
}
