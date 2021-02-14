import { useContext } from 'react'
import Pin from 'images/Pin.js'
import MapContext from 'components/Mapbox/MapContext'

const Location = ({ post, setShowPopup }) => {
  const [mapSettings, setMapSettings ] = useContext(MapContext)

  const flyToLoc = (post) => {
    setMapSettings({
      ...mapSettings,
      currentPost: post,
      zoom: [12],
      center: [post.longitude, post.latitude-0.007],
    })
    setShowPopup(post.id)
  }

  return (
    <address className="flex items-center justify-left" onClick={()=>flyToLoc(post)}>
      <Pin className="mr-1 flex-0" />
      <small title={ post.location } className="text-sm truncate">
        { post.location }
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
