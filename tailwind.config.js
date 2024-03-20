/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('../src/assets/BG.png')",
        'card-bg': "url('../src/assets/Card.png')",
        'top-Left-bg': "url('../src/assets/BG-left-top.png')",
        'top-right-bg': "url('../src/assets/BG-right.png')",
        'full-BG': "url('../src/assets/full-bg.png')",
      },
      colors: {
        'transparent': 'transparent',
        'link-color' : '#7C7C7C',
        'Primary': '#674BB6',
        'Paragraph': '#B5ABCB',
      },
    },
  },
  plugins: [],
}

