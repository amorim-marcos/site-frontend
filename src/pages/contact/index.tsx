/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'
import { loadTranslations } from 'ni18n'
import { IContactChannel } from 'types/data/ContactChannel'
import Contact from 'views/Contact'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'

export type ContactPageProps = {
  fireWarning: string
  contact_channels: IContactChannel[]
}

export default function ContactPage(props: ContactPageProps) {
  return <Contact {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = context.locale
  let fireWarning
  let contact_channels
  let contact_channel = null
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

  contact_channels =
    contact_channels && typeof contact_channels.map === 'function'
      ? contact_channels.map((item: { image: { url: string } }) => {
          return {
            ...item,
            image:
              item.image === null
                ? null
                : process.env.NEXT_PUBLIC_API_URL + item.image.url
          }
        })
      : []

  if(context.query.channel){
    let queryChannel = context.query.channel
    contact_channel = contact_channels.find(
      (contact_channel:any) =>
        contact_channel.name
          .normalize('NFD')
          .replace(/[^\w ]/g, '')
          .split(' ')
          .join('-')
          .toLowerCase() == queryChannel
    )
  }

      
  return {
    props: {
      fireWarning: fireWarning.warning_text ? fireWarning.warning_text : '',
      contact_channels,
      contact_channel,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
    }
  }
}
