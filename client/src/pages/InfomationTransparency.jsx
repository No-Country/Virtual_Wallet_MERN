import TitulosPages from "../components/TitulosPages"

const InfomationTransparency = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center text-center">
      <TitulosPages titulo={"Políticas de Transparencia de la Información"} />
      <div className="my-10 w-[90%] sm:w-[70%] text-start bg-fondo p-5 relative">
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">
          Política de Transparencia de la Información
        </h4>{' '}
        <p className="font-parrafo font-[400] text-sm">
          En <span className="text-c-titulo font-semibold">PingüiWallet</span>,
          creemos en la importancia de la transparencia en la forma en que
          manejamos y compartimos la información. Esta política describe
          nuestros compromisos para garantizar la transparencia en relación con
          la información proporcionada a nuestros usuarios. Al acceder y
          utilizar nuestro sitio web, aceptas los términos y condiciones
          establecidos en esta política.
        </p>
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">Información Accesible</h4>{' '}
        <p className="font-parrafo font-[400] text-sm">
          Nos esforzamos por proporcionar información clara, precisa y completa
          en nuestro sitio web. Nos comprometemos a garantizar que la
          información sobre nuestros productos, servicios, políticas y
          procedimientos esté fácilmente disponible y sea comprensible para
          nuestros usuarios. Esto incluye:</p>
          <ul className="list-decimal list-outside w-full pl-4 mt-2 text-sm font-parrafo font-[400] flex flex-col gap-2">
            <li> Descripciones claras de nuestros productos y servicios,
              incluyendo características, funcionalidades y precios.
            </li>{' '}
            <li>Información detallada sobre las políticas de uso, términos y
              condiciones, y cualquier otra reglamentación relevante.
            </li>{' '}
            <li>Procedimientos claros para la presentación de quejas, consultas
              o solicitudes de información adicional.
            </li>{' '}
          </ul>
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">Comunicación Abierta</h4>
        <p className="font-parrafo font-[400] text-sm">
          Fomentamos una comunicación abierta y honesta con nuestros usuarios.
          Nos comprometemos a responder de manera oportuna y clara a todas las
          consultas, preguntas y preocupaciones planteadas por los usuarios.
          Para facilitar esta comunicación, proporcionamos información de
          contacto clara y accesible, como direcciones de correo electrónico,
          números de teléfono o formularios de contacto.
        </p>
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">
          Protección de la Privacidad
        </h4>
        <p className="font-parrafo font-[400] text-sm">
          Mientras buscamos ser transparentes en la información que compartimos,
          también valoramos y respetamos la privacidad de nuestros usuarios. Nos
          comprometemos a proteger cualquier información personal que nos
          proporciones de acuerdo con nuestra política de privacidad. Esto
          implica mantener la confidencialidad de la información proporcionada y
          utilizarla únicamente para los fines para los que se recopiló.
        </p>
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">Informes y Divulgaciones</h4>
        <p className="font-parrafo font-[400] text-sm">
          En ocasiones, es posible que necesitemos divulgar información
          adicional o presentar informes sobre nuestro desempeño, prácticas
          empresariales o resultados. Nos esforzamos por proporcionar informes
          transparentes y comprensibles que reflejen nuestro compromiso con la
          integridad y la ética. Estos informes pueden incluir, entre otros:{' '}</p>
        
          <ul className="list-decimal list-outside w-full pl-4 mt-2 text-sm font-parrafo font-[400] flex flex-col gap-2">
            <li>Informes de sostenibilidad y responsabilidad social
              corporativa. </li>
            <li>Divulgaciones financieras y reportes de rendimiento.</li>
            <li>Informes de seguridad y cumplimiento normativo.</li>
          </ul>
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">
          Actualizaciones de la Política
        </h4>
        <p className="font-parrafo font-[400] text-sm">
          Podemos actualizar nuestra política de transparencia de la información
          de vez en cuando. Te notificaremos sobre cualquier cambio relevante
          publicando una versión actualizada en nuestro sitio web. Es tu
          responsabilidad revisar periódicamente esta política para estar
          informado sobre cualquier cambio.
        </p>

        <p className="font-parrafo font-[400] text-sm">
          En <span className="text-c-titulo font-semibold">PingüiWallet</span>,
          nos esforzamos por mantener altos estándares de transparencia y
          promover una comunicación abierta con nuestros usuarios. Valoramos tu
          confianza y estamos comprometidos a brindarte información clara y
          accesible. Si tienes alguna pregunta o inquietud acerca de nuestra
          política de transparencia de la información, no dudes en contactarnos.
        </p>
      </div>
    </section>
  )
}

export default InfomationTransparency
