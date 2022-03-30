/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps } from 'next'
import { IContactChannel } from 'types/data/ContactChannel'
import Contact from 'views/Contact'

export type ContactPageProps = {
  fireWarning: string
  contact_channels: IContactChannel[]
}

export default function ContactPage(props: ContactPageProps) {
  return <Contact {...props} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let fireWarning
  let contact_channels
  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/fire-warning?_locale=${locale}`
    )
    fireWarning = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/contact-channels?_locale=${locale}`
    )
    contact_channels = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/fire-warning`)
    fireWarning = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/contact-channels`)
    contact_channels = await res.json()
  }

  contact_channels = contact_channels.map(
    (item: { image: { url: string } }) => {
      return {
        ...item,
        image: (item.image === null )? null: process.env.NEXT_PUBLIC_API_URL + item.image.url
      }
    }
  })

  return {
    props: {
      fireWarning: fireWarning.warning_text,
      contact_channels
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
