import { useSelector } from 'react-redux'
import VerticalMenu from './VerticalMenu'
import Navbar from './Navbar'

const Nav = () => {

  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated)

  return (
    <>
    {isAuthenticated ? <VerticalMenu /> : <Navbar />}
    </>
  )
}

export default Nav