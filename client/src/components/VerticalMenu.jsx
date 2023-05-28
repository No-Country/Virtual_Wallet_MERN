import { useState } from 'react'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../slices/authSlice"
import { Link } from "react-router-dom"
import { fetchUserByid, selectUser } from "../slices/userSlice"
import NavProfileCard from './NavProfileCard'

export const VerticalMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [botonFaqs, setBotonFaqs ] = useState(false)

  const dispatch = useDispatch()
  const userCargado = useSelector(selectUser);

  const { user } = useSelector((state) => state.auth)
  const update =useSelector((state)=> state.user.update);

  // console.log("usuario: ",user._id)

  
  const userId = user._id;

  //me interesa que lo haga solo una vez
  useEffect(() => {
    localStorage.setItem('userId', user._id);
  },[user,update])

  //una vez añadan la imagen de perfil, se elimina esta linea
  const usuario = {
    logo: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1684361186/wallet/A_vibrant_and_energetic_scene_of_a_reggaeton_pengu_h2o30b.jpg',
    ...userCargado
  } 

  useEffect(() => {
    dispatch(fetchUserByid(userId));
  }, [dispatch, userId]);

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId');
    dispatch(logout())
  }
  
  const handleAyuda = () => {
    setBotonFaqs(!botonFaqs)
  }
  console.log('USUARIO -> ', usuario)

  return (
    <div className="relative flex w-1/6 sm:w-1/5 min-h-[100vh] gap-1 flex-col justify-start items-start bg-bgSubmenu">
    <NavProfileCard/>
    <div className="w-full h-auto overflow-hidden">
      <nav aria-label="Main Nav" className="mt-0 flex flex-col gap-1 w-[100%] h-[100%] overflow-hidden">
        
        <span className="w-full h-[2px] bg-colorBotonSubmenu opacity-20"></span>
        <section className="subPerfil w-full h-auto bg-c-fondo flex justify-center items-center">
          <Link to="/home/perfil"
            className="flex justify-center sm:justify-start sm:items-center w-[50px] sm:w-full text-2xl sm:text-lg gap-2 bg-bgSubmenu hover:bg-hoverBotonSubmenu text-colorBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out px-4 py-2 font-[600] rounded-[5px] overflow-hidden"
          >
            <ion-icon name="person-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Perfil </span>
          </Link>
        </section>

        <span className="w-full h-[2px] bg-colorBotonSubmenu opacity-20"></span>
        <section className="cards w-full h-auto bg-c-fondo flex flex-col justify-center items-center" >
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center w-[50px] sm:w-full text-2xl sm:text-lg gap-2 bg-bgSubmenu hover:bg-hoverBotonSubmenu text-colorBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out px-4 py-2 font-[600] rounded-[5px] overflow-hidden" >
            <ion-icon name="card-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Tarjetas </span>
          </a>
          <a onClick={handleAyuda}
            className="flex justify-center sm:justify-start sm:items-center w-[50px] sm:w-full text-2xl sm:text-lg gap-2 bg-bgSubmenu hover:bg-hoverBotonSubmenu text-colorBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out px-4 py-2 font-[600] rounded-[5px] overflow-hidden" >
            <ion-icon name="help-outline"></ion-icon>
            <span className="text-sm font-normal hidden sm:block"> Ayuda </span>
          </a>
          {botonFaqs && (
          <><Link to="/home/denuncias"
            className="flex justify-center sm:justify-start sm:items-center w-[50px] sm:w-full text-sm sm:text-sm gap-2 bg-bgSubmenu hover:bg-hoverBotonSubmenu text-colorBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out px-4 py-2 font-[600] rounded-[5px] overflow-hidden" >
            🚨
            <span className="text-sm font-medium hidden sm:block"> Denuncias </span>
          </Link>
          <Link to="/home/reclamos"
            className="flex justify-center sm:justify-start sm:items-center w-[50px] sm:w-full text-sm sm:text-sm gap-2 bg-bgSubmenu hover:bg-hoverBotonSubmenu text-colorBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out px-4 py-2 font-[600] rounded-[5px] overflow-hidden" >
            ⚠️
            <span className="text-sm font-medium hidden sm:block"> Reclamo </span>
          </Link>
          </>
          )}
        </section>

        <span className="w-full h-[2px] bg-colorBotonSubmenu opacity-20"></span>
        <section className="activity w-full h-auto bg-c-fondo flex flex-col justify-center items-center" >
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center w-[50px] sm:w-full text-2xl sm:text-lg gap-2 bg-bgSubmenu hover:bg-hoverBotonSubmenu text-colorBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out px-4 py-2 font-[600] rounded-[5px] overflow-hidden" >
            <ion-icon name="cash-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Transferencias </span>
          </a>
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center w-[50px] sm:w-full text-2xl sm:text-lg gap-2 bg-bgSubmenu hover:bg-hoverBotonSubmenu text-colorBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out px-4 py-2 font-[600] rounded-[5px] overflow-hidden" >
            <ion-icon name="wallet-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Gastos </span>
          </a>
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center w-[50px] sm:w-full text-2xl sm:text-lg gap-2 bg-bgSubmenu hover:bg-hoverBotonSubmenu text-colorBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out px-4 py-2 font-[600] rounded-[5px] overflow-hidden" >
            <ion-icon name="heart-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Ahorros </span>
          </a>
        </section>
        
        <span className="w-full h-[2px] bg-colorBotonSubmenu opacity-20"></span>
        <section className="faturas w-full h-auto bg-c-fondo flex flex-col justify-center items-center" >
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center w-[50px] sm:w-full text-2xl sm:text-lg gap-2 bg-bgSubmenu hover:bg-hoverBotonSubmenu text-colorBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out px-4 py-2 font-[600] rounded-[5px] overflow-hidden" >
            <ion-icon name="document-text-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Resumen </span>
          </a>
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center w-[50px] sm:w-full text-2xl sm:text-lg gap-2 bg-bgSubmenu hover:bg-hoverBotonSubmenu text-colorBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out px-4 py-2 font-[600] rounded-[5px] overflow-hidden" >
            <ion-icon name="reader-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Facturas </span>
          </a>
        </section>

        <span className="w-full h-[2px] bg-colorBotonSubmenu opacity-20"></span>
        <section className="logout w-full h-auto bg-c-fondo flex flex-col justify-center items-center" >
          <Link to="/" onClick={handleLogout}
            className="flex justify-center sm:justify-start sm:items-center w-[50px] sm:w-full text-2xl sm:text-lg gap-2 bg-bgSubmenu hover:bg-hoverBotonSubmenu text-colorBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out px-4 py-2 font-[600] rounded-[5px] overflow-hidden" >
            <ion-icon name="log-out-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> logout </span>
          </Link>
        </section>
        <section className='w-full h-auto bg-c-fondo flex flex-col justify-center items-center content-center'>
          <div className={`nav_toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </nav>
    </div>
  </div>
  )
}

export default VerticalMenu