import React from 'react'
import Post from './Post/'

const Posts = ({ children, map, setMap }) => (
  <main className="z-0 bg-beige">
  {
    children.map(post => (
      <div key={post.id} className="mb-4">
        <Post data={post} map={map} setMap={setMap} />
      </div>
    ))
  }
  </main>
)

export default Posts
