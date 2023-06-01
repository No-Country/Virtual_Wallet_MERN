import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TransactionHistory from "./TransactionHistory";
import { getTransactions } from "../slices/transactionSlice";

const TransactionContainer = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.transactions);
  const loading = useSelector((state) => state.transaction.loading);
  const error = useSelector((state) => state.transaction.error);
  console.log(transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  if (loading) {
    return <div>Cargando transacciones...</div>;
  }

  if (error) {
    return <div>Error al obtener las transacciones: {error}</div>;
  }

  return (
    <div className="bg-white rounded-md w-lg mx-auto">
      <TransactionHistory transactions={transactions.filtered_transactions} />
    </div>
  );
};

export default TransactionContainer;
