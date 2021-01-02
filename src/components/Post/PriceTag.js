import React from 'react'

const PriceTag = ({ children }) => (
  <div class="flex items-center justify-center bg-pricetag text-white w-14 h-14 ml-3">
    { children }
  </div>
)

export default PriceTag