/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        titulo: ['Heebo', 'sans-serif'],
        parrafo: ['Poppins', 'sans-serif']
      },
      colors: {
        facebook: '#3b5998',
        instagram: '#C13584',
        twitter: '#00acee',
        shadow: '#ccc',
        demo: '#eddede',
        successfully: 'green',
        error: 'red',
        'c-fondo': 'rgb(var(--color-fondo))',
        'c-contenedor': 'rgb(var(--color-contenedor))',
        'c-botones': 'rgb(var(--color-botones))',
        'c-sombra': 'rgb(var(--color-sombra))',
        'c-titulo': 'rgb(var(--color-titulo))',
        'c-subtitulo': 'rgb(var(--color-subtitulo))',
        'c-fuente': 'rgb(var(--color-fuente))',
        'c-fuente-secundario': 'rgb(var(--color-fuente-secundario))',
        'c-boton-accion': 'rgb(var(--color-boton-accion))',
        'c-seccion-historial': 'rgb(var(--color-seccion-historial))',
        'c-fondo-carrito': 'rgb(var(--color-fondo-carrito))',
        'c-icono-carrito': 'rgb(var(--color-icono-carrito))',
        'c-cart-opaca': {
          DEFAULT: '#33cc99', // Color  --color-boton-accion
          '50': '#EAF2FD', // Opacidad 50%
          '100': '#C5D8FA', // Opacidad 100%
          // Puedes agregar más niveles de opacidad si lo deseas
        },
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const customUtilities = {
        liNavBar: {
          //propiedad css que queremos que aplique , para no repetir tanta cadena de codigo
          color: 'rgb(var(--color-titulo))',
          fontFamily: 'Heebo, sans-serif',
          fontWeight: 'medium'
        }
        //otras clases
      }
      addUtilities(customUtilities, {
        respectPrefix: false,
        respectImportant: false,
        //definimos el mombre de lacapa personalizada
        layer: 'custom'
      })
    }
  ]
}
