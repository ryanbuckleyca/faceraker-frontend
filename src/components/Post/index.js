import React from 'react'
import Header from './Header'
import Images from './Images'
import Title from './Title'
import PriceTag from './PriceTag'
import Location from './Location'

const Post = (props) => {
  const { title, price, location, images, text, link } = props.data

  return (
    <main className="border-solid border-2 border-red-400 rounded-xl p-5">
      <Header>
        <Title linkTo={ link }>{ title }</Title>
        <Location>{ location }</Location>
        <PriceTag>{ price }</PriceTag>
      </Header>
      <Images>{ images }</Images>
      <p className="my-3">
        { text }
      </p>
    </main>
  )
}


export default Post