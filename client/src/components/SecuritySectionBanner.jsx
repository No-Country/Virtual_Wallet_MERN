
export const SecuritySectionBanner = () => {
  const backgroundImage = 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1684425094/wallet/pinguin3_fghwaj.jpg';

  return (
    <section className="relative">
      <div className="h-[500px] md:h-[400px]">
      <div className="bg-cover bg-center h-[100%]"  style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-md flex items-center">
          <div className="w-1/4 mx-4">
            <h1 className="text-4xl font-bold text-white">PinguiWallet</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-50 p-4 rounded-md">
              <p className="text-gray-900 font-semibold">Somos una Wallet segura</p>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-md">
              <p className="text-gray-900 font-semibold">Otra nota sobre seguridad</p>
              <p className="text-gray-700">Praesent feugiat malesuada tristique.</p>
            </div>
            {/* Agrega más pequeñas cards opacas aquí si es necesario */}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};