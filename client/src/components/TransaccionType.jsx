import { Link } from "react-router-dom";
import TransactionComponent from "../pages/TransactionComponent";

Link;
const TransaccionType = () => {
  return (
    <section className="   w-screen h-screen flex bg-[#EAEEF7]  justify-center  items-start     pt-40  ">
      <div className="w-auto h-auto bg-white flex flex-col p-10 justify-center border  ">
        <Link
          to="/home/transaccion/Type/Quantity"
          className="m-5 my-3 border py-2 px-8 "
        >
          {" "}
          <button>Transferir a otro usuario</button>
        </Link>
        <Link
          to="/home/transaccion/Type/Quantity"
          className="mx-5 my-3 border  py-2 px-8"
        >
          {" "}
          <button>Pago de servicios</button>
        </Link>
        <Link
          to="/home/transaccion/Type/Quantity"
          className="mx-5 my-3 border  py-2 px-8"
        >
          {" "}
          <button>Pago de facturas</button>
        </Link>
      </div>

      <TransactionComponent></TransactionComponent>
    </section>
  );
};

export default TransaccionType;
