import { useState } from "react";

export const Faqs = () => {

    const [openAccordions, setOpenAccordions] = useState([]);
  
    const toggleAccordion = (index) => {
      const updatedAccordions = [...openAccordions];
      updatedAccordions[index] = !updatedAccordions[index];
      setOpenAccordions(updatedAccordions);
    };

  return (  
    <section className="px-4 pt-0 pb-20 mx-auto max-w-7xl md:px-2">
    <div className="text-sm border-t border-b border-gray-200 divide-y divide-gray-200">
      <div>
        <button
          onClick={() => toggleAccordion(0)}
          className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button"
          aria-controls="faq1"
          aria-expanded={openAccordions[0] ? 'true' : 'false'}
          >
          ¿Qué es PinguiWallet? 🥰🥰
          <svg
            className={`flex-none w-4 h-4 ml-4 transition transform ${open ? 'rotate-45' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        {openAccordions[0] && (
          <div className="pb-5 pr-0 text-gray-700 md:pr-40" id="faq1">
            PinguiWallet es una wallet argentina diseñada para ayudar a las personas a gestionar su dinero de forma intuitiva. Está inspirada en la sostenibilidad y tiene como objetivo facilitar el acceso a las nuevas tecnologías, brindando también apoyo a las personas mayores.
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => toggleAccordion(1)}
          className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button"
          aria-controls="faq2"
          aria-expanded={openAccordions[1] ? 'true' : 'false'}
          >
          ¿Qué necesito para abrir una cuenta en PinguiWallet? 😳😳
          <svg
            className={`flex-none w-4 h-4 ml-4 transition transform ${open ? 'rotate-45' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        {openAccordions[1] && (
          <div className="pb-5 pr-0 text-gray-700 md:pr-40" id="faq2">
            Necesitarás tener a mano los siguientes documentos e información:
            <ul>
              <li>Documento Nacional de Identidad (DNI) válido.</li>
              <li>Ser una persona física mayor de edad.</li>
              <li>Datos personales como nombre completo, dirección y fecha de nacimiento.</li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => toggleAccordion(2)}
          className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button"
          aria-controls="faq3"
          aria-expanded={openAccordions[2] ? 'true' : 'false'}
          >
          ¿Cómo puedo contactar al equipo de soporte de PinguiWallet? 🤔🤔
          <svg
            className={`flex-none w-4 h-4 ml-4 transition transform ${open ? 'rotate-45' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        {openAccordions[2] && (
          <div className="pb-5 pr-0 text-gray-700 md:pr-40" id="faq3">
            Si tienes alguna consulta o necesitas ayuda, puedes ponerte en contacto con nuestro equipo de soporte a través de los siguientes canales:
            <ul>
              <li>☎ Número de teléfono: 2944-666666</li>
              <li>✉ Email: pinguiServices@gmail.com</li>
              <li>🔴🎬 Chat en vivo en nuestro sitio web </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  </section>
  )
}


