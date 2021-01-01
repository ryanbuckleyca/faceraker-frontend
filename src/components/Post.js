import React from 'react'

function Post(props) {
  const { title, price, location, images, text, link } = props.data

  return  (
    <div style={{position: 'relative', top: '300px'}}>
      <h1><a href={link}>{title}</a></h1>
      <h2 style={{color: 'green'}}>{price}</h2>
      <h3>{location}</h3>
      <Images list={images}/>
      <p>{text}</p>
    </div>
  )
}

function Images(props) {
  const images = JSON.parse(props.list)

  if (!props || images.length < 1) return <em>{"no images"}</em>

  return (
    <div>{ 
      images.map(img => <img key={img} src={img} alt="detail" />) 
    }</div>
  )
}

export default Post