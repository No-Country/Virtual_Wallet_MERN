import React from "react";
import CardSelector from "./CardSelector";

const ComponentIntermediate = () => {
  // aca iria el llamdo a la DB para traer la info de la tarjetas
  const cardList = [
    { id: 1, number: "1234 5678 9012 3456", balance: "$1,000.00" },
    { id: 2, number: "9876 5432 1098 7654", balance: "$500.00" },
    // Agrega más tarjetas si es necesario
  ];

  return (
    <div>
      <CardSelector cards={cardList} />
    </div>
  );
};

export default ComponentIntermediate;
