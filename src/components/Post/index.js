import React from 'react'
import Header from './Header'
import Images from './Images'
import Title from './Title'
import PriceTag from './PriceTag'
import Location from './Location'

const Post = (props) => {
  const { title, price, location, images, text, link } = props.data

  return (
    <main class="border-solid border-2 border-red-400 rounded-md p-3">
      <Header>
        <Title linkTo={ link }>
          { title }
        </Title>
        <Location>
          { location }
        </Location>
        <PriceTag>
          { price }
        </PriceTag>
      </Header>
      <Images>
        { images }
      </Images>
      <p>
        { text }
      </p>
    </main>
  )
}


export default Post