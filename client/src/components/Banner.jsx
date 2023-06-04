export const Banner = () => {
  return (
    <section className="w-full md:h-[400px] h-auto bg-fondo -mt-2">
      <div className="flex md:flex-row md:flex-nowrap md:justify-evenly items-center w-full h-full flex-col gap-2 md:gap-1 md:p-0 p-4">

        {/* caja titulo */}
        <div className="w-full md:w-1/3 p-3 flex flex-col gap-9 justify-center md:items-start items-center text-center">
          <h1 className="font-titulo font-bold text-secundario text-4xl">
            Todas tus cuentas en un solo lugar
          </h1>
          <p className="font-parrafo text-c-subtituo text-x">
            Organiza tus finanzas desde la comodidad de tu hogar!
          </p>
        </div>
        
        {/* caja card */}
        <div className="pt-2 pl-2 md:p-3 md:w-auto w-full flex items-center justify-start">
          <div className="w-full md:w-[500px] h-[280px] relative">
            <section className="tarjeta1 bg-principal flex flex-col justify-around w-[250px] h-[150px] md:w-[300px] md:h-[195px] rounded-lg shadow-black shadow-md md:pl-7 pl-3">
              <h2 className="font-titulo font-bold text-white text-lg">
                PinguiWallet
              </h2>
              <p className="font-parrafo font-bold text-white">
                **** **** **** 1234
              </p>
            </section>
            <section
              className="tarjeta2 absolute right-0 bottom-0 flex flex-col justify-around w-[250px] h-[150px] md:w-[300px] md:h-[195px] rounded-lg overflow-hidden"
              style={{ boxShadow: '8px 8px 5px #a1a1a1,0px 0px 0px #ffffff' }}
            >
              <img
                src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1684361182/wallet/penguiWallet_q3cky6.jpg"
                alt="imagen de pinguino wallet"
                className="object-cover"
              />
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
