import { useDispatch, useSelector } from "react-redux";
import { getUserCards, selectCards } from "../slices/cardSlice";
import { useEffect } from "react";
import NotItem from "./NotItem";
import CreditCard from "./CreditCard";

const CreditCardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const token = localStorage.getItem("token");
  const deleteUp = useSelector(state => state.card.delete);

  useEffect(() => {
    dispatch(getUserCards());
  }, [dispatch, token, deleteUp]);
  
  console.log(cards);

  return (
    <div className="flex w-5/6 sm:w-4/5 flex-col items-center justify-start sm:flex-row sm:items-start sm:justify-start bg-fondo h-auto p-0 sm:p-6 gap-4 sm:gap-6">
      {/* informacion usuario */}
      <section className="flex sm:flex-row justify-center items-center w-full h-auto gap-2 flex-wrap box-border pt-3">
        <h2 className="w-full h-auto text-2xl font-titulo font-[700] text-[#0B0B0B] text-center">Información Personal</h2>

        <div className="w-full h-auto flex flex-col sm:flex-row sm:justify-center items-center gap-3 sm:gap-5 p-1 box-border sm:flex-wrap">

          {
            cards.length > 0 ? cards.map((card) => {
              return (
                <CreditCard key={card._id } objeto={card} />
              )
            }) : <NotItem />
          }

        </div>
      </section>

    </div>
  )
}

export default CreditCardList