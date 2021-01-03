import React, { useEffect, createRef } from 'react'
import Post from './Post/'

const Posts = ({ children, map, setMap, refs, setRefs }) => {
  
  useEffect(()=> {
    const refList = children.reduce((acc, post) => {
      acc[post.id] = createRef()
      return acc
    }, {})  
    setRefs({...refList}) 
  }, [children])

  if(!children || !refs) return <em>Loading...</em>

  const posts = children.map(post => (
    <div id={post.id} ref={refs[post.id]} key={post.id} className="mb-4">
      <Post data={post} map={map} setMap={setMap} />
    </div>
  ))

  return (
    <main className="z-0 bg-beige">
      { posts }
    </main>
  )
}

export default Posts
