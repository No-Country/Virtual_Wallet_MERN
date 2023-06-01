import TitulosPages from "../components/TitulosPages"

const SecurityAndPrivacy = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center text-center">
      <TitulosPages titulo={"Políticas de Seguridad y Privacidad"} />
      <div className="my-10 w-[90%] sm:w-[70%] text-start bg-fondo p-5 relative">
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">
          Política de Seguridad y Privacidad
        </h4>{' '}
        <p className="font-parrafo font-[400] text-sm">
          En <span className="font-parrafo font-semibold">PingüiWallet</span>,
          nos tomamos la seguridad y la privacidad de nuestros usuarios de
          manera seria. Esta política describe cómo recopilamos, utilizamos,
          protegemos y divulgamos la información personal proporcionada por los
          usuarios al utilizar nuestro sitio web. Al acceder y utilizar nuestro
          sitio web, aceptas los términos y condiciones establecidos en esta
          política.
        </p>
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">
          Recopilación de Información
        </h4>{' '}
        <p className="font-parrafo font-[400] text-sm">
          Cuando visitas nuestro sitio web, podemos recopilar cierta información
          personal de forma automática, como tu dirección IP, tipo de navegador,
          proveedor de servicios de Internet (ISP), páginas de
          referencia/salida, sistema operativo, fecha/hora, y datos de
          navegación. Esta información nos ayuda a mejorar la funcionalidad y la
          seguridad de nuestro sitio web y a comprender mejor las necesidades de
          nuestros usuarios.</p>
          <p> Además, podemos solicitar información personal adicional, como tu
          nombre, dirección de correo electrónico y número de teléfono, cuando
          te registras en nuestro sitio web, te suscribes a nuestros boletines,
          participas en encuestas o promociones, o interactúas con otras
          características o servicios que ofrecemos.
        </p>
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">Uso de la Información</h4>
        <p className="font-parrafo font-[400] text-sm">
          Utilizamos la información recopilada para brindarte una experiencia
          personalizada en nuestro sitio web y para mejorar nuestros servicios.
          Podemos utilizar la información para:</p>
          <ul className="list-decimal list-outside w-full pl-4 mt-2 text-sm font-parrafo font-[400] flex flex-col gap-2">
            <li>Personalizar tu experiencia en el sitio web y presentarte
              contenido relevante. </li>{' '}
            <li>Proporcionarte soporte técnico y responder a tus consultas.
            </li>{' '}
            <li>Enviar actualizaciones periódicas, boletines informativos y
              comunicaciones promocionales.
            </li>{' '}
            <li>Mejorar nuestros productos y servicios según tus comentarios y
              necesidades.
            </li>{' '}
            <li>Realizar análisis y estudios de mercado para comprender mejor a
              nuestros usuarios y mejorar nuestra plataforma.
            </li>
          </ul>
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">
          Protección de la Información
        </h4>
        <p className="font-parrafo font-[400] text-sm">
          Tomamos medidas de seguridad adecuadas para proteger la información
          personal de nuestros usuarios contra accesos no autorizados,
          alteración, divulgación o destrucción. Implementamos medidas técnicas
          y organizativas para garantizar la confidencialidad y la integridad de
          la información que recopilamos.
        </p>
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">
          Divulgación de la Información
        </h4>
        <p className="font-parrafo font-[400] text-sm">
          Podemos compartir información personal con terceros en las siguientes
          circunstancias:</p>
          <ul className="list-decimal list-outside w-full pl-4 mt-2 text-sm font-parrafo font-[400] flex flex-col gap-2">
            <li>
              Con proveedores de servicios y socios de confianza que nos
              ayudan a operar nuestro sitio web y brindar servicios
              relacionados. Estos terceros están obligados a mantener la
              confidencialidad de la información y utilizarla únicamente para
              los fines acordados.
            </li>
            <li>
              Cuando sea requerido por ley, cumplir con procesos legales,
              solicitudes gubernamentales aplicables o para proteger nuestros
              derechos legales.
            </li>
          </ul>
        
        <h4 className="font-titulo font-[700] text-md mt-10 mb-5">Enlaces a Sitios Externos</h4>
        <p className="font-parrafo font-[400] text-sm">
          Nuestro sitio web puede contener enlaces a otros sitios web externos
          que no están bajo nuestro control. No somos responsables de las
          prácticas de privacidad o contenido de estos sitios web. Te
          recomendamos leer las políticas de privacidad de esos sitios antes de
          proporcionarles información personal.
        </p>
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">
          Actualizaciones de la Política
        </h4>
        <p className="font-parrafo font-[400] text-sm">
          Podemos actualizar nuestra política de seguridad y privacidad de vez
          en cuando. Te notificaremos sobre cualquier cambio relevante
          publicando una versión actualizada en nuestro sitio web. Es tu
          responsabilidad revisar periódicamente esta política para estar
          informado sobre cualquier cambio
        </p>
      </div>
    </section>
  )
}

export default SecurityAndPrivacy
