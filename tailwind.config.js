module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '0',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    
    colors: {
      'primary': '#9b5d46',
      'secondary': '#d09892',
      'white': '#ffffff',
      'third': '#ecded1',
      'fourth': '#d09892',
      'blue': '#445cb0',
      'purple': '#9796f0',
      'pink': '#fbc7d4',
      'pink-light': '#ee9ca7',
      'black': '#000000',
      'gray': '#808080',
      'transparent':'transparent'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('/src/assests/banner/banner2.jpg')",
      },
    }
   
  },
  plugins: [],
 
}