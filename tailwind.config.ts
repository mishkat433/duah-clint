import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require('daisyui')],

  daisyui: {
    // themes: ['cupcake'],
  },

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px',
    },

    extend: {
      fontFamily: {
        'raleway': ["Raleway", 'sans-serif'],
        'mukta': ['Mukta', 'sans-serif'],
        'mirza': ['Mirza', 'sans-serif'],
      },
      colors: {
        'main': '#FFD29E',
        'primary': '#FF9822',
        'secondary': '#5D2B00',
        'transparent': '#57482E',

      },


      boxShadow: {
        // 'small-card-shadow': '0px 4px 7px rgba(0, 0, 0, 0.25)',
        // 'fev-icon-box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        // 'main-bg': "url('/donate blood 4.png')",
        // 'statics-bg': "linear-gradient(to bottom , rgba(3, 1, 10, 0.4), rgba(3, 1, 10, 0.5)), url('/h1_hero2.jpg.webp') ",
      }
    },
  }



};
export default config;
