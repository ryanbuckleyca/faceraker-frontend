import React, {useState, useEffect} from 'react';
import './App.css';
import { callAPI } from './utils/callAPI'
import Slogan from './components/Slogan'
import Posts from './components/Posts'
import Filters from './components/Filters/'
import Mapbox from './components/Mapbox/'

function App() {

  const [ posts, setPosts ] = useState([])
  const [ errors, setErrors ] = useState()

  useEffect(() => { 
    const query = `query={ posts {
      id, title, price, location, latitude, longitude,images, text, link, group { id, name } }
    }`
    callAPI(query).then(res => res.data
      ? setPosts(res.data.posts)
      : setErrors("cannot connect to api")
    )
  }, [])

  if(errors) return <div>{errors}</div>

  return (
    <div class="flex-row h-screen w-screen">
      <div id="slogan" class="flex sm:fixed w-full px-5 h-20 items-center bg-red-600 z-10 space-between">
        <Slogan />
      </div>
      <div id="mapbox" class="sticky w-full h-1/3 top-0 sm:fixed sm:right-0 sm:w-1/2 sm:h-screen">
        <Mapbox>{ posts }</Mapbox>
      </div>
      <div id="filters" class="sticky w-full bg-white order-2 top-1/3 sm:w-1/2 sm:fixed sm:top-20 z-10">
        <Filters setPosts={setPosts}>{ posts }</Filters>
      </div>
      <div id="posts" class="w-full p-3 sm:w-1/2 sm:float-left sm:mt-28">
        <Posts>{ posts }</Posts>
      </div>
    </div>
  );
}

export default App;
