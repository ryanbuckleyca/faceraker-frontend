import React, { useEffect, createRef } from 'react'
import Post from 'components/Post/'

const Posts = ({ children, map, refs, setRefs, dimensions }) => {
  
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
      <Post dimensions={dimensions} data={post} map={map} />
    </div>
  ))

  return (
    <main className="z-0 bg-beige">
      { posts }
    </main>
  )
}

export default Posts
