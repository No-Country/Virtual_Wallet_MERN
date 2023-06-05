import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../slices/authSlice'
import logo from '../img/logo.png'

const Register = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const { user, error } = useSelector((state) => state.auth)

  //Valores del usuario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        return navigate('/login')
      }, 700)
    }
  }, [user, navigate])

  const handleChange = (e) => {
    const { value, name } = e.target

    switch (name) {
      case 'nombre':
        setNombre(value);
        break;
      case 'apellido':
        setApellido(value);
        break;
      case 'email': 
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'username':
        setUsername(value);
        break;  
      default:
        break;
    }
  }

  const resetStates = () => {
    setNombre('');
    setApellido('');
    setEmail('');
    setUsername('');
    setPassword('');
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const userRegister = {
      name: nombre,
      surname: apellido,
      email: email, 
      username: username,
      password: password,
    }

    setErrors({})

    const validationErrors = {}

    // Realizar las validaciones necesarias
    if (!nombre) {
      validationErrors.nombre = 'Por favor, ingrese su nombre';
    }else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      validationErrors.nombre = 'El nombre solo debe contener letras y espacios';
    }

    if (!apellido.trim()) {
      validationErrors.apellido = 'Por favor, ingrese su apellido';
    }else if (!/^[a-zA-Z\s]+$/.test(apellido)) {
      validationErrors.apellido = 'El apellido solo debe contener letras y espacios';
    }
    
    if (!email.trim()) {
      validationErrors.email = 'Por favor, ingrese su email';
    }else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      validationErrors.email = 'Por favor, ingrese un email válido';
    }
    //validamos Username
    if (!username) {
      validationErrors.username = 'el userName es requerido';
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
      dispatch(register(userRegister))
      .then((response) => {
        console.log(response)
        resetStates()
      })
      .catch((error) => {
        console.log('Error al iniciar sesión:', error)
      })
      .finally(() => {
        setTimeout(()=>{
          navigate('/login')
        },4000)
      })
    }
  }

  return (
    <section className="w-full h-full mb-36 flex flex-col justify-start items-center gap-15 mt-16">
      <img
        className="rounded-[50%] object-cover w-[95px] h-[90px]"
        src={logo}
        alt="Logo PinguiWallet"
      />
      <h2 className="text-[#FC7E09] text-2xl font-bold my-4">
        ¡Registrarse en <span>PinguiWallet</span>!
      </h2>
      <h3 className="text-center text-[#A0A0A0] text-lg">Create un cuenta</h3>

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
            value={nombre}
            className="w-full h-full p-3 outline-none"
            placeholder="Nombre"
            name="nombre"
            type="text"
            required
          />
          {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            onChange={handleChange}
            value={apellido}
            className="w-full h-full p-3 outline-none"
            placeholder="Apellido"
            name="apellido"
            type="text"
            required
          />
          {errors.apellido && <p className="text-red-500">{errors.apellido}</p>}
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            onChange={handleChange}
            value={email}
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
            value={username}
            className="w-full h-full p-3 outline-none"
            placeholder="Usuario"
            name="username"
            type="text"
            required
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            onChange={handleChange}
            value={password}
            className="w-full h-full p-3 outline-none"
            placeholder="Contraseña"
            name="password"
            type="password"
            required
            minLength={8}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
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
