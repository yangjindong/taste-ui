import { baseParse } from '@vue/compiler-core'
import path from 'path'
import fs from 'fs'
import marked from 'marked'

const mdToJs = (str) => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}

export function md() {
  return {
    name: 'markdown',
    // configureServer: function async({ app }) {
    //   const middleware = async (req, res, next) => {
    //     console.log(req.url)
    //     const pathname = req._parsedUrl.pathname
    //     // console.log(pathname)
    //     // console.log(req)
    //     if (pathname.endsWith('.md')) {
    //       res.type = 'js'
    //       const filePath = path.join(process.cwd(), pathname)
    //       // console.log(filePath)
    //       res.body = mdToJs(fs.readFileSync(filePath).toString())
    //       // console.log(res)
    //     } else {
    //       await next()
    //     }
    //   }
    //   app.use(middleware)
    // },
    // configureServer: async ({ app }) => {
    // app.use(async (req, res, next) => {
    //   // console.log(req.url)
    //   const pathname = req._parsedUrl.pathname
    //   // console.log(pathname)
    //   // console.log(req)
    //   if (pathname.endsWith('.md')) {
    //     // console.log(pathname.endsWith('.md'))
    //     res.type = 'js'
    //     const filePath = path.join(process.cwd(), pathname)
    //     // console.log(filePath)
    //     res.body = mdToJs(fs.readFileSync(filePath).toString())
    //     // console.log(res)
    //   } else {
    //     await next()
    //   }
    // })
    // },
    transform(code, id) {
      // console.log(id)
      // console.log(id.endsWith('.md'))
      if (id.endsWith('.md')) {
        // console.log('md')
        return mdToJs(code)
      }
    }
  }
}
