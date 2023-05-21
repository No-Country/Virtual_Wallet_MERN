import { useState } from "react";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [ccv, setCcv] = useState("");
  const [errors, setErrors] = useState({});

  //estado para rotar card
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cardHolder":
        setCardHolder(value);
        break;
      case "expirationMonth":
        setExpirationMonth(value);
        break;
      case "expirationYear":
        setExpirationYear(value);
        break;
      case "ccv":
        setCcv(value);
        break;
      default:
        break;
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    // Realizar lógica de envío del formulario aquí

    //validar numero de tarjeta 
    if(!cardNumber) {
      validationErrors.cardNumber = "El numero de tarjeta es requerido";
    }else if(!/^\d{16}$/.test(cardNumber)) {
      validationErrors.cardNumber = "El numero de tarjeta debe tener 16 digitos";
    }

    // validar titular de la tarjeta
    if(!cardHolder) {
      validationErrors.cardHolder = "El titular de la tarjeta es requerido";
    }else if(!/^[a-zA-Z\s]+$/.test(cardHolder)) {
      validationErrors.cardHolder = "El titular de la tarjeta debe ser texto";
    }

    // validar mes de expiración
    if(!expirationMonth) {
      validationErrors.expirationMonth = "El mes de expiración es requerido";
    }else if(!/^\d{2}$/.test(expirationMonth)) {
      validationErrors.expirationMonth = "El mes de expiración debe tener 2 digitos";
    }else if(parseInt(expirationMonth, 10) < 1 || parseInt(expirationMonth, 10) >  12) {
      validationErrors.expirationMonth = "El mes de expiración debe estar entre 1(enero) a 12(diciembre)";
    }

    // validar año de expiración
    if (!expirationYear) {
      validationErrors.expirationYear = "El año de vencimiento es requerido.";
    } else if (!/^\d{4}$/.test(expirationYear)) {
      validationErrors.expirationYear = "El año de vencimiento debe tener 4 dígitos.";
    } else {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1; // Sumar 1 ya que los meses en JavaScript son base 0
      const selectedYear = parseInt(expirationYear, 10);
      const selectedMonth = parseInt(expirationMonth, 10);

      if (selectedYear < currentYear || (selectedYear === currentYear && selectedMonth < currentMonth)) {
        validationErrors.expirationYear = "La tarjeta ha vencido.";
      }
    }

    // validar cédula de verificación CVV
    if(!ccv) {
      validationErrors.ccv = "El CVV es requerida";
    }else if(!/^\d{3}$/.test(ccv)) {
      validationErrors.ccv = "El CVV debe tener 3 digitos";
    }
    
    setErrors(validationErrors);

    //Si no hay errore continua con la ejecucion
    // Si no hay errores, puedes continuar con el proceso de pago
    if (Object.keys(validationErrors).length === 0) {
      // Procesar el pago
      console.log("¡cdatos validos para cargarlos a la db!");
      const formData = {
        cardNumber,
        cardHolder,
        expirationMonth,
        expirationYear,
        ccv,
      };
      console.log(formData);
      // ...
    }

  };

  return (
    <section className="w-ful min-h-[80vh] flex justify-start items-start gap-3">
    <div className="bg-c-fuente-secundario w-full h-[400px] p-6 flex justify-center items-center  gap-6">
      <div className={`credit-card-box checkout bg-blue-400 w-[350px] h-[200px] rounded-lg  relative ${isFlipped ? "flipped" : ""}`} onClick={flipCard}>
        <div className="cardFather w-[100%] h-[100%] p-4" style={{ transform: isFlipped ? 'rotateY(180deg)' : 'none' }}>
          <section className="cardChildren w-[100%] h-[100%] relative">
            <section className="credit-card-front bg-purple-500 w-[100%] h-[100%] absolute top-0 left-0 transform-style-preserve-3d" style={{}}>
              <div className="chip"></div>
              <div className="logo">
                <svg
                  version="1.1"
                  id="visa"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="47.834px"
                  height="47.834px"
                  viewBox="0 0 47.834 47.834"
                >
                  {/* SVG path para el logotipo de Visa */}
                </svg>
              </div>
              <div className="number text-white">{cardNumber}</div>
              <div className="card-holder">
                <label className="text-white">Titular de la tarjeta</label>
                <div className="text-white">{cardHolder}</div>
              </div>
              <div className="card-expiration-date">
                <label className="text-white">Vence</label>
                <div className="text-white">
                  {expirationMonth}/{expirationYear}
                </div>
              </div>
            </section>
            <section className="credit-card-back bg-slate-500 w-[100%] h-[100%] absolute top-0 left-0 backface-visibility-hidden transform-style-preserve-3d" style={{ transform: 'rotateY(180deg)'}}>
              <div className="strip"></div>
              <div className="logo">
                <svg
                  version="1.1"
                  id="visa"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="47.834px"
                  height="47.834px"
                  viewBox="0 0 47.834 47.834"
                >
                  {/* SVG path para el logotipo de Visa */}
                </svg>
              </div>
              <div className="ccv">
                <label className="text-white">CCV</label>
                <div className="text-white">{ccv}</div>
              </div>
            </section>
          </section>
        </div>
      </div>

      <form className="credit-card-form w-1/3 flex flex-col items-start justify-center gap-4" onSubmit={handleSubmit}>
        <fieldset>
          <input
            type="text"
            id="card-number"
            name="cardNumber"
            value={cardNumber}
            onChange={handleInputChange}
            placeholder="Número de tarjeta"
            className={`w-full p-1 rounded-[4px] mb-2 font-parrafo font-normal text-sm text-c-sombra border-solid border-2 border-c-boton-accion outline-none bg-c-subtitulo ${
              errors.cardNumber ? "border-red-600 " : ""
            }`}
          />
          {errors.cardNumber && <p className="text-red-400 text-xs font-parrafo pb-2">{errors.cardNumber}</p>}
          <input
            type="text"
            id="card-holder"
            name="cardHolder"
            value={cardHolder}
            onChange={handleInputChange}
            placeholder="Titular de la tarjeta"
            className={`w-full p-1 rounded-[4px] mb-2 font-parrafo font-normal text-sm text-c-sombra border-solid border-2 border-c-boton-accion outline-none bg-c-subtitulo ${
              errors.cardHolder ? "border-red-600" : ""
            }`}
          />
          {errors.cardHolder && <p className="text-red-400 text-xs">{errors.cardHolder}</p>}
          <div className="expiry-date-group flex gap-2">
            <div className="flex-col w-2/5">
              <input
                type="text"
                id="expiration-month"
                name="expirationMonth"
                value={expirationMonth}
                onChange={handleInputChange}
                placeholder="Mes de vencimiento"
                className={`w-full p-1 rounded-[4px] mb-2 font-parrafo font-normal text-sm text-c-sombra border-solid border-2 border-c-boton-accion outline-none bg-c-subtitulo ${
                  errors.expirationMonth ? "border-red-600" : ""
                }`}
              />
              {errors.expirationMonth && (
                <p className="text-red-400 text-xs w-full">{errors.expirationMonth}</p>
              )}
            </div>
            <div className="flex-col w-3/5">
              <input
                type="text"
                id="expiration-year"
                name="expirationYear"
                value={expirationYear}
                onChange={handleInputChange}
                placeholder="Año de vencimiento"
                className={`w-full p-1 rounded-[4px] mb-2 font-parrafo font-normal text-sm text-c-sombra border-solid border-2 border-c-boton-accion outline-none bg-c-subtitulo ${
                  errors.expirationYear ? "border-red-500" : ""
                }`}
              />
              {errors.expirationYear && (
                <p className="text-red-500 text-xs">{errors.expirationYear}</p>
              )}
            </div>
          </div>
          <input
            type="text"
            id="ccv"
            name="ccv"
            value={ccv}
            onChange={handleInputChange}
            placeholder="CCV"
            className={`w-1/3 p-1 rounded-[4px] mb-2 font-parrafo font-normal text-sm text-c-sombra border-solid border-2 border-c-boton-accion outline-none bg-c-subtitulo ${errors.ccv ? "border-red-600" : ""}`}
          />
          {errors.ccv && <p className="text-red-400 text-xs">{errors.ccv}</p>}
        </fieldset>
        <button type="submit" className="bg-c-boton-accion text-white p-1 rounded-[4px] mb-2 font-parrafo font-normal text-sm border-solid border-2 border-c-boton-accion outline-none ">
          Cargar
        </button>
      </form>
    </div>
    </section>
  );
};

export default CreditCardForm;
