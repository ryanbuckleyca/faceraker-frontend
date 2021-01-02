import React, {useState, useEffect} from 'react';
import './App.css';
import { callAPI } from './utils/callAPI'
import Post from './components/Post/'
import Filters from './components/Filters'
import Mapbox from './components/Map'

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
    <div className="App">
      <div style={{position: 'fixed', top: 0, left: 0, right: 0, width: '100%', height: '300px', backgroundColor: '#fff', zIndex: 2}}>
        <Filters posts={posts} setPosts={setPosts} />
        <Mapbox posts={posts} />
      </div>
      <main style={{zIndex: 0}}>
        {
          posts.map(post => (
            <div style={{position: 'relative', top: '300px'}}>
              <Post key={post.id} data={post} />
            </div>
          ))
        }
      </main>
    </div>
  );
}

export default App;
