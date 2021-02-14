import { Marker } from 'react-mapbox-gl';
import { getCoords } from './coords'
import PopUpCard from './PopUpCard'

// @TODO: getCoords re-renders on every state change
// which moves the markers randomly, as getCoords should
// better to set random coords when fetching or initially saving data


const MarkerPopup = ({ post, refs, showPopup, expandMarker }) => {
  return (
    <>
      <Marker
        key={post.id}
        coordinates={[getCoords(post).lng, getCoords(post).lat]}
        anchor="bottom"
        onClick={() => expandMarker(post)}
      >
        <div className={markerClass(post)}></div>
      </Marker>
      {showPopup === post.id && (
        <PopUpCard
          post={post}
          refs={refs}
          anchor="bottom"
          coordinates={[getCoords(post).lng, getCoords(post).lat]}
          offset={{'bottom': [0, -38]}}
        />
      )}
    </>
  )
}

const markerClass = (post) => (
  post.location === 'Montréal, Québec'
  ? "marker-dot"
  : "marker-pilon"
)

export default MarkerPopup
