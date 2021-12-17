import { memo, useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100%'
}

const center = {
  lat: -3.745,
  lng: -38.523
}

const WhereWeArePanelGoogleMapsFC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!
  })

  const [map, setMap] = useState(null)

  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.GOOGLE_MAPS_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data))

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : null
}

export const WhereWeArePanelGoogleMaps = memo(WhereWeArePanelGoogleMapsFC)
