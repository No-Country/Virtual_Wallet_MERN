export const SecuritySectionBanner = () => {
  return (
    <section className="w-full h-auto flex justify-center items-center">
      <section className="w-full h-[350px] sm:h-[400px] p-6 rounded-[5px] overflow-hidden" 
      style={{backgroundImage: "url(https://res.cloudinary.com/dpiwmbsog/image/upload/v1685853012/wallet/Pingui_Wallet_2_addknz.jpg)",
      backgroundSize:"cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
      >
        <div className="flex sm:flex-row flex-col w-full h-full justify-evenly">
          <div className="w-full h-auto font-titulo flex flex-row justify-start items-start p-4">
            <h2 className=" text-2xl text-white text-center">
              Máxima seguridad garantizada
            </h2>
          </div>
          {/* <div className="flex w-full sm:w-2/3  h-auto justify-center items-end gap-4">
            <div className="bg-secundario p-3 rounded-[4px] w-[250px] h-[200px] gradient-secundario flex flex-col gap-2 justify-center items-center">
              <h2 className="font-titulo font-[600] text-colorFuente2Submenu mb-1">
                ¡Tu seguridad es nuestra prioridad!
              </h2>
              <p className="font-parrafo font-[400] text-sm text-shadow">
                Nos comprometemos a brindarte un entorno seguro y confiable para
                todas tus transacciones financieras.
              </p>
            </div>
            <div className="bg-secundario p-3 rounded-[4px] w-[250px] h-[200px] gradient-secundario flex flex-col gap-2 justify-center items-center">
              <h2 className="font-titulo font-[600] text-colorFuente2Submenu mb-1">¡Seguridad sin compromisos!</h2>
              <p className="font-parrafo font-[400] text-sm text-shadow">
                Nos esforzamos por brindarte una experiencia segura sin
                comprometer la comodidad y la eficiencia.
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </section>
  )
}
