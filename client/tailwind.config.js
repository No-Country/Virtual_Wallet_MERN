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
        successfully: 'green',
        error: 'red',
        principal: 'var(--color-principal)',
        secundario: 'var(--color-secundario)',
        fondo: 'var(--color-fondo)',
        'custom-blue': 'var(--custom-blue)',
        'custom-purple': 'var(--custom-purple)',
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
