import React from 'react'
import Button from 'components/Button'

function Filters({ children, setPosts }) {

  const sortByPrice = (dir) => {
    const sorted = children.sort((a, b) => (
      dir==='ASC' ? a.price - b.price : b.price - a.price
    ))
    setPosts([...sorted])
  }
  
  return (
    <div className="h-12 text-center space-x-3">
      <Button type="secondary" id='sortAsc' onClick={() => sortByPrice('ASC')}>
        sort by price ASC
      </Button>
      <Button type="secondary" id='sortDesc' onClick={() => sortByPrice('DESC')}>
        sort by price DES
      </Button>
    </div>
  )
}

export default Filters
