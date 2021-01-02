import React from 'react'
import Button from './Button'

function Filters({ children, setPosts }) {

  const sortByPrice = (dir) => {
    const sorted = children.sort((a, b) => (
      dir==='ASC' ? a.price - b.price : b.price - a.price
    ))
    setPosts([...sorted])
  }
  
  return (
    <div class="relative top-0 h-0">
      <Button id='sortAsc' onClick={() => sortByPrice('ASC')}>
        sort by price ASC
      </Button>
      <Button id='sortDesc' onClick={() => sortByPrice('DESC')}>
        sort by price DES
      </Button>
    </div>
  )
}

export default Filters