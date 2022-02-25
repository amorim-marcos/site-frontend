export interface strapiClientProps {
  locale?: string
  resource: string
}

export async function strapiClient(props: strapiClientProps): Promise<unknown> {
  const { locale, resource } = props
  const url = `${process.env.NEXT_PUBLIC_API_URL}${resource}`
  let content

  try {
    const res = await fetch(`${url}?_locale=${locale}`)
    content = await res.json()
  } catch (e) {
    const res = await fetch(`${url}`)
    content = await res.json()
  }

  return content
}
