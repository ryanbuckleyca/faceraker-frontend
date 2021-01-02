import React from 'react'

function Header({ children }) {
  const [ Title, Location, PriceTag ] = children
  return (
    <header class="flex items-center mb-4">
      <div class="flex-1 min-w-0">
        { Title }
        { Location }
      </div>
      { PriceTag }
    </header>
  )
}

export default Header