import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../slices/authSlice'
const logo =
  'https://res.cloudinary.com/dpiwmbsog/image/upload/v1684361186/wallet/A_vibrant_and_energetic_scene_of_a_reggaeton_pengu_h2o30b.jpg'

const initialState = {
  name: '',
  surname: '',
  username: '',
  email: '',
  password: ''
}

const Register = () => {
  const [form, setForm] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, error } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        return navigate('/login')
      }, 700)
    }
  }, [user, navigate])

  const handleChange = (e) => {
    const { value, name } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(register(form))
    setForm(initialState)
  }

  return (
    <section className="w-full h-full mb-36 flex flex-col justify-start items-center gap-15 mt-16">
      <img
        className="rounded-[50%] object-cover w-[95px] h-[90px]"
        src={logo}
        alt="Logo PinguiWallet"
      />
      <h2 className="text-[#FC7E09] text-2xl font-bold">
        Registrarse en <span>PinguiWallet</span>
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8 py-14 px-20">
        {user && (
          <p className="text-successfully text-center font-semibold">
            Ahora puedes iniciar sesión.
          </p>
        )}
        {error && (
          <p className="text-error text-center font-semibold">
            Email ya registrado.
          </p>
        )}
        <div className="w-80 h-10 border-b border-shadow">
          <input
            onChange={handleChange}
            value={form.name}
            className="w-full h-full p-3 outline-none"
            placeholder="Nombre"
            name="name"
            type="text"
            required
          />
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            onChange={handleChange}
            value={form.surname}
            className="w-full h-full p-3 outline-none"
            placeholder="Apellido"
            name="surname"
            type="text"
            required
          />
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            onChange={handleChange}
            value={form.email}
            className="w-full h-full p-3 outline-none"
            placeholder="Correo Electronico"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            onChange={handleChange}
            value={form.username}
            className="w-full h-full p-3 outline-none"
            placeholder="Usuario"
            name="username"
            type="text"
            required
          />
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            onChange={handleChange}
            value={form.password}
            className="w-full h-full p-3 outline-none"
            placeholder="Contraseña"
            name="password"
            type="password"
            required
            minLength={8}
          />
        </div>

        <input
          placeholder="Registrarse"
          type="submit"
          className="cursor-pointer bg-demo text-center px-2 py-1 rounded"
        />
      </form>

      <Link className="hover:text-demo" to="/login">
        ¿Ya tienes una cuenta? Inicia Sesión
      </Link>
    </section>
  )
}

export default Register
