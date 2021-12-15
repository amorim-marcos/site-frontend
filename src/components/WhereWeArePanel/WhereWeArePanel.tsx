import { Flex, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'

import WhereWeArePanelFooter from './WhereWeArePanelFooter'
import OurPlaceInformation from 'components/OurPlaceInformation'
import colors from 'theme/colors'

const PanelImage = (props: { image: string; inaugurationSoon?: boolean }) => (
  <Flex justifyContent="center" alignItems="center" pos="relative">
    <Image
      w="100%"
      src={props.image}
      objectFit="cover"
      // filter={props.inaugurationSoon ? 'blur(7px)' : 'none'} // Active in production
    />

    {props.inaugurationSoon && (
      <Text pos="absolute" align="center" fontWeight={600} color={colors.white}>
        Em Breve <br /> Inauguração
      </Text>
    )}
  </Flex>
)

interface IOurPlaceInformation {
  structure: string
  localization: string
  phones: string
  airportDistance: string
}

interface PlaceProps {
  name: string
  city: string
  ourPlaceInformation: IOurPlaceInformation
  googleMapsURL: string
  state: string
  country: string
  inaugurationSoon: boolean
  image: string
}

export const WhereWeArePanel = (props: PlaceProps) => {
  const [expand, setExpand] = useState(false)

  return (
    <Flex pos="relative" h="31rem" w="50rem" overflow="hidden">
      <PanelImage
        image={props.image}
        inaugurationSoon={props.inaugurationSoon}
      />

      <WhereWeArePanelFooter
        name={props.name}
        address={`${props.city}, ${props.state} • ${props.country}`}
        googleMapsURL={props.googleMapsURL}
        inaugurationSoon={props.inaugurationSoon}
        expand={expand}
        onClick={() => setExpand(!expand)}
      />

      <Flex
        h={expand ? '26rem' : '0'}
        w="100%"
        bottom="3rem"
        pos="absolute"
        bgColor={colors.white}
        opacity={expand ? 1 : 0}
        transition={`all 0.3s ease-in-out`}
        boxShadow="15px 5px 15px -1px rgba(0,0,0,0.55)"
      >
        <Image
          id="close_button"
          right="1.8rem"
          top="1.5rem"
          h="1rem"
          pos="absolute"
          src="icon/close_panel.svg"
          cursor="pointer"
          onClick={() => setExpand(!expand)}
        />

        <OurPlaceInformation {...props.ourPlaceInformation} />
      </Flex>
    </Flex>
  )
}
