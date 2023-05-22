import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="text-center max-h-full h-screen my-20">
      <h1 className="mb-10 font-bold text-3xl">Pagina no Encontrada</h1>
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
