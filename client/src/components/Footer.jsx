import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-demo flex justify-evenly items-start p-10">
      <article>
        <h2 className="mb-3 text-center">Logo</h2>
        <div className="flex justify-center gap-5 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-facebook-f cursor-pointer text-facebook"
          ></a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-instagram cursor-pointer text-instagram"
          ></a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-twitter cursor-pointer text-twitter"
          ></a>
        </div>
      </article>
      <article>
        <h2 className="mb-3 font-semibold">INFORMACIÓN LEGAL</h2>
        <ul className="text-sm flex flex-col gap-3">
          <Link to="/information-transparency">
            Transparencia de la Información
          </Link>
          <Link to="/security-privacy">
            Politicas de Seguridad y Privacidad
          </Link>
          <Link to="/terms-conditions">Términos y Condiciones</Link>
          <Link to="/contact">Trabajá con Nosotros</Link>
        </ul>
      </article>
      <article>
        <h2 className="mb-3 font-semibold">
          Comienza a usar <i>nombre</i>
        </h2>
        <div className="flex flex-col gap-2">
          <Link to="#" className="text-sm">
            Escribinos a <i>numero</i>
          </Link>
          <Link to="#" className="text-sm">
            <i>Avenida</i>
          </Link>
          <Link to="#" className="text-sm">
            <i>Dirección</i>
          </Link>
        </div>
      </article>
    </footer>
  )
}

export default Footer
