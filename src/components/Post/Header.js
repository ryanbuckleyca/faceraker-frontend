import React from 'react'

function Header({ children }) {
  const [ Title, PriceTag, Location ] = children
  return (
    <header className="flex items-center h-20 mb-4">
      <div className="flex-1 min-w-0 mr-2">
        { Title }
        { Location }
      </div>
      { PriceTag }
    </header>
  )
}

export default Header