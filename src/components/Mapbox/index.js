/* src/App.js */
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { markerClass } from './markers.js'
import { getCoords } from './coords.js'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

const mapObj = {
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.55335998535156, 45.509063720703125],
  zoom: 10
}

const putMarkerOnMap = (post, map) => {
  const { lng, lat } = getCoords(post)
  const coords = new mapboxgl.LngLat(lng, lat)
  const el = document.createElement('div')
  el.className = markerClass(post)

  const marker = new mapboxgl.Marker(el)
    .setLngLat(coords)
    .addTo(map)
    
  return marker
}

function Mapbox({ children }) { 
  useEffect(() => {
    const map = new mapboxgl.Map(mapObj)
    children.forEach(post => putMarkerOnMap(post, map))  
  }, [children])

  if(!children) return <em>Loading...</em>

  return (
    <div id='map' class="h-full"></div>
  )
}

export default Mapbox