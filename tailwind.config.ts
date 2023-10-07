import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    fontSize: {
      xs:'0.7rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      spacing: {
        '50': '13rem',
        '90': '40rem'
      },
      colors: {
        'negro-netflix-ligero': 'rgb(20, 20, 20)',
        'gris': 'rgb(255, 255, 255)',
      },
     
    },
  },
  plugins: [],
}
export default config
