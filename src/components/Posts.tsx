import React from 'react'
import { post } from '../interfaces'

function Posts({posts}:any) {
  return (
    posts.map((post:post) => (
      <Post key={post.id} data={post} />
    ))
  )
}

function Post(props:any) {
  const { title, price, location, images, text, link, group } = props.data

  return <>
    <h1><a href={link}>{title}</a></h1>
    from {group.name}
    <h2 style={{color: 'green'}}>{price}</h2>
    <h3>{location}</h3>
    <Images list={images}/>
    <p>{text}</p>
  </>
}

function Images(props:any) {
  const images = JSON.parse(props.list)

  if (!props || images.length < 1) return <em>{"no images"}</em>

  return (
    <div>{ 
      images.map((img:string) => <img src={img} alt="detail" />) 
    }</div>
  )
}

export default Posts