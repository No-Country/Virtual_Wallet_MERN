import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByid, updateUser } from "../slices/userSlice";
import TituloPagesHome from "../components/TituloPagesHome";
// import { logout } from "../slices/authSlice";
// import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');

  const [editUsername, setEditUsername] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editName, setEditName] = useState(false);
  const [editSurname, setEditSurname] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const user = useSelector((state) => state?.user?.user);
  const update = useSelector((state) => state?.user?.updated);
  const UserId = localStorage.getItem("id2");
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserByid(UserId))
    .then((response)=> {
    console.log("Perfil RESPONSE -> ",response)
    const {username, email, name, surname} = response.payload;
    setUsername(username || ''),
    setEmail(email || ''),
    setName(name || ''),
    setSurname(surname || '')
    setPassword('')
    })
    .catch((error)=> {
      console.log("Error -> ",error)
    })
  },[dispatch, token, update])

  const handleUpdateUser = () => {
    const data = {};

    if (editPassword && password !== '') {
      data.password = password;
    } else {
      data.name = name;
      data.email = email;
      data.username = username;
      data.surname = surname;
      data.password = '';
    }
    
    // reset errores
    setErrors({});

    // validaciones
    const validationErrors = {};

    
    if (editPassword && password){
      if (password.length < 8) {
        validationErrors.password =
          "El password no puede ser inferior a 8 caracteres";
      } else if (!/(?=.*[!@#$%^&*()\-_=+{};:,<.>])/.test(password)) {
        validationErrors.password =
          "La contraseña debe tener al menos un caracter especial";
      } else if (!/(?=.*[a-z])/.test(password)) {
        validationErrors.password =
          "La contraseña debe tener al menos una letra minúscula";
      } else if (!/(?=.*[A-Z])/.test(password)) {
        validationErrors.password =
          "La contraseña debe tener al menos una letra mayúscula";
      } else if (!/(?=.*\d)/.test(password)) {
        validationErrors.password = "La contraseña debe tener al menos un número";
      }
    } else {

      if (!username) {
        validationErrors.username = "El usuario no puede estar vacio"
      }
      if (!email) {
        validationErrors.email = "El email no puede estar vacio"
      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        validationErrors.email = "El email no es valido"
      }
      if (!name) {
        validationErrors.name = "El nombre no puede estar vacio"
      } else if (!/^[a-zA-Z\s]+$/.test(name)){
        validationErrors.name = "El nombre solo puede contener letras"
      }
      if (!surname) {
        validationErrors.surname = "El apellido no puede estar vacio"
      }else if (!/^[a-zA-Z\s]+$/.test(surname)){
        validationErrors.surname = "El apellido solo puede contener letras"
      }
    }

    // veridicamos si hay errores
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage(''); // Limpiar el mensaje de éxito si hay errores
      return;
    } else if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      // console.log("id del ususario ->",user?._id)
      // actualizamos usuario
      console.log("Data SUBIR-> ", data)
      dispatch(updateUser({ userId: localStorage.getItem("id2"), data })) 
      .then((res) => {
        console.log("Respuesta -> ",res)
        // console.log("Respuesta2 -> ",res.payload.message)

        setSuccessMessage(res.payload.message); // Establecer el mensaje de éxito
      
        // Cambiar los estados editUsername, editEmail, editName y editSurname a false
        setEditUsername(false);
        setEditEmail(false);
        setEditName(false);
        setEditSurname(false);
        setEditPassword(false);

        // if (editPassword && password !== ''){
        //   dispatch(logout())
        //   return navigate('/')       
        // }
      })
      .catch((error) => {
        // Manejar cualquier error de actualización aquí
        setSuccessMessage(error);
      });
    }
  }

  const handleClearUser = () => {
    setUsername(user.username);
    setEmail(user.email);
    setName(user.name);
    setSurname(user.surname);
    setPassword('');

    setEditUsername(false);
    setEditEmail(false);
    setEditName(false);
    setEditSurname(false);
    setPassword('')
    // dispatch(clearUser());

    // Limpiar los errores de validación y el mensaje de éxito al limpiar el usuario
    setErrors({});
    setSuccessMessage('');
  }

  // useEffect(() => {
  //   console.log("Bienvenida a Perfil ->",user)
  // },[user])

  return (
    <div className="flex w-full xl:w-[80%] min-h-[90vh] flex-col items-center justify-start sm:flex-row sm:items-start sm:justify-start bg-fondo h-auto p-4 sm:p-6 gap-4 sm:gap-6">

      {/* imagen perfil */}
      <section className="w-[80px] sm:w-[200px] h-auto flex flex-col gap-2 items-center justify-center p-3">
        <h2 className="w-full h-auto text-2xl font-titulo font-[700] text-colorFuente3Submenu">Perfil</h2>
        <div className="flex flex-row items-center justify-center gap-2 p-4 w-[60px] h-[60px] sm:w-[150px] sm:h-[150px] bg-slate-300 rounded-[4px] text-[3rem] text-hoverBotonSubmenu">
        <ion-icon name="person-outline"></ion-icon>
        </div>
        {successMessage && <p className="text-green-500 font-parrafo font-[500]">{successMessage}</p>}
      </section>

      {/* informacion usuario */}
      <section className="flex sm:flex-row justify-center items-center w-full h-auto gap-5 flex-wrap box-border pt-3">
        <TituloPagesHome titulo={"informacion personal"}/>

        {/* username */}
        <div className="w-full md:w-[450px] lg:w-[550px] xl:max-w-[600px] flex sm:flex-row justify-center items-center h-auto gap-2 flex-wrap box-border">
          <section className="relative flex w-[90%] sm:w-[200px] md:w-[200px] lg:w-[250px] xl:w-[300px] flex-col items-start justify-center p-3 rounded-md">
            <div className="flex flex-col items-start justify-center gap-2 sm:gap-2 w-full p-0 overflow-hidden"> 
              <p className="cabecera font-titulo font-[600]">Usuario</p>
              {
                editUsername ? (
                  <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="contenido font-parrafo w-full bg-colorFuente1Submenu rounded-md p-1 border-none outline-none text-colorFuente2Submenu mb-1"></input>
                ) 
                : (
                <p className="contenido font-parrafo w-full p-2">{username}</p>
              )}
              {errors.username && <p className="text-red-500 font-parrafo">{errors.username}</p>}
            </div>
            <span className="subrrayado w-full h-[3px] bg-hoverBotonSubmenu rounded-md"></span>
            <button className="edit absolute p-1 text-colorFuente1Submenu hover:text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out flex justify-center items-center rounded-md top-0 right-0 w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] text-lg" onClick={() => setEditUsername(!editUsername)}>
              <ion-icon name="create"></ion-icon>          
            </button>
          </section>

          {/* name */}
          <section className="relative flex w-[90%] sm:w-[200px] lg:w-[250px] xl:w-[300px] flex-col items-start justify-center p-3 rounded-md">
            <div className="flex flex-col items-start justify-center gap-2 sm:gap-2 w-full p-0 overflow-hidden"> 
              <p className="cabecera font-titulo font-[600]">Nombre</p>
              {
                editName ? (
                  <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="contenido font-parrafo w-full bg-colorFuente1Submenu rounded-md p-1 border-none outline-none text-colorFuente2Submenu mb-1"></input>
                ) 
                : (
                <p className="contenido font-parrafo w-full p-2">{name}</p>
              )}
              {errors.name && <p className="text-red-500 font-parrafo">{errors.name}</p>}
            </div>
            <span className="subrrayado w-full h-[3px] bg-hoverBotonSubmenu rounded-md"></span>
            <button className="edit absolute p-1 text-colorFuente1Submenu hover:text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out flex justify-center items-center rounded-md top-0 right-0 w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] text-lg" onClick={() => setEditName(!editName)}>
              <ion-icon name="create"></ion-icon>          
            </button>
          </section>

          {/* surname */}
          <section className="relative flex w-[90%] sm:w-[200px] lg:w-[250px] xl:w-[300px] flex-col items-start justify-center p-3 rounded-md">
            <div className="flex flex-col items-start justify-center gap-2 sm:gap-2 w-full p-0 overflow-hidden"> 
              <p className="cabecera font-titulo font-[600]">Apellido</p>
              {
                editSurname ? (
                  <input 
                  type="text" 
                  value={surname} 
                  onChange={(e) => setSurname(e.target.value)} 
                  className="contenido font-parrafo w-full bg-colorFuente1Submenu rounded-md p-1 border-none outline-none text-colorFuente2Submenu mb-1"></input>
                ) 
                : (
                <p className="contenido font-parrafo w-full p-2">{surname}</p>
              )}
              {errors.surname && <p className="text-red-500 font-parrafo">{errors.surname}</p>}
            </div>
            <span className="subrrayado w-full h-[3px] bg-hoverBotonSubmenu rounded-md"></span>
            <button className="edit absolute p-1 text-colorFuente1Submenu hover:text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out flex justify-center items-center rounded-md top-0 right-0 w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] text-lg" onClick={() => setEditSurname(!editSurname)}>
              <ion-icon name="create"></ion-icon>          
            </button>
          </section>

          {/* email */}
          <section className="relative flex w-[90%] sm:w-[200px] lg:w-[250px] xl:w-[300px] flex-col items-start justify-center p-3 rounded-md">
            <div className="flex flex-col items-start justify-center gap-2 sm:gap-2 w-full p-0 overflow-hidden"> 
              <p className="cabecera font-titulo font-[600]">Email</p>
              {
                editEmail ? (
                  <input 
                  type="text" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="contenido font-parrafo w-full bg-colorFuente1Submenu rounded-md p-1 border-none outline-none text-colorFuente2Submenu mb-1"></input>
                ) 
                : (
                <p className="contenido font-parrafo w-full p-2">{email}</p>
              )}
              {errors.email && <p className="text-red-500 font-parrafo">{errors.email}</p>}
            </div>
            <span className="subrrayado w-full h-[3px] bg-hoverBotonSubmenu rounded-md"></span>
            <button className="edit absolute p-1 text-colorFuente1Submenu hover:text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out flex justify-center items-center rounded-md top-0 right-0 w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] text-lg" onClick={() => setEditEmail(!editEmail)}>
              <ion-icon name="create"></ion-icon>          
            </button>
          </section>

            {/* password */}
          <section className="relative flex w-[90%] sm:w-[200px] lg:w-[250px] xl:w-[300px] flex-col items-start justify-center p-3 rounded-md">
            <div className="flex flex-col items-start justify-center gap-2 sm:gap-2 w-full p-0 overflow-hidden"> 
              <p className="cabecera font-titulo font-[600]">Password</p>
              {
                editPassword ? (
                  <>
                  <input 
                  type={showPassword ? "text" : "password"}
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="contenido font-parrafo w-full bg-colorFuente1Submenu rounded-md p-1 border-none outline-none text-colorFuente2Submenu mb-1 relative"></input>

                  <span className="cursor-pointer bg-fondo rounded-[4px] p-[1px] absolute right-[13px] bottom-[4px] text-[1.2rem] transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)} >
                  {showPassword ? "🙈" : "🙊"}
                  </span>
                  </>                
                ) 
                : (
                <p className="contenido font-parrafo w-full p-2">*****</p>
              )}
              {errors.password && <p className="text-red-500 font-parrafo">{errors.password}</p>}
            </div>
            <span className="subrrayado w-full h-[3px] bg-hoverBotonSubmenu rounded-md"></span>
            <button className="edit absolute p-1 text-colorFuente1Submenu hover:text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out flex justify-center items-center rounded-md top-0 right-0 w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] text-lg" onClick={() => setEditPassword(!editPassword)}>
              <ion-icon name="create"></ion-icon>          
            </button>
          </section>

          {/* cotones confirmacion acetar o declinar  */}
          <section className="flex flex-row items-center justify-center gap-2 w-full p-3">
            <button onClick={handleUpdateUser} className="w-[150px] h-auto bg-colorFuente1Submenu rounded-md text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out p-1 text-[.9rem] font-[600]">Actualizar Usuario</button>
            <button onClick={handleClearUser} className="w-[150px] h-auto bg-colorFuente1Submenu rounded-md text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out p-1 text-[.9rem] font-[600]">Limpiar Usuario</button>
          </section>

        </div>
        
      </section>

    </div>
  )
}

export default Perfil