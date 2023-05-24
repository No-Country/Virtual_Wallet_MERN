import { useEffect } from "react";
import { useSelector } from "react-redux";

const Bienvenida = () => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    console.log("Bienvenida ",user)

  },[user])

  console.log("Bienvenida ",user)
  return (
    <section className="saludo flex flex-row items-center justify-center h-auto w-full">
    {user ? <h1>Bienvenido {user.username} {user.surname}</h1> : <h1>Bienvenido</h1>}
    </section>
  )
}

export default Bienvenida