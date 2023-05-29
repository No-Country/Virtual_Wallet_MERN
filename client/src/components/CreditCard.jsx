import { useState } from "react";
import CardSaldo from "./CardSaldo";
import { useDispatch } from "react-redux";
import { deleteCard } from "../slices/cardSlice";

const CreditCard = ({ objeto }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleDelete = () => {

    dispatch(deleteCard(objeto._id))
    .then((res) => {
      console.log("respuesta ->", res);
      setSuccessMessage('Eliminado con éxito');
    })
    .catch((error) => {
      console.log("error ->", error);
      setSuccessMessage('Error al eliminar');
    })
    .finally(() => {
      console.log(successMessage)
      setIsConfirmed(false);
      setTimeout(() => {
        setSuccessMessage('');
      }, 4000);
    })
  }
  
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="bg-[#333] w-full max-w-[450px] sm:w-[420px] h-auto p-5 flex flex-col justify-start items-center gap-5 rounded-[4px] relative" >
      {isConfirmed && (
          <div className="modal w-full h-auto p-2 text-center">
            <div className="modal-content">
              <h3 className="text-colorFuente2Submenu font-parrafo">⚠️ ¿esta seguro de eliminar la tarjeta?</h3>
              <div className="flex flex-row justify-center items-center gap-2">
                <button onClick={handleDelete} className="font-parrafo text-colorFuente2Submenu bg-colorFuente1Submenu w-[60px] rounded-[4px] p-1 hover:bg-hoverBotonSubmenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out">Si</button>
                <button onClick={()=> setIsConfirmed(false)} className="font-parrafo text-colorFuente2Submenu bg-colorFuente1Submenu w-[60px] rounded-[4px] p-1 hover:bg-hoverBotonSubmenu hover:text-colorFuente1Submenu transition duration-500 ease-in-out">No</button>
              </div>
            </div>
          </div>
        )}
        {successMessage && (
        <div className="modal w-full h-auto p-2 text-center">
          <h3 className="text-colorFuente2Submenu font-parrafo text-green-400">🤯 Tarjeta eliminada con exito!!!</h3>
        </div>
        )}
      <div className={`flip-card bg-transparent w-[300px] h-[200px] sm:w-[320px] sm:h-[200px] rounded-lg border-solid overflow-hidden perspective-1000 relative `} onClick={flipCard}>
          <section className={`flip-card-inner w-[100%] h-[100%] transition-transform duration-500 ease-in-out relative`} style={{transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}}>
            
            <section className="flip-card-fron w-[100%] h-[100%] absolute top-0 left-0 text-white bg-blue-600 bg-opacity-60 shadow-md rounded-lg backdrop-filter backdrop-blur-md border-2 border-opacity-20 border-white p-2 flex flex-col gap-3" style={{ backfaceVisibility: 'hidden'}}>
              <section className="w-full h-[42px] flex justify-between items-cente" >
                <div className="chip w-[100px] h-[40px] flex justify-start items-center font-titulo font-bold">
                  <h2>Pingui Card</h2>
                </div>
                <div className="logo w-[45px] h-auto rounded-full overflow-hidden border-2 border-opacity-20 border-white">
                  <img className="w-[100%] h-[100%] object-cover" src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1684361186/wallet/A_vibrant_and_energetic_scene_of_a_reggaeton_pengu_h2o30b.jpg" alt="pinguino logo" />  
                </div>
              </section>
              <section className="w-full h-auto flex justify-between items-center" >
                <div className="chip w-[40px] h-[40px] ">
                  <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1684733944/wallet/chip_n8mvm7.png" alt="chip" />
                </div>
              </section>
              <div className="number text-white font-parrafo">{objeto.number}</div>
              <section className="w-full h-auto  flex justify-start items-center gap-4">
                <div className="card-holder">
                  <div className="text-white font-titulo font-md">{objeto.name}</div>
                </div>
                <div className="card-expiration-date">
                  <div className="text-white">
                    vto {objeto.expiration_date}
                  </div>
                </div>
              </section>
            </section>
            <section className="flip-card-back w-[100%] h-[100%] absolute top-0 left-0 text-white bg-blue-600 bg-opacity-60 shadow-md rounded-lg backdrop-filter backdrop-blur-md border-2 border-opacity-20 border-white p-2 overflow-hidden flex flex-col gap-2" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
              <div className="bandMagnetic w-full h-[50px] relative">
                <div className="w-[120%] h-[50px] absolute bg-black left-[-10px] top-0"></div>
              </div>
              <p className="w-full h-auto text-white font-parrafo text-[.4rem] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate illo vitae quisquam </p>
              <div className="ccv w-full h-[30px] relative bg-slate-500 flex justify-end items-center pr-2">
                <div className="text-white font-parrafo font-md">{objeto.cvv}</div>
              </div>
              <p className="w-full h-auto text-white font-parrafo text-[.4rem] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab atque beatae non id, sit nulla eos dolor eligendi corrupti cupiditate officiis debitis sequi repudiandae voluptates. Nobis alias at rem ab.<br></br><br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab atque beatae non id, sit nulla eos dolor eligendi corrupti cupiditate officiis debitis sequi repudiandae voluptates. Nobis alias at rem ab</p>
            </section>
          </section>
      </div>
      <CardSaldo objeto={objeto}/>
        <button className="edit absolute p-1 text-colorFuente1Submenu hover:text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out flex justify-center items-center rounded-md top-0 right-0 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] text-2xl" onClick={()=> setIsConfirmed(true)}>
          <ion-icon name="trash"></ion-icon>         
        </button>
    </div>
  )
}

export default CreditCard