import logo from '../img/logo.png'
export const SeparatorLogo = () => {
  return (
    <section className="separatorLogo w-full h-[100px] flex justify-center items-center">
      <div className="w-[120px] h-[120px] border-1 border-c-botones overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={logo}
          alt="Logo PinguiWallet"
        />
      </div>
    </section>
  )
}
