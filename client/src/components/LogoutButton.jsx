import { useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Redirige al usuario al login después de cerrar sesión
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
};

export default LogoutButton;
