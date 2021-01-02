function Images({ children }) {
  const images = JSON.parse(children)

  if (!children || images.length < 1) return <em>{"no images"}</em>

  // TODO: render carousel for small screens

  return (
    <div className="flex space-y-2 flex-wrap my-3">{ 
      images.map(img => <img 
        key={img} 
        src={img} 
        alt="detail" 
        width="100" 
        className="mr-2" 
      />)
    }</div>
  )
}

export default Images