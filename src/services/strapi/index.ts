/* eslint-disable @typescript-eslint/no-explicit-any */
export interface strapiClientProps {
  locale?: string
  resource: string
  query?: { [key: string]: any }[]
  defaultOnEmpty?: boolean
  limit?: number
  start?: number
}

export async function strapiClient(props: strapiClientProps): Promise<any> {
  const { locale, resource, query } = props
  const limit = !props.limit ? '-1' : props.limit
  const start = props.start ? `_start=${props.start}&` : ''

  let url = `${process.env.NEXT_PUBLIC_API_URL}/${resource}?${start}_limit=${limit}`

  const queryString = query
    ?.map((item) => `${Object.keys(item)[0]}=${Object.values(item)[0]}`)
    .join('&')

  let content

  try {
    if (locale) url += `&_locale=${locale}`
    if (queryString) url += `&${queryString}`

    content = await fetch(url).then((res) => res.json())

    if (props.defaultOnEmpty && content.length === 0)
      content = await fetch(url).then((res) => res.json())
  } catch (e) {
    content = await fetch(url).then((res) => res.json())
  }

  return content
}
