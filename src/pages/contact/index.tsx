/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next'
import { loadTranslations } from 'ni18n'
import { IContactChannel } from 'types/data/ContactChannel'
import { formatChannelNameUrl } from 'utils/utils'
import Contact from 'views/Contact'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'

export type ContactPageProps = {
  fireWarning: string
  contact_channel: IContactChannel
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

  const sortByNameQuery = '&_sort=name:ASC'

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/fire-warning?_locale=${locale}`
    )
    fireWarning = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/contact-channels?_locale=${locale}` +
        sortByNameQuery
    )
    contact_channels = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/fire-warning`)
    fireWarning = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/contact-channels` + sortByNameQuery
    )
    contact_channels = await res?.json()
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

// Move "Ouvidoria" to the end of the list
  if (Array.isArray(contact_channels)) {
    const ouvidoriaIndex = contact_channels.findIndex(
      (channel) => channel.name?.trim().toLowerCase() === 'ouvidoria'
    )
    if (ouvidoriaIndex !== -1) {
      const [ouvidoriaChannel] = contact_channels.splice(ouvidoriaIndex, 1)
      contact_channels.push(ouvidoriaChannel)
    }
  }

  if (context.query.channel) {
    const queryChannel = context.query.channel
    contact_channel = contact_channels.find(
      (contact_channel: any) =>
        formatChannelNameUrl(contact_channel.name) == queryChannel
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
