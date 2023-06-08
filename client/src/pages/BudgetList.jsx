import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import CartPresupuesto from '../components/CartPresupuesto';
import { useEffect } from 'react';
import { deleteBudget, getBudgets } from '../slices/budgetSlice';
import { v4 as uuidv4 } from 'uuid';


const BudgetList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const presupuesto = useSelector(state => state?.budgets?.budgets)
  const token = useSelector(state => state?.auth?.token)

  useEffect(()=>{
    dispatch(getBudgets(token))
    .then((res) => {
      console.log("fFETCH BUDGET",res.payload)
    })
  },[dispatch,token])


  const handleToggle = () => {
    return navigate('/home/formPresupuesto')
  }

  const handleDelete = (id) => {
    dispatch(deleteBudget(id));
  };


  return (
    <div className="flex w-full xl:w-[80%] min-h-[90vh] h-auto flex-col items-center justify-start bg-fondo p-4 sm:p-6 gap-4 sm:gap-6">

      <section className="flex sm:flex-row justify-between  items-center w-full h-auto gap-2 flex-nowrap box-border">

        <h2 className="w-auto h-auto text-2xl font-titulo font-[700] text-[#0B0B0B] text-center">Presupuesto General</h2>

        <div className='botones w-auto h-auto flex flex-col flex-nowrap justify-start items-center p-1 gap-1'> 
          <button onClick={handleToggle} className="w-auto h-auto bg-bgSubmenu rounded-md text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out p-2 text-[.9rem] font-[600] capitalize" >agregar presupuesto</button>
        </div>
      </section>

        <section className="flex flex-row justify-center items-start w-full h-auto gap-4 flex-wrap box-border p-5">
          {/* aca renderizaremos los presupuestos */}
          {
            presupuesto.length > 0 ? presupuesto.map(presupuesto => {
              const { _id, amount, category, limit } = presupuesto;
              const porcentaje = ((amount / limit) * 100).toFixed(0);
              const porcentajePx = (((280 / 100)) * porcentaje).toFixed(0);
              const objeto = {id:_id, monto:amount, categoria:category, limite:limit, porcentaje:porcentaje, porcentajePx:`w-[${porcentajePx}px]` }
              return (
              <CartPresupuesto 
                key={presupuesto.category + uuidv4()} 
                objeto={objeto}
                onDelete={handleDelete}
                />
              )
            }) : (
              <section className="presupuesto w-[320px] h-[150px] p-5 rounded-[2px] bg-[#ffff] flex flex-col justify-start items-start gap-2 relative" style={{ boxShadow: '9px 9px 22px #ced1d9, -9px -9px 22px #ffffff'}}>
                <div className='head w-full h-auto flex flex-row flex-nowrap justify-start items-center p-1 gap-1'>
                  <div className="w-[60%] h-auto flex flex-row flex-nowrap justify-start items-center p-1 gap-1">
                    <div className='icono w-[30px] h-[30px] rounded-[50%] bg-yellow-500 flex justify-center items-center text-[#ffff] text-[1.3rem]'>
                    <ion-icon name="beer"></ion-icon>            
                    </div> 
                    <p className='font-titulo font-[500] text-bgSubmenu w-auto'>
                    cervezas
                    </p>
                  </div>
                  <div className='porcentajes w-[40%] h-auto flex flex-row flex-nowrap justify-start items-center p-1 gap-1'>
                    <p className='w-full font-parrafo font-[400] text-bgSubmenu text-[.7rem] flex flex-row flex-nowrap justify-end items-end gap-1'>
                      <span className='font-[700] text-bgSubmenu'>s/00.00</span>
                      <span className='font-[700] text-hoverBotonSubmenu'>s/00.00</span>
                    </p>
                  </div>
                </div>
                <div className='barraProgreso w-full h-[10px] bg-fondo rounded-[10px]'>
                  <div className='porcentaje w-[50%] h-[10px] bg-yellow-500 rounded-[10px]'></div>
                </div>
                <button className='absolute top-1 right-1 w-[25px] h-[25px] rounded-[4px] bg-colorFuente1Submenu flex justify-center items-center text-colorFuente2Submenu text-[1rem] hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out'>
                <ion-icon name="trash-outline"></ion-icon>
                </button>
              </section>
            )
          }
          

        </section>
    </div>
  )
}

export default BudgetList

