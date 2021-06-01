import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'
import dartSass from 'sass'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/lib/index.ts',
  output: [
    {
      globals: {
        vue: 'Vue'
      },
      name: 'Bottle',
      file: 'dist/lib/taste.js',
      format: 'umd'
    },
    {
      name: 'Bottle',
      file: 'dist/lib/taste.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    vue({
      include: /\.vue$/,
      preprocessStyles: true
    }),
    scss({
      include: /\.scss$/,
      // prefix: `@import "./src/lib/taste.scss";`,
      sass: dartSass
    }),
    postcss(),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    terser()
  ],
  external: ['vue']
}
