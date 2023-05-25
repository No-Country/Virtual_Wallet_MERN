export const SecuritySectionBanner = () => {
  return (
    <section className="w-[1000px] h-[300px] m-auto gradient rounded-2xl">
      <div className="flex justify-evenly h-full">
        <div className="p-5 h-[100%]">
          <h2 className="w-[200px] text-2xl text-white">
            Máxima seguridad garantizada
          </h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-secundario p-3 rounded w-[250px] h-[200px] gradient-secundario">
            <h4 className="font-semibold mb-3">
              ¡Tu seguridad es nuestra prioridad!
            </h4>
            <p className="text-sm">
              Nos comprometemos a brindarte un entorno seguro y confiable para
              todas tus transacciones financieras.
            </p>
          </div>
          <div className="bg-secundario p-3 rounded w-[250px] h-[200px] gradient-secundario">
            <h4 className="font-semibold mb-3">¡Seguridad sin compromisos!</h4>
            <br />
            <p className="text-sm">
              Nos esforzamos por brindarte una experiencia segura sin
              comprometer la comodidad y la eficiencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
