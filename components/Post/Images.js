import React from 'react'
import ImageSlider from 'components/ImageSlider' 

const Images = ({ children, className }) => {
  const images = JSON.parse(children)
  const classNames = `imageContainer text-center ${className || ''}`;
  return (
    <div className={classNames}>{ 
      images.length < 1 
      ? <em className="text-center w-full">{"no images"}</em>
      : <ImageSlider images={images} />
    }</div>
  )
}

export default Images
