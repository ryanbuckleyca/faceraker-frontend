import { useContext } from 'react'
import DisplayContext from "components/DisplayContext";
import PriceTag from 'components/Post/PriceTag'
import Images from 'components/Post/Images'
import Title from 'components/Post/Title'
import Button from 'components/Button'

const PopupCard = ({ post, refs }) => {
  if (!post) return false
  
  const display = useContext(DisplayContext);
  const trunc = display.width / 18

  const scrollToRef = id => (
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  )

  return (
    <aside className="pop-up rounded-sm shadow-xl p-4 bg-white mt-28 w-64 mx-auto text-xs sm:h-60 sm:overflow-scroll sm:text-sm">
      <div className="relative w-full text-center -top-10 -mb-10 text-white text-3xl">&#9650;</div>
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
        fb view
      </Button>
      <Button type="secondary"
        onClick={()=>scrollToRef(post.id)}>show
      </Button>
      </span>
    </aside>
  )
}

export default PopupCard
