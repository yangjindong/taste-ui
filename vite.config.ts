import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { md } from './plugins/md'
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), md()]
})
