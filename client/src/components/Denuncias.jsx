import { useState } from "react";
import TitulosPages from "./TitulosPages"

const Denuncias = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [denuncia, setDenuncia] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [errors, setErrors] = useState({});


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

  const handleSubmit = (e) => {
    e.preventDefault();

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

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else if (Object.keys(validationErrors).length === 0) {
      // Crear un objeto con los datos de la denuncia
      const nuevaDenuncia = {
        nombre,
        apellido,
        email,
        denuncia,
        archivo,
      };

      // enviamos la denuncia
      console.log(nuevaDenuncia)
      setErrors({});
    }
    

    // Limpiar el formulario
    setNombre('');
    setApellido('');
    setEmail('');
    setDenuncia('');
    setArchivo(null);
    setErrors('');

  };

  return (
    <div className="flex w-5/6 sm:w-4/5 flex-col items-center justify-start sm:flex-row sm:items-start sm:justify-start bg-fondo h-auto gap-4 sm:gap-6">
      <section className="w-full h-auto flex flex-col gap-2 items-center justify-center ">
        <TitulosPages titulo={"canal de denuncias"} subtitulo={"Denuncia sobre: Corrupción, soborno, conflicto de intereses u otros delitos"}></TitulosPages>
        
        <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          value={nombre}
          onChange={handleNombreChange}
          required
        />
        {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}

      </div>

      <div className="mb-4">
        <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
          Apellido:
        </label>
        <input
          type="text"
          id="apellido"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          value={apellido}
          onChange={handleApellidoChange}
          required
        />
        {errors.apellido && <p className="text-red-500">{errors.apellido}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>} 
      </div>

      <div className="mb-4">
        <label htmlFor="denuncia" className="block text-sm font-medium text-gray-700">
          Denuncia:
        </label>
        <textarea
          id="denuncia"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 resize-none"
          value={denuncia}
          onChange={handleDenunciaChange}
          required
        />
        {errors.denuncia && <p className="text-red-500">{errors.denuncia}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="archivo" className="block text-sm font-medium text-gray-700">
          Adjuntar archivo (máximo 2MB):
        </label>
        <input
          type="file"
          id="archivo"
          accept=".jpg,.png"
          className="mt-1"
          onChange={handleArchivoChange}
          required
        />
        {errors.archivo && <p className="text-red-500">{errors.archivo}</p>}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300 ease-in-out"
      >
        Enviar Denuncia
      </button>
    </form>
      </section>
    </div>           
  )
}

export default Denuncias