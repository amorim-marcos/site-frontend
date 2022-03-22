export interface strapiClientProps {
  locale?: string
  resource: string
  defaultOnEmpty?: boolean
  limit?: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function strapiClient(props: strapiClientProps): Promise<any> {
  const { locale, resource } = props

  const url = `${process.env.NEXT_PUBLIC_API_URL}/${resource}`
  let content

  const limit = !props.limit ? '-1' : props.limit

  try {
    const res = locale
      ? await fetch(`${url}&_locale=${locale}&_limit=${limit}`)
      : await fetch(`${url}&_limit=${limit}`)

    content = await res.json()

    if (props.defaultOnEmpty && content.length === 0)
      content = await fetch(`${url}?_limit=${limit}`).then((res) => res.json())
  } catch (e) {
    content = await fetch(`${url}?_limit=${limit}`).then((res) => res.json())
  }

  return content
}
