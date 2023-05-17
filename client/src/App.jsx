import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Register from './pages/Register'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  )
}

export default App
