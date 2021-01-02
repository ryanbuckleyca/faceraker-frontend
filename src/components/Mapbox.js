/* src/App.js */
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

const gravesiteCoords = () => {
  let r = 0.00396
  let n = Math.random()<.5 ? -1 : 1
  let x = r * Math.random() * n
  let spots = [
    [-73.609270+x, 45.499805+x],
    [-73.605279+x, 45.503174+x],
    [-73.597597+x, 45.504768+x],
    [-73.598026+x, 45.508106+x]
  ]
  let spot = Math.floor(Math.random()*spots.length)
  return ({ lng: spots[spot][0], lat: spots[spot][1] })
}

const getCoords = (post) => (
  post.location === 'Montréal, Québec'
  ? gravesiteCoords()
  : { lng: post.longitude, lat: post.latitude }
)

const markerClass = (post) => (
  post.location === 'Montréal, Québec'
  ? "marker-dot"
  : "marker-pilon"
)

function Mapbox({ children }) { 
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.55335998535156, 45.509063720703125],
      zoom: 9
    })
    children.forEach(post => {
      const {lng, lat} = getCoords(post)
      const coords = new mapboxgl.LngLat(lng, lat)
      const el = document.createElement('div')
      el.className = markerClass(post)

      const marker = new mapboxgl.Marker(el)
        .setLngLat(coords)
        .addTo(map)
      return marker
    })  
  }, [children])

  if(!children) return <em>Loading...</em>

  return (
    <div id='map' style={{ top: '50px', width: '100%', height: '300px' }}></div>
  )
}

export default Mapbox