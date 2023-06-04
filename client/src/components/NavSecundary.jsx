import { useState } from "react";

const NavSecundary = ({ toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
    toggleMenu(); // Llama a la función toggleMenu del componente padre
  };

  return (
    <nav className='w-full h-[60px] bg-bgSubmenu flex items-center justify-start border-red-100 border-b'>
      <div className="w-3/4 sm:w-1/2 flex flex-row flex-nowrap justify-start items-center gap-1">
        <div className="w-[70px] h-[60px] flex justify-center items-center">
          <div className={`nav_toggle ${isOpen ? "open" : ""}`} 
          onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="w-[60px] h-[60px] flex justify-center items-center">
          <img className="w-[25px] h-[25px] overflow-hidden object-contain" src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1685844091/wallet/logo_pingui_1_Traced_cdwppl.png" alt="logotipo pingui Wallet" />
        </div>
      </div>
      <div className="m-auto right-0 sm:w-1/2 w-1/4 h-[60px] flex justify-end items-center">
        <a className="w-[50px] h-[50px] text-hoverBotonSubmenu text-[1.5rem] flex justify-center items-center">
        <ion-icon name="notifications"></ion-icon>
        </a>  
      </div>
    </nav>
  )
}

export default NavSecundary

