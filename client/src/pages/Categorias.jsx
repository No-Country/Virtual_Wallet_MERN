import { useNavigate } from 'react-router-dom'


const Categorias = () => {

  const navigate = useNavigate()
  
  const handleToggle = () => {
    return navigate('/home/ingresarPresupuesto')
  }

  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-start bg-fondo h-auto p-4 sm:p-6 gap-4 sm:gap-6">

      <section className="flex sm:flex-row justify-between  items-center w-full h-auto gap-2 flex-nowrap box-border">

        <h2 className="w-auto h-auto text-2xl font-titulo font-[700] text-[#0B0B0B] text-center">Informacion Personal</h2>

        <button onClick={handleToggle} className="w-auto h-auto bg-colorFuente1Submenu rounded-md text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out p-2 text-[.9rem] font-[600] capitalize" >agregar presupuesto</button>
      </section>

        <section className="flex flex-row justify-start items-center w-full h-auto gap-2 flex-nowrap box-border bg-slate-400">

        </section>
    </div>
  )
}

export default Categorias