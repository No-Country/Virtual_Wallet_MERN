import { useState } from "react";
import TitulosPages from "./TitulosPages"
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createMessage } from "../slices/contactSlice";

const Denuncias = () => {
  const dispatch = useDispatch();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [denuncia, setDenuncia] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState('');
  const [cononModal, setConfirmModal] = useState(false);
  const [aceptoPoliticas, setAceptoPoliticas] = useState(false);


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

  const handleArchivoChange = (e) => {
    const file = e.target.files[0];
    setArchivo(file);
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

    // Validar el tamaño del archivo
    if (!archivo) {
      validationErrors.archivo = 'Por favor, seleccione un archivo';
    }else if (archivo.size > 2 * 1024 * 1024) {
      validationErrors.archivo = 'El archivo debe ser de máximo 2MB';
    }

    // validar las politicas de privacidad
    if (!aceptoPoliticas) {
      validationErrors.politicas = 'Debe aceptar las políticas de privacidad';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage(''); // Limpiar el mensaje de éxito si hay errores
      return;
    } else if (Object.keys(validationErrors).length === 0) {
      // Crear un objeto con los datos de la denuncia
      setErrors({});
      // enviamos la denuncia
      console.log(nuevaDenuncia)
      dispatch(createMessage(nuevaDenuncia))
      .then((res) => {
        console.log("Respuesta -> ",res)
        // console.log("Respuesta2 -> ",res.payload.message)

        setSuccessMessage("Su denuncia fue enviada con éxito"); // Establecer el mensaje de éxito
        setConfirmModal(true)

          // Limpiar el formulario
          setNombre('');
          setApellido('');
          setEmail('');
          setDenuncia('');
          setArchivo(null);
          setErrors('');
      })
      .catch((error) => {
        // Manejar cualquier error de actualización aquí
        setConfirmModal(true)
        setSuccessMessage("error al procesar la denuncia");
        console.log("Error -> ",error)
      
      })
      .finally(() => {
        setTimeout(() => {
        setConfirmModal(false)
        },4000)
      })
    }
  };

  return (
    <div className="flex w-5/6 sm:w-4/5 flex-col items-center justify-start sm:items-start  bg-fondo h-auto gap-4 sm:gap-6">
      {cononModal ?  (<div className="w-full h-[80px] flex items-center justify-center">
          <p className="text-center text-green-500 font-parrafo font-[500]">{successMessage}</p>
        </div>) : null
      }
      <section className="w-full h-auto flex flex-col gap-5 items-center justify-center ">
        <TitulosPages titulo={"canal de denuncias"} subtitulo={"Denuncia sobre: Corrupción, soborno, conflicto de intereses u otros delitos"}></TitulosPages>
        
      <form onSubmit={handleSubmit} className="w-[80%] sm:w-[400px] p-3 bg-hoverBotonSubmenu rounded-[4px]">
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-titulo font-[600] text-principal">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            className="block w-full rounded-[2px] border-none outline-none shadow-sm focus:ring focus:ring-hoverBotonSubmenu focus:ring-opacity-100 p-1 font-parrafo font-[500] text-principal text-sm"
            value={nombre}
            onChange={handleNombreChange}
            required
          />
          {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}

        </div>

        <div className="mb-4">
          <label htmlFor="apellido" className="block text-sm font-titulo font-[600] text-principal">
            Apellido:
          </label>
          <input
            type="text"
            id="apellido"
            className="block w-full rounded-[2px] border-none outline-none shadow-sm focus:ring focus:ring-hoverBotonSubmenu focus:ring-opacity-100 p-1 font-parrafo font-[500] text-principal text-sm"
            value={apellido}
            onChange={handleApellidoChange}
            required
          />
          {errors.apellido && <p className="text-red-500">{errors.apellido}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-titulo font-[600] text-principal">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-[2px] border-none outline-none shadow-sm focus:ring focus:ring-hoverBotonSubmenu focus:ring-opacity-100 p-1 font-parrafo font-[500] text-principal text-sm"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>} 
        </div>

        <div className="mb-4">
          <label htmlFor="denuncia" className="block text-sm font-titulo font-[600] text-principal">
            Denuncia:
          </label>
          <textarea
            id="denuncia"
            className="block w-full rounded-[2px] border-none outline-none shadow-sm focus:ring focus:ring-hoverBotonSubmenu focus:ring-opacity-100 p-1 font-parrafo font-[500] text-principal text-sm resize-none"
            value={denuncia}
            onChange={handleDenunciaChange}
            required
          />
          {errors.denuncia && <p className="text-red-500">{errors.denuncia}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="archivo" className="block text-sm font-titulo font-[600] text-principal">
            Adjuntar archivo (máximo 2MB):
          </label>
          <input
            type="file"
            id="archivo"
            accept=".jpg,.png"
            className="w-full h-auto flex flex-wrap rounded-md text-colorFuente2Submenu bg-hoverBotonSubmenu transition-all duration-300 ease-in-out p-1 text-[.9rem] font-[600]"
            onChange={handleArchivoChange}
            required
          />
          {errors.archivo && <p className="text-red-500">{errors.archivo}</p>}
        </div>
        <div className="mb-4 flex flex-col justify-start items-start p-1">
          <div className="flex justify-start items-center">
            <input
              type="checkbox"
              id="aceptoPoliticas"
              className="mr-2"
              checked={aceptoPoliticas}
              onChange={() => setAceptoPoliticas(!aceptoPoliticas)}
            />
            <label htmlFor="aceptoPoliticas" className="block text-sm font-titulo font-[600] text-principal">
              Acepto las políticas de seguridad y privacidad
            </label>
          </div>
          {errors.politicas && <p className="text-red-500">{errors.politicas}</p>}
        </div>


        <button
          type="submit"
          className="h-auto bg-colorFuente1Submenu rounded-md text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out p-2 text-[.9rem] font-[600]"
        >
          Enviar Denuncia
        </button>
      </form>
      </section>
    </div>           
  )
}

export default Denuncias

{/* cotones confirmacion acetar o declinar  */}
{/* <section className="flex flex-row items-center justify-center gap-2 w-full p-3">
<button onClick={handleUpdateUser} className="w-[150px] h-auto bg-colorFuente1Submenu rounded-md text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out p-1 text-[.9rem] font-[600]">Actualizar Usuario</button>
<button onClick={handleClearUser} className="w-[150px] h-auto bg-colorFuente1Submenu rounded-md text-colorFuente2Submenu hover:bg-hoverBotonSubmenu transition-all duration-300 ease-in-out p-1 text-[.9rem] font-[600]">Limpiar Usuario</button>
</section> */}