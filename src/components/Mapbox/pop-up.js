import PriceTag from '../Post/PriceTag'
import Images from '../Post/Images'

export const popupCard = (post) => (
  <aside className="p-0">
    <header className="relative flex items-center h-10">
      <h1 className="mr-10"><a href={ post.link }>{ post.title }</a></h1>
      <PriceTag className="w-10 h-10">{ post.price }</PriceTag>
    </header>
    <Images as="carousel">{ post.images }</Images>
    <p className="my-3">
      { post.text.substr(0, 100) }
    </p>
  </aside>
)