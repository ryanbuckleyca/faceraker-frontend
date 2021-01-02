import ReactDOMServer from 'react-dom/server';
import PriceTag from '../Post/PriceTag'
import Images from '../Post/Images'

export const popupCard = (post) => ReactDOMServer.renderToString(
  <aside className="border-solid border-2 border-red-400 rounded-xl p-5">
    <header className="flex">
      <h2><a href={ post.link }>{ post.title }</a></h2>
      <PriceTag>{ post.price }</PriceTag>
    </header>
    <Images>{ post.images }</Images>
    <p className="my-3">
      { post.text.substr(0, 100) }
    </p>
  </aside>
)