
const TransactionHistory = ({ transactions }) => {
  // Verificar si transactions es un array o un objeto iterable
  if (!Array.isArray(transactions) && typeof transactions !== "object") {
    return <div>No hay transacciones disponibles</div>;
  }

  // Crear una copia del array y luego invertir el orden si transactions es un array
  const reversedTransactions = Array.isArray(transactions)
    ? [...transactions].reverse()
    : Array.from(transactions).reverse();

  return (
    <div className="w-screen mx-auto max-w-screen-lg">
      <h2 className="text-2xl mb-4 p-3 bg-[#4B4FA6]">Últimos movimientos</h2>
      <div className="h-64 overflow-y-auto px-4">
        <ul className="grid grid-cols-1 gap-4">
          {reversedTransactions.map((transaction, index) => (
            <li key={index}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex">
                  <p className="text-gray-800 mr-4">{transaction.card}</p>
                  <p className="text-gray-500">{transaction.concept}</p>
                </div>
                <div className="flex">
                  <p className="text-gray-500 mr-4">
                    Cuenta Receptor: {transaction.receiver_account}
                  </p>
                  <p className="text-gray-800">${transaction.amount}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;
