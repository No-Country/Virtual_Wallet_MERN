import TitulosPages from "../components/TitulosPages"

const TermsAndConditions = () => {
  return (
    <section className="w-full xl:w-[80%] flex flex-col justify-center items-center text-center">
      <TitulosPages titulo={"Términos y Condiciones"} />
      <div className="my-10 w-[90%] sm:w-[70%] text-start bg-fondo p-5 relative">
        <p className="font-parrafo font-[400] text-sm">
          Bienvenido a{' '}
          <span className="text-c-titulo font-semibold">PingüiWallet</span>.
          Estos términos y condiciones regulan tu uso de nuestro sitio web. Al
          acceder y utilizar nuestro sitio web, aceptas cumplir con estos
          términos y condiciones. Si no estás de acuerdo con alguno de los
          términos establecidos aquí, te recomendamos que no utilices nuestro
          sitio web.
        </p>
        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">1. Uso del Sitio Web</h4>{' '}
          <ul className="list-outside w-full pl-4 mt-2 text-sm font-parrafo font-[400] flex flex-col gap-2">
            <li> <span className="font-semibold">a.</span> El uso de nuestro sitio web se rige por las leyes y
              regulaciones aplicables. No debes utilizar nuestro sitio web con
              fines ilegales o no autorizados. </li>{' '}
            <li><span className="font-semibold">b.</span>  Al utilizar nuestro sitio web, te comprometes a no infringir
              los derechos de propiedad intelectual de terceros ni a realizar
              actividades que puedan dañar, interferir o comprometer la
              seguridad de nuestro sitio web.
            </li>{' '}
            <li><span className="font-semibold">c.</span> Nos reservamos el derecho de modificar, suspender o
              descontinuar nuestro sitio web en cualquier momento y sin previo
              aviso.
            </li>{' '}
          </ul>

        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">2. Contenido del Sitio Web</h4>{' '}
          <ul className="list-outside w-full pl-4 mt-2 text-sm font-parrafo font-[400] flex flex-col gap-2">
            <li><span className="font-semibold">a.</span> El contenido de nuestro sitio web es proporcionado con fines informativos y educativos. No garantizamos la exactitud, integridad o actualidad del contenido.
            </li>{' '}
            <li><span className="font-semibold">b.</span> No nos hacemos responsables de cualquier daño o perjuicio derivado del uso del contenido de nuestro sitio web.
            </li>{' '}
            <li><span className="font-semibold">c.</span> Nos reservamos el derecho de modificar, actualizar o eliminar cualquier contenido de nuestro sitio web sin previo aviso.
            </li>{' '}
          </ul>

        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">
          3. Enlaces a Sitios Externos
        </h4>{' '}

          <ul className="list-outside w-full pl-4 mt-2 text-sm font-parrafo font-[400] flex flex-col gap-2">
            <li><span className="font-semibold">a.</span> Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces son proporcionados únicamente como referencia y no implican nuestro respaldo o afiliación con esos sitios web.
            </li>{' '}
            <li><span className="font-semibold">b.</span> No somos responsables del contenido, las políticas de privacidad o las prácticas de los sitios web de terceros. Te recomendamos leer las políticas y términos de uso de esos sitios antes de interactuar con ellos.
            </li>{' '}
          </ul>

        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">4. Privacidad</h4>{' '}

          <ul  className="list-outside w-full pl-4 mt-2 text-sm font-parrafo font-[400] flex flex-col gap-2">
            <li><span className="font-semibold">a.</span> Tu privacidad es importante para nosotros. Nuestra política de privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal al utilizar nuestro sitio web. Al utilizar nuestro sitio web, aceptas nuestras prácticas de privacidad según lo establecido en nuestra política de privacidad.
            </li>{' '}
          </ul>

        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">
          5. Limitación de Responsabilidad
        </h4>{' '}

          <ul  className="list-outside w-full pl-4 mt-2 text-sm font-parrafo font-[400] flex flex-col gap-2">
            <li><span className="font-semibold">a.</span> En la medida máxima permitida por la ley, no seremos responsables de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso de nuestro sitio web. 
            </li>
            <li><span className="font-semibold">b.</span>
            No garantizamos que nuestro sitio web estará libre de errores, virus u otros componentes dañinos.
            </li>{' '}
          </ul>

        <h4 className="font-titulo font-[700] text-md  mt-10 mb-5">6. Propiedad Intelectual</h4>{' '}

          <ul  className="list-outside w-full pl-4 mt-2 text-sm font-parrafo font-[400] flex flex-col gap-2">
            <li><span className="font-semibold">a.</span> Todo el contenido presente en nuestro sitio web, incluyendo pero no limitado a texto, gráficos, logotipos, imágenes, videos y software, está protegido por derechos de propiedad intelectual y leyes de derechos de autor.
            </li>{' '}
            <li><span className="font-semibold">b.</span> No puedes utilizar, reproducir, modificar o distribuir el contenido de nuestro sitio web sin nuestra autorización previa y por escrito.
            </li>{' '}
          </ul>
  
        <br />
        <br />
        <p className="font-parrafo font-[400] text-sm">
          Estos términos y condiciones constituyen el acuerdo completo entre tú
          y <span className="text-c-titulo font-semibold">PingüiWallet</span>
          con respecto a tu uso de nuestro sitio web. Si tienes alguna pregunta
          o inquietud acerca de estos términos y condiciones, no dudes en
          contactarnos.
        </p>
      </div>
    </section>
  )
}

export default TermsAndConditions
