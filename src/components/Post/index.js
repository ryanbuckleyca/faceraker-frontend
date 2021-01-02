import React from 'react'
import Header from './Header'
import Images from './Images'
import Title from './Title'
import PriceTag from './PriceTag'
import Location from './Location'

const Post = (props) => {
  const { title, price, location, images, text, link } = props.data

  return (
    <div style={{ 
      border: '1px red solid', 
      borderRadius: '.5em',
      padding: '.8em'
    }}>
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
    </div>
  )
}


export default Post