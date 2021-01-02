import React from 'react'
import pricetag from '../../images/pricetag.svg'


const PriceTag = ({ children }) => (
  <div style={{
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${pricetag})`,
      color: 'white',
      width: '55px',
      height: '55px'
  }}>
    { children }
  </div>
)

export default PriceTag