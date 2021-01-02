import React from 'react'
import Post from './Post/'

const Posts = ({ children }) => (
  <main className="z-0">
  {
    children.map(post => (
      <div key={post.id} className="mb-4">
        <Post data={post} />
      </div>
    ))
  }
  </main>
)

export default Posts
