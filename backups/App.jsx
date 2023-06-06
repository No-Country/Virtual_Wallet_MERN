import { Login } from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Register from './pages/Register'
import { BillPayment } from './components/BillPayment'
import { Main } from './pages/Main'
import { Home } from './pages/Home'
import CreditCardForm from './components/CreditCardForm'
import SecurityAndPrivacy from './pages/SecurityAndPrivacy'
import NotFound from './pages/NotFound'
import InfomationTransparency from './pages/InfomationTransparency'
import TermsAndConditions from './pages/TermsAndConditions'
import VerticalMenu from './components/VerticalMenu'
import Perfil from './pages/Perfil'
import { useSelector } from 'react-redux'

function App() {
  const isAuthenticated = useSelector(state => state?.auth?.isAuthenticated);

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
        <Route path="/creditCard" element={<CreditCardForm />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>

        <Route
          path="/security-privacy"
          element={<SecurityAndPrivacy />}
        ></Route>
        <Route
          path="/information-transparency"
          element={<InfomationTransparency />}
        ></Route>
        <Route
          path="/terms-conditions"
          element={<TermsAndConditions />}
        ></Route>
        <Route path="/subMenu" element={<VerticalMenu />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
