import { useState } from "react";
import { createTransaction } from "../slices/transactionSlice";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

export const MoneyOnAccount = ({ card }) => {
  const [transferSuccess, setTransferSuccess] = useState(false); // Nueva variable de estado
  const [showTransferMessage, setShowTransferMessage] = useState(false);

  const dispatch = useDispatch();
  const [showBalance, setShowBalance] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [cardType, setCardType] = useState("");
  const token = localStorage.getItem("token");
  console.log(token);

  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");
  const [receiver_account, setReceiver_account] = useState("");

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  console.log(card._id);

  const handleTransfer = () => {
    dispatch(
      createTransaction({
        card: cardType,
        concept,
        receiver_account,
        amount,
        cardId: card._id,
        token,
      })
    );
    setConcept("");
    setAmount("");

    setReceiver_account("");
    togglePopup();
    setTransferSuccess(true);
    setShowTransferMessage(true);

    // setTimeout(() => {
    //   window.location.reload();
    // }, 2000);
  };
  const handleTransferSuccessClose = () => {
    setTransferSuccess(false);
    setShowTransferMessage(false); // Ocultar el mensaje de transferencia
    window.location.reload();
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center w-full">
        <div className="bg-white rounded-md p-4 w-[90%] sm:w-[90%] lg:w-[400px]">
          <div>
            <h2 className="text-2xl font-semibold">Mi Dinero</h2>
            <div className="flex items-center ">
              {showBalance ? (
                <div className="ml-2">
                  <p className="text-4xl font-bold">{card.balance}</p>
                  <p className="text-gray-500">Saldo disponible</p>
                </div>
              ) : (
                <p className="flex items-center text-xl font-semibold">
                  Saldo oculto
                </p>
              )}
              {showBalance ? (
                <svg
                  onClick={toggleBalance}
                  width="30"
                  height="36"
                  viewBox="0 0 30 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4 mx-2"
                >
                  <path
                    d="M21.0492 20.4001C21.2865 19.6327 21.4069 18.8195 21.4046 18.0001C21.4046 16.1808 20.8072 14.4359 19.7439 13.1494C18.6806 11.8629 17.2384 11.1401 15.7347 11.1401C15.0658 11.1411 14.4024 11.2867 13.7759 11.5701L15.1066 13.2301C15.3088 13.191 15.5133 13.1709 15.7182 13.1701C16.7814 13.1675 17.8024 13.6739 18.5581 14.5788C19.3138 15.4838 19.7428 16.7137 19.7515 18.0001C19.7509 18.248 19.7343 18.4954 19.7019 18.7401L21.0492 20.4001Z"
                    fill="black"
                  />
                  <path
                    d="M28.5703 17.5298C25.785 11.2998 20.9003 7.52979 15.495 7.52979C14.0232 7.53397 12.5614 7.82087 11.1641 8.37979L12.4947 9.99978C13.4749 9.69332 14.4827 9.53544 15.495 9.52978C20.1482 9.52978 24.3799 12.6698 26.9008 17.9598C25.9761 19.9224 24.7502 21.6534 23.2889 23.0598L24.4626 24.4798C26.1537 22.8291 27.5582 20.79 28.5951 18.4798L28.81 17.9998L28.5703 17.5298Z"
                    fill="black"
                  />
                  <path
                    d="M4.25478 5.78004L7.94101 10.24C5.61102 12.0552 3.70673 14.5658 2.41167 17.53L2.19678 18L2.41167 18.48C5.197 24.71 10.0817 28.48 15.487 28.48C17.5968 28.4795 19.6792 27.9018 21.5784 26.79L25.711 31.79L27.1573 30.29L5.66811 4.29004L4.25478 5.78004ZM12.3132 15.53L17.8095 22.18C17.1885 22.6451 16.4736 22.8942 15.7433 22.9C15.2126 22.9001 14.6871 22.7731 14.1972 22.5265C13.7072 22.2799 13.2624 21.9185 12.8883 21.4631C12.5142 21.0077 12.2182 20.4672 12.0174 19.8729C11.8166 19.2786 11.7149 18.6421 11.7182 18C11.7275 17.1266 11.9332 16.2727 12.3132 15.53ZM11.1148 14.08C10.3416 15.3994 9.97912 17.0073 10.0917 18.619C10.2042 20.2307 10.7845 21.7422 11.7298 22.8859C12.6751 24.0296 13.9244 24.7317 15.2565 24.8679C16.5885 25.0041 17.9175 24.5656 19.008 23.63L20.3304 25.23C18.7995 26.0218 17.1519 26.43 15.487 26.43C10.8338 26.43 6.60207 23.29 4.08122 18C5.29098 15.4083 7.03328 13.2382 9.13945 11.7L11.1148 14.08Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  onClick={toggleBalance}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="30"
                  height="36"
                  className=" mx-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              )}
            </div>
          </div>
          <div className="mt-auto flex justify-end">
            <button
              onClick={togglePopup}
              className="bg-gradient-to-r from-[#07C7F2] to-[#0D99FF] text-white  px-4 py-2  shadow-xl backdrop-blur-md rounded-lg"
            >
              Transferir Dinero
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          style={{ zIndex: 9999 }}
        >
          <div className="bg-white rounded-xl p-4 w-80">
            <h2 className="text-2xl font-semibold">Transferir Dinero</h2>
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
