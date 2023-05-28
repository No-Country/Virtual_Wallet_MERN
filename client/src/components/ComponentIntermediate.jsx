import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardSelector from "./CardSelector";
import { axiosCard } from "../slices/cardSlice";

const ComponentIntermediate = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(axiosCard(token));
  }, [dispatch, token]);

  const cardData = useSelector((state) => state?.card?.data);
  const cardError = useSelector((state) => state?.card?.error);
  console.log(cardData);

  if (cardError) {
    return <div>Error al cargar la tarjeta: {cardError}</div>;
  }

  return (
    <div>
      <CardSelector cards={cardData} />
    </div>
  );
};

export default ComponentIntermediate;
