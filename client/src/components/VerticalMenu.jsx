
export const VerticalMenu = () => {
  const usuario = {
    logo: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1684361186/wallet/A_vibrant_and_energetic_scene_of_a_reggaeton_pengu_h2o30b.jpg',
    name: 'username',
    email: 'usuario@gmail.com',
    card: '0000000000000000000',
    gastos:  '0',
    ahorros: '0',
  } 

  return (
    <div className="sticky top-0 flex w-1/6  sm:w-1/5 h-[100vh] gap-1 flex-col justify-start items-start bg-c-fondo">
    <div className="w-full h-[80px] overflow-hidden bg-c-fondo z-10 flex justify-center items-center sm:justify-start sm:items-start gap-2">
      <a href="#" className="w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] flex justify-center items-center sm:justify-start sm:items-center sm:ap-2 bg-c-fondo sm:p-4 hover:bg-c-botones transition-colors duration-300 ease-in-out ">
        <img
          alt="Man"
          src={usuario.logo}
          className="h-[100%] w-[100%] rounded-full object-cover"
        />
        <div>
          <p className="text-xs hidden sm:block">
            <strong className="block font-medium font-titulo text-c-titulo">{usuario.name}</strong>
            <span className="font-parrafo text-fuente"> {usuario.email} </span>
          </p>
        </div>
      </a>
    </div>
    <div className="w-full h-auto overflow-hidden">
      <nav aria-label="Main Nav" className="mt-0 flex flex-col gap-1 w-[100%] h-[100%] overflow-hidden">
        <section className="subPerfil w-full h-auto bg-c-fondo">
          <a
            href="#"
            className="flex justify-center sm:justify-start sm:items-center text-2xl sm:text-lg gap-2 bg-c-fondo hover:bg-c-botones text-c-titulo hover:text-c-fondo transition duration-300 ease-in-out px-4 py-2 font-bold "
          >
            <ion-icon name="person-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Perfil </span>
          </a>
        </section>
        <span className="w-full h-[1px] bg-c-fuente opacity-5"></span>
        <section className="cuentas w-full h-auto bg-c-fondo" >
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center text-2xl sm:text-lg gap-2 bg-c-fondo hover:bg-c-botones text-c-titulo hover:text-c-fondo transition duration-300 ease-in-out px-4 py-2 font-bold" >
            <ion-icon name="card-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Tarjetas </span>
          </a>
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center text-2xl sm:text-lg gap-2 bg-c-fondo hover:bg-c-botones text-c-titulo hover:text-c-fondo transition duration-300 ease-in-out px-4 py-2 font-bold" >
            <ion-icon name="help-outline"></ion-icon>
            <span className="text-sm font-normal hidden sm:block"> Ayuda </span>
          </a>
        </section>

        <span className="w-full h-[1px] bg-c-fuente opacity-5"></span>
        <section className="actividad w-full h-auto bg-c-fondo" >
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center text-2xl sm:text-lg gap-2 bg-c-fondo hover:bg-c-botones text-c-titulo hover:text-c-fondo transition duration-300 ease-in-out px-4 py-2 font-bold" >
            <ion-icon name="cash-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Transferencias </span>
          </a>
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center text-2xl sm:text-lg gap-2 bg-c-fondo hover:bg-c-botones text-c-titulo hover:text-c-fondo transition duration-300 ease-in-out px-4 py-2 font-bold" >
            <ion-icon name="wallet-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Gastos </span>
          </a>
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center text-2xl sm:text-lg gap-2 bg-c-fondo hover:bg-c-botones text-c-titulo hover:text-c-fondo transition duration-300 ease-in-out px-4 py-2 font-bold" >
            <ion-icon name="heart-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Ahorros </span>
          </a>
        </section>
        
        <span className="w-full h-[1px] bg-c-fuente opacity-5"></span>
        <section className="actividad w-full h-auto bg-c-fondo" >
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center text-2xl sm:text-lggap-2 bg-c-fondo hover:bg-c-botones text-c-titulo hover:text-c-fondo transition duration-300 ease-in-out px-4 py-2 font-bold" >
            <ion-icon name="document-text-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Resumen </span>
          </a>
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center text-2xl sm:text-lg gap-2 bg-c-fondo hover:bg-c-botones text-c-titulo hover:text-c-fondo transition duration-300 ease-in-out px-4 py-2 font-bold" >
            <ion-icon name="reader-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> Facturas </span>
          </a>
        </section>
        <span className="w-full h-[1px] bg-c-fuente opacity-5"></span>
        <section className="actividad w-full h-auto bg-c-fondo" >
          <a href="#"
            className="flex justify-center sm:justify-start sm:items-center text-2xl sm:text-lg gap-2 bg-c-fondo hover:bg-c-botones text-c-titulo hover:text-c-fondo transition duration-300 ease-in-out px-4 py-2 font-bold" >
            <ion-icon name="log-out-outline"></ion-icon>
            <span className="text-sm font-medium hidden sm:block"> logout </span>
          </a>
        </section>
      </nav>
    </div>
  </div>
  )
}

export default VerticalMenu