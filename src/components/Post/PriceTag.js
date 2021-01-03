import React from 'react'

const PriceTag = ({ children, className }) => (
  <div className={`pricetag ${className}`} >
    { children }
  </div>
)

export default PriceTag