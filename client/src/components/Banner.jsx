
export const Banner = () => {

  return(
    <section className="overflow-hidden w-full h-[400px]">
      <div className="flex w-full h-full">
        <div className="w-1/2 p-3 flex flex-col gap-9 justify-center items-start pl-10">
          <h1 className="font-titulo font-bold text-c-botones text-4xl">Todas tus cuentas en un solo Lugar</h1>
          <p className="font-parrafo text-c-subtituo text-x">Organiza tus finanzas desde la comodidad de tu hogar!!!</p>
        </div>
        <div className="w-1/2 p-3 flex items-center justify-start">
          <div className="w-[500px] h-[280px] relative">
            <section className="tarjeta1 bg-c-botones flex flex-col justify-around  w-[300px] h-[150px] bg-c-botones-hover rounded-lg border-solid border-2 border-black shadow-black shadow-md pl-7" >
              <h2 className="font-titulo font-bold text-white">PinguiWallet</h2>
              <p className="font-parrafo font-bold text-white">**** **** **** 1234</p>
            </section>
            <section className="tarjeta2 absolute right-0 bottom-0 flex flex-col justify-around  w-[300px] h-[170px] bg-c-botones-hover rounded-lg border-2 border-black shadow-black shadow-md overflow-hidden">
            <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1684361182/wallet/penguiWallet_q3cky6.jpg" alt="imagen de pinguino wallet" className="object-cover"/>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}