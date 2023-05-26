import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import logoName from '../img/logo-nombre.png'

const Footer = () => {
  return (
    <footer className='w-full h-auto pt-5 pb-5'>
      <div className="bg-demo w-full h-auto flex flex-col justify-center items-center sm:flex-row justify-between sm:items-start sm:justify-center gap-8 p-1">
        <article className='sm:w-1/3 w-full sm:h-auto h-[140px] flex flex-col justify-center items-center gap-5'>
          <div className="flex justify-center items-center w-full h-60px overflow-hidden">
            <img className='h-full w-1/3 object-contain' src={logo} alt="Logo" />
            <img className="h-full w-2/3 object-contain" src={logoName} alt="Logo" />
          </div>
          <div className="flex justify-center gap-5 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="fa-brands fa-facebook-f cursor-pointer text-facebook  hover:bg-colorFuente1Submenu hover:text-colorFuente2Submenu ease-in duration-300 w-[40px] h-[40px] rounded-[4px] overflow-hiden flex  justify-center items-center"
            ></a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="fa-brands fa-instagram cursor-pointer text-instagram hover:bg-colorFuente1Submenu hover:text-colorFuente2Submenu ease-in duration-300 w-[40px] h-[40px] rounded-[4px] overflow-hiden flex  justify-center items-center"
            ></a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="fa-brands fa-twitter cursor-pointer text-twitter hover:bg-colorFuente1Submenu hover:text-colorFuente2Submenu ease-in duration-300 w-[40px] h-[40px] rounded-[4px] overflow-hiden flex  justify-center items-center"
            ></a>
          </div>
        </article>
        <article className='sm:w-1/3 h-auto full h-auto flex-colum gap-2'>
          <h2 className="font-semibold font-titulo capitalize text-colorFuente1Submenu text-2xl mb-1 font-[600]">Información legal</h2>
          <ul className='font-parrafo text-zinc-500 gap-2 flex flex-col'>
            <li>
              <span className="mr-1">•</span>
              <Link to="/information-transparency">Transparencia de la Información 🔍</Link>
            </li>
            <li>
              <span className="mr-1">•</span>
              <Link to="/security-privacy">Políticas de Seguridad y Privacidad 🔒</Link>
            </li>
            <li>
              <span className="mr-1">•</span>
              <Link to="/terms-conditions">Términos y Condiciones 📄</Link>
            </li>
            <li>
              <span className="mr-1">•</span>
              <Link to="/contact">Trabajá con Nosotros 💼</Link>
            </li>
          </ul>
        </article>
        <article className='sm:w-1/3 h-auto full h-auto flex-colum gap-2'>
          <h2 className="font-semibold font-titulo capitalize text-colorFuente1Submenu text-2xl mb-1 font-[600]">Comienza a usar PingüiWallet</h2>
          <ul className='font-parrafo text-zinc-500 gap-2 flex flex-col'>
            <li>
              <span className="mr-1">📞</span>
              +1 555-123-4567
            </li>
            <li>
              <span className="mr-1">🏢</span>
              Sab Carlos De Bariloche
            </li>
            <li>
              <span className="mr-1">📍</span>
              Avenida siempre viva 
            </li>
            <li>
              <span className="mr-1">🏠</span>
              Calle falsa 123
            </li>
          </ul>
        </article>
      </div>
    </footer>
  )
}

export default Footer
