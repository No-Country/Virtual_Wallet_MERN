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
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  //el ojito para que se vea el pass
  const [showPassword, setShowPassword] = useState(false);

  console.log(isAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home')
    }
  }, [isAuthenticated, navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;
        
      default:
        break;
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const userLogin  = {
      email: email,
      password: password,
    }
    // reset errores
    setErrors({});
    
    // validar formulario
    const validationErrors = {};
    //validamos mail
    if (!email) {
      validationErrors.email = 'El correo es obligatorio';
    }else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      validationErrors.email = 'El correo no es válido';
    }

    //validamos contraseña
    if (!password) {
      validationErrors.password = 'El password es requerido';
    }else if (password.length < 8) {
      validationErrors.password = 'El password no puede ser inferior a 8 caracteres';
    }else if(!/(?=.*[!@#$%^&*()\-_=+{};:,<.>])/.test(password)){
      validationErrors.password = 'La contraseña debe tener al menos un caracter especial';
    } else if (!/(?=.*[a-z])/.test(password)) {
      validationErrors.password = 'La contraseña debe tener al menos una letra minúscula';
    } else if (!/(?=.*[A-Z])/.test(password)) {
      validationErrors.password = 'La contraseña debe tener al menos una letra mayúscula';
    } else if (!/(?=.*\d)/.test(password)) {
      validationErrors.password = 'La contraseña debe tener al menos un número';
    }
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      dispatch(login(userLogin))
      .then((response) => {
        // console.log("LOGIN ->",response)
        const { token, username, _id} = response.payload
        dispatch(loginSuccess({ token, username, _id }));
        if (isAuthenticated) {
          return navigate('/home')
        }
      })
      .catch((error) => {
        console.log('Error al iniciar sesión:', error)
      })
      .finally(() => {
        setTimeout(()=>{
          setEmail('')
          setPassword('')
          console.log("autenticado?? ",isAuthenticated)
        },4000)
      })
    }
  }

  return (
    <div className="w-full h-full pb-36 pt-24 flex flex-col justify-start items-center gap-15 bg-fondo">
      <img
        className="rounded-[50%] object-cover w-[95px] h-[90px]"
        src={logo}
        alt="Logo PinguiWallet"
      />
      <h2 className="w-100 text-center text-colorFuente1Submenu text-2xl my-8 font-bold">
        ¡Bienvenid@ de nuevo!
      </h2>
      <h3 className="font-parrafo font-[500] text-hoverBotonSubmenu text-lg mb-8">
        Inicia sesíon para continuar
      </h3>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* formulario de contacto */}
      <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            placeholder="Ingrese su correo"
            name='email'
            type="email"
            value={email}
            onChange={handleInputChange}
            className="w-full h-full p-3 outline-none bg-fondo font-parrafo font-[500] text-hoverBotonSubmenu"
            />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="w-80 h-10 border-b border-shadow relative">
          <input
            placeholder="Ingrese su contraseña"
            name='password'
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleInputChange}
            className="w-full h-full p-3 outline-none bg-fondo font-parrafo font-[500] text-hoverBotonSubmenu"
            />
            <span className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "🙊"}
            </span>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div className='w-full h-auto flex justify-center items-center'>
          <button
            type="submit"
            disabled={loading}
            className="font-titulo font-[500] cursor-pointer w-[150px] bg-hoverBotonSubmenu text-fondo hover:bg-bgSubmenu text-center p-2 py-1 rounded transition-colors duration-300"
          >
            {loading ? 'Loading...' : 'Iniciar Sesión'}
          </button>
        </div>
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