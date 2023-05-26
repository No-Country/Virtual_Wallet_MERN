import Footer from './Footer'

import Nav from './Nav'

const Layout = ({ children }) => {

  return (
    <div className='principal w-full h-auto bg-purple flex flex flex-wrap'>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
