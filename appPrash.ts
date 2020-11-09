import { Application } from 'https://deno.land/x/oak/mod.ts'
import routerPrash from './routerPrash.ts'

const env = Deno.env.toObject()
const HOST = env.HOST || '127.0.0.1'
const PORT = env.PORT || 7700

const app = new Application()

app.use(routerPrash.routes())
app.use(routerPrash.allowedMethods())

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)