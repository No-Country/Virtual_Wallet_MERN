import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const NavProfileCard = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

const user = useSelector((state) => state.user.user);
const update = useSelector((state)=> state.user.update);

console.log(user);

const logo = 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1684361186/wallet/A_vibrant_and_energetic_scene_of_a_reggaeton_pengu_h2o30b.jpg';

useEffect(() => {
  setUsername(user.username)
  setEmail(user.email)
},[update, user])

  return (
    <div className="sticky top-0 w-full h-[80px] overflow-hidden bg-bgSubmenu z-10 flex justify-center items-center sm:justify-start sm:items-start sm:gap-2">
      <Link to="/home" className="w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] flex justify-center items-center sm:justify-start sm:items-center bg-submenu sm:p-4 hover:bg-c-botones transition-colors duration-300 ease-in-out ">
        <img
          alt="Man"
          src={logo}
          className="h-[100%] w-[100%] rounded-full object-cover"
        />
        <div>
          <p className="text-xs hidden sm:block pl-1">
            {username == null ? null : (
              <strong className="block font-titulo text-colorFuente1Submenu text-sm font-[600]">{username}</strong>
            )}
            {email == null ? null : (
              <span className="font-parrafo font-[600] text-colorFuente2Submenu text-"> {email} </span>
            )}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default NavProfileCard