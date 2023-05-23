import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import logoName from '../img/logo-nombre.png'

const Footer = () => {
  return (
    <footer className="bg-demo flex justify-evenly items-start p-10">
      <article>
        <div className="flex justify-center items-center w-[120px]">
          <img src={logo} alt="Logo" />
          <img className="-ml-8 mt-4" src={logoName} alt="Logo" />
        </div>
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
          Comienza a usar <i className="text-principal">PingüiWallet</i>
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Escríbenos a <i className="font-semibold">+1 555-123-4567</i>
          </p>
          <p className="text-sm">
            Avenida <i className="font-semibold">Esperanza Celeste</i>
          </p>
          <p className="text-sm">
            Dirección <i className="font-semibold">Calle Sol, número 123</i>
          </p>
        </div>
      </article>
    </footer>
  )
}

export default Footer
