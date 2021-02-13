const gravesiteCoords = () => {
  let r = 0.00396
  let n = Math.random()<.5 ? -1 : 1
  let x = r * Math.random() * n
  let spots = [
    [-73.609270+x, 45.499805+x],
    [-73.605279+x, 45.503174+x],
    [-73.597597+x, 45.504768+x],
    [-73.598026+x, 45.508106+x]
  ]
  let spot = Math.floor(Math.random()*spots.length)
  return ({ lng: spots[spot][0], lat: spots[spot][1] })
}

export const getCoords = (post) => (
  post.location === 'Montréal, Québec'
  ? gravesiteCoords()
  : { lng: post.longitude, lat: post.latitude }
)