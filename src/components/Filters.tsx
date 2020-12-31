import React from 'react'
import { post } from '../interfaces'

function Filters({ posts, setPosts }:any) {

  const sortByPrice = (dir:string) => {
    const sorted = posts.sort((a:post, b:post) => (
      dir==='ASC' ? a.price - b.price : b.price - a.price
    ))
    setPosts([...sorted])
  }
  
  return (
    <div style={{position: 'relative', top: 0, height: 0}}>
      <button id='sortAsc' onClick={() => sortByPrice('ASC')}>
        sort by price ASC
      </button>
      <button id='sortDesc' onClick={() => sortByPrice('DESC')}>
        sort by price DES
      </button>
    </div>
  )
}

export default Filters