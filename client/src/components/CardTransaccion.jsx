import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTransaction } from "../slices/transactionSlice";

const CardTransaccion = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false); // Nueva variable de estado
  const [showTransferMessage, setShowTransferMessage] = useState(false);

  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [cardType, setCardType] = useState("");
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(data);

  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");
  const [receiver_account, setReceiver_account] = useState("");

  const handleTransfer = () => {
    const transferAmount = parseFloat(amount);

    if (transferAmount <= data.balance) {
      dispatch(
        createTransaction({
          card: cardType,
          concept,
          receiver_account,
          amount: transferAmount,
          cardId: data._id,
          token,
        })
      );

      setConcept("");
      setAmount("");
      setReceiver_account("");
      togglePopup();
      setTransferSuccess(true);
      setShowTransferMessage(true);
    } else {
      console.log("Saldo insuficiente");
    }
  };
  const handleTransferSuccessClose = () => {
    setTransferSuccess(false);
    setShowTransferMessage(false); // Ocultar el mensaje de transferencia
    window.location.reload();
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div
        className={`flip-card ]w-[350px] h-[300px] bg-white rounded-lg border-solid overflow-hidden perspective-1000  border pt-6 px-4 m-10  `}
        style={{ zIndex: 0 }}
      >
        <div
          className={`flip-card bg-transparent  w-[350px] h-[200px] rounded-lg border-solid overflow-hidden perspective-1000  `}
        >
          <section
            className={`flip-card-inner w-[100%] h-[100%] transition-transform duration-500 ease-in-out `}
            style={{
              zIndex: 1,
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
                {typeof data.number === "string"
                  ? data.number.replace(/\d{4}(?=.)/g, "$& ")
                  : data.number.toString().replace(/\d{4}(?=.)/g, "$& ")}
              </div>
              <section className="w-full h-auto  flex justify-start items-center gap-4">
                <div className="card-holder">
                  <div className="text-white font-titulo font-md">
                    {data.name}
                  </div>
                </div>
                <div className="card-expiration-date">
                  <div className="text-white">vto {data.expiration_date}</div>
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
                  {data.cvv}
                </div>
              </div>
              <p className="w-full h-auto text-white font-parrafo text-[.4rem] text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                atque beatae non id, sit nulla eos dolor eligendi corrupti
                cupiditate officiis debitis sequi repudiandae voluptates. Nobis
                alias at rem ab.<br></br>
                <br></br> Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ab atque beatae non id, sit nulla eos dolor eligendi
                corrupti cupiditate officiis debitis sequi repudiandae
                voluptates. Nobis alias at rem ab
              </p>
            </section>
          </section>
        </div>
        <div className="flex justify-center">
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4"
            onClick={() => setShowPopup(true)}
          >
            Transferir
          </button>
        </div>
      </div>
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          style={{ zIndex: 9999 }} // Cambiar el valor de zIndex a uno alto, como 9999
        >
          <div className="bg-white rounded-xl p-4 w-80">
            <h2 className="text-2xl font-semibold">Transferir Dinero</h2>
            <p>
              A Selecionado la tarjeta{" "}
              {typeof data.number === "string"
                ? data.number.replace(/\d{4}(?=.)/g, "$& ")
                : data.number.toString().replace(/\d{4}(?=.)/g, "$& ")}
            </p>
            <select
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mt-4"
            >
              <option value="">Seleccione una tarjeta</option>
              <option value="visa">Visa</option>
              <option value="mastercard">Mastercard</option>
              <option value="amex">Amex</option>
            </select>
            <select
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
            >
              <option value="">Seleccione un concepto</option>
              <option value="transferencia">Transferencia</option>
              <option value="servicio">Servicio</option>
              <option value="impuesto">Impuesto</option>
            </select>
            <input
              type="number"
              placeholder="Monto"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
            />
            <input
              type="text"
              placeholder="ReceiverAccount"
              value={receiver_account}
              onChange={(e) => setReceiver_account(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
            />
            <div className="flex justify-end mt-4">
              <button
                className="bg-gradient-to-r from-[#F29544] to-[#F27777] text-white px-4 py-2 shadow-xl backdrop-blur-md rounded-lg"
                onClick={handleTransfer}
              >
                Transferir
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 ml-2 shadow-xl backdrop-blur-md rounded-lg"
                onClick={togglePopup}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {showTransferMessage && (
        <div className="fixed top-0 left-0 right-0 flex items-center justify-center">
          <div className="bg-green-200 rounded-lg p-4">
            <p className="text-xl text-green-500 font-semibold mb-2">
              Transferencia exitosa.
            </p>
            <button
              className="bg-gradient-to-r from-[#F29544] to-[#F27777] text-white px-4 py-2 shadow-xl backdrop-blur-md rounded-lg"
              onClick={handleTransferSuccessClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardTransaccion;
