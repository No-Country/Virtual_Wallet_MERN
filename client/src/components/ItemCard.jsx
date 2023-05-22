import { Link } from 'react-router-dom'

export const ItemCard = ({ element }) => {
  return (
    <>
      <Link
        to={`/${element.name}`}
        className="itemCard w-[250px] h-[260px] sm:w-[170px] sm:h-[160px] border-1 border-c-subtitulo rounded-[4px] p-2 bg-c-titulo flex sm:flex-col items-center justify-around"
        style={{ boxShadow: '10px 10px 9px #cccccc, -10px -10px 9px #f4f4f4' }}
      >
        <h2 className="w-1/2 sm:w-full font-titulo text-sm text-c-contenedor">
          {element.service}
        </h2>
        <div
          className="w-1/2 sm:w-full flex items-center justify-end h-auto text-c-boton-accion"
          style={{ fontSize: '3rem' }}
        >
          <ion-icon name={element.icon}></ion-icon>
        </div>
      </Link>
    </>
  )
}
