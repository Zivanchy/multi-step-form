/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'formPattern-desktop':
          'url(src/resources/assets/bg-sidebar-desktop.svg)',
        'formPattern-mobile': 'url(src/resources/assets/bg-sidebar-mobile.svg)',
      },
    },
  },
  plugins: [require('daisyui')],
};
