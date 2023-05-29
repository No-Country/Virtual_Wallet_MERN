import { useDispatch, useSelector } from "react-redux";
import { getUserCards, selectCards } from "../slices/cardSlice";
import { useEffect } from "react";
import NotItem from "./NotItem";
import CreditCard from "./CreditCard";

const CreditCardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getUserCards());
  }, [dispatch, token]);

  console.log(cards);

  return (
    <div className="flex w-5/6 sm:w-4/5 flex-col items-center justify-start sm:flex-row sm:items-start sm:justify-start bg-fondo h-auto p-0 sm:p-6 gap-4 sm:gap-6">
      {/* informacion usuario */}
      <section className="flex sm:flex-row justify-center items-center w-full h-auto gap-2 flex-wrap box-border pt-3">
        <h2 className="w-full h-auto text-2xl font-titulo font-[700] text-[#0B0B0B] text-center">Informacion Personal</h2>

        <div className="w-full h-auto flex flex-col gap-3 border-solid border-[3px] border-colorFuente1Submenu rounded-sm p-1 box-border">

          {
            cards.length > 0 ? cards.map((card) => {
              return (
                <CreditCard key={card.id} objeto={card} />
              )
            }) : <NotItem />
          }

        </div>
      </section>

    </div>
  )
}

export default CreditCardList