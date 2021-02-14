import React, { useEffect, createRef } from 'react'
import Post from 'components/Post/'

const Posts = ({ children, refs, setRefs, setShowPopup }) => {
  
  useEffect(()=> {
    const refList = children.reduce((acc, post) => {
      acc[post.id] = createRef()
      return acc
    }, {})  
    setRefs({...refList}) 
  }, [children])

  if(!children || children.length <= 1 || !refs) return <em>Loading...</em>

  return (
    <main className="z-0 bg-beige">
      {children.map(post => (
        <div key={post.id} ref={refs[post.id]} key={post.id} className="mb-4">
          <Post data={post} setShowPopup={setShowPopup} />
        </div>
      ))}
    </main>
  )
}

export default Posts
