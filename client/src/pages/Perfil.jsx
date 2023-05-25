import { useEffect } from "react";
import { useSelector } from "react-redux";

const Perfil = () => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    console.log("Bienvenida ",user)
  },[])

  return (
    <div className="flex flex-row items-start justify-start w-full bg-slate-400 h-[80vh] p-5
    ">
      <section className="w-[400px] h-auto flex flex-col gap-2 items-center justify-center">
        <h2 className="text-2xl">Perfil</h2>
        <div className="flex flex-row items-center justify-center gap-2 p-4 w-[150px] h-[150px] bg-slate-300 rounded-[4px] text-[3rem] text-blue-500">
        <ion-icon name="person-outline"></ion-icon>

        </div>
      </section>
    </div>
  )
}

export default Perfil