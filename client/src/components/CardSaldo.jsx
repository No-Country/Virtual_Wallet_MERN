
const CardSaldo = ({objeto}) => {
  return (
    <div>
        <div className="card w-[300px] sm:w-[320px] bg-white shadow-md rounded-[4px] p-4 border border-1">
        <div className="title flex items-center">
          <span className="w-[30px] h-[30px] title-icon bg-colorFuente1Submenu rounded-full flex justify-center items-center text-[1.3rem] text-white">
            <ion-icon name="checkmark"></ion-icon>          
          </span>
          <p className="title-text text-gray-700 text-lg ml-2 font-titulo">Saldo</p>
          
        </div>
        <div className="data">
          <p className="text-gray-700 text-4xl font-bold my-4 font-parrafo">${objeto.balance}</p>
          <div className="range bg-gray-300 w-full h-2 rounded-md">
            <div className="fill bg-colorFuente1Submenu h-full rounded-md" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSaldo