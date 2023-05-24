import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const Layout = ({ children }) => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated)

  return (
    <>
      {isAuthenticated ? null : <Navbar />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
