import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTransaction } from "../slices/guilleTransferSlice"; 

import { getUserCards, updateCard } from '../slices/cardSlice';

const TransactionComponent = () => {
  const [transactionData, setTransactionData] = useState({
    card: "",
    concept: "",
    receiver_account: "",
    amount: 0,
  });
  const [selectedCard, setSelectedCard] = useState("");

  const cards = useSelector(getUserCards);
  const dispatch = useDispatch();

  // Manejador de cambios en los campos de la transacción
  const handleTransactionDataChange = (event) => {
    const { name, value } = event.target;
    setTransactionData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Manejador de selección de tarjeta
  const handleCardSelection = (event) => {
    setSelectedCard(event.target.value);
  };

  // Manejador del envío del formulario de transacción
  const handleTransactionSubmit = (event) => {
    event.preventDefault();

    // Realizar la transacción utilizando el servicio de transacciones
    createTransaction(transactionData)
      .then((response) => {
        console.log("Respuesta ctrate transaction ->", response)
        // Actualizar el saldo de la tarjeta seleccionada
        const updatedCard = cards.find((card) => card._id === selectedCard);
        if (updatedCard) {
          const updatedBalance = updatedCard.balance - transactionData.amount;
          // Aquí deberías llamar a una acción de tu slice de tarjetas para actualizar el saldo de la tarjeta
          dispatch(updateCard({ cardId: selectedCard, balance: updatedBalance }));
          
        }

        // Reiniciar los campos del formulario
        setTransactionData({
          card: "",
          concept: "",
          receiver_account: "",
          amount: 0,
        });
        setSelectedCard("");
      })
      .catch((error) => {
        // Manejar errores de transacción
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Realizar Transacción</h1>
      <form onSubmit={handleTransactionSubmit}>
        <label>
          Tarjeta:
          <select value={selectedCard} onChange={handleCardSelection}>
            <option value="">Seleccionar tarjeta</option>
            {cards.map((card) => (
              <option key={card._id} value={card._id}>
                {card.name} - {card.number}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Concepto:
          <input
            type="text"
            name="concept"
            value={transactionData.concept}
            onChange={handleTransactionDataChange}
          />
        </label>
        <br />
        <label>
          Cuenta receptora:
          <input
            type="text"
            name="receiver_account"
            value={transactionData.receiver_account}
            onChange={handleTransactionDataChange}
          />
        </label>
        <br />
        <label>
          Monto:
          <input
            type="number"
            name="amount"
            value={transactionData.amount}
            onChange={handleTransactionDataChange}
          />
        </label>
        <br />
        <button type="submit">Realizar transacción</button>
      </form>
    </div>
  );
};

export default TransactionComponent
