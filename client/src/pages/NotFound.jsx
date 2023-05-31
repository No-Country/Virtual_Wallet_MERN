import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="w-full max-h-full h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="font-bold text-3xl">Pagina no Encontrada</h1>
      <Link
        to="/"
        className="font-semibold hover:text-twitter border-b-2 border-black"
      >
        Volver al Inicio
      </Link>
    </section>
  )
}

export default NotFound
