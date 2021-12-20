import { Flex, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'

import WhereWeArePanelFooter from './WhereWeArePanelFooter'
import WhereWeArePanelLeafletMap from './WhereWeArePanelLeafletMap'
import WhereWeArePanelInfo from 'components/WhereWeArePanel/WhereWeArePanelInfo'
import WhereWeArePanelGoogleMaps from './WhereWeArePanelGoogleMaps'

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
  googleMapsURL: string
  state: string
  country: string
  inaugurationSoon: boolean
  image: string
}

export const WhereWeArePanel = (props: WhereWeArePanelProps) => {
  const [showOverlay, setShowOverlay] = useState<'map' | 'info' | null>(null)

  const handleShowOverlay = (overlay: 'map' | 'info' | null) => {
    showOverlay === overlay ? setShowOverlay(null) : setShowOverlay(overlay)
  }

  return (
    <Flex pos="relative" h="31rem" w="50rem" overflow="hidden">
      <PanelImage
        image={props.image}
        inaugurationSoon={props.inaugurationSoon}
      />

      <Flex
        h={showOverlay ? '26rem' : '0'}
        w="100%"
        bottom="3rem"
        pos="absolute"
        bgColor="white"
        opacity={showOverlay ? 1 : 0}
        transition={`all 0.3s ease-in-out`}
        boxShadow="15px 5px 15px -1px rgba(0,0,0,0.55)"
      >
        {showOverlay === 'map' && (
          <WhereWeArePanelLeafletMap />
          // <WhereWeArePanelGoogleMaps />
        )}

        {showOverlay === 'info' && (
          <WhereWeArePanelInfo
            {...props.ourPlaceInformation}
            onClose={() => handleShowOverlay(null)}
          />
        )}
      </Flex>

      <WhereWeArePanelFooter
        name={props.name}
        inaugurationSoon={props.inaugurationSoon}
        address={`${props.city}, ${props.state} • ${props.country}`}
        showOverlay={showOverlay}
        handleChangeOverlay={handleShowOverlay}
      />
    </Flex>
  )
}

const PanelImage = (props: { image: string; inaugurationSoon?: boolean }) => (
  <Flex justifyContent="center" alignItems="center" pos="relative">
    <Image
      w="100%"
      src={props.image}
      objectFit="cover"
      // filter={props.inaugurationSoon ? 'blur(7px)' : 'none'} // Active in production
    />

    {props.inaugurationSoon && (
      <Text pos="absolute" align="center" fontWeight={600} color="white">
        Em Breve <br /> Inauguração
      </Text>
    )}
  </Flex>
)
