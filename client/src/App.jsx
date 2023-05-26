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
import Perfil from './pages/Perfil'
import Denuncias from './components/Denuncias'

function App() {
  return (
    <Layout>
      <Routes>
        {/* ruta para landing */}
        <Route path="/" element={<Main />}>
          
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ruta para home sel usuario*/}
        <Route exact path="/home" element={<Home />} >
        </Route>
        <Route path="/home/creditCard" element={<CreditCardForm />} />
        <Route path='/home/perfil' element={<Perfil />} />
        <Route path='/home/denuncias' element={<Denuncias />} />

        {/* otras rutas */}
        <Route path="/cash" element={<BillPayment />}></Route>
        <Route path="/credit-card" element={<BillPayment />}></Route>
        <Route path="/currency-dollar" element={<BillPayment />}></Route>

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

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
