import { useContext } from 'react'
import Pin from 'images/Pin.js'
import MapContext from 'components/Mapbox/MapContext'

const Location = ({ children }) => {
  const [ , setMapSettings ] = useContext(MapContext)

  const { location, longitude, latitude } = children

  const flyToLoc = (lng, lat) => {
    setMapSettings({
      zoom: [14],
      center: [lng, lat],
    })
  }

  return (
    <address className="flex items-center justify-left" onClick={()=>flyToLoc(longitude, latitude)}>
      <Pin className="mr-1 flex-0" />
      <small title={ location } className="text-sm truncate">
        { location }
      </small>
      &nbsp;
      <small className="flex-0">
      (
        <span className="border-b-2 border-dotted border-gray-400 cursor-pointer">
          show
        </span>
      )
      </small>
    </address>
  )
}

export default Location
