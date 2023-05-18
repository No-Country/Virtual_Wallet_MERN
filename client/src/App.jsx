import { Login } from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Register from './pages/Register'
import { BillPayment } from './components/BillPayment'
import { Main } from './components/Main'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />}></Route>
        <Route path="/cash" element={<BillPayment />}></Route>
        <Route path="/credit-card" element={<BillPayment />}></Route>
        <Route path="/currency-dollar" element={<BillPayment />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
