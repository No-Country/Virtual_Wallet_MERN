import { useEffect } from "react";

import { MoneyOnAccount } from "../components/MoneyOnAccount";
import CardsAdd from "../components/CardsAdd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VerticalMenu from "../components/VerticalMenu";

export const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  console.log(isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <>
      <section className="home w-full h-auto flex flex-wrap bg-slate-500">
        <VerticalMenu></VerticalMenu>
        <section className="main w-5/6 sm:w-4/5 flex flex-col flex-wrap justify-start gap-5 items-center bg-orange-500 overflow-hidden">
          <MoneyOnAccount></MoneyOnAccount>
          {/* <DropDownMenu></DropDownMenu> */}
          <CardsAdd></CardsAdd>
        </section>
      </section>
    </>
  );
};
