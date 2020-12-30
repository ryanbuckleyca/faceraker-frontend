import React, {useState, useEffect} from 'react';
import './App.css';
import { callAPI } from './utils/callAPI'
import { post } from './interfaces'
import Posts from './components/Posts'
import Filters from './components/Filters'

function App() {

  const [ posts, setPosts ] = useState<Array<post>>([])

  useEffect(() => { 
    const query = `query={
      posts {
        id, title, price, location, images, text, link, group { id, name }
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
      <Filters posts={posts} setPosts={setPosts} />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
