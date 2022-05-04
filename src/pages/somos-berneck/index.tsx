/* eslint-disable @typescript-eslint/no-explicit-any */
import About from 'views/About'
import { AboutPageContent } from 'views/About/About'
import { TrajectoryTab } from '@components/TrajectoryCarousel/TrajectoryCarousel'
import { GetStaticProps } from 'next'
import { WhereWeArePanelProps } from '@components/WhereWeArePanel/WhereWeArePanel'
import { loadTranslations } from 'ni18n'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'

export type AboutPageProps = {
  page_content: AboutPageContent
  our_trajectory_tabs: Array<TrajectoryTab>
  whereWeAreData: WhereWeArePanelProps[]
}

export default function AboutPage({
  page_content,
  our_trajectory_tabs,
  whereWeAreData
}: AboutPageProps) {
  return (
    <About
      page_content={page_content}
      our_trajectory_tabs={our_trajectory_tabs}
      panels={whereWeAreData}
    />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let page_content
  let our_trajectory
  let res
  let whereWeAreData

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/who-we-are?_locale=${locale}`
    )
    page_content = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/our-trajectory?_locale=${locale}`
    )

    our_trajectory = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/where-we-ares?_locale=${locale}`
    )

    whereWeAreData = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/who-we-are`)
    page_content = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/our-trajectory`)

    our_trajectory = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/where-we-ares`)

    whereWeAreData = await res.json()
  }

  const our_trajectory_tabs = our_trajectory.year.map((year: any) => {
    return {
      name: year.year,
      content: {
        title: year.title,
        text: year.description,
        image: process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + year.image.url
      }
    }
  })

  whereWeAreData = whereWeAreData.map(
    (item: {
      name: string
      city: string
      our_place_information: {
        structure: string
        localization: string
        phones: string
        airport_distance: string
      }
      latitude: string
      longitude: string
      google_maps_url: string
      state: string
      country: string
      inauguration_soon: string
      image: {
        url: string
      }
    }) => {
      return {
        name: item.name,
        city: item.city,
        ourPlaceInformation: {
          structure: item.our_place_information.structure,
          localization: item.our_place_information.localization,
          phones: item.our_place_information.phones,
          airportDistance: item.our_place_information.airport_distance
        },
        coords: {
          lat: Number(item.latitude),
          lng: Number(item.longitude)
        },
        googleMapsURL: `http://maps.google.com/maps?q=${item.latitude},${item.longitude}`,
        state: item.state,
        country: item.country,
        inaugurationSoon: item.inauguration_soon,
        image:
          item.image === null
            ? null
            : process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + item.image.url
      }
    }
  )

  return {
    props: {
      page_content,
      our_trajectory_tabs,
      whereWeAreData,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
