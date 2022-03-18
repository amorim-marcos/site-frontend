import { GetStaticProps } from 'next'
import { Privacy } from 'views/Privacy/Privacy'
import DOMPurify from 'isomorphic-dompurify'

export default function PrivacyPage(props: { terms: string }) {
  return <Privacy terms={props.terms} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let terms

  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/terms-of-use?_locale=${locale}`
    )
    terms = await res.json()
  } catch (e) {
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/terms-of-use`)
    terms = await res.json()
  }

  return {
    props: {
      terms: DOMPurify.sanitize(terms.content)
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
