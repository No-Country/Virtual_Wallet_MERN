import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByid } from "../slices/userSlice";

const Bienvenida = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);

  useEffect(() => {
    dispatch(fetchUserByid(user?.id));
    console.log("Bienvenida -> ", user);
  }, [dispatch, user]);

  console.log("Bienvenida ", user);
  return (
    <section className="saludo flex flex-row items-center justify-center h-auto w-full">
      {user ? (
        <h1>
          Bienvenido {user.username} {user.surname}
          <br></br>
          <br></br>
          Tu Numero de cuenta es {user.account_number}
        </h1>
      ) : (
        <h1>Bienvenido</h1>
      )}
    </section>
  );
};

export default Bienvenida;
