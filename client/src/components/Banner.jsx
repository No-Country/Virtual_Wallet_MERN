
export const Banner = () => {

  return(
    <section className="overflow-hidden w-full h-[400px] bg-c-botones">
      <div className="flex w-full h-full">
        <div className="w-1/2 p-3">
          <h1>Todas tus cuentas en un solo Lugar</h1>
          <p>organiza tus finanzas desde la comodidad de tu hogar</p>
        </div>
        <div className="w-1/2 p-3 ">
          <section className="tarjeta1 relative flex flex-col justify-around  w-[300px] h-[150px] bg-c-botones-hover rounded-lg border shadow-black shadow-lmd pl-7" >
            <h2 className="text-white">PinguiWallet</h2>
            <p>**** **** **** 1234</p>

            <section className="tarjeta2 absolute top-20 left-20 flex flex-col justify-around  w-[300px] h-[150px] bg-c-botones-hover rounded-lg border shadow-black shadow-lmd overflow-hidden">
            <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1684361182/wallet/penguiWallet_q3cky6.jpg" alt="imagen de pinguino wallet" className="object-cover"/>
            </section>
          </section>
          
        </div>
      </div>
    </section>
  )
}