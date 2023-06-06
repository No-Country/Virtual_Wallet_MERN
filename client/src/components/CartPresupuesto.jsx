
const CartPresupuesto = ({ objeto, onDelete }) => {
const categorias = [
    { name: "entretenimiento", icon: "game-controller-outline", color: "bg-purple-500"},
    { name: "restauurante", icon:"restaurant-outline", color: "bg-yellow-500" },
    { name : "ropa", icon:"shirt-outline", color:"bg-green-400" },
    { name:"seguro" , icon:"shield-checkmark-outline", color:"bg-blue-500"},
    { name:"mascota", icon:"paw-outline", color:"bg-[#8b4513]" },
  ];


    let iconoG, colorG = '';
    const categoriaEncontrada = categorias.find(categoria => categoria.name === objeto.categoria);
    if(categoriaEncontrada){
      iconoG = categoriaEncontrada.icon;
      colorG = categoriaEncontrada.color;
    }


  // console.log(porcentajeG)

  const handleDelete = () => {
    onDelete(objeto.id)
  }
  
  return (
      <section className="presupuesto relative w-[320px] h-[150px] p-5 rounded-[2px] bg-[#ffff] flex flex-col justify-start items-start gap-2 " style={{ boxShadow: '9px 9px 22px #ced1d9, -9px -9px 22px #ffffff'}}>
      <div className='head w-full h-auto flex flex-row flex-nowrap justify-start items-center p-1 gap-1'>
        <div className="w-[60%] h-auto flex flex-row flex-nowrap justify-start items-center p-1 gap-1">

          <div className={`icono w-[30px] h-[30px] rounded-[50%] ${colorG} flex justify-center items-center text-[#ffff] text-[1.3rem]`}>
          <ion-icon name={iconoG}></ion-icon>            
          </div> 
          <p className='font-titulo font-[500] text-bgSubmenu w-auto'>
            {objeto.nombre}
          </p>
        </div>
        <div className='porcentajes w-[40%] h-auto flex flex-row flex-nowrap justify-start items-center p-1 gap-1'>
          <p className='w-full font-parrafo font-[400] text-bgSubmenu text-[.7rem] flex flex-row flex-nowrap justify-end items-end gap-1'>
            <span className='font-[700] text-bgSubmenu'>s/{objeto.monto}</span>
            <span className='font-[700] text-hoverBotonSubmenu'>s/{objeto.limite}</span>
          </p>
        </div>
      </div>
      <div className='barraProgreso w-[280px] h-[10px] bg-fondo rounded-[10px] relative'>
        <div className={`progreso h-[10px] ${colorG} rounded-[10px] ${objeto.porcentajePx} transition-all duration-300`}></div>
      </div>
      <button
      onClick={handleDelete} 
      className={`absolute top-1 right-1 w-[25px] h-[25px] rounded-[4px] ${colorG} flex justify-center items-center text-colorFuente2Submenu text-[1rem] hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out`}>
        <ion-icon name="trash-outline"></ion-icon>
      </button>
      </section>
  )
}

export default CartPresupuesto
