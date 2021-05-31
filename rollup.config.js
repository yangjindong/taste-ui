import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
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
      include: /\.vue$/
    }),
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    terser()
  ]
}
