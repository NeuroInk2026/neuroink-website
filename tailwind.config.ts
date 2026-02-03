import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs NeuroInk
        'bleu-neuroink': '#00A3E0',
        'violet-neuroink': '#6B3FA0',
        'turquoise': '#40E0D0',
        'noir-profond': '#0F0D15',
        'gris-doux': '#6B7280',
      },
      fontFamily: {
        raleway: ['var(--font-raleway)', 'Raleway', 'sans-serif'],
        body: ['var(--font-raleway)', 'Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-neuroink': 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 50%, #40E0D0 100%)',
      },
    },
  },
  plugins: [],
}

export default config
