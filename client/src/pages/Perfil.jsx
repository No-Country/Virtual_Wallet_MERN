import { useEffect } from "react";
import { useSelector } from "react-redux";

const Perfil = () => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    console.log("Bienvenida a Perfil ->",user)
  },[user])

  return (
    <div className="flex w-5/6 sm:w-4/5 flex-row items-start justify-start bg-slate-400 h-auto p-4 sm:p-6 gap-4 sm:gap-6">
      <section className="w-[80px] sm:w-[200px] h-auto flex flex-col gap-2 items-center justify-center p-3">
        <h2 className="w-full h-auto text-2xl font-titulo font-[700] text-[#0B0B0B]">Perfil</h2>
        <div className="flex flex-row items-center justify-center gap-2 p-4 w-[60px] h-[60px] sm:w-[150px] sm:h-[150px] bg-slate-300 rounded-[4px] text-[3rem] text-blue-500">
        <ion-icon name="person-outline"></ion-icon>

        </div>
      </section>
      <section className="flex sm:flex-row justify-center items-center w-full -400px h-auto bg-purple-300 gap-2 flex-wrap box-border p-3">
        <h2 className="w-full h-auto text-2xl font-titulo font-[700] text-[#0B0B0B] text-center">Informacion Personal</h2>

        <section className="flex w-[120px] sm:w-1/3 lg:w-1/3 xl:w-1/4 flex-col items-center justify-center p-3 gap-2 sm:gap-4">
          <p className="cabecera">Nombre</p>
          <p className="contenido">{user.username}</p>
          <span className="subrrayado"></span>
        </section>

        <section className="flex w-[120px] sm:w-1/3 lg:w-1/3 xl:w-1/4 flex-col items-center justify-center p-3 gap-2 sm:gap-4">
          <p className="cabecera">Nombre</p>
          <p className="contenido">{user.username}</p>
          <span className="subrrayado"></span>
        </section>
        <section className="flex w-[120px] sm:w-1/3 lg:w-1/3 xl:w-1/4 flex-col items-center justify-center p-3 gap-2 sm:gap-4">
          <p className="cabecera">Nombre</p>
          <p className="contenido">{user.username}</p>
          <span className="subrrayado"></span>
        </section>
        <section className="flex w-[120px] sm:w-1/3 lg:w-1/3 xl:w-1/4 flex-col items-center justify-center p-3 gap-2 sm:gap-4">
          <p className="cabecera">Nombre</p>
          <p className="contenido">{user.username}</p>
          <span className="subrrayado"></span>
        </section>
        <section className="flex w-[120px] sm:w-1/3 lg:w-1/3 xl:w-1/4 flex-col items-center justify-center p-3 gap-2 sm:gap-4">
          <p className="cabecera">Nombre</p>
          <p className="contenido">{user.username}</p>
          <span className="subrrayado"></span>
        </section>
        <section className="flex w-[120px] sm:w-1/3 lg:w-1/3 xl:w-1/4 flex-col items-center justify-center p-3 gap-2 sm:gap-4">
          <p className="cabecera">Nombre</p>
          <p className="contenido">{user.username}</p>
          <span className="subrrayado"></span>
        </section>
  
        
      </section>

    </div>
  )
}

export default Perfil