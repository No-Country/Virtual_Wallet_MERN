import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LogoutButton from './LogoutButton'
import logo from '../img/logo.png'
import logoName from '../img/logo-nombre.png'

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated)

  return (
    <>
      {isAuthenticated ? (
        <nav className="w-full flex justify-between items-center px-24 bg-fondo">
          <Link to="/">
            <div className="flex justify-start items-center w-[150px]">
              <img src={logo} alt="Logo" />
              <img className="-ml-10 mt-4" src={logoName} alt="Logo" />
            </div>
          </Link>
          <ul className="flex justify-evenly items-center gap-10">
            <Link to="/home" className="liNavBar hover:text-secundario">
              Home
            </Link>
            <Link to="/contact" className="liNavBar hover:text-secundario">
              Contacto
            </Link>
            <LogoutButton />
          </ul>
        </nav>
      ) : (
        <nav className="w-full flex justify-between items-center px-24 bg-fondo">
          <Link to="/">
            <div className="flex justify-start items-center w-[150px]">
              <img src={logo} alt="Logo" />
              <img className="-ml-10 mt-4" src={logoName} alt="Logo" />
            </div>
          </Link>
          <ul className="flex justify-evenly items-center gap-10">
            <Link to="#" className="liNavBar">
              ¿Qué es{' '}
              <i className="font-semibold text-principal hover:text-secundario">
                PingüiWallet
              </i>
              ?
            </Link>
            <Link to="/contact" className="liNavBar hover:text-secundario">
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
        </nav>
      )}
    </>
  )
}

export default Navbar
