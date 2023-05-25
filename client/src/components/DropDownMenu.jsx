import { useState } from "react";

export const DropDownMenu = () => {
  const [abierto, setAbierto] = useState(false);

  const opciones = [
    { nombre: "Opción 1", icono: "icono1.svg" },
    { nombre: "Opción 2", icono: "icono2.svg" },
    { nombre: "Opción 3", icono: "icono3.svg" },
    // Agrega más opciones según tus necesidades
  ];

  const toggleMenu = () => {
    setAbierto(!abierto);
  };

  return (
    <div className="relative">
      <div
        className={`absolute top-0 left-0 flex flex-col justify-center w-8 h-8 bg-gray-300 cursor-pointer ${
          abierto ? "rotate-0" : ""
        }`}
        onClick={toggleMenu}
      >
        <svg
          width="32"
          height="22"
          viewBox="0 0 32 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="5" width="32" height="2" fill="white" />
          <rect x="0" y="15" width="32" height="2" fill="white" />
        </svg>
      </div>

      {abierto && (
        <ul
          className="mt-2 absolute bg-white p-2 shadow"
          style={{ top: "2rem", left: "0" }}
        >
          {opciones.map((opcion, index) => (
            <li key={index}>
              <div className="flex items-center space-x-2">
                <img
                  src={opcion.icono}
                  alt={opcion.nombre}
                  className="w-4 h-4"
                />
                <span className="text-gray-800">{opcion.nombre}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
