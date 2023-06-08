import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../slices/userSlice';
import { useEffect, useState } from 'react';
import { getUserCards, updateCard } from '../slices/cardSlice';
import { createTransaction } from '../slices/guilleTransferSlice';
import { v4 as uuidv4 } from 'uuid';

const TransferenciasGuillermo = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const user = useSelector((state) => state?.user?.user);
  
  const [ListOfCards, setListOfCards] = useState([]);
  const [listUsers, setListUsers] = useState([]);

  const [selectedCard, setSelectedCard] = useState('');

  const [receiverAccount, setReceiverAccount] = useState('');
  const [amount, setAmount] = useState('');

//hacemos el fetch de los usuarios
  useEffect(() => {
    dispatch(getAllUsers())
    .then((response)=> {
      console.log("Lista de uusuarios", response.payload)
      setListUsers((response.payload).slice(0,5))
    })  
    .catch((error)=> {
      console.log("Error -> ",error)
    })
  },[dispatch, token])

  // hacemos el fetch de las tarjetas
  useEffect(() => {
    dispatch(getUserCards())
    .then((response)=>{
      console.log("Lista de tarjetas", response)
      setListOfCards((response.payload))
    })
    .catch((error)=> {
      console.log("Error -> ",error)
    })
  }, [dispatch, token]);

  const handleCardSelection = (event) => {
    setSelectedCard(event.target.value);
  };

  const handleReceiverAccountChange = (event) => {
    setReceiverAccount(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  

  const handleTransfer = () => {
    if (selectedCard && receiverAccount && amount) {
      const transactionData = {
        card: "amex", //esta no es la car es mas vien un select visa amex, etc
        concept: 'transferencia',
        receiver_account: receiverAccount,
        amount: Number(amount),
        user: user,
      };

      dispatch(createTransaction(transactionData))
      .then((response)=>{
        console.log(response)
        const idCard = selectedCard._id;
        const updatedCardData = {...selectedCard, balance: selectedCard.balance - parseInt(amount)}
        dispatch(updateCard(idCard,updatedCardData));
      })
      .catch((error)=> {
        console.log(error)
      })
      .finally(()=>{
        console.log("fin transaccio")
      })
      // Aquí puedes realizar alguna acción adicional después de la transferencia
      // Por ejemplo, limpiar los campos del formulario o mostrar una notificación
      setSelectedCard('');
      setReceiverAccount('');
      setAmount('');
    }
  };

  return (
    <div className="transferencias w-full h-[400px] bg-amber-100">
      <h2>Realizar transferencia</h2>
      <label htmlFor="card">Seleccionar tarjeta:</label>
      <select id="card" value={selectedCard} onChange={handleCardSelection}>
        <option value="">-- Seleccionar --</option>
        {ListOfCards.map((card) => (
          <option key={uuidv4()} value={card}>
            {card.number}
          </option>
        ))}
      </select>
      <br />

      {/* recetor */}
      <label htmlFor="receiverAccount">Cuenta receptora:</label>
      <select name="receiverAccount" id="receiverAccount" value={receiverAccount} onChange={handleReceiverAccountChange}>
        <option value=""> -- Seleccionar -- </option>
        {listUsers.map((user) => (
          <option key={uuidv4()} value={user._id}>
            {user.email}
          </option>
        ))
        }
      </select>

      <br />
      <label htmlFor="amount">Monto:</label>
      <input id="amount" type="text" value={amount} onChange={handleAmountChange} />
      <br />
      <button onClick={handleTransfer}>Realizar transferencia</button>
    </div>
  );
}

export default TransferenciasGuillermo