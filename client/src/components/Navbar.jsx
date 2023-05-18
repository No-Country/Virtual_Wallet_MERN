import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

  return (
    <nav className="w-full h-24 flex justify-between items-center px-24">
      <div>
        <Link
          to={"/"}
          className="font-titulo font-bold text-1xl text-c-icono-carrito"
        >
          PinguiWallet
        </Link>
      </div>
      <ul className="flex justify-evenly items-center gap-10">
        <Link to="#" className="liNavBar">
          ¿Qué es <i>nombre</i>
        </Link>
        <Link to="#" className="liNavBar">
          Ayuda
        </Link>
        <Link to="#" className="liNavBar">
          Iniciar Sesión
        </Link>
        <Link
          to="/register"
          className="liNavBar bg-c-botones py-1 px-7 rounded"
        >
          Registrarse
        </Link>
        {isAuthenticated ? <LogoutButton></LogoutButton> : <></>}
      </ul>
    </nav>
  );
};

export default Navbar;
