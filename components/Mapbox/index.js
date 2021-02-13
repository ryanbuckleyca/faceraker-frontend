/* src/App.js */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';
import { markerClass } from './markers'
import { getCoords } from './coords'
import PopUpCard from './PopUpCard'

import ReactMapboxGl, { Marker, Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
  
const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX
});

const Mapbox = ({ dimensions, map, refs, setMap, children }) => (
  <Map
    style="mapbox://styles/mapbox/streets-v11"
    center={[-73.55335998535156, 45.509063720703125]}
    zoom={[10]}
    containerStyle={{
      height: '100%',
      width: '100%'
    }}
  >
    {children.map((post) => {
      <>
      {console.log('post is: ', post)}
        <PopUpCard dimensions={dimensions} post={post} refs={refs} />
        <Marker coordinates={[getCoords(post)]} anchor="bottom">
            <div className={markerClass(post)}></div>
        </Marker>
      </>
    })}
  </Map>
)


export default Mapbox
