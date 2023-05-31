
const TitulosPages = ({titulo , subtitulo}) => {
  return (
    <div className="titulos w-full h-[140px] bg-bgSubmenu flex flex-col items-center justify-center gap-5">
      <h2 className="w-full h-auto text-2xl sm:text-3xl font-titulo capitalize text-center font-[700] text-colorFuente2Submenu">{titulo}</h2>
      {subtitulo && (
        <p className="w-full h-auto text-center font-parrafo text-xs sm:text-sm font-[400] text-colorFuente2Submenu">
          {subtitulo}
        </p>
      )}
    </div>
    )
}

export default TitulosPages