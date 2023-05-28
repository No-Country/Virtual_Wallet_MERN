
const TitulosPages = ({titulo , subtitulo}) => {
  return (
    <div className="titulos w-full h-auto pt-5 pb-5 bg-white">
      <h2 className="w-full h-auto pt-5 pb-5 text-2xl sm:text-3xl font-titulo capitalize text-center font-[700] text-[#0B0B0B]">{titulo}</h2>
      <p className="w-full h-auto text-center font-parrafo text-xs sm:text-sm font-[400] text-[#0B0B0B]">{subtitulo}</p>
    </div>
    )
}

export default TitulosPages