import { useState } from "react";
import { MoneyOnAccount } from "./MoneyOnAccount";
import { Link } from "react-router-dom";

const CardSelector = ({ cards }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    setSelectedCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePreviousCard = () => {
    setSelectedCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  if (!cards || cards.length === 0) {
    return (
      <div className="flex justify-center ">
        <Link
          to="/home/creditCard"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          Agregar Tarjeta
        </Link>
      </div>
    );
  }

  const selectedCard = cards[selectedCardIndex];

  return (
    <div>
      <MoneyOnAccount card={selectedCard} />

      <div className="flex items-center justify-between mb-4 mt-10">
        <button
          onClick={handlePreviousCard}
          disabled={cards.length <= 1}
          className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg"
        >
          &#8249;
        </button>
        <div className="card-selector-container">
          <section
            className={`flip-card bg-transparent w-[350px] h-[200px] rounded-lg border-solid overflow-hidden perspective-1000 relative `}
            style={{ zIndex: 1 }}
          >
            <div
              className={`flip-card bg-transparent  w-[350px] h-[200px] rounded-lg border-solid overflow-hidden perspective-1000 relative `}
              style={{ zIndex: 0 }}
            >
              <section
                className={`flip-card-inner w-[100%] h-[100%] transition-transform duration-500 ease-in-out relative`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                onClick={flipCard}
              >
                <section
                  className="flip-card-front w-[100%] h-[100%] absolute top-0 left-0 text-white bg-blue-600 bg-opacity-60 shadow-md rounded-lg backdrop-filter backdrop-blur-md border-2 border-opacity-20 border-white p-2 flex flex-col gap-3"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <section className="w-full h-[42px] flex justify-between items-center">
                    <div className="chip w-[100px] h-[40px] flex justify-start items-center font-titulo font-bold">
                      <h2>Pingui Card</h2>
                    </div>
                    <div className="logo w-[45px] h-auto rounded-full overflow-hidden border-2 border-opacity-20 border-white">
                      <img
                        className="w-[100%] h-[100%] object-cover"
                        src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1684361186/wallet/A_vibrant_and_energetic_scene_of_a_reggaeton_pengu_h2o30b.jpg"
                        alt="pinguino logo"
                      />
                    </div>
                  </section>
                  <section className="w-full h-auto flex justify-between items-center">
                    <div className="chip w-[40px] h-[40px] ">
                      <img
                        src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1684733944/wallet/chip_n8mvm7.png"
                        alt="chip"
                      />
                    </div>
                  </section>
                  <div className="number text-white font-parrafo">
                    {typeof selectedCard.number === "string"
                      ? selectedCard.number.replace(/\d{4}(?=.)/g, "$& ")
                      : selectedCard.number
                          .toString()
                          .replace(/\d{4}(?=.)/g, "$& ")}
                  </div>
                  <section className="w-full h-auto  flex justify-start items-center gap-4">
                    <div className="card-holder">
                      <div className="text-white font-titulo font-md">
                        {selectedCard.name}
                      </div>
                    </div>
                    <div className="card-expiration-date">
                      <div className="text-white">
                        vto {selectedCard.expiration_date}
                      </div>
                    </div>
                  </section>
                </section>
                <section
                  className="flip-card-back w-[100%] h-[100%] absolute top-0 left-0 text-white bg-blue-600 bg-opacity-60 shadow-md rounded-lg backdrop-filter backdrop-blur-md border-2 border-opacity-20 border-white p-2 overflow-hidden flex flex-col gap-2"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="bandMagnetic w-full h-[50px] relative">
                    <div className="w-[120%] h-[50px] absolute bg-black left-[-10px] top-0"></div>
                  </div>
                  <p className="w-full h-auto text-white font-parrafo text-[.4rem] text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate illo vitae quisquam{" "}
                  </p>
                  <div className="ccv w-full h-[30px] relative bg-slate-500 flex justify-end items-center pr-2">
                    <div className="text-white font-parrafo font-md">
                      {selectedCard.cvv}
                    </div>
                  </div>
                  <p className="w-full h-auto text-white font-parrafo text-[.4rem] text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    atque beatae non id, sit nulla eos dolor eligendi corrupti
                    cupiditate officiis debitis sequi repudiandae voluptates.
                    Nobis alias at rem ab.<br></br>
                    <br></br> Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ab atque beatae non id, sit nulla eos dolor eligendi
                    corrupti cupiditate officiis debitis sequi repudiandae
                    voluptates. Nobis alias at rem ab
                  </p>
                </section>
              </section>
            </div>
          </section>
        </div>
        <button
          onClick={handleNextCard}
          disabled={cards.length <= 1}
          className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg"
        >
          &#8250;
        </button>
      </div>
      <div className="flex justify-center ">
        <Link
          to="/home/creditCard"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          Agregar Tarjeta
        </Link>
      </div>
    </div>
  );
};

export default CardSelector;
