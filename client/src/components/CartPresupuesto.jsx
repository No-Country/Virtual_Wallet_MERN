
const CartPresupuesto = ({ objeto }) => {
  
  return (
      <section className="presupuesto w-[320px] h-[150px] p-5 rounded-[2px] bg-[#ffff] flex flex-col justify-start items-start gap-2 " style={{ boxShadow: '9px 9px 22px #ced1d9, -9px -9px 22px #ffffff'}}>
      <div className='head w-full h-auto flex flex-row flex-nowrap justify-start items-center p-1 gap-1'>
        <div className="w-[60%] h-auto flex flex-row flex-nowrap justify-start items-center p-1 gap-1">
          <div className='icono w-[30px] h-[30px] rounded-[50%] bg-yellow-500 flex justify-center items-center text-[#ffff] text-[1.3rem]'>
          <ion-icon name={objeto.icono}></ion-icon>            
          </div> 
          <p className='font-titulo font-[500] text-bgSubmenu w-auto'>
            {objeto.nombre}
          </p>
        </div>
        <div className='porcentajes w-[40%] h-auto flex flex-row flex-nowrap justify-start items-center p-1 gap-1'>
          <p className='w-full font-parrafo font-[400] text-bgSubmenu text-[.7rem] flex flex-row flex-nowrap justify-end items-end gap-1'>
            <span className='font-[700] text-bgSubmenu'>s/{objeto.total}</span>
            <span className='font-[700] text-hoverBotonSubmenu'>s/{objeto.presupuestoTotal}</span>
          </p>
        </div>
      </div>
      <div className='barraProgreso w-full h-[10px] bg-fondo rounded-[10px]'>
        <div className={`porcentaje w-${objeto.monto*100/objeto.total} h-[10px] ${objeto.color} rounded-[10px]`}></div>
      </div>
      </section>
  )
}

export default CartPresupuesto
