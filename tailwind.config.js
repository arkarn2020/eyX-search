// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  // add DaisyUI plugin
  plugins: [require('daisyui')],

  // config (optional)
  daisyui: {
    styled: false,
    themes: false,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
  },
};
