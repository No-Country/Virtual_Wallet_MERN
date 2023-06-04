import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Bienvenida from "../components/Bienvenida";
import ComponentIntermediate from "../components/ComponentIntermediate";
import TransactionContainer from "../components/TransactionContainer";

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
      <section className="relative main w-full min-h-screen flex flex-col flex-wrap justify-start gap-5 items-center bg-fondo overflow-hidden pt-5 pb-5">
      <div className="w-full xl:w-[80%] h-auto flex flex-col gap-10">
        <Bienvenida></Bienvenida>
        <ComponentIntermediate></ComponentIntermediate>
        <TransactionContainer></TransactionContainer>
      </div>
      </section>
    </>
  );
};
