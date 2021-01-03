import React from 'react'
import pin from '../../images/pin.svg'

const Location = ({ children, map }) => {

  const { location, longitude, latitude } = children

  const flyToLoc = (lng, lat) => {
    console.log('flyToLoc called')
    map.flyTo({
      zoom: 14,
      center: [lng, lat],
      essential: true
    })
  }
  return (
    <address className="flex items-center justify-left" onClick={()=>flyToLoc(longitude, latitude)}>
      <img src={ pin } alt="map pin" className="mr-1" />
      <small title={ location } className="text-sm truncate">
        { location }
      </small>
      &nbsp;
      <small>
      (
        <span className="border-b-2 border-dotted border-gray-400 cursor-pointer">
          show on map
        </span>
      )
      </small>
    </address>
  )
}

export default Location
