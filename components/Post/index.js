import { useContext } from 'react'
import DisplayContext from "components/DisplayContext";
import Header from './Header'
import Images from './Images'
import Title from './Title'
import PriceTag from './PriceTag'
import Location from './Location'
import { Facebook } from 'react-feather'

const Post = ({ data, setShowPopup }) => {
  if(!data) return false

  const { title, price, images, text, link } = data

  const dimensions = useContext(DisplayContext)
  const w = dimensions.width
  const trunc = w < 640 ? w / 8 : w / 22

  return (
    <main className="relative border-solid border-2 border-red-400 bg-white rounded-xl p-5">
      <Header>
        <Title trunc={trunc} linkTo={ link } className="mb-1 p-0 text-2xl flex-1">{ title }</Title>
        <PriceTag className="w-20 h-20 text-xl flex-0">{ price }</PriceTag>
        <Location post={data} setShowPopup={setShowPopup} />
      </Header>
      <Images>{ images }</Images>
      <p className="my-3">
        { text }
      </p>
      <button 
        className="bg-teal flex justify-center space-x-2 items-center rounded text-white w-full p-2"
        onClick={()=>window.open(link)}
      >
        <Facebook size={20} /> <div>voir/view facebook post</div>
      </button>
    </main>
  )
}


export default Post
