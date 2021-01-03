/* src/App.js */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';
import { markerClass } from './markers'
import { getCoords } from './coords'
import { popupCard } from './pop-up'
import './styles.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

const mapObj = {
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.55335998535156, 45.509063720703125],
  zoom: 10
}

const putMarkerOnMap = (post, map) => {
  const placeholder = document.createElement('div')
  ReactDOM.render(popupCard(post), placeholder)
  const { lng, lat } = getCoords(post)
  const popup = new mapboxgl.Popup({ offset: 25 }).setDOMContent(placeholder);
  const coords = new mapboxgl.LngLat(lng, lat)
  const el = document.createElement('div')
  el.className = markerClass(post)

  const marker = new mapboxgl.Marker(el)
    .setLngLat(coords)
    .setPopup(popup)
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
    <div id='map' className='h-full'></div>
  )
}

export default Mapbox