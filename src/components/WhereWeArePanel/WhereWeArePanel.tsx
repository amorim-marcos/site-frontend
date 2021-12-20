import { useState } from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'

import LeafletMaps from '@components/LeafletMaps'

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
  coords: [number, number]
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
    <Flex pos="relative" h="31rem" w="50rem" direction="column">
      <PanelImage
        image={props.image}
        inaugurationSoon={props.inaugurationSoon}
      />

      <Flex
        id="panel-overlay"
        h={showOverlay ? '27rem' : '0'}
        bottom="4rem"
        w="100%"
        pos="absolute"
        bgColor="white"
        opacity={showOverlay ? 1 : 0}
        transition={`all 0.3s ease-in-out`}
        boxShadow="0px 2px 15px -10px #000000"
      >
        {showOverlay === 'map' && (
          <LeafletMaps
            center={props.coords}
            onClick={() => window.open(props.googleMapsURL, '_blank')}
          />
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
      h="100%"
      w="100%"
      src={props.image}
      objectFit="cover"
      // filter={props.inaugurationSoon ? 'blur(7px)' : 'none'} // @ActiveInProd
    />

    {props.inaugurationSoon && (
      <Text pos="absolute" align="center" fontWeight={600} color="white">
        Em Breve <br /> Inauguração
      </Text>
    )}
  </Flex>
)
