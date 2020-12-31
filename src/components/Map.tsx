/* src/App.js */
import React, { useEffect } from 'react';
import { post } from '../interfaces'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX || '';

// TODO: scatter the dead
// add variation to the coordinates of non-address posts
// put them all in the cemetery
const markerMountain = (post:post) => {
  let r = 0.00396
  let n = Math.random()<.5 ? -1 : 1
  let x = r * Math.random() * n
  let spots = [
    [-73.591804+x, 45.508889+x],
    [-73.591675+x, 45.503596+x],
    [-73.597511+x, 45.508107+x],
    [-73.602146+x, 45.504558+x],
    [-73.606395+x, 45.501249+x]
  ]
  let spot = Math.floor(Math.random()*5)
  return spots[spot]
}

const getCoords = (post:post) => {
  const mtn = markerMountain(post)
  return (
    post.location === 'Montréal, Québec'
    ? { lng: mtn[0], lat: mtn[1] }
    : {lng: post.longitude, lat: post.latitude }
  )
}

const markerClass = (post:post) => (
  post.location === 'Montréal, Québec'
  ? "marker-dot"
  : "marker-pilon"
)


function Mapbox({ posts }:any) { 
  useEffect(() => {
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.55335998535156, 45.509063720703125],
      zoom: 9
    })
    posts.forEach((post:post) => {
      const {lng, lat} = getCoords(post)
      const coords = new mapboxgl.LngLat(lng, lat)

      const el = document.createElement('div')
      el.className = markerClass(post)

      let marker = new mapboxgl.Marker(el)
        .setLngLat(coords)
        .addTo(map)
      return marker
    })  
  }, [posts])

  return <div id='map' style={{ top: '50px', width: '100%', height: '300px' }}></div>
}

export default Mapbox