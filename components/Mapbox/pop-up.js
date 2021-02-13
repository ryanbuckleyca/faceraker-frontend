import React from 'react'
import PriceTag from 'components/Post/PriceTag'
import Images from 'components/Post/Images'
import Title from 'components/Post/Title'
import Button from 'components/Button'

export const popupCard = (dimensions, post, refs) => {
  const scrollToRef = id => (
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  )

  const trunc = dimensions.width / 18
  return (
    <aside className="
      p-1 text-xs sm:h-56 sm:overflow-scroll sm:text-sm
    ">
      <header className="relative flex items-center h-10 text-sm">
        <Title trunc={trunc} linkTo={ post.link } className="p-0 flex-1 mr-2 text-md">{ post.title }</Title>
        <PriceTag className="w-10 h-10 text-sm">{ post.price }</PriceTag>
      </header>
      <Images className="hidden sm:block">{ post.images }</Images>
      <p className="hidden sm:block sm:my-3">
        { post.text }
      </p>
      <span className="flex">
      <Button type="primary" 
        className="flex-1"
        onClick={()=>window.open(post.link)}>
        view on facebook
      </Button>
      <Button type="secondary"
        onClick={()=>scrollToRef(post.id)}>show
      </Button>
      </span>
    </aside>
  )
}
