const SavingBanner = () => {
  return (
    <section className="bg-fondo mt-20">
      <h2 className="text-secudario my-10 text-center font-semibold text-2xl text-secundario">
        Controla tus ahorros y ahorra más con{' '}
        <i className="text-principal">PingüiWallet</i>
      </h2>
      <div className="flex justify-center items-center gap-8 mb-10">
        <article className="w-[300px] h-[300px] gradient rounded-2xl p-3 pt-6 relative">
          <p className="text-white text-lg">
            Todos tus gastos separados por categoria
          </p>
        </article>
        <article className="w-[300px] h-[300px] gradient rounded-2xl p-3 pt-6 relative">
          <p className="text-white text-lg">
            Ingresa metas de ahorros semanales o mensuales y cumplí tus
            objetivos
          </p>
        </article>
      </div>
    </section>
  )
}

export default SavingBanner
