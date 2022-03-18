import { useEffect, useState } from 'react'

import { Map as LeafletMap, Icon, Point } from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const IconMapMarker = new Icon({
  iconUrl: '/static/map_marker.svg',
  iconRetinaUrl: '/static/map_marker.svg',
  iconSize: new Point(48, 48)
})

export type LeafletMapsProps = {
  zoom?: number
  center: [number, number]
  onClick?: () => void
}

const LeafletMaps = (props: LeafletMapsProps) => {
  const [map, setMap] = useState<LeafletMap>()

  useEffect(() => {
    map && setInterval(() => map.invalidateSize({ animate: true }), 100)
  }, [map])

  return (
    <MapContainer
      zoom={props.zoom ?? 14}
      center={props.center}
      whenCreated={setMap}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution={
          "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
        }
        url={`https://api.mapbox.com/styles/v1/zaujulio/ckx9icirg0k7g14oacoakdgid/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAPBOX_API_KEY}
        `}
      />
      <Marker
        position={props.center}
        icon={IconMapMarker}
        eventHandlers={{ click: props.onClick }}
      />
    </MapContainer>
  )
}

export default LeafletMaps
