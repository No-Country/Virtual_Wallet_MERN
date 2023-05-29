import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Bienvenida from "../components/Bienvenida";
import ComponentIntermediate from "../components/ComponentIntermediate";

export const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <section className="relative main w-5/6 sm:w-4/5 flex flex-col flex-wrap justify-start gap-5 items-center bg-fondo overflow-hidden pt-5 pb-5">
        <Bienvenida></Bienvenida>
        <ComponentIntermediate></ComponentIntermediate>
      </section>
    </>
  );
};

