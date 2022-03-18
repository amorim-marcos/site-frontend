import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'

import { Flex, Box, Spinner, Text } from '@chakra-ui/react'
import { Status, Wrapper } from '@googlemaps/react-wrapper'

export type GoogleMapProps = {
  center: google.maps.LatLngLiteral
  onClick?: () => void
}

const renderStatus = (status: Status) => (
  <Flex w="100%" h="100%" justify="center" align="center">
    {status === Status.LOADING ? (
      <Spinner size="xl" />
    ) : (
      status === Status.FAILURE && <Text>Ops... Tente novamente</Text>
    )}
  </Flex>
)

export const GoogleMap = (props: GoogleMapProps) => (
  <Wrapper
    apiKey={process.env.GOOGLE_MAPS_API_KEY as string}
    render={renderStatus}
  >
    <Map center={props.center} zoom={14}>
      <Marker position={props.center} onClick={props.onClick} />
    </Map>
  </Wrapper>
)

export interface MapProps extends google.maps.MapOptions {
  children: ReactNode
}

export const Map = ({ children, ...options }: MapProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => map && map.setOptions(options), [map, options])

  useEffect(() => {
    if (ref.current && !map) setMap(new window.google.maps.Map(ref.current, {}))
  }, [ref, map])

  return (
    <>
      <Box ref={ref} flexGrow={1} h="100%" />

      {Children.map(
        children,
        (child) => isValidElement(child) && cloneElement(child, { map })
      )}
    </>
  )
}

interface MarkerProps extends google.maps.MarkerOptions {
  onClick?: (e: () => void) => void
}

export const Marker = ({ onClick, ...rest }: MarkerProps) => {
  const [marker, setMarker] = useState<google.maps.Marker>()

  useEffect(() => {
    marker && onClick && marker.addListener('click', onClick)
  }, [marker, onClick])

  useEffect(() => marker && marker.setOptions(rest), [marker, rest])

  useEffect(() => {
    if (!marker)
      setMarker(
        new google.maps.Marker({
          clickable: true,
          icon: {
            url: '/assets/icons/berneck_map_marker.svg',
            scaledSize: new google.maps.Size(80, 80)
          }
        })
      )

    return () => marker && marker.setMap(null)
  }, [marker])

  return null
}
