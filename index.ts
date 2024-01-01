import { fileURLToPath } from 'url'
import { createServer } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

;(async () => {
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: false,
    root: __dirname,
    server: {
      port: 1337,
    },
  })
  await server.listen()

  server.printUrls()
  server.bindCLIShortcuts({ print: true })
})()

export default [
  '<h1>ming</h1>',
  '<h2>ming</h2>',
  '<h3>ming</h3>'
]
