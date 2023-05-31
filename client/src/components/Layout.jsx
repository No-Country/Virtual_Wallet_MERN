import { useSelector } from 'react-redux'
import Footer from './Footer'
import NavSecundary from './NavSecundary'
import { useState } from 'react'
import VerticalMenu from './VerticalMenu'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);


  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='principal w-full h-auto bg-purple flex flex-wrap'>
      {isAuthenticated ? <NavSecundary toggleMenu={toggleMenu}/> : null}
      {isAuthenticated ? <VerticalMenu isOpen={isOpen}/> : <Navbar />}
      {children}
      <Footer />
    </div>
  )
}

export default Layout
