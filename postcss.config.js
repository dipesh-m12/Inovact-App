import postcssImport from 'postcss-import';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

/** @type {import('postcss').ProcessOptions} */
export default {
  plugins: [
    postcssImport,
    tailwindcss,
    autoprefixer,
  ],
};
