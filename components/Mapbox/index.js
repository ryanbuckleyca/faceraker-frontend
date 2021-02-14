import { useState, useContext } from 'react'
import { markerClass } from './markers'
import { getCoords } from './coords'
import PopUpCard from './PopUpCard'
import MapContext from './MapContext'

import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX
})

const Mapbox = ({ refs, children }) => {
  if (!children || children.length <= 1) return false

  const [mapSettings, setMapSettings] = useContext(MapContext)
  const [showPopup, setShowPopup] = useState()

  const expandMarker = (post) => {
    setShowPopup(post.id)
    // @TODO: set context instead of former state
    setMapSettings({ 
      ...mapSettings,
      zoom: [10],
      center: [post.longitude, post.latitude] 
    })
  }

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v11"
      center={mapSettings.center}
      zoom={mapSettings.zoom}
      containerStyle={{
        height: '100%',
        width: '100%'
      }}
    >
      {children.map((post) => 
        <MarkerAndPopup
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

// @TODO: getCoords re-renders on every state change
// which moves the markers randomly, as getCoords should
// better to set random coords when fetching or initially saving data
const MarkerAndPopup = ({ post, refs, showPopup, expandMarker }) => {
  return (
    <>
      <Marker
        key={post.id}
        coordinates={[getCoords(post).lng, getCoords(post).lat]}
        anchor="bottom"
        onClick={() => expandMarker(post)}
      >
        {showPopup === post.id && <PopUpCard post={post} refs={refs} />}
        <div className={markerClass(post)}></div>
      </Marker>
    </>
  )
}

export default Mapbox
