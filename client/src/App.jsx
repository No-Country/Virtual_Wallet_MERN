import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import { Login } from "./components/Login";
import { Counter } from "./components/Counter";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Counter />} />
      </Routes>
    </Layout>
  );
}

export default App;
