import React from 'react'
import ImageSlider from '../ImageSlider' 

const Images = ({ children }) => {
  const images = JSON.parse(children)

  return (
    <div className="my-3 bg-gray-100 border-2 border-gray-200 border-style-solid">{ 
      images.length < 1 
      ? <em>{"[ no images ]"}</em>
      : <ImageSlider images={images} />
    }</div>
  )
}

export default Images