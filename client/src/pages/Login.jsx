import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, loginSuccess } from '../slices/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../img/logo.png'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state?.auth)
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated)
  const state = useSelector((state) => state)
  const navigate = useNavigate()
  console.log(state)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home')
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(login({ email, password }))
      .then((response) => {
        const { token, user } = response.payload
        dispatch(loginSuccess({ token, user }))
        if (isAuthenticated) {
          return navigate('/home')
        }
      })
      .catch((error) => {
        console.log('Error al iniciar sesión:', error)
      })
  }

  return (
    <div className="w-full h-full mb-36 flex flex-col justify-start items-center gap-15 mt-24">
      <img
        className="rounded-[50%] object-cover w-[95px] h-[90px]"
        src={logo}
        alt="Logo PinguiWallet"
      />
      <h2 className="w-100 text-center text-[#FC7E09] text-2xl my-8 font-bold">
        ¡Bienvenid@ de nuevo!
      </h2>
      <h3 className="text-center text-[#A0A0A0] text-lg mb-8">
        Inicia sesíon para continuar
      </h3>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            placeholder="Ingrese su correo"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-full p-3 outline-none"
          />
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            placeholder="Ingrese su contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-full p-3 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer bg-demo text-center px-2 py-1 rounded"
        >
          {loading ? 'Loading...' : 'Iniciar Sesión'}
        </button>
      </form>

      <Link
        className="block text-sm mt-10 hover:text-demo text-center"
        to="/register"
      >
        ¿Aún no tienes una cuenta? Registrate
      </Link>
    </div>
  )
}