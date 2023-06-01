import ButtonPresupuesto from "./ButtonPresupuesto";

const PresupuestoToggle = () => {
  const presupuesto = 3000;

  const botones = [
    { name: "entretenimiento", icon: "game-controller-outline", color: "bg-purple-500"},
    { name: "restauurante", icon:"restaurant-outline", color: "bg-yellow-500" },
    { name : "ropa", icon:"shirt-outline", color:"bg-green-400" },
    { name:"seguro" , icon:"shield-checkmark-outline", color:"bg-blue-500"},
    { name:"mascota", icon:"game-controller", color:"bg-[#8b4513]" },
  ]



  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-start bg-fondo h-auto p-4 sm:p-6 gap-4 sm:gap-6">
    <section className="w-[300px] h-auto p-4 rounded-md bg-white" style={{ boxShadow: '9px 9px 22px #ced1d9, -9px -9px 22px #ffffff'}}>
      <h2>presupuesto limite</h2>
      <p>{presupuesto}</p>
    </section>
  
    <section className="card w-[300px] h-auto p-5 rounded-md bg-[#ffff]">
    {
      botones.map((boton) => {
        return (<ButtonPresupuesto key={boton.name} titulo={boton.name} icono={boton.icon} color={boton.color}/>)
      })
    }
    </section>
    </div>
  )
}

export default PresupuestoToggle

//ropa : <ion-icon name="shirt-outline"></ion-icon> 
//<ion-icon name="shirt"></ion-icon>

//restaurante: <ion-icon name="restaurant-outline"></ion-icon> 
//" " <ion-icon name="restaurant"></ion-icon>

//entretenimiento: <ion-icon name="game-controller-outline"></ion-icon>
//<ion-icon name="game-controller"></ion-icon>

//mascota: <ion-icon name="game-controller"></ion-icon>
//<ion-icon name="paw"></ion-icon>

//seguro <ion-icon name="shield-checkmark-outline"></ion-icon>
//<ion-icon name="shield-checkmark"></ion-icon>