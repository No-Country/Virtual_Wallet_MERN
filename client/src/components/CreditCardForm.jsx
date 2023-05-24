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
  };

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
    if (!cardNumber) {
      validationErrors.cardNumber = "El numero de tarjeta es requerido";
    } else if (!/^\d{16}$/.test(cardNumber)) {
      validationErrors.cardNumber =
        "El numero de tarjeta debe tener 16 digitos";
    }

    // validar titular de la tarjeta
    if (!cardHolder) {
      validationErrors.cardHolder = "El titular de la tarjeta es requerido";
    } else if (!/^[a-zA-Z\s]+$/.test(cardHolder)) {
      validationErrors.cardHolder = "El titular de la tarjeta debe ser texto";
    }

    // validar mes de expiración
    if (!expirationMonth) {
      validationErrors.expirationMonth = "El mes de expiración es requerido";
    } else if (!/^\d{2}$/.test(expirationMonth)) {
      validationErrors.expirationMonth =
        "El mes de expiración debe tener 2 digitos";
    } else if (
      parseInt(expirationMonth, 10) < 1 ||
      parseInt(expirationMonth, 10) > 12
    ) {
      validationErrors.expirationMonth =
        "El mes de expiración debe estar entre 1(enero) a 12(diciembre)";
    }

    // validar año de expiración
    if (!expirationYear) {
      validationErrors.expirationYear = "El año de vencimiento es requerido.";
    } else if (!/^\d{4}$/.test(expirationYear)) {
      validationErrors.expirationYear =
        "El año de vencimiento debe tener 4 dígitos.";
    } else {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1; // Sumar 1 ya que los meses en JavaScript son base 0
      const selectedYear = parseInt(expirationYear, 10);
      const selectedMonth = parseInt(expirationMonth, 10);

      if (
        selectedYear < currentYear ||
        (selectedYear === currentYear && selectedMonth < currentMonth)
      ) {
        validationErrors.expirationYear = "La tarjeta ha vencido.";
      }
    }

    // validar cédula de verificación CVV
    if (!ccv) {
      validationErrors.ccv = "El CVV es requerida";
    } else if (!/^\d{3}$/.test(ccv)) {
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

  const backgroundImage =
    "https://res.cloudinary.com/dpiwmbsog/image/upload/v1684718648/wallet/pinguiWallet-bg-prompt-hero1_cke13p.jpg";

  return (
    <section className="w-ful min-h-[80vh] flex justify-start items-start gap-3">
      <div
        className="bg-c-fuente-secundario w-full h-[400px] p-6 flex justify-center items-center gap-6 "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`flip-card bg-transparent  w-[350px] h-[200px] rounded-lg border-solid overflow-hidden perspective-1000 relative `}
          onClick={flipCard}
        >
          <section
            className={`flip-card-inner w-[100%] h-[100%] transition-transform duration-500 ease-in-out relative`}
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <section
              className="flip-card-fron w-[100%] h-[100%] absolute top-0 left-0 text-white bg-blue-600 bg-opacity-60 shadow-md rounded-lg backdrop-filter backdrop-blur-md border-2 border-opacity-20 border-white p-2 flex flex-col gap-3"
              style={{ backfaceVisibility: "hidden" }}
            >
              <section className="w-full h-[42px] flex justify-between items-cente">
                <div className="chip w-[100px] h-[40px] flex justify-start items-center font-titulo font-bold">
                  <h2>Pingui Card</h2>
                </div>
                <div className="logo w-[45px] h-auto rounded-full overflow-hidden border-2 border-opacity-20 border-white">
                  <img
                    className="w-[100%] h-[100%] object-cover"
                    src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1684361186/wallet/A_vibrant_and_energetic_scene_of_a_reggaeton_pengu_h2o30b.jpg"
                    alt="pinguino logo"
                  />
                </div>
              </section>
              <section className="w-full h-auto flex justify-between items-center">
                <div className="chip w-[40px] h-[40px] ">
                  <img
                    src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1684733944/wallet/chip_n8mvm7.png"
                    alt="chip"
                  />
                </div>
              </section>
              <div className="number text-white font-parrafo">
                {cardNumber.replace(/\d{4}(?=.)/g, "$& ")}
              </div>
              <section className="w-full h-auto  flex justify-start items-center gap-4">
                <div className="card-holder">
                  <div className="text-white font-titulo font-md">
                    {cardHolder}
                  </div>
                </div>
                <div className="card-expiration-date">
                  <div className="text-white">
                    vto {expirationMonth}/{expirationYear}
                  </div>
                </div>
              </section>
            </section>
            <section
              className="flip-card-back w-[100%] h-[100%] absolute top-0 left-0 text-white bg-blue-600 bg-opacity-60 shadow-md rounded-lg backdrop-filter backdrop-blur-md border-2 border-opacity-20 border-white p-2 overflow-hidden flex flex-col gap-2"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="bandMagnetic w-full h-[50px] relative">
                <div className="w-[120%] h-[50px] absolute bg-black left-[-10px] top-0"></div>
              </div>
              <p className="w-full h-auto text-white font-parrafo text-[.4rem] text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate illo vitae quisquam{" "}
              </p>
              <div className="ccv w-full h-[30px] relative bg-slate-500 flex justify-end items-center pr-2">
                <div className="text-white font-parrafo font-md">{ccv}</div>
              </div>
              <p className="w-full h-auto text-white font-parrafo text-[.4rem] text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                atque beatae non id, sit nulla eos dolor eligendi corrupti
                cupiditate officiis debitis sequi repudiandae voluptates. Nobis
                alias at rem ab.<br></br>
                <br></br> Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ab atque beatae non id, sit nulla eos dolor eligendi
                corrupti cupiditate officiis debitis sequi repudiandae
                voluptates. Nobis alias at rem ab
              </p>
            </section>
          </section>
        </div>

        <form
          className="credit-card-form w-1/3 flex flex-col items-start justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <input
              type="text"
              id="card-number"
              name="cardNumber"
              value={cardNumber}
              onChange={handleInputChange}
              placeholder="Número de tarjeta"
              className={`w-full rounded-[4px] mb-2 font-parrafo font-normal text-sm outline-none inputBgCard ${
                errors.cardNumber ? "border-red-600 " : ""
              }`}
            />
            {errors.cardNumber && (
              <p className="text-red-400 text-xs font-parrafo pb-2">
                {errors.cardNumber}
              </p>
            )}
            <input
              type="text"
              id="card-holder"
              name="cardHolder"
              value={cardHolder}
              onChange={handleInputChange}
              placeholder="Titular de la tarjeta"
              className={`w-full p-1 rounded-[4px] mb-2 font-parrafo font-normal text-sm outline-none inputBgCard ${
                errors.cardHolder ? "border-red-600" : ""
              }`}
            />
            {errors.cardHolder && (
              <p className="text-red-400 text-xs">{errors.cardHolder}</p>
            )}
            <div className="expiry-date-group flex gap-2">
              <div className="flex-col w-2/4">
                <input
                  type="text"
                  id="expiration-month"
                  name="expirationMonth"
                  value={expirationMonth}
                  onChange={handleInputChange}
                  placeholder="Mes de vencimiento"
                  className={`w-full p-1 rounded-[4px] mb-2 font-parrafo font-normal text-sm outline-none inputBgCard ${
                    errors.expirationMonth ? "border-red-600" : ""
                  }`}
                />
                {errors.expirationMonth && (
                  <p className="text-red-400 text-xs w-full">
                    {errors.expirationMonth}
                  </p>
                )}
              </div>
              <div className="flex-col w-2/4">
                <input
                  type="text"
                  id="expiration-year"
                  name="expirationYear"
                  value={expirationYear}
                  onChange={handleInputChange}
                  placeholder="Año de vencimiento"
                  className={`w-full p-1 rounded-[4px] mb-2 font-parrafo font-normal text-sm outline-none inputBgCard ${
                    errors.expirationYear ? "border-red-500" : ""
                  }`}
                />
                {errors.expirationYear && (
                  <p className="text-red-500 text-xs">
                    {errors.expirationYear}
                  </p>
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
              className={`w-1/3 p-1 rounded-[4px] mb-2 font-parrafo font-normal text-sm outline-none inputBgCard ${
                errors.ccv ? "border-red-600" : ""
              }`}
            />
            {errors.ccv && <p className="text-red-400 text-xs">{errors.ccv}</p>}
          </fieldset>
          <button
            type="submit"
            className="bg-c-boton-accion text-white p-1 rounded-[4px] mb-2 font-parrafo font-normal text-sm border-solid border-2 border-c-boton-accion outline-none hover:bg-c-titulo hover:text-c-fuente-principal hover:border-c-titulo transition duration-300 ease-in-out"
          >
            Cargar
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreditCardForm;
