import React, {useState, useEffect} from 'react';
import './App.css';

interface post {
  id: number,
  title: string, 
  price: number, 
  location: string, 
  images: string, 
  text: string, 
  link: string
}
interface graphRes {
  data: { posts: [post] } | null
  errors: any
}

const errors = (msg:string, err:any):graphRes => {
  const errMsg = msg + err
  console.log(errMsg)
  return {data: null, errors: errMsg}
}

function App() {

  const [ posts, setPosts ] = useState<Array<post>>([])

  const callAPI = async (q:string): Promise<graphRes> => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json'}
    }
    try {
      const res = await fetch(`http://localhost:8000/graphql?${q}`, options)
      const json = await res.json()
      console.log(json)
      return json
    }
    catch (err) {
      return errors("error connecting to graphql: ", err)
    }
  }

  const loadPosts = async () => {
    try {
      const res:graphRes = await callAPI(`query={
        posts {
          id, title, price, location, images, text, link
        }
      }`)
      if (res.data) {
        const posts:Array<post> = res.data.posts
        setPosts(posts)
      }
    }
    catch (err) {
      errors("error loading posts: ", err)
    }
  }

  useEffect(() => { 
    loadPosts() 
  }, [])

  return (
    <div className="App">
      {
        posts.map((post:post) => <pre key={post.id}>{JSON.stringify(post, null, 4)}<br/></pre>)
      }
    </div>
  );
}

export default App;
