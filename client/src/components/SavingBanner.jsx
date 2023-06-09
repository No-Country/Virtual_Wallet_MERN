const SavingBanner = () => {
  return (
    <section className="h-auto flex justify-center items-center p-7 sm:gap-14 gap-10 flex-wrap">
      <article 
        className="w-full h-auto sm:w-full sm:h-[250px] md:w-[300px] md:h-[300px] gradient rounded-[7px] p-1 md:p-3  relative flex justify-center items-center" >
        <div className="w-full h-full itemCard border-1 border-c-subtitulo rounded-[4px] p-2 flex md:flex-col items-center justify-around gap-2" >
          <h2 className="w-full h-auto md:h-1/3 sm:w-full font-titulo text-[1.3rem] text-white">
            Todos tus gastos separados por categoria 
          </h2>
          <div className="w-full h-full md:h-2/3 sm:w-full flex flex-row items-center justify-evenly gap-2 text-secundario relative overflow-hidden" style={{ fontSize: '3.5rem' }} >
            <img className="h-full w-full md:w-3/4 object-contain " src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1686021098/wallet/Categor%C3%ADas_1_mg4acz.svg" alt="imagen pingui wallet servicios" />  
          </div>
        </div>
      </article>
      <article 
        className="w-full h-auto sm:w-full sm:h-[250px] md:w-[300px] md:h-[300px] gradient rounded-[7px] p-1 md:p-3  relative flex justify-center items-center" >
        <div className="w-full h-full itemCard border-1 border-c-subtitulo rounded-[4px] p-2 flex flex-row-reverse md:flex-col items-center justify-around gap-2" >
          <h2 className="w-full h-auto md:h-1/3 sm:w-full font-titulo text-[1.3rem] text-white">
            Realiza tus pagos de una forma facil y segura
          </h2>
          <div className="w-full h-full md:h-2/3 sm:w-full flex flex-row items-center justify-evenly gap-2 text-secundario relative overflow-hidden" style={{ fontSize: '3.5rem' }} >
            <img className="h-full w-full md:w-3/4 object-contain " src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1686187632/wallet/pagaFacturas_b6p0cw.png" alt="imagen pingui wallet servicios" />  
          </div>
        </div>
      </article>
    </section>

    // <section className="bg-fondo mt-20">
    //   <h2 className="text-secudario my-10 text-center font-semibold text-2xl text-secundario">
    //     Controla tus ahorros y ahorra más con{' '}
    //     <i className="text-principal">PingüiWallet</i>
    //   </h2>
    //   <div className="flex justify-center items-center gap-8 mb-10">
    //     <article className="w-[300px] h-[300px] gradient rounded-2xl p-3 pt-6 relative">
    //       <p className="text-white text-lg">
    //         Todos tus gastos separados por categoria
    //       </p>
    //     </article>
    //     <article className="w-[300px] h-[300px] gradient rounded-2xl p-3 pt-6 relative">
    //       <p className="text-white text-lg">
    //         Ingresa metas de ahorros semanales o mensuales y cumplí tus
    //         objetivos
    //       </p>
    //     </article>
    //   </div>
    // </section>
  )
}

export default SavingBanner
