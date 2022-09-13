import { useState } from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'

import GoogleMap from '@components/GoogleMap'

import WhereWeArePanelInfo from './WhereWeArePanelInfo'
import WhereWeArePanelFooter from './WhereWeArePanelFooter'

export type IOurPlaceInformation = {
  structure: string
  localization: string
  phones: string
  airportDistance: string
}

export type WhereWeArePanelProps = {
  name: string
  city: string
  ourPlaceInformation: IOurPlaceInformation
  coords: {
    lat: number
    lng: number
  }
  googleMapsURL: string
  state: string
  country: string
  inaugurationSoon: boolean
  image: string
}

export const WhereWeArePanel = (props: WhereWeArePanelProps) => {
  const [showOverlay, setShowOverlay] = useState<'map' | 'info' | null>(null)

  const Overlay = () => {
    switch (showOverlay) {
      case 'map':
        return (
          <GoogleMap
            center={props.coords}
            onClick={() =>
              props === null ? null : window.open(props.googleMapsURL, '_blank')
            }
          />
        )
      case 'info':
        return (
          <WhereWeArePanelInfo
            {...props.ourPlaceInformation}
            onClose={() => setShowOverlay(null)}
          />
        )
      default:
        return null
    }
  }

  return (
    <Flex
      w={{
        base: '90vw',
        md: '720px',
        lg: '810px',
        xl: '46%'
      }}
      pos="relative"
      direction="column"
      userSelect="none"
    >
      <PanelImage
        image={props.image}
        inaugurationSoon={props.inaugurationSoon}
      />

      <Flex
        data-testid="panel-overlay"
        h={{
          base: 'calc(100% - 115px)',
          sm: 'calc(100% - 105px)',
          md: 'calc(100% - 70px)',
          lg: 'calc(100% - 85px)'
        }}
        top="0"
        w="100%"
        pos="absolute"
        bgColor="white"
        opacity={showOverlay ? 1 : 0}
        transition={`all 0.3s ease-in-out`}
        boxShadow="0px 2px 15px -10px #000000"
      >
        <Overlay />
      </Flex>

      <WhereWeArePanelFooter
        name={props.name}
        inaugurationSoon={props.inaugurationSoon}
        address={`${props.city}, ${props.state} • ${props.country}`}
        showOverlay={showOverlay}
        handleChangeOverlay={(overlay: 'map' | 'info' | null) => {
          showOverlay === overlay
            ? setShowOverlay(null)
            : setShowOverlay(overlay)
        }}
      />
    </Flex>
  )
}

const PanelImage = (props: { image: string; inaugurationSoon?: boolean }) => (
  <Flex h="100%" justifyContent="center" alignItems="center" pos="relative">
    <Image
      h="100%"
      src={props.image}
      cursor={{ md: 'pointer' }}
      objectFit="cover"
      userSelect="none"
      draggable="false"
      // filter={props.inaugurationSoon ? 'blur(0px)' : 'none'}
    />

    {props.inaugurationSoon && (
      <Text pos="absolute" align="center" fontWeight={600} color="white">
        Em Breve <br /> Inauguração
      </Text>
    )}
  </Flex>
)
