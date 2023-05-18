const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lato', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        dark: '#201F24',
        primary: "#027DC3"
      }
    },
  },
  plugins: [],
};
