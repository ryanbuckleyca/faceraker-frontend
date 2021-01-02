function Images({ children }) {
  const images = JSON.parse(children)

  if (!children || images.length < 1) return <em>{"no images"}</em>

  return (
    <div>{ 
      images.map(img => (
        <img key={img} src={img} alt="detail" width="100" />
      ))
    }</div>
  )
}

export default Images