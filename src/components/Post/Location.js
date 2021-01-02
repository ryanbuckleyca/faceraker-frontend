import React from 'react'
import pin from '../../images/pin.svg'

const Location = ({ children }) => (
  <address className="flex items-center justify-left">
    <img src={ pin } alt="map pin" className="mr-1" />
    <small title={ children } className="text-sm truncate">
      { children }
    </small>
  </address>
)

export default Location
