import { useState, useEffect } from "react";

import { DropDownMenu } from "../components/DropDownMenu";
import { MoneyOnAccount } from "../components/MoneyOnAccount";
import CardsAdd from "../components/CardsAdd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VerticalMenu from "../components/VerticalMenu";

export const Home = ({ children }) => {
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
      <div className="bg-[#EAEEF7]">
        <VerticalMenu></VerticalMenu>
        <MoneyOnAccount></MoneyOnAccount>
        {/* <DropDownMenu></DropDownMenu> */}
        <CardsAdd></CardsAdd>
      </div>
    </>
  );
};
