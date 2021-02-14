import { Marker } from 'react-mapbox-gl';
import { getCoords } from './coords'

// @TODO: getCoords re-renders on every state change
// which moves the markers randomly (as getCoords does)
// better to set random coords when fetching or initially saving data
const MarkerPopup = ({ post, expandMarker }) => {
  return (
    <>
      <Marker
        key={post.id}
        coordinates={[getCoords(post).lng, getCoords(post).lat]}
        anchor="center"
        onClick={() => expandMarker(post)}
      >
        <div className={markerClass(post)}></div>
      </Marker>
    </>
  )
}

const markerClass = (post) => (
  post.location === 'Montréal, Québec'
  ? "marker-dot"
  : "marker-pilon"
)

export default MarkerPopup
