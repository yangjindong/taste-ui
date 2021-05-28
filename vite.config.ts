import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { md } from './plugins/md'
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

const sourceCodePlugin = {
  name: 'demo',
  transform(code, id) {
    if (/\?vue&type=demo/.test(id)) {
      const path = id.split('?')[0]
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find((n) => n.tag === 'demo')
      const title = parsed.children[0].content
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default Comp => {
        Comp.__sourceCode = ${JSON.stringify(main)}
        Comp.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), md(), sourceCodePlugin]
})
