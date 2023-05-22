import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LogoutButton from './LogoutButton'
import logo from '../img/logo.png'
import logoName from '../img/logo-nombre.png'

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated)

  return (
    <nav className="w-full flex justify-between items-center px-24">
      <Link to="/">
        <div className="flex justify-start items-center w-[150px]">
          <img src={logo} alt="Logo" />
          <img className="-ml-10 mt-4" src={logoName} alt="Logo" />
        </div>
      </Link>
      <ul className="flex justify-evenly items-center gap-10">
        <Link to="#" className="liNavBar">
          ¿Qué es <i>nombre</i>
        </Link>
        <Link to="#" className="liNavBar">
          Ayuda
        </Link>
        <Link to="/login" className="liNavBar">
          Iniciar Sesión
        </Link>
        <Link
          to="/register"
          className="liNavBar bg-c-botones py-1 px-7 rounded"
        >
          Registrarse
        </Link>
        {isAuthenticated && <LogoutButton />}
      </ul>
    </nav>
  )
}

export default Navbar
