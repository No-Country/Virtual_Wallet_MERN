import CardTransaccion from "./CardTransaccion";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { axiosCard } from "../slices/cardFabianSlice";
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
      className="w-screen h-screen flex bg-[#EAEEF7] justify-between flex-row  flex-wrap   pt-10"
      style={{ zIndex: 5 }}
    >
      {cardData?.map((card) => (
        <CardTransaccion data={card} key={card.id} />
      ))}
    </section>
  );
};

export default CardsUserTransaccion;
