import { useState, useContext } from 'react'
import MapContext from './MapContext'
import MarkerPopup from './MarkerPopup'
import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX
})

const Mapbox = ({ refs, children }) => {
  if (!children || children.length <= 1) return false

  const [mapSettings, setMapSettings] = useContext(MapContext)
  const [showPopup, setShowPopup] = useState()

  // @TODO: onClick outside of marker should close popup
  const expandMarker = (post) => {
    setShowPopup(post.id)
    // @TODO: set context instead of former state
    setMapSettings({ 
      ...mapSettings,
      zoom: [12],
      center: [post.longitude, post.latitude-0.005] 
    })
  }

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v11"
      center={mapSettings.center}
      zoom={mapSettings.zoom}
      onDrag={() => setShowPopup(false)}
      containerStyle={{
        height: '100%',
        width: '100%'
      }}
    >
      {children.map((post) => 
        <MarkerPopup
          key={post.id}
          post={post}
          refs={refs}
          showPopup={showPopup}
          expandMarker={expandMarker}
        />
      )}
    </Map>
  )
}

export default Mapbox
