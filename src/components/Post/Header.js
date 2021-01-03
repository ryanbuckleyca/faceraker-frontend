import React from 'react'

function Header({ children }) {
  const [ Title, Location, PriceTag ] = children
  return (
    <header className="relative flex items-center mb-7">
      <div className="flex-1 min-w-0 mr-18">
        { Title }
        { Location }
      </div>
      { PriceTag }
    </header>
  )
}

export default Header