import React from 'react'

function Header({ children }) {
  const [ Title, Location, PriceTag ] = children
  return (
    <header style={{ 
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1em'
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        { Title }
        { Location }
      </div>
      <div>
        { PriceTag }
      </div>
    </header>
  )
}

export default Header