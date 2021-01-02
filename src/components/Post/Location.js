import React from 'react'
import pin from '../../images/pin.svg'

const Location = ({ children }) => (
  <address style={{ display: 'flex', alignItems: 'center', justifyContents: 'center'}}>
    <img src={ pin } alt="map pin" style={{ marginRight: '.3em'}} />
    <small title={ children } style={{ 
      fontSize: '.8em',
      overflow: 'hidden', 
      textOverflow: 'ellipsis', 
      whiteSpace: 'nowrap',
      cursor: 'help'
    }}>
      { children }
    </small>
  </address>
)

export default Location
