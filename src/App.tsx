import React, {useState, useEffect} from 'react';
import './App.css';
import { callAPI } from './utils/callAPI'
import { post } from './interfaces'
import Posts from './components/Posts'
import Filters from './components/Filters'
import Mapbox from './components/Map'

function App() {

  const [ posts, setPosts ] = useState<Array<post>>([])

  useEffect(() => { 
    const query = `query={
      posts {
        id, title, price, location, latitude, longitude,images, text, link, group { id, name }
      }
    }`  
    callAPI(query).then(res => {
      if(res.data) {
        setPosts(res.data.posts)
      }
    })
  }, [])

  useEffect(()=> console.log('posts state changed'), [])

  return (
    <div className="App">
      <div style={{position: 'fixed', top: 0, left: 0, right: 0, width: '100%', height: '300px', backgroundColor: '#fff', zIndex: 2}}>
        <Filters posts={posts} setPosts={setPosts} />
        <Mapbox posts={posts} />
      </div>
      <main style={{zIndex: 0}}>
        <Posts posts={posts} />
      </main>
    </div>
  );
}

export default App;
