import { Login } from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import { BillPayment } from "./components/BillPayment";
import { Main } from "./pages/Main";
import { Home } from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/home" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />}></Route>
        <Route path="/cash" element={<BillPayment />}></Route>
        <Route path="/credit-card" element={<BillPayment />}></Route>
        <Route path="/currency-dollar" element={<BillPayment />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
