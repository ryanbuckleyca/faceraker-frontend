import React from 'react'
import Header from './Header'
import Images from './Images'
import Title from './Title'
import PriceTag from './PriceTag'
import Location from './Location'

const Post = ({ data, map, dimensions }) => {
  const { title, price, location, longitude, latitude, images, text, link } = data

  if(!map || !data) 
    return false

  const w = dimensions.width
  const trunc = w < 640 ?  w / 8 : w / 22
  console.log('trun will be :', trunc)

  return (
    <main className="relative border-solid border-2 border-red-400 bg-white rounded-xl p-5">
      <Header>
        <Title trunc={trunc} linkTo={ link } className="mb-1 p-0 text-2xl flex-1">{ title }</Title>
        <PriceTag className="w-20 h-20 text-xl flex-0">{ price }</PriceTag>
        <Location map={map}>{{ location, longitude, latitude }}</Location>
      </Header>
      <Images>{ images }</Images>
      <p className="my-3">
        { text }
      </p>
      <button className="bg-teal rounded text-white w-full p-2" onClick={()=>window.open(link)}>view on facebook</button>
    </main>
  )
}


export default Post