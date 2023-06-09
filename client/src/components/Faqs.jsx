import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

export default function Faqs() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <section id="faq-section" className="w-full sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%] mx-auto pb-20 bg-fondo">
      <Accordion 
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>¿Qué es PingüiWallet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            PingüiWallet es una wallet argentina diseñada para ayudar a las
            personas a gestionar su dinero de forma intuitiva. Está inspirada en
            la sostenibilidad y tiene como objetivo facilitar el acceso a las
            nuevas tecnologías, brindando también apoyo a las personas mayores.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            ¿Qué necesito para abrir una cuenta en PingüiWallet?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Necesitarás tener a mano los siguientes documentos e información:
              <span className="list-item w-full ml-4">👤 Ser una persona físicamayor de edad.</span>
              <span className="list-item w-full ml-4">📝 Documento Nacional de Identidad (DNI) válido.</span>
              <span className="list-item w-full ml-4">☎ Datos personales como nombre completo, dirección y fecha de nacimiento.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {' '}
            ¿Cómo puedo contactar al equipo de soporte de PingüiWallet?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Si tienes alguna consulta o necesitas ayuda, puedes ponerte en
            contacto con nuestro equipo de soporte a través de los siguientes
            canales:

              <span className="list-item w-full ml-4">☎ Número de teléfono: +1 555-123-4567</span>
              <span className="list-item w-full ml-4">✉ Email: walletnc.latam@gmail.com</span>
              <span className="list-item w-full ml-4">🔴🎬 Chat en vivo en nuestro sitio web</span>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  )
}

// import Accordion from 'react-bootstrap/Accordion';

// function BasicExample() {
//   return (
//     <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Accordion Item #1</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Accordion Item #2</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   );
// }

// export default BasicExample;
