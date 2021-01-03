import PriceTag from '../Post/PriceTag'
import Images from '../Post/Images'
import Title from '../Post/Title'

export const popupCard = (post) => (
  <aside className="p-1 h-56 overflow-scroll text-sm">
    <header className="relative flex items-center h-10 text-sm">
      <Title trunc="40" linkTo={ post.link } className="p-0 text-md mr-10">{ post.title }</Title>
      <PriceTag className="w-10 h-10 text-sm">{ post.price }</PriceTag>
    </header>
    <Images>{ post.images }</Images>
    <p className="my-3">
      { post.text }
    </p>
    <button className="bg-teal rounded text-white w-full p-2" onClick={()=>window.open(post.link)}>view on facebook</button>
  </aside>
)