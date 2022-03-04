// rollup.config.js
import { terser } from 'rollup-plugin-terser';
const devMode = process.env.NODE_ENV === 'development';
console.log(`running in ${devMode ? 'development' : 'production'} mode`);

export default {
  input: './src/js/scripts.js',

  watch: {
    include: './src/js/**',
    clearScreen: false,
  },

  output: {
    file: './dist/js/bundle.js',
    format: 'es',
    sourcemap: devMode ? 'inline' : false,
    plugins: [
      terser({
        ecma: 2020,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          drop_console: !devMode,
          drop_debugger: !devMode,
        },
        output: { quote_style: 1 },
      }),
    ],
  },
};
