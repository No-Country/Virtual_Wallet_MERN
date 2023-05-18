import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, loginSuccess } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }))
      .then((response) => {
        const { token, user } = response.payload;
        dispatch(loginSuccess({ token, user }));
        navigate("/home");
      })
      .catch((error) => {
        console.log("Error al iniciar sesión:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-64">
        <h2 className="text-center text-[#FC7E09] text-2xl mb-6 font-bold">
          Bienvenid@ de nuevo
        </h2>
        <h3 className="text-center text-[#A0A0A0] text-2xl mb-6">
          Hola, Inicia sesíon para continuar
        </h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              placeholder="Ingrese su correo"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-gray-400 w-full py-1 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Ingrese su contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-gray-400 w-full py-1 focus:outline-none"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#D9D9D9] text-[#A7A6A6] w-72 h-49 rounded-5 py-1 px-6  hover:bg-blue-600"
            >
              {loading ? "Loading..." : "Iniciar Sesión"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
