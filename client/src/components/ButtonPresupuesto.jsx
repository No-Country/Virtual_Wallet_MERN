import { useState } from 'react'

const ButtonPresupuesto = ({ titulo, icono, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <>
    <button 
    onMouseEnter={handleHover}
    onMouseLeave={handleMouseLeave}
    className={`w-full flex flex-row justify-start items-center flex-wrap rounded-[50px] p-1 gap-1 font-titulo font-[600] capitalize  ${isHovered ? "bg-hoverBotonSubmenu" : "" } transition-all duration-300 ease-in`}>
      <span className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${color} text-colorFuente2Submenu text-[1.2rem]  ${isHovered ? "bg-colorFuente2Submenu text-orange-500" : ""} transition-all duration-300 ease-in`}><ion-icon  name={icono}></ion-icon></span>
      {titulo}
    </button>
    <div className="w-full h-[2px] bg-bgSubmenu rounded-sm opacity-40"></div>
    </>
  )
}

export default ButtonPresupuesto