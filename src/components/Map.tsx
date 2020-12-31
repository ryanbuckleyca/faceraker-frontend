/* src/App.js */
import React, { useEffect } from 'react';
import { post } from '../interfaces'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX || '';

// this should happen on scraping
// would be faster, and this merely undoes what's added there
// maybe add a boolean to db --> vagueAddress?
const handleVagueCoords = (post:post) => {
  let montreal = /[Mm]ont[-]?[rR]([eé]|oy)al/gi
  let quebec = /[qQ]([cC]|u[eé]bec)/gi
  let nonletters = /[^0-9a-z]/gi
  let locDetails = post.location
    .replace(montreal, '')
    .replace(quebec, '')
    .replace(nonletters, '')
  if(!locDetails)
    console.log('address is just Montreal...')
}


function Mapbox({ posts }:any) { 
  useEffect(() => {
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      // Montreal starting position [lng, lat]
      center: [-73.55335998535156, 45.509063720703125],
      zoom: 9 // starting zoom
    })
    posts.forEach((post:post) => {
      handleVagueCoords(post)
      let coords = new mapboxgl.LngLat(post.longitude, post.latitude)
      let marker = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(map);
      return marker
    })  
  }, [])

  return <div id='map' style={{width: '400px', height: '300px'}}></div>
}

export default Mapbox