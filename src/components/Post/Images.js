import React from 'react'
import ImageSlider from '../ImageSlider' 

const Images = ({ children, as }) => {
  const images = JSON.parse(children)

  if (!children || images.length < 1) 
    return <div className="my-3"><em>{"[ no images ]"}</em></div>

  if(as === 'carousel')
    return <ImageSlider images={images} />

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