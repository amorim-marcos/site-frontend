import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Flex } from '@chakra-ui/react'

import L from 'leaflet'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const WhereWeArePanelLeafletMap = () => {
  return (
    <Flex w="100%" h="100%" position="relative">
      <MapContainer
        zoom={14}
        scrollWheelZoom={false}
        center={[40.8054, -74.0241]}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution={
            "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
          }
          url={`https://api.mapbox.com/styles/v1/zaujulio/ckx9icirg0k7g14oacoakdgid/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAPBOX_API_KEY}
        `}
        />
        <Marker position={[40.8054, -74.0241]}>
          <Popup>Hey ! you found me</Popup>
        </Marker>
      </MapContainer>
    </Flex>
  )
}

export default WhereWeArePanelLeafletMap
