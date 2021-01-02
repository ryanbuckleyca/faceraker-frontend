export const markerClass = (post) => (
  post.location === 'Montréal, Québec'
  ? "marker-dot"
  : "marker-pilon"
)