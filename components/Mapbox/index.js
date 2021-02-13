/* src/App.js */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';
import { markerClass } from './markers'
import { getCoords } from './coords'
import { popupCard } from './pop-up'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX;

const mapObj = {
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.55335998535156, 45.509063720703125],
  zoom: 10
}

const popUpSpecs = {
  offset: 10,
  focusAfterOpen: false
}

const putMarkerOnMap = (dimensions, post, refs, map) => {
  const placeholder = document.createElement('div')
  ReactDOM.render(popupCard(dimensions, post, refs), placeholder)
  const { lng, lat } = getCoords(post)
  const popup = new mapboxgl.Popup(popUpSpecs).setDOMContent(placeholder);
  const coords = new mapboxgl.LngLat(lng, lat)
  const el = document.createElement('div')
  el.className = markerClass(post)

  const marker = new mapboxgl.Marker(el)
    .setLngLat(coords)
    .setPopup(popup)
    .addTo(map)
    
  return marker
}

function Mapbox({ dimensions, map, setMap, refs, children }) { 
  useEffect(() => {
    const mapbox = new mapboxgl.Map(mapObj)
    setMap(mapbox)
  }, [setMap, children])

  useEffect(() => {
    children.forEach(post => putMarkerOnMap(dimensions, post, refs, map))
  }, [map, refs])

  return (
    <div id='map' className='h-full'></div>
  )
}

export default Mapbox
