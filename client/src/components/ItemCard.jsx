export const ItemCard = ({ element }) => {
  return (
    <article 
    className="w-full h-auto sm:w-full sm:h-[250px] md:w-[300px] md:h-[300px] gradient rounded-[7px] p-1 md:p-3  relative flex justify-center items-center"
    >
      <div
        className="w-full h-full itemCard border-1 border-c-subtitulo rounded-[4px] p-2 flex md:flex-col items-center justify-around gap-2"
      >
        <h2 className="w-full h-auto md:h-1/3 sm:w-full font-titulo text-[1.3rem] text-white">
          {element.service}
        </h2>
        <div
          className="w-full h-full md:h-2/3 sm:w-full flex flex-row items-center justify-evenly gap-2 text-secundario relative overflow-hidden"
          style={{ fontSize: '3.5rem' }}
        >
          <img className="h-full w-full md:w-3/4 object-contain " src={element.img1} alt="imagen pingui wallet servicios" />
          
          <div className="w-[50px] h-[50px] absolute right-0 bottom-0 text-[3.3rem] flex justify-center items-center text-secundario">
            <ion-icon name={element.icon}></ion-icon>
          </div>
        </div>
      </div>
    </article>
  )
}
