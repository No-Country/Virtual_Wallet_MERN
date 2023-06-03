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
import Denuncias from './pages/Denuncias'
import CreditCardList from './components/CreditCardList'
import Reclamos from './pages/Reclamos'
import Categorias from './pages/Categorias'
import PresupuestoToggle from './components/PresupuestoToggle'
import Transaccion from './pages/Transaccion'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserByid, selectUser } from './slices/userSlice'
import { useEffect } from 'react'

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const identificador = localStorage.getItem("id2");

    if (token) {
      dispatch(fetchUserByid(identificador))
      .then((res) => {
        console.log("App ->",res)
      })  
      .catch((error) =>{
        console.log("App ->",error)
      })

    }
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      if( localStorage.getItem("token")){
        console.log("ya hay un token cargado")
      }
    } 
  }, [user]);

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
        <Route path='/home/reclamos' element={<Reclamos />} />
        <Route path='/home/tarjetas' element={<CreditCardList />} />
        <Route path='/home/categorias' element={<Categorias />}/>
        <Route path='/home/ingresarPresupuesto' element={<PresupuestoToggle />}/>
        <Route path='/home/pruebaTrans' element={<Transaccion />}/>

        {/* otras rutas */}
        <Route path="/cash" element={<BillPayment />}></Route>
        <Route path="/credit-card" element={<BillPayment />}></Route>
        <Route path="/currency-dollar" element={<BillPayment />}></Route>

        <Route path="/security-privacy" element={<SecurityAndPrivacy />}></Route>
        <Route path="/information-transparency" element={<InfomationTransparency />} ></Route>
        <Route  path="/terms-conditions" element={<TermsAndConditions />} ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
