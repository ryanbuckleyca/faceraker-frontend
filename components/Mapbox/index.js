import { useState, useContext } from 'react'
import MapContext from './MapContext'
import MarkerPopup from './MarkerPopup'
import ReactMapboxGl from 'react-mapbox-gl';
import PopUpCard from './PopUpCard'
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX
})

const Mapbox = ({ refs, children, setShowPopup, showPopup }) => {
  if (!children || children.length <= 1) return false

  const [mapSettings, setMapSettings] = useContext(MapContext)

  const expandMarker = (post) => {
    setMapSettings({ 
      ...mapSettings,
      zoom: [12],
      currentPost: post,
      center: [post.longitude, post.latitude-0.007] 
    })
    setShowPopup(post.id)
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
      {mapSettings.currentPost?.id === showPopup && (
        <PopUpCard
          post={mapSettings.currentPost}
          refs={refs}
          anchor="top"
          offset={{'top': [0, -38]}}
        />
      )}

    </Map>
  )
}

export default Mapbox
