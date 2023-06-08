import CardTransaccion from "./CardTransaccion";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { axiosCard } from "../slices/cardFabianSlice";
import TituloPagesHome from "./TituloPagesHome";
const CardsUserTransaccion = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(axiosCard(token));
  }, [dispatch, token]);

  const cardData = useSelector((state) => state?.cardFabian?.data);
  const cardError = useSelector((state) => state?.card?.error);
  console.log(cardData);

  if (cardError) {
    return <div>Error al cargar la tarjeta: {cardError}</div>;
  }
  return (
    <section
      className="w-full h-auto flex bg-[#EAEEF7] flex-row justify-center items-center flex-wrap gap-5"
      style={{ zIndex: 5 }}
    >
      <TituloPagesHome titulo={"transacciones"}/> 

      {cardData?.map((card) => (
        <CardTransaccion data={card} key={card.id} />
      ))}
    </section>
  );
};

export default CardsUserTransaccion;
