import { useEffect } from "react";
import { useSelector } from "react-redux";

const Perfil = () => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    console.log("Bienvenida a Perfil ->",user)
  },[user])

  return (
    <div className="flex w-5/6 sm:w-4/5 flex-col items-center justify-start sm:flex-row sm:items-start sm:justify-start bg-fondo h-auto p-4 sm:p-6 gap-4 sm:gap-6">
      <section className="w-[80px] sm:w-[200px] h-auto flex flex-col gap-2 items-center justify-center p-3">
        <h2 className="w-full h-auto text-2xl font-titulo font-[700] text-[#0B0B0B]">Perfil</h2>
        <div className="flex flex-row items-center justify-center gap-2 p-4 w-[60px] h-[60px] sm:w-[150px] sm:h-[150px] bg-slate-300 rounded-[4px] text-[3rem] text-blue-500">
        <ion-icon name="person-outline"></ion-icon>

        </div>
      </section>
      <section className="flex sm:flex-row justify-center items-center w-full -400px h-auto gap-2 flex-wrap box-border pt-3">
        <h2 className="w-full h-auto text-2xl font-titulo font-[700] text-[#0B0B0B] text-center">Informacion Personal</h2>

        <section className="relative flex w-[90%] sm:w-[200px] lg:w-[250px] xl:w-[300px] flex-col items-start justify-center p-3 bg-hoverBotonSubmenu rounded-md">
          <div className="flex flex-col items-start justify-center gap-2 sm:gap-2"> 
            <p className="cabecera font-titulo font-[600]">Usuario</p>
            <p className="contenido font-parrafo">{user.username}</p>
          </div>
          <span className="subrrayado w-full h-[3px] bg-hoverBotonSubmenu rounded-md"></span>
          <button className="edit absolute p-1 text-colorFuente1Submenu hover:text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out flex justify-center items-center rounded-md top-0 right-0 w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] text-lg">
            <ion-icon name="create"></ion-icon>          
          </button>
        </section>

        <section className="relative flex w-[90%] sm:w-[200px] lg:w-[250px] xl:w-[300px] flex-col items-start justify-center p-3 bg-hoverBotonSubmenu rounded-md">
          <div className="flex flex-col items-start justify-center gap-2 sm:gap-2"> 
            <p className="cabecera font-titulo font-[600]">Nombre</p>
            <p className="contenido font-parrafo">{user.name}</p>
          </div>
          <span className="subrrayado w-full h-[3px] bg-hoverBotonSubmenu rounded-md"></span>
          <button className="edit absolute p-1 text-colorFuente1Submenu hover:text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out flex justify-center items-center rounded-md top-0 right-0 w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] text-lg">
            <ion-icon name="create"></ion-icon>          
          </button>
        </section>
        <section className="relative flex w-[90%] sm:w-[200px] lg:w-[250px] xl:w-[300px] flex-col items-start justify-center p-3 bg-hoverBotonSubmenu rounded-md">
          <div className="flex flex-col items-start justify-center gap-2 sm:gap-2"> 
            <p className="cabecera font-titulo font-[600]">Apellido</p>
            <p className="contenido font-parrafo">{user.surname}</p>
          </div>
          <span className="subrrayado w-full h-[3px] bg-hoverBotonSubmenu rounded-md"></span>
          <button className="edit absolute p-1 text-colorFuente1Submenu hover:text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out flex justify-center items-center rounded-md top-0 right-0 w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] text-lg">
            <ion-icon name="create"></ion-icon>          
          </button>
        </section>
        <section className="relative flex w-[90%] sm:w-[200px] lg:w-[250px] xl:w-[300px] flex-col items-start justify-center p-3 bg-hoverBotonSubmenu rounded-md">
          <div className="flex flex-col items-start justify-center gap-2 sm:gap-2"> 
            <p className="cabecera font-titulo font-[600]">Email</p>
            <p className="contenido font-parrafo">{user.email}</p>
          </div>
          <span className="subrrayado w-full h-[3px] bg-hoverBotonSubmenu rounded-md"></span>
          <button className="edit absolute p-1 text-colorFuente1Submenu hover:text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out flex justify-center items-center rounded-md top-0 right-0 w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] text-lg">
            <ion-icon name="create"></ion-icon>          
          </button>
        </section>

  
  
        
      </section>

    </div>
  )
}

export default Perfil