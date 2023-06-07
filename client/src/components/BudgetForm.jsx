import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBudget } from '../slices/budgetSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';
import { getUserCards } from '../slices/cardSlice';

const BudgetForm  = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  //aqui guardaremos los valores que nosotros vamos a pasar
  const [monto, setMonto] = useState(0);
  // permite que el input se pueda editar
  const [errors, setErrors] = useState({});
  //permiten mostrar el msj  de error en el input
  // const [successMessage, setSuccessMessage] = useState('');
  // const [cononModal, setConfirmModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null); 
  // const [isCheckboxSelect, setIsCheckboxSelect] = useState(false);
  const [presupuestoActualizado, setPresupuestoActualizado] = useState(0);

  const items = [
    { name: "entretenimiento", icon: "game-controller-outline", color: "bg-purple-500"},
    { name: "restauurante", icon:"restaurant-outline", color: "bg-yellow-500" },
    { name : "ropa", icon:"shirt-outline", color:"bg-green-400" },
    { name:"seguro" , icon:"shield-checkmark-outline", color:"bg-blue-500"},
    { name:"mascota", icon:"paw-outline", color:"bg-[#8b4513]" },
  ]

  const presupuestoState = (useSelector(state => state?.budgets?.budgets)).reduce((acc, card) => acc + card.amount, 0) || 0;
  console.log("presup state=>",presupuestoState)

  useEffect(() => {
    dispatch(getUserCards())
    .then((res)=>{
      const presupuestoTotal = res.payload.reduce((acc, card) => acc + card.balance, 0);
      console.log("presupuestoTotal", presupuestoTotal)
      const presupuestoGeneral = presupuestoTotal - presupuestoState;
      setPresupuestoActualizado(presupuestoGeneral);
      console.log("Presupuesto General: ",presupuestoGeneral)
    })
    .catch((error) => {
      console.log("error => ", error)
    })
  }, [])


  // const objeto2 = { nombre: objeto.nombre, icono: objeto.icono, presupuestoTotal: objeto.presupuestoTotal, total: objeto.total, color: objeto.color }
  console.log(presupuestoActualizado)

  useEffect(() => {
    dispatch(getUserCards())
    .then((res)=>{
      console.log("respuesta card->", res.payload)
    })
  }, [dispatch]);

  const handleCheckboxChange = (item) => {
    console.log("Itemmmmm =====>",item)
    if (selectedItem === item) {
      setSelectedItem(null); // Si ya está seleccionado, deseleccionarlo
      // setIsCheckboxSelect(false);
    } else {
      setSelectedItem(item); // Si no está seleccionado, seleccionarlo
      // setIsCheckboxSelect(true);
    }
  }

  const handleAgregar = () => {

    const nuevoPresupuesto = {
      limit: presupuestoActualizado,
      category: selectedItem ? selectedItem.name : null,
      amount: monto,
      user: user,
    };

    const validaErrores = {}

    if (!selectedItem){
      validaErrores.selecteditem = "Debes seleccionar un item"
    }
    if (!presupuestoActualizado){
      validaErrores.presupuesto = "El total es obligatorio"
    } else if(presupuestoActualizado <= 0){
      validaErrores.presupuesto = "El total no puede ser menor a 0"
    }
    if(!monto){
      validaErrores.monto = "El monto es obligatorio"
    }else if(monto > presupuestoActualizado){
      validaErrores.monto = "El monto no puede ser mayor al total"
    }else if(monto <= 0){
      validaErrores.monto = "El monto no puede ser menor a 0"
    }

    if(Object.keys(validaErrores).length > 0){
      setErrors(validaErrores);
      return;
    }else if (Object.keys(validaErrores).length === 0){
      setErrors({});
      console.log(nuevoPresupuesto)
      dispatch(createBudget(nuevoPresupuesto))
        .then((res)=>{
          console.log("respuesta ->", res)
          navigate('/home/budgetList');
          console.log(res)
        })
        .catch((error)=>{
          console.log("error ->", error)
          console.log(error)
        })
        .finally(()=>{
          setTimeout(() => {
            console.log("se cargo")
          },3000)
        })
      
      // .then((res)=>{
      //   console.log(res)
      //   setSuccessMessage("se cargo su presupuesto con exito")
      //   setConfirmModal(true)
      // })
      // .catch((erroe)=>{
      //   console.log(erroe)
      //   setSuccessMessage("no se cargo su presupuesto")
      //   setConfirmModal(true)
      // })
      // .finaly(()=>{
      //   setTimeout(() => {
      //     setConfirmModal(false)
      //     },4000)
      // })
    }

  }
  
  return (
    <div className="flex w-full xl:w-[80%] min-h-screen flex-col items-center justify-start bg-fondo h-auto p-4 sm:p-6 gap-4 sm:gap-6">
      {/* {cononModal ? (
      <div className="w-full h-[80px] flex items-center justify-center">
        <p className="text-center text-green-500 font-parrafo font-[500]">{successMessage}</p>
      </div>) : null
      } */}
    <section className="w-[300px] h-[100px] flex flex-col gap-3 justify-center p-4 rounded-md bg-white" style={{ boxShadow: '9px 9px 22px #ced1d9, -9px -9px 22px #ffffff'}}>
      <h2 className="w-full text-left font-titulo font-[500] text-hoverBotonSubmenu capitalize">presupuesto limite</h2>
      <p className="w-full text-center font-parrafo font-[500] text-bgSubmenu capitalize">${presupuestoActualizado}</p>
    </section>
  
    <section className="card w-[300px] h-auto p-5 rounded-md bg-[#ffff] flex flex-col gap-2 "style={{ boxShadow: '9px 9px 22px #ced1d9, -9px -9px 22px #ffffff'}}>
    {
      items.map((element) => {
        const checkboxId = `checkbox-${element.name}`;
        return (
          <div key={element.category + uuidv4()}>
            <label
            htmlFor={checkboxId}
            className={` ${selectedItem && selectedItem.name === element.name ? 'bg-hoverBotonSubmenu text-colorFuente2Submenu' : ''} w-full flex flex-row justify-start items-center flex-wrap rounded-[5px] p-1 gap-1 font-titulo font-[600] capitalize  transition-all duration-300 ease-in `}
            >
              <span className={`${selectedItem && selectedItem.name === element.name ? 'bg-hoverBotonSubmenu text-colorFuente2Submenu' : `${element.color}`} w-[30px] h-[30px] flex justify-center items-center rounded-full text-colorFuente2Submenu text-[1.2rem] text-white transition-all duration-300 ease-in`}><ion-icon  name={element.icon}></ion-icon></span>
              {element.name}

              <input 
              type="checkbox"
              id={checkboxId} 
              onChange={() => handleCheckboxChange(element)}
              className="seleccionItem w-[20px] h-[20px] hidden rounded-[50%]" 
              // disabled={isCheckboxSelect}
              // disabled={selectedItem !== null && selectedItem !== element}
              checked={selectedItem && selectedItem.name === element.name}
              />
            </label>
            <div className="w-full h-[2px] bg-bgSubmenu rounded-sm opacity-40"></div> 
          </div>
        )
      })
    }
      {errors.selecteditem && <p className="text-red-500">{errors.selecteditem}</p>}
      
    <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
      <h2 className=" w-full font-titulo font-[500] text-center">Ingresa Monto</h2>

      <input 
        type="number" 
        value={monto}
        placeholder="Monto"
        onChange={e => setMonto(e.target.value)}  
        className="w-[130px] h-[30px] p-2 rounded-md font-parrafo font-[500] bg-fondo text-bgSubmenu outline-none" 
        min={1}
        max={presupuestoActualizado}
        />
        {errors.monto && <p className="text-red-500">{errors.monto}</p>}

      <button onClick={handleAgregar} className="mt-2 p-1 w-[130px] rounded-md font-parrafo font-[500] bg-hoverBotonSubmenu text-white outline-non hover:bg-colorFuente1Submenu transition-colors duration-300 ease-in-out ">Agregar</button>
    </div>
    </section>

    </div>
  )
}

export default BudgetForm
