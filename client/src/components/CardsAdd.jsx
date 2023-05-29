// import { useState } from "react";
import { Link } from "react-router-dom";

const CardsAdd = () => {
  const cardDePrueba = { id: 1, numero: "**** **** **** 1234" };

  // const [tarjetas, setTarjetas] = useState([
  //   { id: 1, numero: "**** **** **** 1234" },
  //   { id: 2, numero: "**** **** **** 5678" },
  //   { id: 3, numero: "**** **** **** 9012" },
  // ]);
  // const [tarjetaActual, setTarjetaActual] = useState(0);

  // const agregarTarjeta = () => {
  //   const nuevaTarjeta = {
  //     id: tarjetas.length + 1,
  //     numero: "**** **** **** 3456", // Número de la nueva tarjeta
  //   };
  //   setTarjetas([...tarjetas, nuevaTarjeta]);
  // };

  // const cambiarTarjeta = (direccion) => {
  //   if (direccion === "izquierda") {
  //     setTarjetaActual(tarjetaActual - 1);
  //   } else if (direccion === "derecha") {
  //     setTarjetaActual(tarjetaActual + 1);
  //   }
  // };

  return (
    <section className="flex items-center justify-center w-[90%] sm:w-[90%] h-[auto]">
      <div className="bg-white p-8 h-full min-w-min flex flex-col items-center  rounded-lg mr-10 ">
        <h2 className="text-2xl font-semibold mb-4">Mis Tarjetas</h2>
        <div className="relative w-80 p-6 bg-[#D9D9D9] rounded-lg shadow-md">
          <div className="flex items-center justify-start mb-4">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none absolute top-0 left-0 mt-2 ml-2"
              // onClick={() => cambiarTarjeta("izquierda")}
              // disabled={tarjetaActual === 0}
            >
              {"<"}
            </button>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none absolute top-0 right-0 mt-2 mr-2"
              // onClick={() => cambiarTarjeta("derecha")}
              // disabled={tarjetaActual === tarjetas.length - 1}
            >
              {">"}
            </button>
            <span className="chip-icon pt-10">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0H22.5C23.8875 0 25 1.36811 25 3.07441V6.14881H20.7375L17.5 10.1302V16.279L15 19.3534V24.5953H10V19.3534L7.5 16.279V8.31627L10 5.24186V0ZM20 11.3907V15.372H25V9.22322H21.7625L20 11.3907ZM5.7375 6.14881L7.5 3.98136V0H2.5C1.1125 0 0 1.36811 0 3.07441V6.14881H5.7375ZM5 15.372V9.22322H0V15.372H5ZM7.5 20.6139L5.7375 18.4464H0V21.5208C0 23.2271 1.1125 24.5953 2.5 24.5953H7.5V20.6139ZM19.2625 18.4464L17.5 20.6139V24.5953H22.5C23.8875 24.5953 25 23.2271 25 21.5208V18.4464H19.2625Z"
                  fill="black"
                />
              </svg>
            </span>

            {/* Aquí puedes agregar el código para el chip con el icono */}
          </div>
          <div className="text-2xl font-bold text-start mb-4 mt-10 ">
            {/* {tarjetas[tarjetaActual].numero} */}
            {cardDePrueba.numero}
          </div>
        </div>
        <Link to={'/home/creditCard'}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          // onClick={agregarTarjeta}
        >
          Agregar Tarjeta
        </Link>
      </div>

      <div className="bg-white p-8 h-full min-w-min flex flex-col items-center  rounded-lg mr-10 ">
        <h1 className="h-6 w-full bg-[#D9D9D9] ">MI TARJETA</h1>
      </div>
    </section>
  );
};

export default CardsAdd;
