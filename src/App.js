import React, {useState, useEffect} from 'react';
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
    <div className="container">
      <div id="slogan" className="
        w-full p-5 bg-red-600 z-10
        sm:w-1/2
      ">
        <Slogan />
      </div>
      <div id="mapbox" className="
        w-full h-64 top-20 
        sm:w-1/2 sm:h-screen sm:top-0 sm:right-0 sm:fixed
      ">
        <Mapbox>{ posts }</Mapbox>
      </div>
      <div id="filters" className="
        w-full bg-white sticky top-0 z-10
        sm:w-1/2 
      ">
        <Filters setPosts={setPosts}>{ posts }</Filters>
      </div>

      <div id="posts" className="
        w-full px-3 
        sm:w-1/2
      ">
        <Posts>{ posts }</Posts>
      </div>
    </div>
  );
}

export default App;
