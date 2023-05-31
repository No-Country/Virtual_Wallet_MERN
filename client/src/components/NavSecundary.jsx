import { useState } from "react";

const NavSecundary = ({ toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
    toggleMenu(); // Llama a la función toggleMenu del componente padre
  };

  return (
    <nav className='w-full h-[60px] bg-bgSubmenu flex items-center justify-between border-red-100 border-b'>
      <div className="w-[70px] h-[60px] flex justify-center items-center">
        <div className={`nav_toggle ${isOpen ? "open" : ""}`} 
        onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="w-[70px] h-[60px] flex justify-center items-center">
        <a className="w-[50px] h-[50px] text-hoverBotonSubmenu text-[1.5rem] flex justify-center items-center">
        <ion-icon name="notifications"></ion-icon>
        </a>  
      </div>
    </nav>
  )
}

export default NavSecundary

