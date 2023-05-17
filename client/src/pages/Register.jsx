import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-start items-center gap-15 mt-24">
      <span>LOGO</span>
      <h2>
        Registrarse en <span>Pingui-Wallet</span>
      </h2>
      <form className="flex flex-col gap-8 py-14 px-20">
        <div className="w-80 h-10 border-b border-shadow">
          <input
            className="w-full h-full p-3 outline-none"
            placeholder="Nombre"
          />
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            className="w-full h-full p-3 outline-none"
            placeholder="Apellido"
          />
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            className="w-full h-full p-3 outline-none"
            placeholder="Correo Electronico"
          />
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            className="w-full h-full p-3 outline-none"
            placeholder="Usuario"
          />
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            className="w-full h-full p-3 outline-none"
            placeholder="Contraseña"
          />
        </div>

        <buton className="cursor-pointer bg-demo text-center px-2 py-1 rounded">
          Confirmar
        </buton>
      </form>

      <Link className="hover:text-demo" to="/login">
        ¿Ya tienes una cuenta? Inicia Sesión
      </Link>
    </section>
  )
}

export default Register
