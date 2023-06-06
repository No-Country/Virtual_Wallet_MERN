import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { Link, NavLink } from "react-router-dom";
import { fetchUserByid, selectUser } from "../slices/userSlice";
import NavProfileCard from "./NavProfileCard";

export const VerticalMenu = ({ isOpen }) => {
  const [botonFaqs, setBotonFaqs] = useState(false);

  const dispatch = useDispatch();
  const userCargado = useSelector(selectUser);
  const token = localStorage.getItem("token");
  const update = useSelector((state) => state.user.update);

  const { user } = useSelector((state) => state.auth);
  // const update =useSelector((state)=> state.user.update);

  // console.log("usuario: ",user._id)
  const userId = user?._id;

  //me interesa que lo haga solo una vez
  useEffect(() => {
    localStorage.setItem("userId", user?._id);
  }, [dispatch, token, update]);

  //una vez añadan la imagen de perfil, se elimina esta linea
  const usuario = {
    logo: "https://res.cloudinary.com/dpiwmbsog/image/upload/v1684361186/wallet/A_vibrant_and_energetic_scene_of_a_reggaeton_pengu_h2o30b.jpg",
    ...userCargado,
  };

  useEffect(() => {
    dispatch(fetchUserByid(userId));
  }, [dispatch, userId, update]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(logout());
  };

  const handleAyuda = () => {
    setBotonFaqs(!botonFaqs);
  };
  console.log("USUARIO -> ", usuario);

  return (
    <div
      className={`absolute mt-[60px] left-0 top-0 z-10 min-w-[60px] md:min-w-[200px] flex h-full gap-1 flex-col justify-start items-start bg-fondo overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-[200px]"
      }`}
    >
      <div className="w-full h-full overflow-hidden flex flex-col justify-between">
        <nav
          aria-label="Main Nav"
          className="mt-0 flex flex-col gap-1 w-[100%] h-auto overflow-hidden"
        >
          <NavProfileCard />

          <span className="w-full h-[2px] bg-hoverBotonSubmenu opacity-20"></span>
          <section className="subPerfil w-full h-auto bg-c-fondo flex flex-col justify-center items-center gap-1">
            <NavLink
              to={"/home/"}
              className="flex justify-center sm:justify-start sm:items-center w-[40px] sm:w-[90%] text-2xl sm:text-lg gap-2 bg-fondo text-colorFuente3Submenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out p-2 sm:px-3 sm:p-2 md:px-4 md:py-2 font-[600] rounded-[5px] sm:rounded-[20px] overflow-hidden cursor-pointer"
            >
              <ion-icon name="wallet"></ion-icon>
              <span className="text-sm font-medium hidden sm:block">
                {" "}
                Billetera{" "}
              </span>
            </NavLink>
            <NavLink
              to={"/home/perfil"}
              className="flex justify-center sm:justify-start sm:items-center w-[40px] sm:w-[90%] text-2xl sm:text-lg gap-2 bg-fondo text-colorFuente3Submenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out p-2 sm:px-3 sm:p-2 md:px-4 md:py-2 font-[600] rounded-[5px] sm:rounded-[20px] overflow-hidden cursor-pointer"
            >
              <ion-icon name="person-circle"></ion-icon>
              <span className="text-sm font-medium hidden sm:block">
                {" "}
                Perfil{" "}
              </span>
            </NavLink>
          </section>

          {/* section tus cuentas */}
          <span className="w-full h-[2px] bg-hoverBotonSubmenu opacity-20"></span>
          <section className="subPerfil w-full h-auto bg-c-fondo flex flex-col justify-center items-center gap-1">
            <h2 className="w-full text-sm font-titulo font-[500] text-colorFuente3Submenu hidden sm:block sm:pl-4 md:pl-5 pb-1 pt-1">
              Tus Cuentas
            </h2>
            <NavLink
              to="/home/tarjetas"
              className="flex justify-center sm:justify-start sm:items-center w-[40px] sm:w-[90%] text-2xl sm:text-lg gap-2 bg-fondo text-colorFuente3Submenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out p-2 sm:px-3 sm:p-2 md:px-4 md:py-2 font-[600] rounded-[5px] sm:rounded-[20px] overflow-hidden cursor-pointer"
            >
              <ion-icon name="card"></ion-icon>
              <span className="text-sm font-titulo font-[400] hidden sm:block">
                {" "}
                Tarjetas{" "}
              </span>
            </NavLink>
            <Link
              to="#"
              onClick={handleAyuda}
              className="flex justify-center sm:justify-start sm:items-center w-[40px] sm:w-[90%] text-2xl sm:text-lg gap-2 bg-fondo text-colorFuente3Submenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out p-2 sm:px-3 sm:p-2 md:px-4 md:py-2 font-[600] rounded-[5px] sm:rounded-[20px] overflow-hidden cursor-pointer"
            >
              <ion-icon name="help-circle"></ion-icon>
              <span className="text-sm font-normal hidden sm:block">
                {" "}
                Ayuda{" "}
              </span>
            </Link>
            {botonFaqs && (
              <>
                <NavLink
                  to="/home/denuncias"
                  className="flex justify-center sm:justify-start sm:items-center w-[40px] h-[40px] sm:w-[90%] text-[1.1rem] sm:text-lg gap-2s bg-fondo text-colorFuente3Submenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out p-2 sm:px-3 sm:p-2 md:px-4 md:py-2 font-[600] rounded-[5px] sm:rounded-[20px] overflow-hidden cursor-pointer gap-1"
                >
                  <span className="text-[1rem] md:text-[1rem]">🚨</span>
                  <span className="text-sm font-medium hidden sm:block">
                    {" "}
                    Denuncias{" "}
                  </span>
                </NavLink>
                <NavLink
                  to="/home/reclamos"
                  className="flex justify-center sm:justify-start sm:items-center w-[40px] h-[40px] sm:w-[90%] text-[1.1rem] sm:text-lg gap-2s bg-fondo text-colorFuente3Submenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out p-2 sm:px-3 sm:p-2 md:px-4 md:py-2 font-[600] rounded-[5px] sm:rounded-[20px] overflow-hidden cursor-pointer gap-1"
                >
                  <span className="text-[1rem] md:text-[1rem]">⚠️</span>
                  <span className="text-sm font-medium hidden sm:block">
                    {" "}
                    Reclamo{" "}
                  </span>
                </NavLink>
              </>
            )}
          </section>

          {/* section actividad */}
          <span className="w-full h-[2px] bg-hoverBotonSubmenu opacity-20"></span>
          <section className="subPerfil w-full h-auto bg-c-fondo flex flex-col justify-center items-center gap-1">
            <h2 className="w-full text-sm font-titulo font-[500] text-colorFuente3Submenu hidden sm:block sm:pl-4 md:pl-5 pb-1 pt-1">
              Actividad
            </h2>
            <NavLink
              to={"/home/transferencias"}
              className="flex justify-center sm:justify-start sm:items-center w-[40px] sm:w-[90%] text-2xl sm:text-lg gap-2 bg-fondo text-colorFuente3Submenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out p-2 sm:px-3 sm:p-2 md:px-4 md:py-2 font-[600] rounded-[5px] sm:rounded-[20px] overflow-hidden cursor-pointer"
            >
              <ion-icon className="w-[20px]" name="cash"></ion-icon>
              <span className="text-sm font-medium hidden sm:block w-[120px]">
                {" "}
                Transferencias{" "}
              </span>
            </NavLink>
            <NavLink
              to={"/home/gastos"}
              className="flex justify-center sm:justify-start sm:items-center w-[40px] sm:w-[90%] text-2xl sm:text-lg gap-2 bg-fondo text-colorFuente3Submenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out p-2 sm:px-3 sm:p-2 md:px-4 md:py-2 font-[600] rounded-[5px] sm:rounded-[20px] overflow-hidden cursor-pointer"
            >
              <ion-icon name="pricetag"></ion-icon>
              <span className="text-sm font-medium hidden sm:block">
                {" "}
                Gastos{" "}
              </span>
            </NavLink>
            <NavLink
              to={"/home/budgetList"}
              className="flex justify-center sm:justify-start sm:items-center w-[40px] sm:w-[90%] text-2xl sm:text-lg gap-2 bg-fondo text-colorFuente3Submenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out p-2 sm:px-3 sm:p-2 md:px-4 md:py-2 font-[600] rounded-[5px] sm:rounded-[20px] overflow-hidden cursor-pointer"
            >
              <ion-icon name="file-tray-full"></ion-icon>
              <span className="text-sm font-medium hidden sm:block">
                {" "}
                Presupuesto{" "}
              </span>
            </NavLink>
          </section>
          <span className="w-full h-[2px] bg-hoverBotonSubmenu opacity-20"></span>
        </nav>
        {/* section logout */}
        <section className="subPerfil w-full h-auto bg-c-fondo flex flex-col justify-center items-center pb-[650px] sm:pb-[410px] md:pb-[350px]">
          <Link
            to="/"
            onClick={handleLogout}
            className="flex justify-center sm:justify-start sm:items-center w-[40px] sm:w-[90%] text-2xl sm:text-lg gap-2 bg-fondo text-colorFuente3Submenu hover:text-colorFuente1Submenu transition duration-300 ease-in-out p-2 sm:px-3 sm:p-2 md:px-4 md:py-2 font-[600] rounded-[5px] sm:rounded-[20px] overflow-hidden cursor-pointer"
          >
            <ion-icon name="log-out"></ion-icon>
            <span className="text-sm font-medium hidden sm:block">
              {" "}
              logout{" "}
            </span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default VerticalMenu;
