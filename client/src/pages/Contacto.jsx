import { useState } from "react";
import TitulosPages from "../components/TitulosPages"
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createMessage } from "../slices/contactSlice";

const Contacto = () => {
  const dispatch = useDispatch();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [denuncia, setDenuncia] = useState('');
  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState('');
  const [cononModal, setConfirmModal] = useState(false);

  
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDenunciaChange = (e) => {
    setDenuncia(e.target.value);
  };

  // requerimientos para contytactos:
  // name: string
  // email: string
  // message: string
  // ref_number : string

  const handleSubmit = (e) => {
    e.preventDefault();
    const refNumber = uuidv4();

    //vamos adaptarlo a una consulta de contacts
    const nuevaDenuncia = {
      name:nombre + ' ' + apellido,
      email: email,
      message:denuncia,
      ref_number: refNumber,
    };

    const validationErrors = {}

    // Realizar las validaciones necesarias
    if (!nombre) {
      validationErrors.nombre = 'Por favor, ingrese su nombre';
    }else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      validationErrors.nombre = 'El nombre solo debe contener letras y espacios';
    }

    if (!apellido.trim()) {
      validationErrors.apellido = 'Por favor, ingrese su apellido';
    }else if (!/^[a-zA-Z\s]+$/.test(apellido)) {
      validationErrors.apellido = 'El apellido solo debe contener letras y espacios';
    }

    if (!email.trim()) {
      validationErrors.email = 'Por favor, ingrese su email';
    }else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      validationErrors.email = 'Por favor, ingrese un email válido';
    }

    if (!denuncia.trim()) {
      validationErrors.denuncia = 'Por favor, ingrese su denuncia';
    }else if (denuncia.length > 500) {
      validationErrors.denuncia = 'La denuncia debe tener como máximo 500 caracteres';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage(''); // Limpiar el mensaje de éxito si hay errores
      return;
    } else if (Object.keys(validationErrors).length === 0) {
      // Crear un objeto con los datos de la denuncia
      setErrors({});
      // enviamos la denuncia
      // console.log(nuevaDenuncia)
      dispatch(createMessage(nuevaDenuncia))
      .then(() => {
        // console.log("Respuesta -> ",res)
        // console.log("Respuesta2 -> ",res.payload.message)

        setSuccessMessage("Su mensaje fue enviado, Nos pondremos en contacto contigo lo antes posible"); // Establecer el mensaje de éxito
        setConfirmModal(true)

          // Limpiar el formulario
          setNombre('');
          setApellido('');
          setEmail('');
          setDenuncia('');
          setErrors('');
      })
      .catch(() => {
        // Manejar cualquier error de actualización aquí
        setConfirmModal(true)
        setSuccessMessage("error al procesar su mensaje intente nuevamente");
      })
      .finally(() => {
        setTimeout(() => {
        setConfirmModal(false)
        },4000)
      })
    }
  };

  return (
    <div className="flex w-full h-auto xl:w-[80%] min-h-screen flex-col items-center justify-center bg-fondo pb-5">
      
      <section className="w-full h-auto flex flex-col gap-5 items-center justify-center ">
      <TitulosPages titulo={"canal de Contacto"} subtitulo={"Ingresa tus datos y un brebe mensaje y te contactaremos lo antes posible"}></TitulosPages>
        <div className="h-auto w-full flex flex-col items-center justify-center pt-5 pb-5">
          {cononModal ?  (<div className="w-full h-[80px] flex items-center justify-center">
              <p className="text-center text-green-500 font-parrafo font-[500]">{successMessage}</p>
            </div>) : null
          }
          <form onSubmit={handleSubmit} className="w-[90%] sm:w-[450px] h-auto p-5 bg-bgForm rounded-[4px] flex flex-col gap-5">
          <h2 className="font-titulo font-[600] text-principal text-center pt-2 pb-2">Este es un canal De contactos con PinguiWallet.</h2>
            <div>
              <input
                type="text"
                id="nombre"
                className="block w-full rounded-[2px] border-none outline-none shadow-sm focus:ring focus:ring-hoverBotonSubmenu focus:ring-opacity-100 p-1 font-parrafo font-[400]
                text-[.8rem] text-principal "
                placeholder="Ingrese su nobre"
                value={nombre}
                onChange={handleNombreChange}
                required
              />
              {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}

            </div>
            <div>
              <input
                type="text"
                id="apellido"
                className="block w-full rounded-[2px] border-none outline-none shadow-sm focus:ring focus:ring-hoverBotonSubmenu focus:ring-opacity-100 p-1 font-parrafo font-[400]
                text-[.8rem] text-principal "
                placeholder="Ingrese su apellido"
                value={apellido}
                onChange={handleApellidoChange}
                required
              />
              {errors.apellido && <p className="text-red-500">{errors.apellido}</p>}
            </div>

            <div>
              <input
                type="email"
                id="email"
                className="block w-full rounded-[2px] border-none outline-none shadow-sm focus:ring focus:ring-hoverBotonSubmenu focus:ring-opacity-100 p-1 font-parrafo text-principal font-[400] text-[.8rem]"
                placeholder="Ingrese su email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>} 
            </div>

            <div >
              <textarea
                id="denuncia"
                className="block w-full h-[100px] rounded-[2px] border-none outline-none shadow-sm focus:ring focus:ring-hoverBotonSubmenu focus:ring-opacity-100 p-1 font-parrafo font-[400] text-principal text-[.8rem] resize-none"
                placeholder="ingrese su mensaje"
                value={denuncia}
                onChange={handleDenunciaChange}
                required
              />
              {errors.denuncia && <p className="text-red-500">{errors.denuncia}</p>}
            </div>
            <div className="w-full h-[100px] justify-center items-center flex flex-row">
              <button
                type="submit"
                className="h-auto w-[150px] bg-colorFuente1Submenu rounded-md text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out p-2 text-[.8rem] font-[600]"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>           
  )
}

export default Contacto