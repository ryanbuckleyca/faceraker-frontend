import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % images.length);
  }

  const slideLeft = () => {
    console.log('slideLeft')
    const nextIndex = index - 1;
    nextIndex < 0
    ? setIndex(images.length - 1)
    : setIndex(nextIndex);
  }

  return (
    images.length > 0 && (
      <div className="w-full flex space-y-2 my-3">
        <button className="w-8 text-2xl text-teal" onClick={slideLeft}>{"◀"}</button>
        <span className="flex-1 justify-center">
          <img className="mx-auto" src={images[index]} alt={index} />
        </span>
        <button className="w-8 text-2xl text-teal" onClick={slideRight}>{"▶"}</button>
      </div>
    )
  );
};

export default ImageSlider;