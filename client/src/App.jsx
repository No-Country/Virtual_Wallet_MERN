import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Register from './pages/Register'
import { Main } from './components/Main'
import { Banner } from './components/Banner'

function App() {
  return (
    <Layout >
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Main>
        <Banner></Banner>
      </Main>
        
    </Layout>
  )
}

export default App
