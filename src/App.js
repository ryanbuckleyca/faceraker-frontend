import React, {useState, useEffect} from 'react';
import './App.css';
import { callAPI } from './utils/callAPI'
import Header from './components/Header'
import Posts from './components/Posts'
import Filters from './components/Filters'
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
    <div class="relative">
      <div class="fixed top-0 left-0 right-0 w-full bg-white z-10">
        <Header />
        <Filters setPosts={setPosts}>{ posts }</Filters>
        <Mapbox>{ posts }</Mapbox>
      </div>
      <Posts>{ posts }</Posts>
    </div>
  );
}

export default App;
