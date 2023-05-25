import { Link } from 'react-router-dom'

export const ItemCard = ({ element }) => {
  return (
    <article className="w-[23rem] h-[350px] gradient rounded-2xl p-3 pt-6 relative">
      <Link
        to={`/${element.name}`}
        className="itemCard border-1 border-c-subtitulo rounded-[4px] p-2 flex sm:flex-col items-center justify-around"
      >
        <h2 className="pr-10 sm:w-full font-titulo text-2xl text-white">
          {element.service}
        </h2>
        <div
          className="w-1/2 sm:w-full flex items-center justify-end h-auto text-secundario absolute bottom-5 right-5"
          style={{ fontSize: '4rem' }}
        >
          <ion-icon name={element.icon}></ion-icon>
        </div>
      </Link>
    </article>
  )
}
