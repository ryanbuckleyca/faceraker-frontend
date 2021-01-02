import React from 'react'
import Post from './Post/'

const Posts = ({ children }) => (
  <main class="z-0">
  {
    children.map(post => (
      <div class="relative top-300 my-4">
        <Post key={post.id} data={post} />
      </div>
    ))
  }
  </main>
)

export default Posts
