import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-24 flex justify-between items-center px-24">
      <div>
        <h1>Logo/Nombre</h1>
      </div>
      <ul className="flex justify-evenly items-center gap-10">
        <Link to="#">
          ¿Qué es <i>nombre</i>?
        </Link>
        <Link to="#">Ayuda</Link>
        <Link to="#">Iniciar Sesión</Link>
        <Link to="/register" className="bg-demo py-1 px-7 rounded">
          Registrarse
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
