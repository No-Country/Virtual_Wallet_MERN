import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import logo from '../img/logo.png'
import logoName from '../img/logo-nombre.png'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <nav className={`w-full h-[120px] flex justify-between items-center bg-fondo relative ${isOpen ? 'h-[auto] md:h-120px' : 'h-[120px]'} md:flex md:flex-row md:flex-nowrap transition-all duration-300 ease-in-out`}>
          <Link className='w-auto h-[120px] overflow-hidden' to="/">
            <div className="flex flex-row justify-center items-center w-full h-full">
              <img src={logo} alt="Logo"  className='h-1/2 aspect-square  object-cover'/>
              <img className="h-[50px] w-full object-contain p-1" src={logoName} alt="Logo" />
            </div>
          </Link>
          <ul className={`flex md:justify-end md:items-center md:w-[500px] md:h-full md:pr-2 gap-4 font-titulo font-[500] ${
            isOpen ? 'absolute top-[120px] left-0 w-full h-[200px] flex flex-col justify-center items-center p-3 md:flex md:flex-row md:p-0 md:left-auto md:right-0' : 'hidden'}  md:flex md:top-0 bg-fondo transition-all duration-300 ease-in-out z-20`}>
            <ScrollLink 
              to="faq-section"
              spy={true}
              smooth={true}
              duration={1000}
              className="liNavBar">
              ¿Qué es{' '}
              <i className="font-semibold text-principal hover:text-secundario">
                PingüiWallet
              </i>
              ?
            </ScrollLink>
            <Link to="/contacto" className="liNavBar hover:text-secundario">
              Contacto
            </Link>
            <Link to="/login" className="liNavBar hover:text-secundario">
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className="liNavBar bg-principal text-white py-2 px-4 rounded hover:bg-secundario"
            >
              Registrarse
            </Link>
          </ul>
          <div className="toggle w-[70px] h-[60px] flex justify-center items-center md:hidden">
            <div className={`nav_toggle ${isOpen ? "open" : ""}`} 
            onClick={handleToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar
