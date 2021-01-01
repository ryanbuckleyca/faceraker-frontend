import React from 'react'

function Filters({ posts, setPosts }) {

  const sortByPrice = (dir) => {
    const sorted = posts.sort((a, b) => (
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