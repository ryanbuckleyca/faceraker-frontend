import React from 'react'
import Button from 'components/Button'

function Filters({ children, setPosts }) {
  if (!children || children.length <= 1) return false

  const sortByPrice = (dir) => {
    const sorted = children.sort((a, b) => (
      dir==='ASC' ? a.price - b.price : b.price - a.price
    ))
    setPosts([...sorted])
  }
  
  return (
    <div className="h-12 text-center space-x-3">
      <Button type="secondary" id='sortAsc' onClick={() => sortByPrice('ASC')}>
        $ ↓
      </Button>
      <Button type="secondary" id='sortDesc' onClick={() => sortByPrice('DESC')}>
        $ ↑
      </Button>
    </div>
  )
}

export default Filters
