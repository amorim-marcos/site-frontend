import MeiliSearch from 'meilisearch'

const client = new MeiliSearch({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  host: process.env.MEILI_API_HOST!,
  apiKey: process.env.MEILI_API_KEY
})

export default client
