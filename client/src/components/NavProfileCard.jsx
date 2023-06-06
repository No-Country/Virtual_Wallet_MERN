import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const NavProfileCard = () => {
  const [username, setUsername] = useState(null);

const user = useSelector((state) => state.user.user);
const update = useSelector((state)=> state.user.update);

console.log(user);

useEffect(() => {
  console.log(user)
  if (user) {
    setUsername(user.username)
  }
},[update, user])

  return (
    <div className="sticky top-0 w-full h-auto overflow-hidden bg-fondo z-10 flex justify-center items-center sm:justify-start sm:items-start sm:gap-2">
      <Link to="/home" className="w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] flex justify-center items-center sm:justify-start sm:items-center bg-submenu sm:p-4 transition-colors duration-300 ease-in-out ">

        <div>
          <div className="text-xs hidden sm:block pl-1">
          <h2 className='w-full font-titulo font-[500] text-lg text-hoverBotonSubmenu'>Bienvenid@</h2>
            {username == null ? null : (
              <strong className="block font-titulo text-colorFuente1Submenu text-sm font-[600]">@{username}</strong>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default NavProfileCard