import React from 'react'
import pin from '../../images/pin.svg'

const Location = ({ children }) => (
  <address class="flex items-center justify-left">
    <img src={ pin } alt="map pin" class="mr-1" />
    <small title={ children } class="text-sm truncate">
      { children }
    </small>
  </address>
)

export default Location
