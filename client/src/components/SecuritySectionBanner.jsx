
export const SecuritySectionBanner = () => {
  const backgroundImage = 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1684425094/wallet/pinguin3_fghwaj.jpg';

  return (
    <section className="relative">
      <div className="h-[500px] md:h-[400px]">
      <div className="bg-cover bg-center h-[100%]"  style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-gray-800 bg-opacity-10 flex items-center">
          <div className="w-1/3 mx-0 h-[100%] inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-sm flex items-center justify-center" >
            <h1 className="text-4xl font-bold text-c-contenedor font-titulo" >PinguiWallet</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-4 w-2/3">
            <div className="bg-c-cart-opaca bg-opacity-80 p-4 rounded-md w-[240px]" style={{ boxShadow: '2px 2px 5px #b1b1b1,0px 0px 0px #ffffff' }}>
              <p className="text-c-fondo font-semibold">Somos una Wallet segura</p>
              <p className="text-c-fuente">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-c-cart-opaca bg-opacity-80 p-4 rounded-md w-[240px]">
              <p className="text-c-fondo font-semibold">Otra nota sobre seguridad</p>
              <p className="text-c-fuente">Praesent feugiat malesuada tristique.</p>
            </div>
            {/* Agrega más pequeñas cards opacas aquí si es necesario */}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};